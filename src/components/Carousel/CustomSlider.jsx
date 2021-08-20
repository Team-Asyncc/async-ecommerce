import React from 'react';
import Slider from 'infinite-react-carousel';

const settings = {
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: 40,
  initialSlide: true,
};

const CustomSlider = () => {
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/6fe7489e-8300-46f9-9ae2-6b02d42f65b01629208170398-SportsShoes_Dk.jpg"
            alt="slide-img"
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/d7f67601-9c65-4556-8e8d-cf2417d261fa1629208024245-Dresses_Dk.jpg"
            alt="slide-img"
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/497f8595-8ff5-4f17-a349-e5d9e4d8dbe51629207922898-DK_Kidswear--2-.jpg"
            alt="slide-img"
          ></img>
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/497f8595-8ff5-4f17-a349-e5d9e4d8dbe51629207922898-DK_Kidswear--2-.jpg"
            alt="slide-img"
          ></img>
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/26e60331-07d7-49f5-ae06-b1282fc1b5501629300506439-Desktop-Main-Banner-Revised.gif"
            alt="slide-img"
          ></img>
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/18/26e60331-07d7-49f5-ae06-b1282fc1b5501629300506439-Desktop-Main-Banner-Revised.gif"
            alt="slide-img"
          ></img>
        </div>
      </Slider>
    </>
  );
};

export default CustomSlider;
