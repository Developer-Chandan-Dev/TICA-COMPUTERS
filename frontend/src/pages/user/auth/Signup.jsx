import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../../hooks/user/auth/useSignUp";
import SmallSpinner from "../../../components/utility/SmallSpinner";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
    setInputs({
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  document.title = "TICA Computers - Signup";

  return (
    <>
      <section className=" w-screen h-screen bg-red-50 flex items-center justify-center">
        <div className="w-full sm:w-auto flex items-center justify-center relative">
          <div className="hidden md:flex w-80 h-96 shadow-xl shadow-gray-500 rounded-xl relative md:absolute right-0 p-2 items-center justify-center z-10 bg-red-50">
            <div className="w-72 h-80 flex items-center justify-center flex-col text-center">
              <h1 className="font-bold text-2xl text-gray-700 drop-shadow">
                Your Welcome!
              </h1>
              <p className="text-gray-600 px-4 font-semibold mt-2 mb-0 text-sm">
                Create New account for yourself and explore our websites.
              </p>
              <Link to="/login">
                <button
                  className="w-52 mt-10 text-sm font-bold text-white rounded-full "
                  style={{ height: "42px", background: "#b09ba2b0" }}
                >
                  SIGN IN
                </button>
              </Link>
            </div>
          </div>

          <div className="signUpBox flex w-96 rounded-xl shadow-xl shadow-gray-500 relative md:absolute left-0 lg:-left-4 items-center justify-center bg-white">
            <div className="p-1">
              <h1 className="py-1 text-blue-500 text-center text-3xl font-bold mt-4 mb-0 drop-shadow-md">
                Sign Up
              </h1>
              <p className="text-gray-500 px-12 text-sm font-semibold my-2 text-center">
                To keep connected with us please login with your personal info.
              </p>
              <div className="flex items-center justify-center flex-col ">
                {/* Sign Form start */}
                <form
                  className="px-1 py-3 mt-1 text-sm"
                  onSubmit={handleSubmit}
                >
                  <div
                    className="px-1 w-52 sm:w-60 flex items-center justify-start rounded-md"
                    style={{ background: "#f1f1f1", padding: "5px 4px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-person mx-1 mr-2 opacity-60"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <input
                      type="text"
                      name="Fullname"
                      placeholder="Fullname"
                      required
                      value={inputs.fullname}
                      onChange={(e) =>
                        setInputs({ ...inputs, fullname: e.target.value })
                      }
                      className="border-none outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>
                  <div
                    className="mt-2 px-1 w-52 sm:w-60 flex items-center justify-start rounded-md"
                    style={{ background: "#f1f1f1", padding: "5px 4px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-person mx-2 opacity-60"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <input
                      type="text"
                      name="Username"
                      placeholder="Username"
                      required
                      value={inputs.username}
                      onChange={(e) =>
                        setInputs({ ...inputs, username: e.target.value })
                      }
                      className="border-none outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>
                  <div
                    className="px-1 w-52 sm:w-60 flex items-center justify-start rounded-md mt-2"
                    style={{ background: "#f1f1f1", padding: "5px 4px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope opacity-60 mx-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={inputs.email}
                      onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                      }
                      className="border-none outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>
                  <div
                    className="mt-2 px-1 w-52 sm:w-60 flex items-center justify-start rounded-md"
                    style={{ background: "#f1f1f1", padding: "5px 4px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      className="mx-2 opacity-60"
                    >
                      <path d="M384 223.1L368 224V144c0-79.41-64.59-144-144-144S80 64.59 80 144V224L64 223.1c-35.35 0-64 28.65-64 64v160c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-160C448 252.7 419.3 223.1 384 223.1zM144 144C144 99.88 179.9 64 224 64s80 35.88 80 80V224h-160V144z" />
                    </svg>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      required
                      value={inputs.password}
                      onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                      }
                      className="border-none outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>
                  <div
                    className="mt-2 px-1 w-52 sm:w-60 flex items-center justify-start rounded-md"
                    style={{ background: "#f1f1f1", padding: "5px 4px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      className="mx-2 opacity-60"
                    >
                      <path d="M384 223.1L368 224V144c0-79.41-64.59-144-144-144S80 64.59 80 144V224L64 223.1c-35.35 0-64 28.65-64 64v160c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-160C448 252.7 419.3 223.1 384 223.1zM144 144C144 99.88 179.9 64 224 64s80 35.88 80 80V224h-160V144z" />
                    </svg>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Confirm Password"
                      value={inputs.confirmPassword}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="border-none outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <button
                      className="text-sm w-36 sm:w-44 rounded-full mt-6 font-semibold text-white shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400"
                      style={{
                        background: "linear-gradient(45deg, #9d79c2, #d489a7)",
                        padding: "10px 0px",
                      }}
                    >
                      {loading ? <SmallSpinner/> : "SIGN UP"}
                    </button>
                    <Link
                      to="/login"
                      className="mt-4 lg:hidden text-sm hover:underline text-blue-400"
                    >
                      I have already an account?
                    </Link>
                  </div>
                </form>

                {/* Sign Form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
