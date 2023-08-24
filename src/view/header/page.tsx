"use client"
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/component/ui/input";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import LinkedAcc from "../shared/LinkedAcc";
import { FaFacebook } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux"
import { RootState } from "@/store/store";

const Navbar = () => {

  const CartValue = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
      
      {/* Add Image in Left Side*/}
      <div className="justify-around flex items-center w-full h-full px-5 2xl:px-16 py-11">
        <Link href="/">
          <Image
            src="/logoo.png"
            alt="navbar-logo"
            width={100}
            height={100}
            className="w-24 h-24"
          />
        </Link>

        {/* Add Navbar*/}
        <div>
          <ul className="hidden lg:flex text-xl font-bold font-sans">
            <li className="border-b border-transparent hover:border-b hover:border-lime-500">
              <Link href="/components/female">Female</Link>
            </li>
            <li className="border-b border-transparent ml-10 hover:border-b hover:border-lime-500">
              <Link href="/components/male">Male</Link>
            </li>
            <li className="border-b border-transparent ml-10 hover:border-b hover:border-lime-500">
              <Link href="/components/kids">Kids</Link>
            </li>
            <li className="border-b border-transparent ml-10 hover:border-b hover:border-lime-500">
              <Link href="/components/allproduct">All Products</Link>
            </li>
          </ul>
        </div>

        {/* Add Search Bar */}
        <div className="hidden lg:flex">
          <svg className="absolute inset-y-8 px-3 py-1 w-10 h-6 border-r"
            fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
            </path>
          </svg>
          <Input
            className="w-72 h-8 shadow-lg shadow-lime-200 cursor-pointer ps-12"
            type="search"
            placeholder="what you looking for"
          ></Input>
        </div>

        {/* Add Shooping Card Button */}
        <div className="w-12 h-12 relative hidden lg:flex justify-center items-center rounded-full bg-gray-200">
          <Link href="/components/cart">
            <span className="absolute flex justify-center items-center h-5 w-5 right-1 top-1 rounded-full bg-red-600 px-2 py-2 text-white text-sm">{CartValue}</span>
            <ShoppingCart className="h-7 w-7" />
          </Link>
        </div>

        {/* Mobile Navbar HamBurger*/}
        <div onClick={handleNav} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size="30" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`${nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""} `}>
        <div
          className={`${nav ? "fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-white p-12 easa-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}`}
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/logoo.png"
                alt="navbar-logo"
                width={100}
                height={100}
                className="w-24 h-24"
              />
            </Link>
            <div onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose size="20" />
            </div>
          </div>

          {/* Add Text */}
          <div className="border-b border-lime-200">
            <p className="w-[85%] md:w-[90%] py-2 font-sans text-lg font-bold">Kazim Hussain | Full Stack Developer</p>
          </div>


          {/* Mian Div on Navbar Pages Links */}
          <div className="flex flex-col items-center text-center sm:flex md:flex font-sans font-bold text-xl">
            <ul className="py-16">
              
               {/* Add Shooping Card Button in Mobile View */}
               <div className="w-14 h-14 flex justify-center items-center relative ml-[1.50rem] rounded-full bg-gray-300">
                <Link href="/components/cart">
                  <li onClick={() => setNav(false)}></li>
                  <span className="absolute flex justify-center items-center h-5 w-5 right-1 top-2 rounded-full bg-red-600 px-2 py-2 text-white text-sm">{CartValue}</span>
                  <ShoppingCart className="h-8 w-8"/>
                </Link>
               </div>

              {/* Add Navbar Pages Links */}
              <Link href="/components/female">
                <li onClick={() => setNav(false)} className="py-1">Female</li>
              </Link>
              <Link href="/components/male">
                <li onClick={() => setNav(false)} className="py-1">Male</li>
              </Link>
              <Link href="/components/kids">
                <li onClick={() => setNav(false)} className="py-1">Kids</li>
              </Link>
              <Link href="/components/allproduct">
                <li onClick={() => setNav(false)} className="py-1">All Product</li>
              </Link>
            </ul>
          </div>

          {/* Add Social Links*/}
          <div className="text-xl uppercase">
            <p className=" text-blue-600 w-full -ml-4 sm:w-[80%]">Let's Connect</p>
          </div>
          <div className="flex justify-between space-x-3 items-center my-4 w-full sm:w-[80%] -ml-5">
            <LinkedAcc url="https://www.facebook.com/kazimhussain01/">
              <FaFacebook size={25} />
            </LinkedAcc>
            <LinkedAcc url="https://github.com/kazimhussain01">
              <AiOutlineGithub size={25} />
            </LinkedAcc>
            <LinkedAcc url="https://www.linkedin.com/in/kazimhussainofficial/">
              <AiOutlineLinkedin size={25} />
            </LinkedAcc>
            <LinkedAcc url="https://twitter.com/kazimhussain01">
              <AiOutlineTwitter size={25} />
            </LinkedAcc>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;