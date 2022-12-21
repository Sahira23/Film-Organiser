import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getfilms } from "../../state/actions/actions";
import "../Carousel/Container.css"

const Carousel = () => {
  const data = useSelector((state) => state.filmData.filmdata);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getfilms());
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((item) => {
            return (
              <div className="card d-flex" key={item.imdbID}>
                <div className="card-image">
                  <img src={item.Poster} alt="image" />
                </div>
                <div className="details p-2 mt-2">
                  <p>{item.Title}</p>
                  <p>Release Year : {item.Year}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}
export default Carousel 