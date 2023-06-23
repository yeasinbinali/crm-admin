import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])