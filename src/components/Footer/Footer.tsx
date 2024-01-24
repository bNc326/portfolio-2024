import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-2 bg-[#333333] flex flex-col text-title justify-center">
      <div className="text-center text-h6 font-semibold">
        {new Date().getFullYear().toString()}
        <span className="px-1">&#xa9;</span>Kiss Bence
      </div>
      <a href="https://github.com/bNc326/portfolio-2024" target="_blank" rel="noreferrer" className="text-center">
        source
      </a>
    </footer>
  );
};

export default Footer;
