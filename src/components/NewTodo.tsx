import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

export interface NewTodoInput {
  title: string;
  description: string;
  date: string;
}

const NewTodo: React.FC<{
  onAddTodo: (todo: NewTodoInput) => void;
  onClick: (page: string | number) => void;
}> = (props) => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<NewTodoInput>({ mode: "onBlur" });

  const onSubmit = (data: NewTodoInput) => {
    console.log(data);
    props.onAddTodo(data);
  };

  // const isTitleEmpty = watch("title");
  // const isDesctiptionEmpty = watch("description");

  // const isFormValid = isTitleEmpty && isDesctiptionEmpty;

  return (
    <div className="flex flex-col p-4 m-5 rounded border border-gray-300 shadow-md">
      <div className="flex justify-between mb-2 border-b-2 pb-2">
        <h2 className="text-4xl font-bold">Add New Todo</h2>
        <Button
          color="bg-red-500 text-white hover:bg-red-600"
          onClick={() => props.onClick("home")}
        >
          Back
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-2 w-1/2">
          <div className="flex flex-col my-2">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              id="title"
              placeholder="Masukkan Judul"
              className={`w-64 border ${
                errors.title
                  ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  : "border-gray-300"
              } rounded p-1`}
            />
            {errors.title && (
              <p className="text-red-500">Please input the Title</p>
            )}
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="date" className="font-semibold">
              Due Date
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              name="date"
              id="date"
              placeholder="Masukkan Deskripsi"
              className={`w-64 border ${
                errors.date
                  ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  : "border-gray-300"
              } rounded p-1`}
            />
            {errors.date && (
              <p className="text-red-500">Please input the Date</p>
            )}
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            name="description"
            id="description"
            placeholder="Masukkan Deskripsi"
            className={`w-1/2 h-32 border ${
              errors.description
                ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                : "border-gray-300"
            } rounded p-1`}
          />
          {errors.description && (
            <p className="text-red-500">Please input the Description</p>
          )}
        </div>

        <Button
          //disabled={!isFormValid}
          color="bg-gray-700 text-white hover:bg-gray-800"
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default NewTodo;
