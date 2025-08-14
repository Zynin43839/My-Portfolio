import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <nav className="fixed top-0 left-0 w-full bg-black border-b border-green-600 p-4">
          <ul className="flex flex-end gap-8">
            <li className="hover:text-green-200 cursor-pointer">// Home</li>
            <li className="hover:text-green-200 cursor-pointer">// projects</li>
            <li className="hover:text-green-200 cursor-pointer">
              // experience
            </li>
            <li className="hover:text-green-200 cursor-pointer">// profile</li>
            <li className="hover:text-green-200 cursor-pointer">// resume</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
