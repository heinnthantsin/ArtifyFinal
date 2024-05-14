import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// @ts-ignore
import img from '../../assets/logo/logo.png';

function Navbar() {
  const NabarStyle = "link link-underline link-underline-color"
  return (
    <nav className='fixed w-screen flex justify-between items-center top-0 bg-navColor py-2 px-5'>
      <ul className='w-auto flex justify-center items-center'>
        <li>
          <NavLink className={NabarStyle} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={NabarStyle} to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink className={NabarStyle} to="/artist">Artist</NavLink>
        </li>
        <li>
          <NavLink className={NabarStyle} to="/event">Event</NavLink>
        </li>
        <li>
          <NavLink className={NabarStyle} to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      <div className='w-3/12 text-red-600 text-xl font-extrabold'>
        <Link to="/"><img className="w-[50px] h-[50px] object-contain" src={img} alt="art" /></Link>
      </div>
      <div>
        <button className='bg-transparent'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <button className='bg-transparent'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}>
            <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar