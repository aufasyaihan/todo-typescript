import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-full">
      {/* <p className="absolute top-0 m-2 flex gap-2 items-center bg-blue-200 w-fit px-3 py-2 rounded">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
          </svg>
        </span>
        this website is not responsive yet and still in development
      </p> */}
      <h1 className="text-4xl text-center">
        Welcome to Todos with{" "}
        <span className="font-semibold text-blue-600">TypeScript</span>
      </h1>
      <div className="flex items-center gap-5">
        <Link
          className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-800"
          to="/add"
        >
          Add New Todo
        </Link>
        <p>Or click todo on the sidebar</p>
      </div>
    </div>
  );
};

export default HomePage;
