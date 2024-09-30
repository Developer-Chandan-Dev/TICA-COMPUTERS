import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "./ContactForm";
import "./style.css";

const ContactContainer = () => {
  useGSAP(() => {
    gsap.to(".contactBoxes", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <section className="w-full h-auto mx-auto pt-5  relative bg-white text-sm">
      <div className="py-20  text-gray-500">
        <div className="w-full flex items-center justify-center">
          <div className=" w-5/6 gap-5 mx-auto flex flex-wrap items-center justify-evenly -top-7 cursor-default py-2">
            <div className="contactBoxes opacity-0 translate-y-20 w-64 h-48 rounded-lg gap-x-2 gap-y-2 mb-4 bg-white shadow-md shadow-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500">
              <div className="w-full h-36 flex items-center justify-center flex-col">
                <div className="w-14 h-14 rounded-full bg-orange-100 my-3 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="orange"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <p className="my-1">
                  <b>Email Us</b>
                </p>
                <p className="text-sm py-1">From your email app</p>
              </div>
              <div className="w-11/12 mx-auto h-12 flex items-center justify-center border-t border-gray-300 py-3">
                <button className="px-2 py-1 w-full rounded-md">
                  example@gmail.com
                </button>
              </div>
            </div>
            <div className="contactBoxes opacity-0 translate-y-20 w-64 h-48 rounded-lg gap-x-2 gap-y-2 mb-4 bg-white shadow-md shadow-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500">
              <div className="w-full h-36 flex items-center justify-center flex-col">
                <div className="w-14 h-14 rounded-full bg-blue-100 my-3 flex items-center justify-center cursor-pointer  hover:shadow-lg hover:shadow-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="blue"
                    className="bi bi-telephone-inbound"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <p className="my-1">
                  <b>Call or text us</b>
                </p>
                <p className="text-sm pt-1">From your phone</p>
              </div>
              <div className="w-11/12 mx-auto h-12 flex items-center justify-center border-t border-gray-300 py-3">
                <button className="px-2 py-1 w-full rounded-md">
                  +91 955-554-8271
                </button>
              </div>
            </div>
            <div className="contactBoxes opacity-0 translate-y-20 w-64 h-48 rounded-lg gap-x-2 gap-y-2 mb-4 bg-white shadow-md shadow-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500">
              <div className="w-full h-36 flex items-center justify-center flex-col">
                <div className="w-14 h-14 rounded-full my-3 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="green"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </div>
                <p className="my-1">
                  <b>WhatsApp</b>
                </p>
                <p className="text-sm pt-1">From your phone</p>
              </div>
              <div className="w-11/12 mx-auto h-12 flex items-center justify-center border-t border-gray-300 py-3">
                <button className="px-2 py-1 w-full rounded-md">
                  +91 955-554-8271
                </button>
              </div>
            </div>
            <div className="contactBoxes opacity-0 translate-y-20 w-64 h-48 rounded-lg gap-x-2 gap-y-2 mb-4 bg-white shadow-md shadow-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500">
              <div className="w-full h-36 flex items-center justify-center flex-col">
                <div className="w-14 h-14 rounded-full bg-blue-100 my-3 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <p className="my-1">
                  <b>Facebook</b>
                </p>
                <p className="text-sm pt-1">From your phone</p>
              </div>
              <div className="w-11/12 mx-auto h-12 flex items-center justify-center border-t border-gray-300 py-3">
                <button className="px-2 py-1 w-full rounded-md">
                  facebook.id
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-slate-50 shadow-md shadow-gray-400 my-4 mx-auto w-11/12">
          <p className="text-center">
            We'll get back to you as soon as possible. Our team is available 8am
            - 6pm on weekdays.
          </p>
        </div>
      </div>

      <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.2787965562105!2d82.12699918398619!3d25.582023172111594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aafb6b1f7ac83%3A0x3ab6eb9b62e29125!2sTICA%20Computer%20Center!5e0!3m2!1sen!2sin!4v1720582499808!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="w-full h-auto relative">
        <div className="w-full contactBanner h-64 sm:h-72 md:h-80 lg:h-[450px]"></div>
        <ContactForm />
      </section>
    </section>
  );
};

export default ContactContainer;
