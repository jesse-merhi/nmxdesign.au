import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider, useParams } from 'react-router-dom';
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

function PortfolioRedirect() {
  const { projectId } = useParams();
  return <Navigate to={`/case-study/${projectId ?? ''}`} replace />;
}

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

      // Legacy /portfolio routes → redirect to /case-study
      { path: 'portfolio', element: <Navigate to="/case-study" replace /> },
      { path: 'portfolio/uplinked', element: <Navigate to="/case-study/uplinked" replace /> },
      { path: 'portfolio/aiperftool', element: <Navigate to="/case-study/aiperftool" replace /> },
      {
        path: 'portfolio/jiraplaybook',
        element: <Navigate to="/case-study/jiraplaybook" replace />,
      },
      { path: 'portfolio/:projectId', element: <PortfolioRedirect /> },

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
