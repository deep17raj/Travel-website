import React from "react";
import Shield from "../../assets/TT/shield.svg";
import Tele from "../../assets/TT/telephone (1) 1.svg";

function TrustTravel() {
    return (
        <div className="px-12">
            <div className="tt flex flex-col gap-6 bg-[#60F61954] mx-10 rounded-4xl my-4 justify-center items-center py-10">
                <div className="ttEl flex flex-col justify-center items-center">
                    <img src={Shield} alt="" />
                    <p className="text-[#000000] text-[30px] font-bold">The TrustTravel Promise</p>
                </div>
                <div className="ttEl flex flex-col items-center justify-center">
                    <p className="text-[#000000] text-[20px] font-semibold">
                        If any guide fails to meet our standards or behaves inappropriately,
                        report it immediately. We
                    </p>
                    <p className="text-[#000000] text-[20px] font-semibold"> guarantee a full investigation within 24
                        hours and complete refund if warranted.</p>
                </div>
                <div className="ttEl flex flex-col items-center justify-center rounded-full bg-[#166EF3] my-3 px-8 py-4">
                    <button className="flex rounded-2xl gap-1">
                        <img className="h-6 w-6" src={Tele} alt="" />
                        <p className="text-[#FFFFFF]">Help Line No +91 94890809</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrustTravel;
