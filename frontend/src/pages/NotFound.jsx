import { Navbar } from "../components/user";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[500px] flex-center">
        <div className="text-slate-600 ">
          <h1 className="text-2xl font-semibold py-3">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
