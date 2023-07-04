import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Attendance from "../../pages/component/Attendance/Attendance/Attendance";
import AddCustomer from "../../pages/component/Customer/AddCustomer/AddCustomer";
import CustomerList from "../../pages/component/Customer/CustomerList/CustomerList";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";
import Department from "../../pages/component/Department/Department/Department";
import PublicHoliday from "../../pages/component/PublicHoliday/PublicHoliday/PublicHoliday";
import Recruitment from "../../pages/component/Recruitment/Recruitment/Recruitment";
import Invoice from "../../pages/component/Sales/Invoice/Invoice";
import Payment from "../../pages/component/Sales/Payment/Payment";
import Quote from "../../pages/component/Sales/Quote/Quote";
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
        element: <Deposit></Deposit>,
        loader: () => fetch("http://localhost:5000/deposit")
      },
      {
        path: '/expense',
        element: <Expense></Expense>,
        loader: () => fetch("http://localhost:5000/expense")
      },
      {
        path: '/transfer',
        element: <Transfer></Transfer>,
        loader: () => fetch("http://localhost:5000/transfer")
      },
      {
        path: '/invoice',
        element: <Invoice></Invoice>
      },
      {
        path: '/quote',
        element: <Quote></Quote>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
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
