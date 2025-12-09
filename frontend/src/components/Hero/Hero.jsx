import React from "react";
import compass from "../../assets/compass.svg";
import Pic1 from "../../assets/pic1.svg";
import Pic2 from "../../assets/pic2.svg";
import Pic3 from "../../assets/pic3.svg";
import Pic4 from "../../assets/pic4.svg";
function Hero() {
    return (
        <div className="mt-16 bg-gray-300 ">
            <div className="hero flex max-w-3/4 mx-auto justify-between">
                <div className="left flex flex-col w-[40%] justify-center  gap-6">
                    <div className="leftEl rounded-2xl border-2 border-[#ffffff] bg-[#ffffff]">
                        <div className="flex gap-4 justify-center items-center">
                            <p className="text-[#317312] text-[14px] shadow-lg shadow-[#8C8C8C1A]">
                                Your Most Reliable Travel Partner with Government-Certified
                                Guides
                            </p>
                            {/* <div>
                                <img src={compass} alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="leftEl flex flex-col">
                        <div>
                            <p className="text-[#1C1C1C] font-bold text-[64px]">Travel with</p>
                        </div>
                        <div>
                            <p className="text-[#317312] font-bold text-[64px]">Complete Trust</p>
                        </div>
                    </div>
                    <div className="leftEl">
                        <p className=" text-[16px] font-thin">
                            Experience the UAE with certified, trustworthy guides. Pay
                            directly to us, travel worry free. Your safety and satisfaction
                            are our guarantee.
                        </p>
                    </div>
                    <div className="leftEl bg-[#166EF3] rounded-4xl flex flex-col justify-center items-start w-fit p-4">
                        <button className="text-[#ffffff]">Contact Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[480px]">
                    {/* Pic1: Left 3 rows */}
                    <div className="col-start-1 row-start-1 row-span-3">
                        <img
                            src={Pic1}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Pic3: Right 2 rows */}
                    <div className="col-start-2 row-start-1 row-span-2">
                        <img
                            src={Pic3}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Pic4: Right rows 3–5 */}
                    <div className="col-start-2 row-start-3 row-span-3">
                        <img
                            src={Pic4}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Pic2: Left rows 4–6 */}
                    <div className="col-start-1 row-start-4 row-span-3">
                        <img
                            src={Pic2}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
