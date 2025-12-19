import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Giả sử bạn có component App chính
// import App from './App.tsx'; 

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Không tìm thấy phần tử root!");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-vnpt-blue font-bold">VNPT Sales Planning</h1>
      {/* <App /> */}
    </div>
  </StrictMode>
);
