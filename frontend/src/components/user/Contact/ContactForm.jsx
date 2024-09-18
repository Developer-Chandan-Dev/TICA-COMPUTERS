import { useEffect, useState } from "react";
import useContactForm from "../../../hooks/user/contact/useContactForm";
import { useAuthContext } from "../../../context/AuthContext";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    message: "",
    userPic: "",
  });

  const { authUser } = useAuthContext();

  useEffect(() => {
    authUser && authUser.profilePic
      ? setInputs({ ...inputs, userPic: authUser.profilePic })
      : "";
  }, []);

  const { contactform, loading } = useContactForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await contactform(inputs);
    setInputs({
      name: "",
      email: "",
      phoneno: "",
      address: "",
      message: "",
      userPic: "",
    });
  };
  return (
    <section className="w-11/12 sm:w-auto py-10 px-0 sm:px-3 mx-auto h-auto relative bottom-40">
      <div className="w-full py-4 mx-auto sm:w-[600px] bg-blue-50 drop-shadow font-[Calibri] rounded-md shadow-lg shadow-gray-200">
        <h1 className="ml-4 text-2xl px-2 text-gray-500">Contact Us</h1>
        <form
          className="w-full py-5 px-4 text-[15px]"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* <form className="w-full py-5 px-4 text-[15px]" method="POST" action="https://formspree.io/f/myzgjqvv"> */}
          <div className="w-full sm:flex items-center mx-auto gap-2 justify-between sm:mb-5 md:mx-0 md:ml-[10px] sm:w-[550px]">
            <div className="w-full h-auto py-2 rounded px-3 bg-white sm:w-64 md:w-72 md:mx-0 drop-shadow-sm">
              <input
                type="text"
                required
                name="username"
                autoComplete="off"
                className="w-fill-available outline-none border-none bg-transparent"
                placeholder="Enter your name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
            <div className="w-full h-auto py-2 rounded mt-5 bg-white sm:w-64 sm:mt-0 px-3 md:w-72 md:mx-0 md:ml-5 drop-shadow-sm">
              <input
                type="email"
                name="Email"
                className="w-fill-available outline-none border-none bg-transparent"
                placeholder="Enter email address"
                autoComplete="off"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full sm:flex items-center mx-auto gap-2 justify-between sm:mb-5 md:mx-0 md:ml-[10px] sm:w-[550px] mt-5">
            <div className="w-full h-auto py-2 rounded px-3 bg-white sm:w-64 md:w-72 md:mx-0 drop-shadow-sm">
              <input
                type="text"
                required
                name="Phone no"
                minLength={10}
                maxLength={10}
                autoComplete="off"
                className="w-fill-available outline-none border-none bg-transparent"
                placeholder="Enter your phone no"
                value={inputs.phoneno}
                onChange={(e) =>
                  setInputs({ ...inputs, phoneno: e.target.value })
                }
              />
            </div>
            <div className="w-full h-auto py-2 rounded mt-5 bg-white sm:w-64 sm:mt-0 px-3 md:w-72 md:mx-0 md:ml-5 drop-shadow-sm">
              <input
                type="text"
                className="w-fill-available outline-none border-none bg-transparent"
                placeholder="Enter your address..."
                name="Address"
                autoComplete="off"
                value={inputs.address}
                onChange={(e) =>
                  setInputs({ ...inputs, address: e.target.value })
                }
              />
            </div>
          </div>

          <div className="px-3 py-2 mx-auto mt-5 rounded bg-white md:mx-0 md:ml-[10px] w-full sm:w-[550px] drop-shadow-sm">
            <textarea
              id="message"
              required
              name="Message"
              autoComplete="off"
              placeholder="Enter your message here..."
              className="w-fill-available h-36 sm:h-28 outline-none border-none resize-none bg-transparent"
              value={inputs.message}
              onChange={(e) =>
                setInputs({ ...inputs, message: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn text-white font-bold rounded ml-0  sm:ml-[10px] mt-5 drop-shadow transition-all hover:drop-shadow-lg"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
