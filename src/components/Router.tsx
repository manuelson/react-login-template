import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/layout/Index";
import ErrorPage  from "src/pages/ErrorPage";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: '/login',
                element: <LoginPage/>
            }
        ],
    },
]);
