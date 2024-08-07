const Employees = () => {
  return (
    <div className="container">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Abir hosen
            <div className="badge badge-secondary">Frontend developer</div>
          </h2>
          <p>experience</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Company</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
