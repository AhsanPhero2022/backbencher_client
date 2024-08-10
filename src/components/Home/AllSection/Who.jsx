const Who = () => {
  return (
    <div className="bg-primary py-12 text-white/80 mx-auto">
      <div className="container flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[50%]">
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] my-12 ">
          <h1 className="text-3xl font-bold text-accent uppercase">
            Who We Are
          </h1>
          <h1 className="my-6 text-3xl font-bold  uppercase">
            We are leading digital marketing agency.
          </h1>
          <hr />
          <div className="mt-12 ms-20">
            <h2 className="text-xl  my-8">
              We are a team of strategic mdigital marketing working globally
              with largest brands, We believe that progress only happens when
              you refused to play things safe. We combine ideas and behaviors,
              and insights with design, technological data to produce brand
              experiences that customers love our services.
            </h2>
            <div className="">
              <button
                href=""
                className="btn btn-circle w-40 h-40 rounded-full border-dashed transition-all duration-500 bg-primary text-white hover:bg-white hover:text-primary"
              >
                Explore Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
