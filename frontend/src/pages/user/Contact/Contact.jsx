import { Footer, Navbar } from "../../../components/user";
import ContactContainer from "../../../components/user/Contact/ContactContainer";
import Banner from "../../../components/user/Banner";

const Contact = () => {
  document.title = "TICA Computers - Contact";
  return (
    <>
      <section className="flex h-screen pageControl w-full">
        <section className="overflow-auto w-fill-available">
          <Navbar />
          <Banner
            title="We are here for you, contact us at anytime"
            desc="Have any questions about our services or just want to talk with us? Please reach out. We waiting to help for your questions and queries. If you have any doubt confusion in any course of everything then please contact us."
            className="contactBanner"
            text="text-slate-50"
          />
          <ContactContainer />
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Contact;
