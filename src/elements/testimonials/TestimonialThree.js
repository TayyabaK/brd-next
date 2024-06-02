"use client";

import React from "react";
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
  {
    form: "Poland",
    description:
      "I AM VERY SATISFIED! Thank you so much! English was very well, and easily understood of all functions. LEGIT SELLER! I will be back for my ERC20 & Bridge Contract! Thanks Noman!",
    image: "testimonial-dark-01",
    name: "John Doe",
    subtitle: "CEO, Company A",
  },
  {
    form: "Germany",
    description:
      "Working with Nomanhaq was a real pleasure! He's super fast, explaining patiently everything one needs to know and guiding us perfectly through this journey! Already working on our next step together and looking forward to a longterm partnership with Nomanhaq! Thanks bro :)",
    image: "testimonial-dark-02",
    name: "Jane Smith",
    subtitle: "CTO, Company B",
  },
  {
    form: "USA",
    description:
      "A true professional. He answered all my questions and addressed all my concerns very patiently. I highly recommend him.",
    image: "testimonial-dark-03",
    name: "Michael Johnson",
    subtitle: "Developer, Company C",
  },
  {
    form: "Scotland",
    description:
      "Being new to the crypto world I was not sure where to start. Noman was there to help me create my token and made the process seem so easy. I am now ready for the next steps and I have Noman on my radar for these next steps.",
    image: "testimonial-dark-03",
    name: "Alice Brown",
    subtitle: "Manager, Company D",
  },
  {
    form: "Dubai",
    description:
      "Best around, very easy to work with and goes above and beyond to make sure you understand his style of coding and every function. HIGHLY RECOMMEND!!!",
    image: "testimonial-dark-03",
    name: "Robert Wilson",
    subtitle: "Founder, Company E",
  },
  {
    form: "UAE",
    description:
      "The work of Noman is very impressive!! He’s fast, highly skilful, and willing to go the extra mile! The way he do things are fantastic, I would say one of the very few best programmers in Fiverr! I look forward working with him in future projects.",
    image: "testimonial-dark-03",
    name: "Emily Davis",
    subtitle: "CEO, Company F",
  },
  {
    form: "USA",
    description:
      "Noman does an excellent job in a timely manner! Great communication and he securely helps you deploy your contract from your own computer. I look forward to working with him further!!",
    image: "testimonial-dark-03",
    name: "David Martinez",
    subtitle: "Engineer, Company G",
  },
  {
    form: "USA",
    description:
      "Noman is a pleasure to work with. He is very accommodating with sudden changes and goes the extra mile to ensure his customers are happy. 10000 out of 10 for his great work. I definitely recommend him to others. He is a trustworthy developer! Keep up the great work Noman",
    image: "testimonial-dark-03",
    name: "Sophia Lee",
    subtitle: "Developer, Company H",
  },
  {
    form: "Canada",
    description:
      "Such an amazing guy, he took his time to explain everything and just clarify every single question mark. Definitely going to work with him in the future again!",
    image: "testimonial-dark-03",
    name: "William Clark",
    subtitle: "Analyst, Company I",
  },
];

const TestimonialThree = ({ teamStyle }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Slider
          className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
          {...slickDot}
        >
          {TestimonialData.map((data, index) => (
            <div key={index} className={`testimonial-style-two ${teamStyle}`}>
              <div className="row align-items-center justify-content-center row--20">
                <div className="col-lg-10 col-md-12">
                  <div
                    className="content text-center p-4"
                    style={{
                      position: "relative",
                      border: "1px solid #1e1e1e",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, #1e1e1e 0%, #0598f7 100%)",
                    }}
                  >
                    <img
                      src="/images/testimonial/opening.png"
                      alt="Opening quotation mark"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <span
                      className="form font-weight-bold"
                      style={{ fontSize: "4rem", lineHeight: "1.6" }}
                    >
                      {data.form}
                    </span>
                    <p
                      className="description mt-2 mb-3"
                      style={{ fontSize: "3rem", lineHeight: "1.6" }}
                    >
                      {data.description}
                    </p>
                    <div className="client-info">
                      <h4
                        className="title"
                        style={{ fontSize: "3rem", fontWeight: "bold" }}
                      >
                        {data.name}
                      </h4>
                      <h6
                        className="subtitle"
                        style={{ fontSize: "2rem", fontWeight: "bold" }}
                      >
                        {data.subtitle}
                      </h6>
                    </div>
                    <img
                      src="/images/testimonial/closing.png"
                      alt="Closing quotation mark"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialThree;
