import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

export interface NewTodoInput {
  title: string;
  description: string;
}

const NewTodo: React.FC<{ onAddTodo: (todo: NewTodoInput) => void }> = (
  props
) => {
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
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Back
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            className={`w-1/3 border ${
              errors.title
                ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                : "border-gray-300"
            } rounded p-1`}
          />
          {errors.title && (
            <p className="text-red-500">This field is required</p>
          )}
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
            <p className="text-red-500">This field is required</p>
          )}
        </div>
        <Button
        //disabled={!isFormValid}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default NewTodo;
