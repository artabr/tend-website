import Script from 'next/script';

// List of environment variables to expose to the browser
const ENV_VARS_TO_EXPOSE = ['CONTEXT', 'BRANCH', 'DEPLOY_PRIME_URL'] as const;

/**
 * Server-side component that generates environment variables script
 * This runs at build time and injects the script into the HTML
 */
export default function EnvScript() {
  // Collect environment variables at build time
  const envVars: Record<string, string> = {};

  for (const varName of ENV_VARS_TO_EXPOSE) {
    const value = process.env[varName];
    if (value !== undefined) {
      envVars[varName] = value;
    }
  }

  // Generate the script content
  const scriptContent = `
(function() {
  if (typeof window !== 'undefined') {
    window.__ENV__ = ${JSON.stringify(envVars)};
    
    // Also expose individual variables for easier access
    ${Object.entries(envVars)
      .map(
        ([key, value]) => `window.__ENV_${key}__ = ${JSON.stringify(value)};`,
      )
      .join('\n    ')}
  }
})();
`;

  return (
    <Script
      // eslint-disable-next-line react/no-danger
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
    />
  );
}
