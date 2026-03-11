import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Homepage from './Homepage.tsx';
import './index.css';
import Portfolio from './Portfolio.tsx';
import ProjectPage from './ProjectPage.tsx';
import Resume from './Resume.tsx';
import UplinkPage from './UplinkPage.tsx';
import PerformanceToolPage from './PerformanceToolPage.tsx';
import JiraPlaybookPage from './JiraPlaybookPage.tsx';
import Aboutme from './Aboutme.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Homepage /> },
      { path: 'aboutme', element: <Aboutme /> },

      { path: 'case-study', element: <Portfolio /> },
      { path: 'case-study/uplinked', element: <UplinkPage /> },
      { path: 'case-study/aiperftool', element: <PerformanceToolPage /> },
      { path: 'case-study/jiraplaybook', element: <JiraPlaybookPage /> },
      { path: 'case-study/:projectId', element: <ProjectPage /> },

      { path: 'resume', element: <Resume /> },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error('Failed to find the root element');
}
