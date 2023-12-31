import React from 'react';
import { FaBars} from "react-icons/fa";
const Navbar = () => {

    const navItem = <>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>  
            <li><a className='primary-btn uppercase w-[50%]' href="./Bilkish Akther of Resume.pdf" download>Resume</a></li>    
    </>
    return (
        <div className="navbar text-white lg:px-10 py-10">
  <div className="navbar-start w-full">
  
    <div className="mx-7">
          <h4 className="text-4xl uppercase animate-pulse font-bold">
            Bilk
            <span
              className="text-cyan-600 animate-pulse
            
            "
            >
             ish
            </span>{" "}
            &nbsp; Akther
          </h4>
        </div>
    <div className="dropdown dropdown-end ml-28">
      <label tabIndex={0} className="btn text-[#141f31] bg-[#00cf5d] btn-ghost lg:hidden">
        <FaBars className='text-xl'></FaBars>
      </label>
      <ul tabIndex={0} className="menu menu-sm space-y-5 font-semibold text-lg uppercase bg-gray-700 dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-[300px]">
        {navItem}
      </ul>
      
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex space-x-10 font-semibold uppercase">
      {navItem}
    </ul>
  </div>
</div>
    );
};

export default Navbar;