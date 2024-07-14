import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { setPage } from "../store/pageSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const pageHandler = (page: string | number) => {
    dispatch(setPage(page));
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-full">
      <h1 className="text-4xl">
        Welcome to Todos with{" "}
        <span className="font-semibold text-blue-600">TypeScript</span>
      </h1>
      <div className="flex items-center gap-5">
        <Button
          color="bg-gray-700 text-white hover:bg-gray-800"
          onClick={() => pageHandler("add")}
        >
          Add New Todo
        </Button>
        <p>Or click todo on the sidebar</p>
      </div>
    </div>
  );
};

export default HomePage;
