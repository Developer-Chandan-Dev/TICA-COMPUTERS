import { Footer, Navbar } from "../../../components/user";
import { CourseContainer } from "../../../components/user/Courses";

const Courses = () => {
  document.title = "TICA Computers - Courses";
  return (
    <section className="flex h-screen w-full mx-auto pageControl">
      <section className="overflow-auto w-fill-available">
        <Navbar />
        <CourseContainer />
        <Footer />
      </section>
    </section>
  );
};

export default Courses;
