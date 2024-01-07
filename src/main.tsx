import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff9c18',
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.Suspense>
  </React.StrictMode>,
);
