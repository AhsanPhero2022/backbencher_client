import { useEffect, useState } from "react";
import { toast } from "sonner";

const DeleteEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backbencher-server.vercel.app/all")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.data);
        setLoading(false);
      });
  }, []);

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(
        `https://backbencher-server.vercel.app/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
        toast.success("Data deleted successfully");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto container">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Company</th>
            <th>Delete</th>
          </tr>
        </thead>
        {employees.map((employee, index) => (
          <tbody key={employee.id}>
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={employee.image} alt="Loading..." />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{employee.name}</div>
                  </div>
                </div>
              </td>
              <td>{employee.title}</td>
              <td>{employee.company}</td>
              <th className="tooltip tooltip-error" data-tip="Click to delete">
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default DeleteEmployee;
