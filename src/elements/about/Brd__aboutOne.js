import React from "react";
// import './../../assets'
import Image from "next/image";
import { ReactTyped } from "react-typed";
// import Typed from "react-typed";

const AboutOne = () => {
  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/home__aboutus.jpg"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="section-title">
                <h2 className="title">
                  About Us <br />{" "}
                  <ReactTyped
                    className="theme-gradient"
                    strings={["Consulting.", "Finance.", "Agency."]}
                    typeSpeed={80}
                    backSpeed={5}
                    backDelay={1000}
                    loop
                  />
                </h2>
                <p>
                  We are young and dynamic company; we build innovative
                  solutions using emerging technologies. Our expertise team over
                  the years has streed to provide best in market services to our
                  customers. We provide industry leading NFT development
                  services, crypto currency exchange development, launch pad
                  development, DeFi development and extensive crypto marketing
                  services. We strive to develop services which will fit your
                  business.
                </p>

                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="#"><span>More About Us</span></a>
                                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
