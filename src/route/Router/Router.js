import { createBrowserRouter} from "react-router-dom";
import Main from "../../layout/Main";
import AddCustomer from "../../pages/component/Customer/AddCustomer/AddCustomer";
import CustomerList from "../../pages/component/Customer/CustomerList/CustomerList";
import Dashboard from "../../pages/component/Dashboard/Dashboard/Dashboard";
import AccountUpdated from "../../pages/component/Department/Account/AccountUpdated";
import Department from "../../pages/component/Department/Department/Department";
import FinanceUpdate from "../../pages/component/Department/Finance/FinanceUpdate";
import HumanResourceUpdate from "../../pages/component/Department/HumanResource/HumanResourceUpdate";
import NoticeBoard from "../../pages/component/NoticeBoard/NoticeBoard";
import NoticeBoardUpdate from "../../pages/component/NoticeBoard/NoticeBoardUpdate";
import Recruitment from "../../pages/component/Recruitment/Recruitment";
import RecruitmentUpdate from "../../pages/component/Recruitment/RecruitmentUpdate";
import Invoice from "../../pages/component/Sales/Invoice/Invoice";
import Payment from "../../pages/component/Sales/Payment/Payment";
import PaymentUpdate from "../../pages/component/Sales/Payment/PaymentUpdate";
import Quote from "../../pages/component/Sales/Quote/Quote";
import QuoteUpdate from "../../pages/component/Sales/Quote/QuoteUpdate";
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
        path: "/deposit",
        element: <Deposit></Deposit>,
        loader: () => fetch("http://localhost:5000/deposit"),
      },
      {
        path: "/expense",
        element: <Expense></Expense>,
        loader: () => fetch("http://localhost:5000/expense"),
      },
      {
        path: "/transfer",
        element: <Transfer></Transfer>,
        loader: () => fetch("http://localhost:5000/transfer"),
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
        loader: () => fetch("http://localhost:5000/invoice"),
      },
      {
        path: "/quote",
        element: <Quote></Quote>,
        loader: () => fetch("http://localhost:5000/quote"),
      },
      {
        path: "/quote/:id",
        element: <QuoteUpdate></QuoteUpdate>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/quote/${params.id}`);
        },
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
        loader: () => fetch("http://localhost:5000/payment"),
      },
      {
        path: "/payment/:id",
        element: <PaymentUpdate></PaymentUpdate>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/payment/${params.id}`);
        },
      },
      {
        path: "/notice",
        element: <NoticeBoard></NoticeBoard>,
        loader: () => fetch("http://localhost:5000/notice"),
      },
      {
        path: "/notice/:id",
        element: <NoticeBoardUpdate></NoticeBoardUpdate>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/notice/${params.id}`);
        },
      },
      {
        path: "/recruitment",
        element: <Recruitment></Recruitment>,
        loader: () => fetch("http://localhost:5000/recruitment")
      },
      {
        path: '/recruitment/:id',
        element: <RecruitmentUpdate></RecruitmentUpdate>,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/recruitment/${params.id}`)
        }
      },
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/department",
        element: <Department></Department>,
      },
      {
        path: "/finance/:id",
        element: <FinanceUpdate></FinanceUpdate>,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/finance/${params.id}`);
        }
      },
      {
        path: '/account/:id',
        element: <AccountUpdated></AccountUpdated>,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/account/${params.id}`)
        }
      },
      {
        path: '/humanResource/:id',
        element: <HumanResourceUpdate></HumanResourceUpdate>,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/humanResource/${params.id}`)
        }
      }
    ]
  }
]);
