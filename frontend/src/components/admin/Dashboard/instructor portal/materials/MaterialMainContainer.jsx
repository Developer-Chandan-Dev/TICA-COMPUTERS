import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {
  AddMaterial,
  AllMaterials,
  ShowMaterials,
  UpdateMaterial,
  AddMaterialHeading,
  MaterialHeadings,
} from "./index";

const MaterialMainContainer = () => {
  const location = useLocation();
  const { materialHeadingId } = useParams();

  return (
    <>
      <div
        className="md:w-fill-available md:h-full"
        style={{ background: "#F7F8F8" }}
      >
        <nav className="w-full h-16 flex items-center justify-center">
          {materialHeadingId ? (
            <ul className={`flex items-center gap-x-5 `}>
              <Link
                to={`/dashboard/instructor/features/materials/${materialHeadingId}/add`}
              >
                <li
                  className={`material-sm notes-options ${
                    location.pathname.endsWith("/add/") ||
                    location.pathname.endsWith("/add")
                      ? "acitve-notes-options"
                      : ""
                  }`}
                >
                  Create
                </li>
              </Link>
              <Link
                to={`/dashboard/instructor/features/materials/${materialHeadingId}/show`}
              >
                <li
                  className={`material-sm notes-options ${
                    location.pathname.endsWith("/show/") ||
                    location.pathname.endsWith("/show")
                      ? "acitve-notes-options"
                      : ""
                  }`}
                >
                  Show
                </li>
              </Link>
            </ul>
          ) : (
            <h2 className="text-xl font-semibold text-gray-600">
              Material Container
            </h2>
          )}
        </nav>
        <div
          className="w-11/12 px-6 py-5 mb-5 mx-auto bg-white overflow-y-auto"
          style={{ height: "480px" }}
        >
          <Outlet>
            <AllMaterials />
            <AddMaterial />
            <ShowMaterials />
            <MaterialHeadings />
            <UpdateMaterial />
          </Outlet>
        </div>
      </div>
    </>
  );
};

export default MaterialMainContainer;
