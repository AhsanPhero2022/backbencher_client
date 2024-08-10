import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "sonner";

const Update = () => {
  const data = useLoaderData();
  const { id, name, image, title, description, company } = data.data;
  console.log(data.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      image,
      title,
      description,
      company,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://backbencher-server.vercel.app/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Data updated successfully!");
      } else {
        toast.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-8 mt-8">
          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            {...register("description", { required: "Experience is required" })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            {...register("company", { required: "Company is required" })}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            {...register("image", { required: "Photo URL is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div className="my-12 text-center">
          <input
            className="btn btn-accent w-[200px] text-white"
            type="submit"
            value={
              Object.keys(errors).length ? "Fix Errors to Submit" : "Submit"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
