import MaterialSidebar from "../../../../../components/admin/Dashboard/instructor portal/materials/MaterialSidebar";
import MaterialMainContainer from "../../../../../components/admin/Dashboard/instructor portal/materials/MaterialMainContainer";

const MaterialContainer = () => {
  return (
    <section
      className="w-full md:w-11/12  md:mb-6 md:mx-auto md:flex items-center justify-normal shadow-lg shadow-gray-600"
      style={{ height: "580px", marginTop: "20px" }}
    >
      <MaterialSidebar />
      <MaterialMainContainer />
    </section>
  );
};

export default MaterialContainer;
