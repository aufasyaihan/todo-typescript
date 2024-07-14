import React from "react";
import Button from "../UI/Button";

const HomePage: React.FC<{ onClick: (page: string | number) => void }> = (props) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-full">
      <h1 className="text-4xl">
        Welcome to Todos with{" "}
        <span className="font-semibold text-blue-600">TypeScript</span>
      </h1>
      <Button onClick={() => props.onClick("add")}>Add New Todo</Button>
    </div>
  );
};

export default HomePage;
