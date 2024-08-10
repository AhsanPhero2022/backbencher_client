const Slider = () => {
  return (
    <div className=" my-12  container">
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="">
              <h1 className="text-primary text-8xl font-bold text-center align-middle">
                Portfolio Image Benjon Website 2012
              </h1>
            </div>
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=640&q=75"
              className="w-1/2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-accent">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-accent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="">
              <h1 className="text-primary text-8xl font-bold text-center align-middle">
                Portfolio Image Benjon Website 2012
              </h1>
            </div>
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=640&q=75"
              className="w-1/2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-accent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-accent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="">
              <h1 className="text-primary text-8xl font-bold text-center align-middle">
                Portfolio Image Benjon Website 2012
              </h1>
            </div>
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=640&q=75"
              className="w-1/2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-accent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-accent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="">
              <h1 className="text-primary text-8xl font-bold text-center align-middle">
                Portfolio Image Benjon Website 2012
              </h1>
            </div>
            <img
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=640&q=75"
              className="w-1/2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-accent">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-accent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
