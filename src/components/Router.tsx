import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/layout/Index";
import ErrorPage  from "src/pages/ErrorPage";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import RegisterPage from "src/pages/RegisterPage";

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
                path: '/register',
                element: <RegisterPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            }
        ],
    },
]);
