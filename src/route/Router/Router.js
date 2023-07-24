import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddCustomer from "../../pages/component/Customer/AddCustomer/AddCustomer";
import CustomerList from "../../pages/component/Customer/CustomerList/CustomerList";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";
import AccountUpdated from "../../pages/component/Department/Account/AccountUpdated";
import Department from "../../pages/component/Department/Department/Department";
import FinanceUpdate from "../../pages/component/Department/Finance/FinanceUpdate";
import HumanResourceUpdate from "../../pages/component/Department/HumanResource/HumanResourceUpdate";
import InformationTechnologyUpdate from "../../pages/component/Department/InformationTechnology/InformationTechnologyUpdate";
import Login from "../../pages/component/Login/Login";
import NoticeBoard from "../../pages/component/NoticeBoard/NoticeBoard";
import NoticeBoardUpdate from "../../pages/component/NoticeBoard/NoticeBoardUpdate";
import Recruitment from "../../pages/component/Recruitment/Recruitment";
import RecruitmentUpdate from "../../pages/component/Recruitment/RecruitmentUpdate";
import Invoice from "../../pages/component/Sales/Invoice/Invoice";
import Payment from "../../pages/component/Sales/Payment/Payment";
import PaymentUpdate from "../../pages/component/Sales/Payment/PaymentUpdate";
import Quote from "../../pages/component/Sales/Quote/Quote";
import QuoteUpdate from "../../pages/component/Sales/Quote/QuoteUpdate";
import Signup from "../../pages/component/Signup/Signup";
import Deposit from "../../pages/component/Transaction/Deposit/Deposit";
import Expense from "../../pages/component/Transaction/Expense/Expense";
import Transfer from "../../pages/component/Transaction/Transfer/Transfer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/addCustomer",
        element: (
          <PrivateRoute>
            <AddCustomer></AddCustomer>
          </PrivateRoute>
        ),
      },
      {
        path: "/customerList",
        element: (
          <PrivateRoute>
            <CustomerList></CustomerList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/customers"),
      },
      {
        path: "/deposit",
        element: (
          <PrivateRoute>
            <Deposit></Deposit>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/deposit"),
      },
      {
        path: "/expense",
        element: (
          <PrivateRoute>
            <Expense></Expense>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/expense"),
      },
      {
        path: "/transfer",
        element: (
          <PrivateRoute>
            <Transfer></Transfer>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/transfer"),
      },
      {
        path: "/invoice",
        element: (
          <PrivateRoute>
            <Invoice></Invoice>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/invoice"),
      },
      {
        path: "/quote",
        element: (
          <PrivateRoute>
            <Quote></Quote>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/quote"),
      },
      {
        path: "/quote/:id",
        element: (
          <PrivateRoute>
            <QuoteUpdate></QuoteUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/quote/${params.id}`
          );
        },
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/payment"),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <PaymentUpdate></PaymentUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/payment/${params.id}`
          );
        },
      },
      {
        path: "/notice",
        element: (
          <PrivateRoute>
            <NoticeBoard></NoticeBoard>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/notice"),
      },
      {
        path: "/notice/:id",
        element: (
          <PrivateRoute>
            <NoticeBoardUpdate></NoticeBoardUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/notice/${params.id}`
          );
        },
      },
      {
        path: "/recruitment",
        element: (
          <PrivateRoute>
            <Recruitment></Recruitment>
          </PrivateRoute>
        ),
        loader: () => fetch("https://crm-admin-server.vercel.app/recruitment"),
      },
      {
        path: "/recruitment/:id",
        element: (
          <PrivateRoute>
            <RecruitmentUpdate></RecruitmentUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/recruitment/${params.id}`
          );
        },
      },
      // {
      //   path: "/user",
      //   element: (
      //     <PrivateRoute>
      //       <User></User>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/department",
        element: (
          <PrivateRoute>
            <Department></Department>
          </PrivateRoute>
        ),
      },
      {
        path: "/finance/:id",
        element: (
          <PrivateRoute>
            <FinanceUpdate></FinanceUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/finance/${params.id}`
          );
        },
      },
      {
        path: "/account/:id",
        element: (
          <PrivateRoute>
            <AccountUpdated></AccountUpdated>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/account/${params.id}`
          );
        },
      },
      {
        path: "/humanResource/:id",
        element: (
          <PrivateRoute>
            <HumanResourceUpdate></HumanResourceUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/humanResource/${params.id}`
          );
        },
      },
      {
        path: "/informationTechnology/:id",
        element: (
          <PrivateRoute>
            <InformationTechnologyUpdate></InformationTechnologyUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crm-admin-server.vercel.app/informationTechnology/${params.id}`
          );
        },
      },
    ],
  },
]);
