import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
  return (
    <header className="py-8 xl:py-8 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=256&q=75"
              alt=""
            />
          </div>
        </Link>
        {/* {Navbar} */}

        <div className="hidden lg:flex xl:flex items-center gap-8">
          {/* <Nav /> */}
          <Navbar />
        </div>
        <div className="xl:hidden lg:hidden">
          {/* <MobileNav /> */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <IoReorderThree className="text-primary text-4xl font-semibold" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-primary text-white box z-[1] w-auto p-12 shadow"
            >
              <MobileNav />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
