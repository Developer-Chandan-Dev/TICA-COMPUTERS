import emptyBox from "../../assets/images/empty-box.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
const EmptyBox = ({ boxWidth = "200px", boxHeight = "230px" }) => {
  console.log(boxWidth, boxHeight);
  return (
    <div
      className={`!w-[${boxWidth}] mx-auto mt-5 h-[${boxHeight}] flex-center`}
    >
      <img src={emptyBox} width={200} alt="empty box" />
    </div>
  );
};

export default EmptyBox;
