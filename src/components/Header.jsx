import React from "react";

const Header = () => {
  return (
    <div className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3">
      <img
        className="w-30 h-30 object-contain"
        src="/Logo1.png"
        alt="Smartflix logo"
      />
    
    </div>
  );
};

export default Header;
