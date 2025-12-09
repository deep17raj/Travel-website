import React from "react";
import RightArrow from "../../assets/Testimonial/RightArrow.svg";
import LeftArrow from "../../assets/Testimonial/LeftArrow.svg";
import Face from "../../assets/Testimonial/Face.svg";
import LeftTop from "../../assets/Testimonial/LeftTop.svg";

function TestimonialText() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <h4>
                        <p>TESTIMONIAL</p>
                    </h4>
                    <p>Trust our clients</p>
                </div>
                <div className="flex justify-evenly">
                    <div className="leftArrow">
                        <img src={LeftArrow} alt="" />
                    </div>
                    <div className="box">
                        <div>
                            <img src={Face} alt="" />
                        </div>
                        <div>
                            <h6>Irfan Rahmat</h6>
                            <p>Travel Enthusiast</p>
                        </div>
                        <div className="star">
                            <p></p>
                        </div>
                        <div className="text">
                            <p>
                                I love Travelo, this is the best place to buy ticket and help
                            </p>
                            <p>you find your dream holiday.</p>
                        </div>
                    </div>
                    <div className="rightArrow">
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <img src={LeftTop} alt="" />
            </div>
        </div>
    );
}

export default TestimonialText;
