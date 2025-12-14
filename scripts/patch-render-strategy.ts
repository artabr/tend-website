#!/usr/bin/env bun

import fs from 'node:fs';
import path from 'node:path';
import { getEnv } from "@/lib/utils";

/**
 * Script to patch page.tsx files with environment-specific rendering strategy
 * - Production: force-static
 * - Development: force-dynamic
 */

interface RenderingStrategies {
  production: string;
  development: string;
}

const RENDERING_STRATEGIES: RenderingStrategies = {
  production: 'force-static',
  development: 'force-dynamic'
};

const DYNAMIC_EXPORT_PATTERN = /export\s+const\s+dynamic\s*=\s*['"`][^'"`]*['"`];?/;

/**
 * Get the rendering strategy based on NODE_ENV
 */
function getRenderingStrategy(): string {
  const env = getEnv();
  return RENDERING_STRATEGIES[env as keyof RenderingStrategies] || RENDERING_STRATEGIES.development;
}

/**
 * Generate the dynamic export line
 */
function generateDynamicExport(strategy: string): string {
  return `export const dynamic = '${strategy}';`;
}

/**
 * Patch a single page file
 */
function patchPageFile(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const strategy = getRenderingStrategy();
    const dynamicExport = generateDynamicExport(strategy);

    let newContent: string;

    if (DYNAMIC_EXPORT_PATTERN.test(content)) {
      // Replace existing dynamic export
      newContent = content.replace(DYNAMIC_EXPORT_PATTERN, dynamicExport);
      console.log(`✓ Updated existing dynamic export in: ${filePath}`);
    } else {
      // Add dynamic export after imports
      const lines = content.split('\n');
      let insertIndex = 0;

      // Find the last import statement or type definition
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('import ') || line.startsWith('type ') || line.startsWith('interface ')) {
          insertIndex = i + 1;
        } else if (line === '' && insertIndex > 0) {
          // Skip empty lines after imports
        } else if (insertIndex > 0 && line !== '') {
          // Found first non-import, non-empty line
          break;
        }
      }

      // Insert the dynamic export
      lines.splice(insertIndex, 0, '', dynamicExport);
      newContent = lines.join('\n');
      console.log(`✓ Added dynamic export to: ${filePath}`);
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');

    return true;
  } catch (error) {
    console.error(`✗ Error patching ${filePath}:`, (error as Error).message);
    return false;
  }
}

/**
 * Find all page.tsx files in the project using Bun's glob
 */
async function findPageFiles(): Promise<string[]> {
  try {
    // Look for page.tsx files in the src/app directory
    const pattern = 'src/app/**/page.tsx';
    const glob = new Bun.Glob(pattern);
    const files: string[] = [];

    for await (const file of glob.scan({ cwd: process.cwd(), absolute: true })) {
      files.push(file);
    }

    return files;
  } catch (error) {
    console.error('Error finding page files:', (error as Error).message);
    return [];
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  const strategy = getRenderingStrategy();
  const env = process.env.NODE_ENV || 'development';

  console.log(`🔧 Patching page files for ${env} environment`);
  console.log(`📋 Using rendering strategy: ${strategy}`);
  console.log('');

  const pageFiles = await findPageFiles();

  if (pageFiles.length === 0) {
    console.log('⚠️  No page.tsx files found');
    return;
  }

  console.log(`📁 Found ${pageFiles.length} page file(s):`);
  for (const file of pageFiles) {
    const relativePath = path.relative(process.cwd(), file);
    console.log(`   - ${relativePath}`);
  }
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  for (const filePath of pageFiles) {
    if (patchPageFile(filePath)) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  console.log('');
  console.log(`✅ Successfully patched: ${successCount} file(s)`);
  if (errorCount > 0) {
    console.log(`❌ Failed to patch: ${errorCount} file(s)`);
    process.exit(1);
  }

  console.log('🎉 Page patching completed successfully!');
}

// Run the script
if (import.meta.main) {
  main().catch((error: Error) => {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  });
}

export {
  patchPageFile,
  findPageFiles,
  getRenderingStrategy,
  generateDynamicExport
};
