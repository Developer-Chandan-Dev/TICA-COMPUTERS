const FounderSection = () => {
  return (
    <>
      <div
        className="w-full h-auto md:h-96 m-auto py-10 md:flex items-center justify-evenly"
        style={{ background: "#f8f5ee99" }}
      >
        <div className="w-4/5 md:w-2/5 flex m-auto items-center justify-center flex-col">
          <div className="w-40 h-40 rounded-full mb-5">
            <img src="/src/assets/consultant.png" alt="" />
          </div>
          <div>
            <h2 className=" text-xl text-center my-1">
              <b>Some Famous</b>
            </h2>
            <p className="text-center text-base">
              Founder and Instructor of <br />
              this Institute.
            </p>
          </div>
        </div>
        <div className=" w-4/5 md:w-1/2 m-auto ">
          <h1 className="text-3xl mt-5 font-medium">Heading is Here</h1>
          <p className="py-6 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
            quae minima enim placeat molestias illum veritatis perspiciatis ex
            magnam aut assumenda reprehenderit at mollitia expedita repellendus
            pariatur, aliquam porro?
          </p>
          <button className="sm mr-2 mb-1">GET STARTED</button>
          <button className="sm">Explore...</button>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
