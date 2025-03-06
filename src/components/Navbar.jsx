import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import logo1 from "../assets/Mask-group-18.png";
import logo2 from "../assets/customcolor_icon_transparent_background-1-1-150x150.png";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "meetings", label: "Meetings" },
    { path: "your-team", label: "Your Team" },
    { path: "ma-terms", label: "M&A Terms" },
    { path: "valuation", label: "Valuation" },
    { path: "exploration", label: "Exploration" },
    { path: "due-diligence", label: "Due Diligence" },
    { path: "offer", label: "Offer" },
  ];

  const profileMenu = (
    <Menu>
      <Menu.Item key="1">
        {user?.name} ({user?.role})
      </Menu.Item>
      {user?.role === "admin" && (
        <Menu.Item key="2">
          <Link to="/admin">Dashboard</Link>
        </Menu.Item>
      )}

      <Menu.Item key="3" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-zinc-950 font-extralight fixed top-0 w-full shadow-md z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo1} alt="Logo" className="h-8 sm:h-10" />
            <img src={logo2} alt="Logo" className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map(({ path, label }) => (
              <Link
                key={path}
                to={`/${path}`}
                className={`hover:text-blue-500 transition ease-in-out duration-300 ${
                  isActive(`/${path}`) ? "text-purple-500" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <Dropdown
                overlay={profileMenu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <UserOutlined className="text-xl cursor-pointer" />
              </Dropdown>
            ) : (
              <div className="flex space-x-6">
                <Link
                  to="/login"
                  className="hover:text-blue-500 transition ease-in-out duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:text-blue-500 transition ease-in-out duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-950 shadow-md absolute top-full left-0 w-full py-4 text-center">
            {menuItems.map(({ path, label }) => (
              <Link
                key={path}
                to={`/${path}`}
                className={`block py-2 hover:text-blue-500 transition ${
                  isActive(`/${path}`) ? "text-purple-500" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <div className="">
                <span className="block ">
                  {user.name} ({user.role})
                </span>
                <Link
                  to="/admin"
                  className="block py-1 hover:text-blue-500 transition"
                >
                  Dashboard
                </Link>
                <Button
                  size="small"
                  type="primary"
                  className="mt-2"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="">
                <Link
                  to="/login"
                  className="block py-1 hover:text-blue-500 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-1 hover:text-blue-500 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
