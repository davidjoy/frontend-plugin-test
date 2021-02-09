import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import './index.scss';

export default function PluginOne() {
  return (
    <main className="plugin-one">
      <div className="container-fluid">
        <h1>Plugin One</h1>
        <p>Hello red world!</p>
        <p>{getConfig().LMS_BASE_URL}</p>
      </div>
    </main>
  );
}
