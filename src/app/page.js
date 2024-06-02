"use client"
import AboutOne from "@/elements/about/Brd__aboutOne";
import Image from "next/image";
import BrdHeader from "./common/BrdHeader"
// import './../assets/scss/'
import './../assets/scss/style.css';
import Separator from "@/elements/separator/Separator";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";
import ServiceFive from "@/elements/service/Brd__service";
import { ReactTyped } from "react-typed";
import CalltoActionFive from "@/elements/calltoaction/Brd__callToAction";
import TeamTwo from "@/elements/team/TeamTwo";
import Blury from "./common/Blury";
import TestimonialThree from "@/elements/testimonials/TestimonialThree";
import Copyright from "./common/footer/Brd__Footer";
import TelegramFloatingBtn from "@/components/TelegramFloatingBtn/TelegramFloatingBtn";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="page-wrapper">
    <BrdHeader btnStyle="round" HeaderSTyle="header-not-transparent" />
    {/* Start Slider Area  */}
    <div className="slider-area slider-style-1 bg-transparent height-850">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span className="subtitle">Button For Change</span>
              <h1 className="title theme-gradient display-two">
                Button R Digitech <br />{" "}
                <ReactTyped
                  strings={["Consulting.", "Finance.", "Agency."]}
                  typeSpeed={80}
                  backSpeed={5}
                  backDelay={1000}
                  loop
                />
                {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} /> */}
              </h1>
              <p className="description">
                We are young and dynamic company; we build innovative
                solutions using emerging technologies
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-medium btn-border round btn-icon "
                  href="/contact"
                >
                  Contact Us{" "}
                  <i className="icon">
                    <FiArrowRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Slider Area  */}
    <Separator />
    {/* Start About Area  */}
    <div id="about">
      <AboutOne />
    </div>
    {/* End About Area  */}
    <Separator />
      {/* </div> */}
        {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provided for you."
                  description="We deal in various branches, of current technologies. <br />Such as NFT, crypto, Launchpad, DeFi and on demand apps development."
                />
              </div>
            </div>
            <ServiceFive serviceStyle="gallery-style" textAlign="text-left" />
          </div>
        </div>
        {/* End Service Area  */}
        {/* Start Call To Action Area  */}
        <div className="rwt-callto-action-area" style={{ marginBottom: "5%" }}>
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Call To Action Area  */}
        {/* Start Team Area  */}
        <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Company Experts."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div>
        {/* End Team Area  */}
        <Separator />
        {/* Start Mission Area   */}
        {/* <Mission />                     */}
        {/* Start Mission Area  */}
        <Separator />
        {/* Start Testimonial Area  */}
        <div className="rwt-testimonial-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Client Feedback"
                  title="Our Awesome Client."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <TestimonialThree teamStyle="" />
          </div>
        </div>
        <Blury />
        {/* End Testimonial Area */}
        <Copyright />
        <TelegramFloatingBtn />
        <WhatsApp />

 </main>
  );
}
