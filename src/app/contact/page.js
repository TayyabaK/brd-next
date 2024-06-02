'use client'
// import React from 'react';
// import SEO from "../../common/SEO";
import Layout from "../brdLayout/brdLayout";
// import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";

import SectionTitle from "@/elements/sectionTitle/SectionTitle";
import Head from "next/head";
import ContactOne from "./contactOne";
import BrdHeader from "../common/BrdHeader";

import Copyright from "../common/footer/Brd__Footer";

const Contact = () => {
    return (
    <>
        <Head
                  title="Contact || Button R Digitec" >
              </Head>
              
          {/* <BrdHeader
            btnStyle="btn-small round btn-icon"
            HeaderSTyle="header-not-transparent"
          /> */}
            <Layout>
                {/* <BreadcrumbOne 
                    title=""
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact"
                /> */}
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact Form"
                                        title = "Our Contact"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
                {/* <Copyright /> */}
            </Layout>
        </>
    )
}
export default Contact;