import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { pdfjs } from 'react-pdf';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
