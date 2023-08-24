import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import LinkedAcc from "../shared/LinkedAcc";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
  <div>
   <footer className="text-black px-4 body-font lg:-mt-24 sm:-mt-16 -mt-16">
  <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">

      {/* Logo */}
      <div className="flex font-medium items-center md:justify-start md:-mt-36 lg:mt-20 justify-center mt-[4.50rem] -mb-5">
      <Link href="/">
          <Image
            src="/logoo.png"
            alt="navbar-logo"
            width={150}
            height={150}
            className='h-36 w-36'
          />
        </Link>
      </div>

      {/* Paragraph */}
      <p className="text-lg mt-4 font-semibold">
        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
      </p>

      {/* Links */}
      <div className="flex space-x-6 justify-evenly md:justify-between lg:items-center py-7 w-full sm:w-[80%]">
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

    { /* Right Side Content */ }
    <div className="flex-grow flex justify-between flex-wrap md:pl-20 md:ml-5 -mb-10 md:mt-0 mt-10 md:text-left text-center">

      {/* First Colum Content */}
      <div className="lg:w-1/4 lg:py-[5.4rem] py-5 md:w-1/2 w-full lg:ml-24">
        <h2 className="title-font font-semibold text-gray-800 tracking-widest text-3xl mb-3">
          Company
        </h2>
        <nav className="list-none mb-10 text-xl font-semibold leading-[3rem]">
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">About</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Terms of Use</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">How it Works</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Contact Us</Link>
          </li>
        </nav>
      </div>

      {/* Second Colum Content */}
      <div className="lg:w-1/4 lg:py-[5.4rem] py-5 md:w-1/2 w-full">
        <h2 className="title-font font-semibold text-gray-800 tracking-widest text-3xl mb-3">
          Support 
        </h2>
        <nav className="list-none mb-10 text-xl font-semibold leading-[3rem]">
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Support Carrer</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">24h Service</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Quick Chat</Link>
          </li>
        </nav>
      </div>

      {/* Third Colum Content */}
      <div className="lg:w-1/4 lg:py-[5.4rem] sm:py-5 md:py-20 md:w-1/2 w-full md:-mt-28 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-800 tracking-widest text-3xl mb-3">
          Contact
        </h2>
        <nav className="list-none mb-10 text-xl font-semibold leading-[3rem]">
        <li>
            <Link href="/" className="text-gray-400 hover:text-black">WhatsApp</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-black">Support 24h</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>

  {/* Bottom Content */}
  <div className="border-t border-black py-4">
  <div className="text-black">
    <div className="container lg:justify-between mx-auto py-4 px-5 flex flex-wrap flex-col lg:flex-row sm:space-y-5 lg:space-y-0">
      <p className="text-xl font-sans font-semibold text-gray-500">
      Copyright 
      <span className="mr-1 text-lg"> ©</span>    
      2023 Vj Market
        <Link
          href="https://github.com/kazimhussain01"
          className="ml-1"
          target="_blank"
        >
        </Link>
      </p>

      <h3 className="text-xl py-5 lg:py-0 font-sans font-semibold text-gray-500">Design by. <span className="text-xl font-sans font-bold text-black">Weird Design Studio</span></h3>

      <h4 className="text-xl font-sans font-semibold text-gray-500">Code by. <span className="text-xl font-sans font-bold text-black">kazimhussain01 on github</span></h4>
      </div>
  </div>
 </div>
</footer>
</div>
  )
}

export default Footer;
