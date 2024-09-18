import { Outlet } from "react-router-dom";
import {
  PresentUsersContainer,
  UserDetails,
  UsersChart,
} from "../../../../../components/admin/Dashboard/admin portal";

const PresentUsers = () => {
  return (
    <>
      <section className="w-full h-auto">
        <div
          className="w-full shadow-xl rounded shadow-slate-300"
          style={{ background: "#fefdfe" }}
        >
          <Outlet>
            <PresentUsersContainer />
            <UserDetails />
            <UsersChart />
          </Outlet>
        </div>
      </section>
    </>
  );
};

export default PresentUsers;
