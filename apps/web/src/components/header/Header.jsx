import React from 'react';
import Logo from './Group 3 1.svg'; // Adjust the path based on your file structure

const Header = () => {
  return (
    <div className="container mx-auto h-20 bg-black bg-opacity-90 flex items-center justify-between">
      <div className="flex items-center space-x-4"> 
      <div className="w-4" />
        <img src={Logo} alt="Logo" className="w-20 h-20 pl-3" /> 
        <div className="w-[138.75px] h-[43.83px] relative flex-col justify-start items-start inline-flex" />
        <NavItem className="pl-2" text="Courses" />
        <NavItem text="Why Us" />
      </div>
      <div className="flex space-x-4 items-center"> 
      <NavItem className="mr-3" text="Become an Instructor" />

        <AuthButton text="Sign In" bgColor="bg-white" textColor="text-sky-950" />
        <AuthButton text="Sign Up" bgColor="bg-sky-950" textColor="text-yellow-400" />
        <div className="w-4" /> 
      </div>
    </div>
  );
};

const NavItem = ({ text }) => (
  <div className={`text-white text-sm font-bold font-KoHo`}>{text}</div>
);

const AuthButton = ({ text, bgColor, textColor }) => (
  <div className="w-[118px] h-12 relative">
    <div className={`w-[118px] h-12 left-0 top-0 absolute ${bgColor} rounded-lg`} />
    <div
      className={`w-[50px] h-[21px] left-[34px] top-[13.60px] absolute ${textColor} text-sm font-semibold font-['KoHo']`}
    >
      {text}
    </div>
  </div>
);

export default Header;
