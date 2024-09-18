import spinnerImg from "../../assets/icons/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-full h-full flex-center">
      <img src={spinnerImg} alt="Loading..." />
    </div>
  );
};

export default Spinner;