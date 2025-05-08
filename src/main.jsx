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

const firebaseConfig = {
	apiKey: "AIzaSyD9oaTHGy1QF0aYncLbe4ADpNS1HTr76vw",
	authDomain: "portfolio-taukane.firebaseapp.com",
	projectId: "portfolio-taukane",
	storageBucket: "portfolio-taukane.appspot.com",
	messagingSenderId: "1037598800771",
	appId: "1:1037598800771:web:33e3c5d639b347232714b6",
	measurementId: "G-6L6D6911HD"
};

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