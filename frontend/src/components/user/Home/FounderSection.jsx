import video from "../../../assets/videos/1.mp4";

const FounderSection = () => {
  return (
    <>
      <div className="w-full video-background h-[270px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] drop-shadow">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content py-3">
          <div className=" md:w-3/4 lg:w-1/2 mx-auto">
            <div className="w-32 h-32 rounded-full mb-5 mx-auto">
              <img src="/src/assets/consultant.png" alt="" />
            </div>
            <h1 className="text-3xl mt-5 font-medium my-1 drop-shadow text-red-100">
              Shailendra Kumar Bind
            </h1>
            <p className="text-center text-sm md:text-base">
              Founder and Instructor of <br />
              this Institute.
            </p>
            <p className="py-6 text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
              quae minima enim placeat molestias illum veritatis perspiciatis ex
              magnam aut assumenda reprehenderit at mollitia expedita
              repellendus pariatur, aliquam porro?
            </p>
            <button className="sm !text-slate-50">More Details...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
