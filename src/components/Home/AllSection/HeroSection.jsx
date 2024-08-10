const HeroSection = () => {
  return (
    <div className="container my-12">
      <div className="flex justify-start gap-10 items-center mt-12">
        <h1 className="uppercase font-bold text-3xl ">Digital</h1>
        <div className="w-28 h-[2px] bg-black "></div>
      </div>

      <div className="flex flex-col  lg:flex-row xl:flex-row justify-between items-center my-5">
        <div>
          <h1 className="text-[200px]  uppercase font-bold -mt-20">Mark</h1>
        </div>
        <div className="flex justify-center -mt-12 items-center gap-3 mx-auto">
          <div className="flex justify-center">
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/qGvteC3dZnk?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-full cursor-pointer"
            ></iframe>
          </div>
          <h2 className="text-2xl font-semibold w-[40%]">Watch video intro</h2>
        </div>
      </div>
      {/* second para */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-4 ">
          <h1 className="text-xl font-medium ">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev
            environment.
          </h1>
        </div>
        <div className=" w-full col-span-8">
          <h1 className="text-[200px]  uppercase font-bold -mt-28 ">eting</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
