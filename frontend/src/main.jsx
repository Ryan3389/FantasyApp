import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import HitsPage from "./pages/HitsPage.jsx";
import HofPage from "./pages/HofPage.jsx";
import HrPage from "./pages/HrPage.jsx";
import YearsPage from "./pages/YearsPage.jsx";
import PredictPage from "./pages/PredictPage.jsx";
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h1>An error occured</h1>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/homeruns",
                element: <HrPage />
            },
            {
                path: "/hits",
                element: <HitsPage />
            },
            {
                path: "/years",
                element: <YearsPage />
            },
            {
                path: "/hof",
                element: <HofPage/>
            },
            {
                path: '/predict',
                element: <PredictPage />
            }

        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
