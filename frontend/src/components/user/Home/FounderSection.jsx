import video from "../../../assets/videos/1.mp4";
import img from "../../../assets/consultant.png";

const FounderSection = () => {
  return (
    <>
      <div className="w-full video-background h-[300px] sm:h-[320px] md:h-[370px] lg:h-[420px] xl:h-[470px] drop-shadow">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay flex-center">
          <div className="content py-3">
            <div className=" w-full lg:w-1/2 mx-auto">
              <div className="w-32 h-32 rounded-full mb-5 mx-auto">
                <img src={img} alt="Founder" />
              </div>
              <h1 className=" text-xl md:text-2xl lg:text-3xl mt-5 font-medium my-1 drop-shadow text-red-100">
                Shailendra Kumar Bind
              </h1>
              <p className="text-center text-sm md:text-base">
                Founder and Instructor of <br />
                this Institute.
              </p>
              <p className="py-3 hidden lg:block text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                modi quae minima enim placeat molestias illum veritatis
                perspiciatis ex magnam aut assumenda reprehenderit at mollitia
                expedita repellendus pariatur, aliquam porro?
              </p>
              <button className="sm !text-slate-50 mt-2">More Details...</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
