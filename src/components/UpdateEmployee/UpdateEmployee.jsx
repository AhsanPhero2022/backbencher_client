import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UpdateEmployee = () => {
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
            <th>Update</th>
          </tr>
        </thead>
        {employees?.map((employee, index) => (
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
              <th className="tooltip tooltip-accent" data-tip="Go to update">
                <Link to={`/update/${employee.id}`}>
                  <button className="btn btn-warning btn-xs">Update</button>
                </Link>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UpdateEmployee;
