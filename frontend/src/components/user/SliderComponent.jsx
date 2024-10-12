/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/SliderComponent.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      title: "Learning that gets you",
      description:
        "Skills for your present (and your future). Get started with us.",
    },
    {
      title: "Slide 2 Title",
      description: "Slide 2 Description Lorem ipsum dolor sit amet.",
    },
    {
      title: "Slide 3 Title",
      description: "Slide 3 Description Lorem ipsum dolor sit amet.",
    },
    {
      title: "Slide 4 Title",
      description: "Slide 4 Description Lorem ipsum dolor sit amet.",
    },
  ];
  // console.log(slides[0].image);

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className={`slide w-full slide${index}`}>
          {/* <div className="slide-content">
            <div className="slide-info">
              <h2 className="text-2xl md:text-3xl lg:text-4xl py-2">
                <b>{slide.title}</b>
              </h2>
              <p className=" md:text-base text-lg">{slide.description}</p>
            </div>
          </div> */}
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

export default SliderComponent;
