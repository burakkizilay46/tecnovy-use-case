"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  clickFunc: () => void;
}

const Button = ({ children, clickFunc }: ButtonProps) => {
  return (
    <button
      className="bg-[#15D2AD] rounded-[59px] text-white h-12 w-[105px]"
      onClick={clickFunc}
    >
      <div className="px-6 py-3">{children}</div>
    </button>
  );
};

export default Button;
