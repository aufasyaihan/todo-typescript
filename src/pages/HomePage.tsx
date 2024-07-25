import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 px-5 md:px-0 justify-center items-center h-screen w-full">
      <h1 className="text-4xl text-center">
        Welcome to Todos with{" "}
        <span className="font-semibold text-blue-600">TypeScript</span>
      </h1>
      <div className="flex justify-center flex-wrap md:flex-nowrap items-center gap-5">
        <Link
          className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-800"
          to="/add"
        >
          Add New Todo
        </Link>
        <p className="text-center">Or click todo on the sidebar</p>
      </div>
    </section>
  );
};

export default HomePage;
