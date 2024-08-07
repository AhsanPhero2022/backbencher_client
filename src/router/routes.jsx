import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import Employees from "../components/Employees/Employees";
import UpdateEmployee from "../components/UpdateEmployee/UpdateEmployee";
import DeleteEmployee from "../components/DeleteEmployee/DeleteEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/add_employee",
        element: <AddEmployee />,
      },
      {
        path: "/update_employee",
        element: <UpdateEmployee />,
      },
      {
        path: "/delete_employee",
        element: <DeleteEmployee />,
      },
    ],
  },
]);
