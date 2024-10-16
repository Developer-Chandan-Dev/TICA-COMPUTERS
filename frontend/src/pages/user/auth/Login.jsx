import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/user/auth/useLogin";
import { useAuthContext } from "../../../context/AuthContext";
import SmallSpinner from "../../../components/utility/SmallSpinner";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { authUser } = useAuthContext();
  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(inputs);
    setInputs({ username: "", password: "" });
  };

  document.title = "TICA Computers - Login";
  return (
    <>
      <section className="w-screen h-screen bg-red-50 flex items-center justify-center">
        <div className="w-full sm:w-auto flex items-center justify-center relative">
          <div className="signInBox w-80 h-96 bg-white shadow-xl shadow-gray-500 rounded-xl relative md:absolute right-0 z-10 p-2 flex items-start justify-center">
            <div className="p-1">
              <h1 className="py-1 text-blue-500 text-center text-3xl font-bold mt-5 mb-0 drop-shadow-md">
                Sign in
              </h1>
              <div className="flex items-center justify-center flex-col mt-18">
                <div className="w-full flex items-center mx-auto justify-center gap-2 my-2">
                  <div className="w-9 h-9 rounded-full shadow-md shadow-slate-400 flex justify-center items-center text-gray-600 font-bold cursor-pointer bg-slate-50">
                    <span>G</span>
                  </div>
                  <div className="w-9 h-9 rounded-full shadow-md shadow-slate-400 flex justify-center items-center text-gray-600 font-bold cursor-pointer bg-slate-50">
                    <span>F</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-3">
                  or use your email for registration
                </p>
                {/* Sign Form start */}
                <form className="px-1 py-3 mt-3" onSubmit={handleSubmit}>
                  <div
                    className="w-52 px-1 sm:w-60 flex items-center justify-start rounded-md"
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
                      placeholder="Username"
                      name="username"
                      value={inputs.username}
                      onChange={(e) =>
                        setInputs({ ...inputs, username: e.target.value })
                      }
                      required
                      className="border-none text-sm outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>
                  <div
                    className="mt-3 px-1 w-52 sm:w-60 flex items-center justify-start rounded-md"
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
                      placeholder="Password"
                      name="password"
                      value={inputs.password}
                      onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                      }
                      required
                      className="border-none text-sm outline-none bg-transparent w-fill-available h-7"
                    />
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <button
                      className="text-sm w-36 sm:w-44 rounded-full mt-6 font-semibold text-white shadow-md shadow-gray-400 transition-all hover:shadow-lg hover:shadow-gray-400 flex-center"
                      style={{
                        background: "linear-gradient(45deg, #9d79c2, #d489a7)",
                        padding: "10px 0px",
                      }}
                    >
                      {loading ? <SmallSpinner /> : "SIGN IN"}
                    </button>
                    <Link
                      to="/signup"
                      className="mt-4 lg:hidden text-sm hover:underline text-blue-400"
                    >
                      I have not account?
                    </Link>
                  </div>
                </form>

                {/* Sign Form end */}
              </div>
            </div>
          </div>
          <div
            className="hidden md:flex w-96 rounded-xl shadow-xl shadow-gray-500 absolute -left-4 items-center justify-center"
            style={{ height: "450px" }}
          >
            <div className="w-72 h-80 flex items-center justify-center flex-col text-center">
              <h1 className="font-bold text-3xl text-gray-700 drop-shadow">
                Welcome Back!
              </h1>
              <p className="text-gray-500 px-4 font-semibold my-2 text-sm">
                Enter personal details to your employee account
              </p>
              <Link to="/signup">
                <button
                  className="w-52 mt-10 text-sm font-bold text-white rounded-full "
                  style={{ height: "42px", background: "#b09ba2b0" }}
                >
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
