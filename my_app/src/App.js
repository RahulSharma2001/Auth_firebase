import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import SignUp from "./components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form></Form>,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <h1 style={{ color: "green" }}>Sign In successfully, Welcome !!!</h1>
          <button
            style={{ float: "right", margin: "30px" }}
            onClick={() => (window.location.href = "/")}
          >
            Sign Out
          </button>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
