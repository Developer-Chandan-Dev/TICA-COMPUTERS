import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useEnquiryForm from "../../../hooks/user/Home/useEnquiryForm";
import { useAuthContext } from "../../../context/AuthContext";
import SmallSpinner from "../../utility/SmallSpinner";

const EnquiryForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
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

  const { enquiryForm, loading } = useEnquiryForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await enquiryForm(inputs);
    setInputs({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      userPic: "",
    });
  };

  useGSAP(() => {
    gsap.to(".formSection", {
      x: 0,
      opacity: 1,
      delay: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className="formSection w-96 h-auto flex justify-center items-center z-1 translate-x-20 opacity-0 text-sm">
        <form
          onSubmit={handleSubmit}
          className="py-5 px-6 w-80"
          style={{
            background: "#0d4561",
            height: "410px",
          }}
        >
          <h2 className="my-4 text-white text-xl">
            Enquiry <span>Form</span>
          </h2>
          <div className="w-full h-10 bg-white my-2 px-3 flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter Name"
              required
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className=" w-fill-available outline-none border-none"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-x-2">
            <div
              className="h-10 bg-white my-2 px-3 flex justify-center items-center enquiryInputBox"
              style={{ width: "125px" }}
            >
              <input
                type="email"
                placeholder="Email"
                required
                name="Email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className=" w-fill-available outline-none border-none"
              />
            </div>
            <div
              className="h-10 bg-white my-2 px-3 flex justify-center items-center  enquiryInputBox"
              style={{ width: "125px" }}
            >
              <input
                type="text"
                placeholder="Phone"
                required
                minLength="10"
                maxLength="10"
                name="Phone"
                value={inputs.phone}
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
                className=" w-fill-available outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="h-10 bg-white my-2 px-3 flex justify-center items-center enquiryInputBox"
              style={{ width: "125px" }}
            >
              <input
                type="text"
                placeholder="Address"
                required
                name="address"
                value={inputs.address}
                onChange={(e) =>
                  setInputs({ ...inputs, address: e.target.value })
                }
                className=" w-fill-available outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full p-2 bg-white my-2 px-3 flex justify-center items-center">
              <textarea
                className="resize-none w-fill-available h-14 outline-none border-none"
                name="message"
                id="message"
                placeholder="Enter message"
                required
                value={inputs.message}
                onChange={(e) =>
                  setInputs({ ...inputs, message: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="w-full mt-4">
            <button className="w-full px-2 py-[10px] bg-red-400 transition-all hover:bg-red-500 text-white rounded-md">
              {loading ? <SmallSpinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
