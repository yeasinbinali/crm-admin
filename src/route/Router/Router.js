import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddCustomer from "../../pages/component/Customer/AddCustomer/AddCustomer";
import CustomerList from "../../pages/component/Customer/CustomerList/CustomerList";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";
import Account from "../../pages/component/Department/Account/Account";
import AccountUpdated from "../../pages/component/Department/Account/AccountUpdated";
import Finance from "../../pages/component/Department/Finance/Finance";
import FinanceUpdate from "../../pages/component/Department/Finance/FinanceUpdate";
import HumanResource from "../../pages/component/Department/HumanResource/HumanResource";
import HumanResourceUpdate from "../../pages/component/Department/HumanResource/HumanResourceUpdate";
import InformationTechnology from "../../pages/component/Department/InformationTechnology/InformationTechnology";
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
        loader: () => fetch("http://localhost:5000/customers"),
      },
      {
        path: "/deposit",
        element: (
          <PrivateRoute>
            <Deposit></Deposit>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/deposit"),
      },
      {
        path: "/expense",
        element: (
          <PrivateRoute>
            <Expense></Expense>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/expense"),
      },
      {
        path: "/transfer",
        element: (
          <PrivateRoute>
            <Transfer></Transfer>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/transfer"),
      },
      {
        path: "/invoice",
        element: (
          <PrivateRoute>
            <Invoice></Invoice>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/invoice"),
      },
      {
        path: "/quote",
        element: (
          <PrivateRoute>
            <Quote></Quote>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/quote"),
      },
      {
        path: "/quote/:id",
        element: (
          <PrivateRoute>
            <QuoteUpdate></QuoteUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/quote/${params.id}`);
        },
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/payment"),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <PaymentUpdate></PaymentUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/payment/${params.id}`);
        },
      },
      {
        path: "/notice",
        element: (
          <PrivateRoute>
            <NoticeBoard></NoticeBoard>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/notice"),
      },
      {
        path: "/notice/:id",
        element: (
          <PrivateRoute>
            <NoticeBoardUpdate></NoticeBoardUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/notice/${params.id}`);
        },
      },
      {
        path: "/recruitment",
        element: (
          <PrivateRoute>
            <Recruitment></Recruitment>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/recruitment"),
      },
      {
        path: "/recruitment/:id",
        element: (
          <PrivateRoute>
            <RecruitmentUpdate></RecruitmentUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/recruitment/${params.id}`);
        },
      },
      {
        path: "/finance",
        element: (
          <PrivateRoute>
            <Finance></Finance>
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
          return fetch(`http://localhost:5000/finance/${params.id}`);
        },
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <Account></Account>
          </PrivateRoute>
        ),
      },
      {
        path: "/account/:id",
        element: (
          <PrivateRoute>
            <AccountUpdated></AccountUpdated>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/account/${params.id}`);
        },
      },
      {
        path: "/humanResource",
        element: (
          <PrivateRoute>
            <HumanResource></HumanResource>
          </PrivateRoute>
        ),
      },
      {
        path: "/humanResource/:id",
        element: (
          <PrivateRoute>
            <HumanResourceUpdate></HumanResourceUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/humanResource/${params.id}`);
        },
      },
      {
        path: "/informationTechnology",
        element: (
          <PrivateRoute>
            <InformationTechnology></InformationTechnology>
          </PrivateRoute>
        ),
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
            `http://localhost:5000/informationTechnology/${params.id}`
          );
        },
      },
    ],
  },
]);
