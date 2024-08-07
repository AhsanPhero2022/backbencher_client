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

const MobileNav = () => {
  const pathname = useLocation();
  return (
    <div>
      <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
