import React from "react";
import LogoImg from "../../assets/image/anhhtus-logo 2.png";
import ship from "../../assets/frame/1.svg";
import location from "../../assets/frame/2.svg";
import cart from "../../assets/frame/4.svg";
import search from "../../assets/frame/5.svg";
import Banner from "../Banner";

type Props = {};

const Index2 = (props: Props) => {
  return (
    <div className="">
      <header className="bg-[#d70018]">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src={LogoImg} alt="" className="w-[65px] h-auto" />
              </a>
            </div>
            <form className="flex items-center w-[300px]">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <div className="hidden md:block pt-5">
              <nav aria-labelledby="header-navigation">
                <ul className="flex gap-6 text-sm">
                  <li className="">
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      Gọi mua hàng <br />
                      1800.2097
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-white transition hover:bg-gray-500/75 flex items-center"
                      href="/"
                    >
                      <div className="box">
                        <img src={location} alt="" />
                      </div>
                      <div>
                        <p>
                          Cửa hàng <br /> gần bạn
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-white transition hover:bg-gray-500/75 flex items-center"
                      href="/"
                    >
                      <div className="box">
                        <img src={ship} alt="" className="" />
                      </div>
                      <div>
                        <p>
                          Cửa hàng <br /> gần bạn
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-white transition hover:bg-gray-500/75 flex items-center"
                      href="/"
                    >
                      <div className="box">
                        <img src={cart} alt="" />
                      </div>
                      <div>
                        <p>
                          Cửa hàng <br /> gần bạn
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Banner />
    </div>
  );
};

export default Index2;
