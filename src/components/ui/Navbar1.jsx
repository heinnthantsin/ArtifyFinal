import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavbarStyle from "./Navbar.module.css";
import LoginForm from "../form/LoginForm";
import CartList from "./CartList";
import { useCartStore } from "../../store/cart-store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isCartOpen, setIsCardOpen] = useState(false);
  const pathName = useLocation().pathname;
  const handleLogin = () => setIsLogin(!isLogin);
  const cartStore = useCartStore();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  console.log("in home page", pathName);
  const navClass = `${NavbarStyle.link} ${NavbarStyle.linkUnderline} ${NavbarStyle.linkUnderlineColor}`;
  return (
    <nav className="fixed top-0 w-screen z-40 flex justify-between px-8 items-center py-2 bg-[#d3d8e4]">
      <section className="flex items-center gap-4">
        {/* menu */}
        <button
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M4 5L20 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 19L20 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* logo */}
        <div className="sm:w-[80px]">
          <Link to="/">
            <p className="montserrat md:p-2 text-[#182b2e] font-bold text-xl tracking-wide">
              Artify
            </p>
          </Link>
        </div>
      </section>

      <div className="hidden lg:flex">
        <ul className="flex items-center gap-10">
          <li
            className={`${
              pathName === "/" && "border-b-4 pb-0.5 border-gray-700/60"
            }`}
          >
            <NavLink className={`${navClass} font-bold`} to="/">
              Home
            </NavLink>
          </li>
          <li
            className={`${
              pathName.startsWith("/product") &&
              "border-b-4 pb-0.5 border-gray-700/60"
            }`}
          >
            <NavLink className={`${navClass} font-bold`} to="/product">
              Arts
            </NavLink>
          </li>
          <li
            className={`${
              pathName.startsWith("/artist") &&
              "border-b-4 pb-0.5 border-gray-700/60"
            }`}
          >
            <NavLink className={`${navClass} font-bold`} to="/artist">
              Artists
            </NavLink>
          </li>
          <li
            className={`${
              pathName.startsWith("/event") &&
              "border-b-4 pb-0.5 border-gray-700/60"
            }`}
          >
            <NavLink className={`${navClass} font-bold`} to="/event">
              Event
            </NavLink>
          </li>
          <li
            className={`${
              pathName.startsWith("/contactus") &&
              "border-b-4 pb-0.5 border-gray-700/60"
            }`}
          >
            <NavLink className={`${navClass} font-bold`} to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* sidebar mobile menu */}

      {/* overlay */}
      {isOpen && (
        <div
          className="fixed h-screen w-screen lg:hidden bg-black/40 backdrop-blur-sm top-0 right-0"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}

      {/* menu side - drawer */}
      <section
        className={
          isOpen
            ? "text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8z-50 w-[300px] duration-400"
            : " text-black bg-white flex-col absolute left-[-100%] top-0 h-screen p-8 gap-8z-50 w-[-300px] duration-700"
        }
      >
        <button
          onClick={() => setIsOpen(false)}
          className="mt-0 mb-8 text-3xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div>
          <ul>
            <li className="py-3 border-b-2">
              <NavLink className="" to="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </NavLink>
            </li>
            <li className="py-3 border-b-2">
              <NavLink
                className=""
                to="/product"
                onClick={() => setIsOpen(!isOpen)}
              >
                Arts
              </NavLink>
            </li>
            <li className="py-3 border-b-2">
              <NavLink
                className=""
                to="/artist"
                onClick={() => setIsOpen(!isOpen)}
              >
                Artists
              </NavLink>
            </li>
            <li className="py-3 border-b-2">
              <NavLink
                className=""
                to="/event"
                onClick={() => setIsOpen(!isOpen)}
              >
                Event
              </NavLink>
            </li>
            <li className="py-3 border-b-2">
              <NavLink
                className=""
                to="/contactus"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* profile icon */}
        <button onClick={() => setIsLogin(!isLogin)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* cart Icon */}
        <button className="relative" onClick={() => setIsCardOpen(!isCartOpen)}>
          {cartStore.carts.length > 0 && (
            <span className="absolute w-[20px] h-[20px] inline-flex justify-center items-center bg-red-400 text-white text-[0.7rem] rounded-full top-0 end-0 translate-x-2 -translate-y-2">
              {cartStore.carts.length}
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10.5"
              cy="20.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="17.5"
              cy="20.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      {isLogin && (
        <div
          className="fixed h-screen w-screen bg-blue-gray-900/75 backdrop-blur-lg top-0 right-0 "
          onClick={() => setIsLogin(!isLogin)}
        ></div>
      )}
      {/* login form  */}
      {isLogin && <LoginForm handleLogin={handleLogin} />}
      <CartList isCartOpen={isCartOpen} setIsCardOpen={setIsCardOpen} />
    </nav>
  );
};

export default Navbar;
