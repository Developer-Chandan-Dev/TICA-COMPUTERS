import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import useDashboardLogin from "../../../hooks/admin/auth/useDashboardLogin";

const LoginDashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { dashboardLogin, error } = useDashboardLogin();

  const handleRoleSelectionChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dashboardLogin({ username, password, role });
    setUsername("");
    setPassword("");
    setRole("");
  };

  // useGSAP(() => {
  //   gsap.to(".error", {
  //     opacity: 1,
  //     x: 0,
  //   });
  // }, []);

  document.title = "TICA Computers - Dashboard Login";

  return (
    <>
      <section className="w-screen h-screen bg-white flex items-center justify-center flex-col text-sm">
        <div
          className={`w-80 rounded my-2 px-3 py-2 bg-red-50 text-center error ${
            !error ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-red-500">
            {!error ? "Welcome in Dashboard" : error}
          </span>
        </div>
        <div className="w-80 h-96 p-2 rounded bg-white shadow-lg shadow-slate-400">
          <h1 className="py-2 text-center text-lg mt-4">Login Dashboard </h1>
          <form onSubmit={handleSubmit} className="my-8">
            <div>
              <div className="px-1 w-64 mx-auto h-10 rounded bg-gray-100 mb-4 shadow-sm shadow-slate-400 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person ml-2 mr-1 opacity-60"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <input
                  type="text"
                  className="ml-2 w-48 bg-transparent outline-none border-none text-sm"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="px-1 w-64 mx-auto h-10 rounded bg-gray-100 mb-4 shadow-sm shadow-slate-400 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="14"
                  height="14"
                  className=" ml-2 mr-1 opacity-60"
                >
                  <path d="M384 223.1L368 224V144c0-79.41-64.59-144-144-144S80 64.59 80 144V224L64 223.1c-35.35 0-64 28.65-64 64v160c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-160C448 252.7 419.3 223.1 384 223.1zM144 144C144 99.88 179.9 64 224 64s80 35.88 80 80V224h-160V144z" />
                </svg>
                <input
                  type="password"
                  className="ml-2 w-48 bg-transparent outline-none border-none text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="px-1 w-64 mx-auto h-10 rounded bg-gray-100 mb-4 shadow-sm shadow-slate-400 flex items-center justify-start">
                <select
                  name="role"
                  id="role"
                  className="w-fill-available h-8 outline-none border-none bg-transparent pl-2 text-sm"
                  value={role}
                  onChange={handleRoleSelectionChange}
                >
                  <option value="">Please choose</option>
                  <option value="staff">Staff</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex items-center py-4">
                <button className="mx-auto px-3 py-2 w-36 bg-blue-500 transition-all hover:bg-blue-600 text-white rounded-full">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginDashboard;
