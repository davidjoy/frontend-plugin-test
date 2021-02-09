import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import './index.scss';

export default function PluginTwo() {
  return (
    <main className="plugin-two">
      <div className="container-fluid">
        <h1>Plugin Two</h1>
        <p>Hello blue world!</p>
        <p>{getConfig().LMS_BASE_URL}</p>
      </div>
    </main>
  );
}
