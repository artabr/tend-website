'use client';

import { getBrowserEnv, getEnvVar, isBranch, isContext } from '@/lib/env';
import { useEffect, useState } from 'react';

/**
 * Component to display environment information
 * This is an example of how to use the browser environment variables
 */
export default function EnvInfo() {
  const [env, setEnv] = useState<Record<string, string | undefined>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait for the component to mount to avoid hydration issues
    setMounted(true);
    setEnv(getBrowserEnv() as Record<string, string | undefined>);
  }, []);

  if (!mounted) {
    return <div>Loading environment info...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Environment Information</h3>

      <div className="space-y-2">
        <div>
          <strong>Context:</strong> {getEnvVar('CONTEXT') || 'Not set'}
        </div>
        <div>
          <strong>Branch:</strong> {getEnvVar('BRANCH') || 'Not set'}
        </div>
        <div>
          <strong>Deploy URL:</strong>{' '}
          {getEnvVar('DEPLOY_PRIME_URL') || 'Not set'}
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <div>
          <strong>Is Production:</strong>{' '}
          {isContext('production') ? 'Yes' : 'No'}
        </div>
        <div>
          <strong>Is Main Branch:</strong> {isBranch('main') ? 'Yes' : 'No'}
        </div>
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer font-medium">
          Raw Environment Object
        </summary>
        <pre className="mt-2 p-2 bg-gray-200 rounded text-sm overflow-auto">
          {JSON.stringify(env, null, 2)}
        </pre>
      </details>
    </div>
  );
}
