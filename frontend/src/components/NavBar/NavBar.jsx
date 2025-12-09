import React from "react";
import TG from "../../assets/TourGuide.svg"

function NavBar() {
    return (
        <div>
            <div className="nav flex justify-around mt-4">
                <div className="opt flex gap-4 p-3">
                    <div className="logo">
                        <button>
                            <img src="" alt="" />
                        </button>
                    </div>
                    <div className="logo">
                        <button>Travelo</button>
                    </div>
                </div>
                <div className="opt flex gap-6 p-3">
                    <div className="menu">
                        <p className="text-[#1C1C1C] text-[16px] font-semibold">Home</p>
                    </div>
                    <div className="menu">
                        <p className="text-[#1C1C1C] text-[16px] font-semibold">About us</p>
                    </div>
                    <div className="menu">
                        <p className="text-[#1C1C1C] text-[16px] font-semibold">Discover</p>
                    </div>
                    <div className="menu">
                        <p className="text-[#1C1C1C] text-[16px] font-semibold">Support</p>
                    </div>
                </div>
                <div className="opt">
                    <div className="">
                        <button className="bg-[#166EF3] justify-center items-center rounded-4xl p-3 flex gap-1">
                            <div>
                                <img src={TG} alt="" />
                            </div>
                            <p className="text-[#FFFFFF]">Become Guide</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
