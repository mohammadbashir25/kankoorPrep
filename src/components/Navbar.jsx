import { useState } from "react";
import { LuBookOpen, LuMoon, LuSun, LuX, LuMenu } from "react-icons/lu";
import { Link } from "react-scroll";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Nav = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "Features", path: "features" },
    { id: 3, name: "Mock Test", path: "mock_test" },
    { id: 4, name: "Pricing", path: "pricing" },
    { id: 5, name: "Faqs", path: "faqs" },
    { id: 6, name: "Contact", path: "contact" },
  ];
  return (
    <header>
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2 text-xl">
          <LuBookOpen />
          <span className="poppins">KankoorPrep</span>
        </div>

        <nav className="text-xl lg:gap-5 gap-3 hidden items-center md:flex">
          {Nav.map((nav) => {
            return (
              <Link
                key={nav.id}
                to={nav.path}
                smooth = {true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="active"
                className="cursor-pointer hover:text-primary-hover transition duration-300"
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-1 md:gap-3">
          <div className="lg:gap-3 gap-1 flex items-center">
            <button className="bg-blue-500 text-white px-2 lg:px-3 rounded-sm outline-none border-none hover:bg-blue-600 cursor-pointer text-xl items-center poppins transition-all duration-300 hidden lg:flex" >
              Login
            </button>
            <button
              className="bg-gray-200 text-xl py-2 px-2 rounded-full dark:bg-gray-800 hover:dark:bg-gray-700 hover:bg-gray-300 transition-all duration-300 cursor-pointer"
              onClick={toggleDarkMode}
            >
              {darkMode ? <LuMoon /> : <LuSun />}
            </button>
          </div>
          <button
            className="text-3xl transition duration-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } shadow-md`}
      >
        <div className="flex flex-col text-xl gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
          {Nav.map((nav) => {
            return (
              <Link
                activeClass="active"
                key={nav.id}
                to={nav.path}
                onClick={()=>setIsOpen(!isOpen)}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
