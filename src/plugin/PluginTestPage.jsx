import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import './index.scss';

export default function PluginTestPage() {
  return (
    <main className="plugin-test-page">
      <div className="container-fluid">
        <h1>Plugin Test Page</h1>
        <p>Hello world!</p>
        <p>{getConfig().LMS_BASE_URL}</p>
      </div>
    </main>
  );
}
