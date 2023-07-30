import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import "./App.css";
import { Router } from "./route/Router/Router";

// #0097a7 -> Headline

// #E3F4F4

// #1C315E -> form head

// gmail: luminarymartbd@gmail.com(mongodb);

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;