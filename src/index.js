import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './component/share/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Layout>
      <App />
    </Layout>
);

