import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import { NewTodoInput } from "../models/todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { Link, useNavigate } from "react-router-dom";

const NewTodo: React.FC = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<NewTodoInput>({ mode: "onBlur" });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: NewTodoInput) => {
    dispatch(addTodo(data));
    navigate("/");
  };

  // const isTitleEmpty = watch("title");
  // const isDesctiptionEmpty = watch("description");

  // const isFormValid = isTitleEmpty && isDesctiptionEmpty;

  return (
    <section className="flex flex-col flex-wrap p-4 md:m-5 rounded border border-gray-300 shadow-md">
      <div className="flex gap-6 justify-between items-start flex-col-reverse sm:flex-row mb-2 border-b-2 pb-2">
        <h2 className="w-full text-2xl sm:text-4xl font-bold">Add New Todo</h2>
        <Link
          to="/"
          className="md:scale-100 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Back
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-2 md:flex-nowrap md:w-1/2">
          <div className="flex flex-col w-full my-2">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              id="title"
              placeholder="Main Task"
              className={`w-full border ${
                errors.title
                  ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  : "border-gray-300"
              } rounded p-1`}
            />
            {errors.title && (
              <p className="text-red-500">Please input the Title</p>
            )}
          </div>
          <div className="flex flex-col w-full my-2">
            <label htmlFor="date" className="font-semibold">
              Due Date
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              name="date"
              id="date"
              className={`w-full border ${
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
        <div className="flex flex-col my-2 md:w-1/2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            name="description"
            id="description"
            placeholder="What will you do?"
            className={`w-full h-32 border ${
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
    </section>
  );
};

export default NewTodo;
