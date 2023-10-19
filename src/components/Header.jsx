import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center border rounded-bl-md bg-slate-600 p-4 mb-7">
      <div className="text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="bell">
            <path
              id="Vector"
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="w-41 h-9 border rounded-md bg-white flex">
        <img
          src="manImg.png"
          alt="manLogo"
          style={{ height: 34, width: 33 }}
          className="pt-1 pl-1"
        />{" "}
        <span className="mt-1 mr-2 ml-2">Ben cooper</span>
      </div>
    </div>
  );
};

export default Header;
