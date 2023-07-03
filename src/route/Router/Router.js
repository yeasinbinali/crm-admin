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
import Deposit from "../../pages/component/Transaction/Deposit/Deposit";
import Expense from "../../pages/component/Transaction/Expense/Expense";
import Transfer from "../../pages/component/Transaction/Transfer/Transfer";
import User from "../../pages/component/User/User/User";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/addCustomer",
        element: <AddCustomer></AddCustomer>,
      },
      {
        path: "/customerList",
        element: <CustomerList></CustomerList>,
        loader: () => fetch("http://localhost:5000/customers"),
      },
      {
        path: '/deposit',
        element: <Deposit></Deposit>
      },
      {
        path: '/expense',
        element: <Expense></Expense>
      },
      {
        path: '/transfer',
        element: <Transfer></Transfer>
      },
      {
        path: "/sales",
        element: <Sales></Sales>,
      },
      {
        path: "/attendance",
        element: <Attendance></Attendance>,
      },
      {
        path: "/recruitment",
        element: <Recruitment></Recruitment>,
      },
      {
        path: "/publicHoliday",
        element: <PublicHoliday></PublicHoliday>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/department",
        element: <Department></Department>,
      },
    ],
  },
]);
