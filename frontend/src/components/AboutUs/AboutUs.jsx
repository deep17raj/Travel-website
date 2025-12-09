import React from 'react'
import Facebook from "../../assets/AboutUs/Facebook.svg"
import Twitter from "../../assets/AboutUs/Twitter.svg"
import Insta from "../../assets/AboutUs/Instagram.svg"

function AboutUs() {
  return (
    <div>
        <div className="flex flex-col">
            <div className="flex justify-evenly">
                <div className="left flex flex-col">
                  <div className="logo"></div>
                  <div className="desc max-w-60">
                    <p>Travelo is Southeast Asia’s travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.</p>
                  </div>
                </div>
                <div className="right flex flex-col">
                  <div>
                    <h4>About</h4>
                  </div>
                  <div className="menu"><p>Explore</p></div>
                  <div className="menu"><p>Contact Us</p></div>
                  <div className="menu"><p>About Us</p></div>
                  <div className="menu"><p>Carreer</p></div>
                </div>
            </div>
            <div className="footer bg-[#F3F3F3] flex">
              <div className="el"><img src={Facebook} alt="" /></div>
              <div className="el"><img src={Twitter} alt="" /></div>
              <div className="el"><img src={Insta} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs