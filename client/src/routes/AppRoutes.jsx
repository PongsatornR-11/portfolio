import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import layouts
import Layout from '../layouts/Layout';

// import pages
import Home from '../pages/Home';
import Project from '../pages/Project';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'project/:projectId', element: <Project /> },
        ]
    }
]);

const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppRoutes;