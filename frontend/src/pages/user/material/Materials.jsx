import { Footer, Navbar, Banner } from "../../../components/user";
import MaterialContainer from "../../../components/user/material/MaterialContainer";

const Materials = () => {

  document.title="TICA Computers - Materials";
  return (
    <section className="flex h-screen pageControl w-full">
      <section className="overflow-auto w-fill-available">
        <Navbar />
        <Banner
          title="Welcome your on materials page."
          desc="Here are some materials for you provided by our insititute. You can download these materials and if you have any type of materials for students then contact our institute and submit your notes, ppt etc. You given material also will appear in this list."
        />
        <MaterialContainer/>
        <Footer />
      </section>
    </section>
  );
};

export default Materials;
