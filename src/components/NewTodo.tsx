import { useForm } from "react-hook-form";

interface NewTodoInput {
  title: string;
  description: string;
}

const NewTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTodoInput>();

  const onSubmit = (data: NewTodoInput) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          {...register("title", { required: true })}
          type="text"
          name="title"
          id="title"
          placeholder="Masukkan Judul"
        />
        {errors.title && <p className="text-red-500">This field is required</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", { required: true })}
          name="description"
          id="description"
          placeholder="Masukkan Deskripsi"
        />
        {errors.description && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
