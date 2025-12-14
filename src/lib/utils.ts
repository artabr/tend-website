export enum Environment {
  PROD = 'production',
  DEV = 'development',
}

/**
 * Determines the deployment stage based on the CONTEXT environment variable
 * @returns 'production' if CONTEXT is 'production', otherwise 'development'
 */
export function getEnv(): Environment {
  return process.env.CONTEXT === 'production'
    ? Environment.PROD
    : Environment.DEV;
}
