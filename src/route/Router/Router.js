import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Attendance from "../../pages/component/Attendance/Attendance/Attendance";
import AddCustomer from "../../pages/component/Customer/AddCustomer/AddCustomer";
import CustomerList from "../../pages/component/Customer/CustomerList/CustomerList";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";
import Department from "../../pages/component/Department/Department/Department";
import PublicHoliday from "../../pages/component/PublicHoliday/PublicHoliday/PublicHoliday";
import Recruitment from "../../pages/component/Recruitment/Recruitment/Recruitment";
import Sales from "../../pages/component/Sales/Sales/Sales";
import Transaction from "../../pages/component/Transaction/Transaction/Transaction";
import User from "../../pages/component/User/User/User";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addCustomer',
                element: <AddCustomer></AddCustomer>
            },
            {
                path: '/customerList',
                element: <CustomerList></CustomerList>
            },
            {
                path: '/transaction',
                element: <Transaction></Transaction>
            },
            {
                path: '/sales',
                element: <Sales></Sales>
            },
            {
                path: '/attendance',
                element: <Attendance></Attendance>
            },
            {
                path: '/recruitment',
                element: <Recruitment></Recruitment>
            },
            {
                path: '/publicHoliday',
                element: <PublicHoliday></PublicHoliday>
            },
            {
                path: '/user',
                element: <User></User>
            },
            {
                path: '/department',
                element: <Department></Department>
            }
        ]
    }
])