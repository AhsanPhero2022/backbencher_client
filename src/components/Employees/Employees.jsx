import { useEffect, useState } from "react";
import { lineSpinner } from "ldrs";

lineSpinner.register();

const Employees = () => {
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
    return (
      <p className="text-xl font-semibold text-center text-accent">
        Data Loading...
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="green"
        ></l-line-spinner>
      </p>
    );
  }

  return (
    <div className="container">
      <div className="flex md:flex-col gap-6 flex-col xl:flex-row lg:flex-row py-12 items-center justify-between ">
        <div className="flex-1 ">
          <p className="text-2xl font-bold text-gray-800">
            All Employees list is here
          </p>
        </div>
        <div className="flex-1">
          <label
            htmlFor="filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter Options:
          </label>
          <select className="block w-full p-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm">
            <option value="">Select an option</option>
            <option value="option1">sort by name</option>
            <option value="option2">sort by id</option>
          </select>
        </div>

        {/* Section 2: Text Display */}
      </div>
      <div className="lg:mx-auto xl:mx-auto mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6">
        {employees?.map((employee) => (
          <div
            key={employee.id}
            className="card mx-auto bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                className="h-[300px] w-full"
                src={employee.image}
                alt="Image not found"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {employee.name}
                <div className="badge badge-secondary">{employee.title}</div>
              </h2>
              <p>{employee.description} years of experience</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{employee.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
