import "./App.css";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
//import Register from "./components/Signup.jsx";
import AuthLayout from "./hooks/Authlayout.jsx";
import useVerifyAuth from "./hooks/useVerifyAuth.jsx";
// import MyClasses from "components/MyClasses";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Home />
      </AuthLayout>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },

  {
    path: "/login",
    element: (
      // <Login />
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
]);

function App() {
  console.log("Inside app");
  useVerifyAuth();
    // return <h2 className="bg-red-300 text-amber-500">App page</h2>
  return <RouterProvider router={routes} />;
}

export default App;

