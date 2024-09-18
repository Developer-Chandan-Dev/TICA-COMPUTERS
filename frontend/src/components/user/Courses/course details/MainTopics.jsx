import PropTypes from "prop-types";

const MainTopics = ({ mainTopics }) => {
  return (
    <div className="w-full sm:w-11/12 mx-auto h-auto px-3 py-4 md:p-4 text-gray-600 text-sm">
      <h1 className="ml-5 md:ml-0 sm:text-2xl font-semibold py-6">
        Main Topics
      </h1>
      <ul className="py-1 flex items-center flex-wrap gap-x-2 gap-y-3">
        {mainTopics !== null
          ? mainTopics.map((item, index) => (
              <li className="px-4 py-[6px] rounded-md border font-normal text-slate-600" key={index}>
                {item}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default MainTopics;

MainTopics.propTypes = {
  mainTopics: PropTypes.array,
};
