import React from 'react'
import RightArrow from "../../assets/Testimonial/RightArrow.svg";
import LeftArrow from "../../assets/Testimonial/LeftArrow.svg";
import RightDown from "../../assets/Testimonial//RightDown.svg";
import LeftTop from "../../assets/Testimonial/LeftTop.svg";

function TestimonialVideo() {
  return (
    <div>
        <div className='flex flex-col'>
                <div className="firstEl flex">
                    <div>
                        <h4>TESTIMONIAL</h4>
                        <h6>Video Trust</h6>
                    </div>
                    <div className='flex'>
                        <div className="leftArrow">
                            <img src={LeftArrow} alt="" />
                        </div>
                        <div className="rightArrow">
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="boxes flex  bg-[#D9D9D9]">

                </div>
        </div>
    </div>
  )
}

export default TestimonialVideo