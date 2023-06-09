"use client";
import React, { useState } from "react";
import Date from "./Date";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import MobileNav from "../MobileNav";
type Iprops = {
  isMenuOpen: boolean;
  handleModalOpen?: any;
  handleModalClose?: any;
};
const HeaderTitle = ({ isMenuOpen, handleModalOpen }: Iprops) => {
  return (
    <div className="flex py-[22px] px-3 md:px-0 text-sm sm:text-base md:text-lg font-medium  mb-6 items-center justify-between">
      <div className="">
        <p>Dashboard</p>
      </div>

      <BiMenu
        onClick={handleModalOpen}
        className="w-6 h-6 block md:hidden relative "
      />
    </div>
  );
};
const Menu = ({ isMenuOpen, handleModalClose }: Iprops) => {
  return (
    <div
      className={`fixed p-4 transition-all z-50 duration-300 ease-linear  ${
        isMenuOpen ? " left-0 w-[50%]" : " right-[100%] -left-[100%] w-0"
      } top-0 bottom-0   bg-white `}
    >
      <MdOutlineClose
        onClick={handleModalClose}
        className="w-6 h-6 absolute right-4 top-4"
      />
      <MobileNav />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleModalClose = () => {
    setIsMenuOpen(false);
    const enableScroll = () => {
      document.body.style.overflowY = "scroll";
    };
    enableScroll();
  };

  const handleModalOpen = () => {
    setIsMenuOpen(true);
    const disableScroll = () => {
      document.body.style.overflowY = "hidden";
    };
    disableScroll();
  };
  return (
    <header className="w-full">
      <HeaderTitle isMenuOpen={isMenuOpen} handleModalOpen={handleModalOpen} />
      {isMenuOpen && (
        <div
          onClick={handleModalClose}
          className="fixed  top-0 bottom-0 left-0 right-0 bg-black/50"
        />
      )}
      <div className="flex w-[98%] md:w-full text-base sm:text-lg  md:text-2xl font-semibold items-center justify-between">
        <div>
          <p>Good morning, Blessing ⛅️</p>
          <p className="text-xs md:text-sm mt-[10px] font-normal">
            Check out your dashboard summary.
          </p>
        </div>
        <div className="text-darkOrange_ hover:underline underline-offset-4 cursor-default text-xs md:text-sm font-normal">
          <p>View analytics</p>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} handleModalClose={handleModalClose} />
      {/* ====== DATE ======== */}
      <Date />
    </header>
  );
};

export default Header;
