import { Footer, Navbar} from "../../../components/user";
import Banner from "../../../components/user/Banner";
import {StudentContainer} from "../../../components/user/Students/index";

const Students = () => {

  document.title="TICA Computers - Students";
  return (
    <section className="flex h-screen pageControl w-full">
      <section className="w-fill-available overflow-auto">
        <Navbar />
        <Banner title="Students" desc="These are students they are learning present time our courses." />
        <StudentContainer />
        <Footer />
      </section>
    </section>
  );
};

export default Students;
