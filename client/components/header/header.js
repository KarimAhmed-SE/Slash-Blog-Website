// import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-gray-800">
      <div className="flex justify-center items-center mx-auto py-3 space-x-10">
        <div className="flex w-1/4 justify-start items-center space-x-6 px-5"></div>

        <div className="w-1/2 flex justify-center items-center">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold text-white hover:cursor-pointer">
              Blog Website
            </h1>
          </Link>
        </div>

        <div className="flex justify-end items-end space-x-6 w-1/4 px-5">
          <Link
            href={"/createPost"}
            className="hidden bg-blue-500 rounded-sm px-6 py-3 text-white font-bold hover:bg-orange-300 md:flex transition-all"
          >
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
