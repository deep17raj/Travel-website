import React from "react";
import Location from "../../assets/KF/Location.svg";
import Calender from "../../assets/KF/Calender.svg";
import Discount from "../../assets/KF/Discount.svg";
import Pic1 from "../../assets/KF/Pic1.svg";
import Pic2 from "../../assets/KF/Pic2.svg";

function KeyFeature() {
    return (
        <div>
            <div className="feat flex items-center mx-20 gap-40">
                <div className="left border-2 ">
                    <div className="el">
                        <h4 className="text-[#F411CF] h4font">KEY FEATURES</h4>
                    </div>
                    <div className="el">
                        <h5 className="text-[#1C1C1C] heading-font">We offer best services</h5>
                    </div>
                    <div className="el flex flex-col">
                        <span class="span-key-features">
                        <p className="text-[#A8A8A8]">
                            Hay! Travelo there to help you find your dream holiday.
                        </p>
                        <p className="text-[#A8A8A8]">
                            Easy you just find where you want to go and
                        </p>
                        </span>
                    </div>
                    <div className="el">
                        <div className="f flex">
                            <div className="fel">
                                <img src={Location} alt="" />
                            </div>
                            <div className="fel">
                                <p className="text-[#1C1C1C]">Select many location</p>
                                <p className="text-[#A8A8A8]">Chooce your favorite location</p>
                            </div>
                        </div>
                        <div className="f flex">
                            <div className="fel">
                                <img src={Calender} alt="" />
                            </div>
                            <div className="fel">
                                <p className="text-[#1C1C1C]">Schedule your trip</p>
                                <p className="text-[#A8A8A8]">Set the date you want</p>
                            </div>
                        </div>
                        <div className="f flex gap-4 items-center">
                            <div className="fel">
                                <img src={Discount} alt="" />
                            </div>
                            <div className="fel">
                                <p className="text-[#1C1C1C]">Big discount</p>
                                <p className="text-[#A8A8A8]">
                                    Get discount for every services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right ">
                    <div className="flex">
                        <div>
                            <img src={Pic1} alt="" />
                        </div>
                        <div>
                            <img src={Pic2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyFeature;
