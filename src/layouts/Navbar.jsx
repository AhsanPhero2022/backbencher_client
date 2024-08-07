import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Employees",
    path: "/employees",
  },
  {
    name: "Add_Employee",
    path: "/add_employee",
  },
  {
    name: "Update_Employee",
    path: "/update_employee",
  },
  {
    name: "Delete_Employee",
    path: "/delete_employee",
  },
];

const Navbar = () => {
  const pathname = useLocation();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
