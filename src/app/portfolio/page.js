// import React from "react";
'use client'
import Head from "next/head";
// import SEO from "../common/SEO";

import BrdHeader from "../common/BrdHeader";

import Copyright from "../common/footer/Brd__Footer";
// import ScrollTop from "../common/footer/ScrollTop";


import PortfolioOne from "@/elements/portfolio2/page";


// import BrandThree from "../elements/brand/BrandThree";

import Separator from "@/elements/separator/Separator";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";

const CreativePortfolio = () => {
  return (
    <>
      <Head>
                <title>Creative Portfolio || Button R Digitech</title>
            </Head>
      <main className="page-wrapper">
        <BrdHeader
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />

        {/* Start Slider area  */}
        <div className="slider-area slider-style-7 height-750">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <h4 className="subtitle rn-sub-badge">
                    <span className="theme-gradient">Button for change</span>
                  </h4>
                  <h1 className="title">Button R Digitech</h1>
                  {/* <div className="button-group mt--40 mt_sm--20">
                                        <a className="btn-default btn-icon round btn-large" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider area  */}

        <Separator />

        <div className="rwt-portfolio-area rn-section-gapTop">
          <div className="container-fluid plr--60 plr_md--15 plr_sm--15">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Work"
                  // title = "Look ma, we made this!"
                  // description = "Trust us. It’s there. You just don’t see it because it is that good."
                />
              </div>
            </div>
            <PortfolioOne Column="col-lg-4 mt--30 box-grid-layout no-overlay" />
          </div>
        </div>

        {/* Start Brand Area  */}
        <div className="rwt-brand-area ptb--90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                {/* <BrandThree brandStyle="brand-style-2" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <Copyright />
        {/* <ScrollTop /> */}
      </main>
    </>
  );
};
export default CreativePortfolio;
