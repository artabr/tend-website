#!/usr/bin/env bun

import fs from 'node:fs';
import path from 'node:path';

const CONFIG_FILE_PATH = path.join(process.cwd(), 'next.config.ts');
const OUTPUT_EXPORT_PATTERN = /output:\s*['"`]export['"`]/;

function patchNextConfig(): boolean {
  try {
    if (!fs.existsSync(CONFIG_FILE_PATH)) {
      console.error(`❌ next.config.ts not found at: ${CONFIG_FILE_PATH}`);
      return false;
    }

    const content = fs.readFileSync(CONFIG_FILE_PATH, 'utf8');

    if (OUTPUT_EXPORT_PATTERN.test(content)) {
      console.log('✓ next.config.ts already has output: "export"');
      return true;
    }

    const lines = content.split('\n');
    let patched = false;
    let newContent = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (!patched && line.includes('BuilderDevTools()({')) {
        const indent = line.match(/^\s*/)?.[0] || '  ';
        newContent += `${line}\n`;
        newContent += `${indent}  output: 'export',\n`;
        patched = true;
        console.log('✓ Added output: "export" to next.config.ts');
      } else {
        newContent += `${line}\n`;
      }
    }

    if (!patched) {
      console.error(
        '❌ Could not find BuilderDevTools()({ pattern in next.config.ts',
      );
      return false;
    }

    fs.writeFileSync(CONFIG_FILE_PATH, `${newContent.trimEnd()}\n`, 'utf8');
    console.log('🎉 Successfully patched next.config.ts for static export!');
    return true;
  } catch (error) {
    console.error(
      '❌ Error patching next.config.ts:',
      (error as Error).message,
    );
    return false;
  }
}

async function main(): Promise<void> {
  console.log('🔧 Patching next.config.ts for static export');
  console.log('');

  const success = patchNextConfig();

  if (!success) {
    process.exit(1);
  }
}

if (import.meta.main) {
  main().catch((error: Error) => {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  });
}

export { patchNextConfig };
