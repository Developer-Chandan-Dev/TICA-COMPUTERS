import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex items-center justify-center flex-col w-full pb-24 sm:pb-5 text-white"
      style={{ backgroundColor: "#104d6b" }}
    >
      <div className="flex justify-between flex-wrap w-4/5 mt-10 pb-2">
        <div className="p-1">
          <h2 className="pb-4 text-sm">About</h2>
          <p className=" text-xs w-36">
            We have tested a number or register fix and clean utilities and
            present out top 3 list on our site for your convenience hope you
            like it.
          </p>
        </div>
        <div className="p-1">
          <h2 className="text-sm pb-4">Links</h2>
          <ul className="pb-2">
            <li>
              <Link to="/" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className=""
                  width="12"
                  height="12"
                  fill="white"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>{" "}
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/courses" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="white"
                  className="bi bi-book-half mx-auto sm:mx-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
                <span className="ml-3">Courses</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/students" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="12"
                  height="12"
                  fill="white"
                  className="bi bi-book-half"
                >
                  <path d="M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z" />
                </svg>
                <span className="ml-3">Students</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/about" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="12"
                  height="12"
                  fill="white"
                  className="bi bi-book-half"
                >
                  <path d="M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z" />
                </svg>
                <span className="ml-3">About</span>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/contact" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="white"
                  className="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
                <span className="ml-3">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-1">
          <h2 className=" pb-4 text-sm">Services</h2>
          <ul className="pb-2">
            <li className="mt-2 text-xs flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="white"
                className="bi bi-book-half"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
              <span className="ml-3">Computer Courses</span>
            </li>
            <li className="mt-2">
              <Link to="/about" className=" text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="white"
                  className="bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                <span className="ml-3">Certified Courses from SGCSM</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-1">
          <h2 className="text-sm pb-4">Have a Question?</h2>
          <ul className="pb-2">
            <li className="text-xs flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="white"
                viewBox="0 0 384 512"
              >
                <path d="M192 0C85.97 0 0 85.97 0 192c0 77.41 26.97 99.03 172.3 309.7c9.531 13.77 29.91 13.77 39.44 0C357 291 384 269.4 384 192C384 85.97 298 0 192 0zM192 271.1c-44.13 0-80-35.88-80-80S147.9 111.1 192 111.1s80 35.88 80 80S236.1 271.1 192 271.1z" />
              </svg>
              <span className="ml-3">
                Phulpur, Prayagraj, Uttar Pradesh, India
              </span>
            </li>
            <li className="text-xs mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="white"
                className="bi bi-telephone-inbound"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <span className="ml-3">+91 12345647890</span>
            </li>
            <li className="text-xs mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="white"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <span className="ml-3">example@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto border-t border-slate-400">
        <div className="w-4/5 mx-auto mt-3 flex justify-between flex-wrap">
          <ul className="flex items-center flex-wrap pb-2">
            <li className="text-sm mr-4 mb-2">&#169; Computers 2024 </li>
            <li className="text-sm mr-4 mb-2">Terms</li>
            <li className="text-sm mr-4 mb-2">Policy</li>
          </ul>
          <div>
            <span className="text-sm">Hello everyone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
