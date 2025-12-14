// Type definitions for environment variables (works in both Node.js and browser)
export interface BrowserEnv {
  CONTEXT?: string;
  BRANCH?: string;
  DEPLOY_PRIME_URL?: string;
}

// Extend the Window interface to include our environment variables
declare global {
  interface Window {
    __ENV__?: BrowserEnv;
    __ENV_CONTEXT__?: string;
    __ENV_BRANCH__?: string;
    __ENV_DEPLOY_PRIME_URL__?: string;
  }
}

/**
 * Check if the code is running in a browser environment
 * @returns True if running in browser, false otherwise
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Get all browser environment variables
 * @returns Object containing all exposed environment variables
 */
export function getBrowserEnv(): BrowserEnv {
  if (!isBrowser()) {
    return {};
  }
  return window.__ENV__ || {};
}

/**
 * Get a specific environment variable value (isomorphic - works in both Node.js and browser)
 * In Node.js: reads from process.env
 * In browser: reads from window.__ENV__
 * @param key - The environment variable key
 * @returns The environment variable value or undefined
 */
export function getEnvVar(key: keyof BrowserEnv): string | undefined {
  if (isBrowser()) {
    // Browser environment - use window.__ENV__
    const env = getBrowserEnv();
    return env[key];
  }

  // Node.js environment - use process.env
  return process.env[key];
}

/**
 * Check if we're in a specific deployment context
 * @param context - The context to check for
 * @returns True if the current context matches
 */
export function isContext(context: string): boolean {
  return getEnvVar('CONTEXT') === context;
}

/**
 * Check if we're on a specific branch
 * @param branch - The branch to check for
 * @returns True if the current branch matches
 */
export function isBranch(branch: string): boolean {
  return getEnvVar('BRANCH') === branch;
}

/**
 * Get the deploy URL
 * @returns The deploy prime URL or undefined
 */
export function getDeployUrl(): string | undefined {
  return getEnvVar('DEPLOY_PRIME_URL');
}
