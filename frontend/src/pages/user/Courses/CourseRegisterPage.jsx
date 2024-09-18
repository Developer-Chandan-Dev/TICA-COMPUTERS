import { EnrollCourse } from "../../../components/user/Courses";
import { Banner, Footer, Navbar } from "../../../components/user/index";

const CourseRegisterPage = () => {
  return (
    <>
    <section className="flex h-auto w-full mx-auto pageControl">
      <section
        className="w-full h-auto text-sm"
        style={{ background: "#f8f5ee99" }}
      >
        <Navbar/>
        <Banner
          title="Register Here In Any Course"
          desc="You can register for any course from here. After register reach to institute or contact to institute for confirm admission, well after your registration institute call you for confirmation."
        />
        <h1
          className="text-center py-3 text-2xl after:w-40 after:mx-auto after:h-1 after:rounded-lg after:mt-2 after:bg-red-500 after:block"
        >
          <b>Register in Course</b>
        </h1>
        <EnrollCourse />
        <Footer/>
      </section>
      </section>
    </>
  );
};

export default CourseRegisterPage;
