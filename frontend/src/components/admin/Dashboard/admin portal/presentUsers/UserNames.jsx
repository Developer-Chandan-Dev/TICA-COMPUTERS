import "./style.css";
import { indianDate } from "../../indianDate";
import PropTypes from "prop-types";
import useShowImageInSweetAlert from "../../../../../hooks/utils/useShowImageInSweetAlert";
import userIcon from "../../../../../assets/images/user.png";

const UserNames = ({
  id,
  SN,
  fullname,
  username,
  email,
  blocked,
  createdAt,
  onBlocked,
  onDelete,
  data,
  setData,
  profilePic,
}) => {
  const { showAlertWithImage } = useShowImageInSweetAlert();
  console.log(data);

  return (
    <>
      <tr
        className={`w-full h-14 cursor-pointer hover:bg-blue-50 ${
          blocked === true ? "opacity-40" : ""
        }`}
      >
        <td className="pl-8 ">{SN}</td>
        <td className="px-4">{fullname}</td>
        <td className="px-4">{username}</td>
        <td className="px-4">{email}</td>
        <td className="px-4"> {indianDate(createdAt)} </td>
        <td className="h-7 px-4 text-gray-500 ">
          <div className="flex items-center justify-center h-7 gap-x-4">
            <button
              className="px-3 py-[6px] rounded-md border"
              onClick={() =>
                showAlertWithImage(profilePic ? profilePic : userIcon, username)
              }
            >
              Image
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              onClick={() =>
                onDelete(
                  id,
                  "/api/v1/admin/present-users",
                  setData,
                  data,
                  "User"
                )
              }
              className="bi bi-trash3 cursor-pointer opacity-45 hover:opacity-100"
              viewBox="0 0 16 16"
              title="Delete"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
            <button
              className={`w-6 h-6 rounded-full transition-all block-user ${
                blocked ? "active-block-user" : ""
              } flex-center `}
              title={`${blocked ? "Unblock user" : "Block User"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="16"
                onClick={() => onBlocked(id, blocked)}
                height="16"
                className="cursor-pointer opacity-45 hover:opacity-100"
                title="Block"
                fill={`${blocked === true ? "white" : "black"}`}
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserNames;

UserNames.propTypes = {
  id: PropTypes.string.isRequired,
  SN: PropTypes.number.isRequired,
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  blocked: PropTypes.bool,
  onBlocked: PropTypes.func,
  onDelete: PropTypes.func,
  data: PropTypes.array,
  setData: PropTypes.func,
  profilePic: PropTypes.string,
};
