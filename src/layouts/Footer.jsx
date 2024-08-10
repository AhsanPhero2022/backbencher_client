const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="ms-[10%]">
          <img
            className="my-12"
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=256&q=75"
            alt=""
          />
          <h2 className="text-xl">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </h2>
        </div>
        <div className="lg:me-20 lg:mx-12 max-w-[200px] mx-auto my-12 lg:my-0 xl:my-0">
          <div className="flex flex-col">
            <button className="py-8 px-12 uppercase border hover:bg-white hover:text-black transition-all duration-500">
              facebook
            </button>
            <button className="py-8 px-12 uppercase border hover:bg-white hover:text-black transition-all duration-500">
              twitter
            </button>
            <button className="py-8 px-12 uppercase border hover:bg-white hover:text-black transition-all duration-500">
              linkedin
            </button>
            <button className="py-8 px-12 uppercase border hover:bg-white hover:text-black transition-all duration-500">
              instagram
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-[80px] lg:me-6 text-center uppercase my-12 lg:my20 xl:my-20 text-slate-300">
            Let&rsquo;s talk
          </h2>
        </div>
      </div>
      <footer className="bg-primary footer text-white  border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            © 2022 - 2025 | Alrights reserved
            <br />
            by Wealcoder
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-8">
            <a className="uppercase text-2xl">About Us</a>
            <a className="uppercase text-2xl">contact</a>
            <a className="uppercase text-2xl">career</a>
            <a className="uppercase text-2xl">faqs</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
