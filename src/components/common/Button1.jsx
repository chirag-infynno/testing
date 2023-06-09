/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";

const Button1 = ({ variant, sm, lg, rounded, disabled, block }) => {
  return (
    <div className=" flex items-center justify-center">
      <button
        data-mdb-ripple-color="light"
        data-mdb-ripple="true"
        className={classNames(
          variant === "secondary" && "bg-gray-600 text-white hover:bg-gray-700",
          variant === "dark" &&
            "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-[black]",
          variant === "success" && "bg-green-600 text-white hover:bg-green-700",
          variant === "alert" && "bg-red-600 text-white hover:bg-red-700",
          variant === "warning" &&
            "bg-yellow-600 text-white hover:bg-yellow-700",
          variant === "outline-primary" &&
            "bg-white text-blue-600 border-2 border-blue-600 hover:bg-gray-100",
          variant === "outline-secondary" &&
            "bg-white text-gray-600 border-2 border-gray-600 hover:bg-gray-100",
          variant === "outline-dark" &&
            "bg-white text-black border-2 border-black hover:bg-gray-100",
          variant === "outline-success" &&
            "bg-white text-green-600 border-2 border-green-600 hover:bg-gray-100",
          variant === "outline-alert" &&
            "bg-white text-red-600 border-2 border-red-600 hover:bg-gray-100",
          variant === "outline-warning" &&
            "bg-white text-yellow-600 border-2 border-yellow-600 hover:bg-gray-100  ",
          (!variant || variant === "primary") &&
            "bg-blue-600 text-white hover:bg-blue-800",
          sm ? "h-7 px-5 text-xs" : "h-9",
          lg ? "h-10 px-8 text-lg" : "h-9",
          rounded ? "rounded-full" : "rounded",
          disabled && "opacity-60 cursor-not-allowed",
          block && "w-full mx-5 ",
          "flex justify-center items-center px-6 font-medium text-xs leading-tight uppercase shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
        )}
      >
        Button
      </button>
    </div>
  );
};

export default Button1;
