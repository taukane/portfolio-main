import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router";

import './default.scss';

import App from './App.jsx';
import Port from './Port.jsx';
import Portfolio from './Portfolio.jsx';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

if (process.env.NODE_ENV === 'production') {
    firebaseConfig.measurementId = import.meta.env.VITE_MEASUREMENT_ID;
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <App />
            </>
        )
    },
    {
        path: "/portfolio",
        element: (
            <>
                <Port />
            </>
        )
    },
    {
        path: "/portfolio-taukane",
        element: (
            <>              
			<Portfolio />
            </>
        )
    },
        {
        path: "*",
        element: (
            <>              
			<App />
            </>
        )
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);