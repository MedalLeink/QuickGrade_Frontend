import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-white mx-auto">
      <footer className="bg-blue-600 text-white p-7 w-full">
        <div className="flex justify-between items-center px-4">
          <span className="text-base font-bold text-white">QuickGrade</span>
          <span className="text-base font-normal leading-20 tracking-normal text-white">
            QuickGrade Inc. All rights reserved
          </span>
          <span className="w-[114px] h-[20px] gap-4 flex items-center justify-between">
            <span>Privacy</span>
            <span>Terms</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
