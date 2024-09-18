import "./styles.css";
import { lazy, Suspense } from "react";
import WelcomeSection from "../../../components/user/Home/WelcomeSection";
import { Navbar, Footer } from "../../../components/user/index";
import SliderComponent from "../../../components/user/SliderComponent";
import FounderSection from "../../../components/user/Home/FounderSection";
import Spinner from "../../../components/utility/Spinner";

const PopularCourses = lazy(()=> import ("../../../components/user/Home/PopularCourses"));
const StudentsSection = lazy(()=> import ("../../../components/user/Home/StudentsSection"));
const MaterialsSection = lazy(()=> import ("../../../components/user/Home/MaterialsSection"));


function Home() {
  document.title = "TICA Computers - Home";
  return (
    <section className="flex h-screen w-full pageControl text-[15px]">
      <section
        className="overflow-auto w-fill-available"
        style={{ scrollBehavior: "smooth" }}
      >
        <Navbar />
        <SliderComponent />
        <WelcomeSection />
        <Suspense fallback={<Spinner />}>
          <FounderSection />
          <PopularCourses />
          <StudentsSection />
          <MaterialsSection />
          <Footer />
        </Suspense>
      </section>
    </section>
  );
}

export default Home;
