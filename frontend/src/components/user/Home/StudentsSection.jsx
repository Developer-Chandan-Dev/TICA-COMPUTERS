import { Link } from "react-router-dom";

const StudentsSection = () => {
  return (
    <>
      <div className="w-full h-auto md:h-96 m-auto py-10 flex-center homeStudentsSection text-slate-50 drop-shadow">
        {/* <div className="w-4/5 md:w-2/5 flex m-auto items-center justify-center flex-col">
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
        </div> */}
        <div className=" w-4/5 md:w-1/2 m-auto flex-center flex-col gap-y-2 text-center home-students-section">
          <h1 className="text-3xl font-medium mt-5">Our Students</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
            quae minima enim placeat molestias illum veritatis perspiciatis ex
            magnam aut assumenda reprehenderit at mollitia expedita repellendus
            pariatur, aliquam porro?
          </p>
          <div>
            <Link to="/students">
              <button className="btn-sm mr-2 mb-1">STUDENTS</button>
            </Link>
            <button className="btn-sm">Explore...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsSection;
