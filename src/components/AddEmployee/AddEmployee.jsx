import { useForm } from "react-hook-form";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data added successfully!");
        // Optionally, reset the form or handle success message
      } else {
        console.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-8 mt-8">
          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            placeholder="Experience"
            {...register("description", { required: "Experience is required" })}
          />
          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            placeholder="Company"
            {...register("company", { required: "Company is required" })}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}

          <input
            className="px-4 py-2 w-full xl:w-[800px] lg:w-[500px] bg-primary text-accent rounded"
            placeholder="Photo URL"
            {...register("image", { required: "Photo URL is required" })}
          />
          {errors.photo && (
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

export default AddEmployee;
