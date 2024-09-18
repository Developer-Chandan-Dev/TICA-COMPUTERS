import { Footer, Navbar } from "../../../components/user";
import AboutContainer from "../../../components/user/About/AboutContainer";
import AboutBanner from "../../../components/user/About/AboutBanner";

const About = () => {

  document.title="TICA Computers - About";
  return (
    <>
      <section className="flex h-screen pageControl w-full">
        <section className="overflow-auto w-fill-available">
          <Navbar />
          <AboutBanner/>
          <AboutContainer />
          <Footer />
        </section>
      </section>
    </>
  );
};

export default About;
