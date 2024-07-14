import { useForm } from "react-hook-form";

interface NewTodoInput {
  title: string;
  description: string;
}

const NewTodo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewTodoInput>({ mode: "onBlur" });

  const onSubmit = (data: NewTodoInput) => {
    console.log(data);
  };

  const isTitleEmpty = watch("title");
  const isDesctiptionEmpty = watch("description");

  const isFormValid = isTitleEmpty && isDesctiptionEmpty;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
        {errors.title && <p className="text-red-500">This field is required</p>}
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
      <button
        disabled={!isFormValid}
        className="px-4 py-2 disabled:bg-gray-500 bg-gray-700 text-white rounded hover:bg-gray-800"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;