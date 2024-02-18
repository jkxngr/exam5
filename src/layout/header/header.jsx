import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { LogoIcon } from "../../assets/icon/logo-icon";
import { headerLinks } from "../../data/header";
import { SearchIcon } from "../../assets/icon/search-icon";
import { CartIcon } from "../../assets/icon/cart-icon";
export const Header = () => {
  return (
    <header>
      <div className="container my-[70px] flex items-center">
        <LogoIcon />
        <div className="ml-[150px] mr-[130px] flex w-[564px] justify-between">
          {headerLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={"hover:text-Red text-[20px] font-bold text-Arapawa"}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <form
          action=""
          className="relative flex w-full max-w-[376px] items-center rounded-[36px] bg-DrWhite "
        >
          <input
            type="search"
            className="h-[66px] w-full max-w-[376px] bg-DrWhite"
          />
          <div className="absolute right-0">
            <SearchIcon />
          </div>
        </form>
        <div className="ml-[18px] flex items-center gap-[12px] whitespace-nowrap rounded-[33px] border-2 border-ChristmasSilver	 px-[10px]">
          <CartIcon />
          <p className="py-[21px]  text-[18px]  font-semibold text-Arapawa">
            Cart (0)
          </p>
        </div>
      </div>
    </header>
  );
};
