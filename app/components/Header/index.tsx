"use client";
import React, { useState } from "react";
import Date from "./Date";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import MobileNav from "../MobileNav";
type Iprops = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeaderTitle = ({ isMenuOpen, setIsMenuOpen }: Iprops) => {
  return (
    <div className="flex py-[22px] text-lg font-medium  mb-6 items-center justify-between">
      <div className="">
        <p>Dashboard</p>
      </div>

      <BiMenu
        onClick={() => setIsMenuOpen(true)}
        className="w-7 h-7 relative -left-6"
      />
    </div>
  );
};
const Menu = ({ isMenuOpen, setIsMenuOpen }: Iprops) => {
  return (
    <div
      className={`fixed p-4 transition-all z-50 duration-300 ease-linear  ${
        isMenuOpen ? " left-0 w-[50%]" : " right-[100%] -left-[100%] w-0"
      } top-0 bottom-0   bg-white `}
    >
      <MdOutlineClose
        onClick={() => setIsMenuOpen(false)}
        className="w-7 h-7 absolute right-6 top-6"
      />
      <MobileNav />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <HeaderTitle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed  top-0 bottom-0 left-0 right-0 bg-black/50"
        />
      )}
      <div className="flex w-[90%] md:w-full text-xl  md:text-2xl font-semibold items-center justify-between">
        <div>
          <p>Good morning, Blessing ⛅️</p>
          <p className="text-sm mt-[10px] font-normal">
            Check out your dashboard summary.
          </p>
        </div>
        <div className="text-darkOrange_ hover:underline underline-offset-4 cursor-default text-sm font-normal">
          <p>View analytics</p>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* ====== DATE ======== */}
      <Date />
    </header>
  );
};

export default Header;
