import React from "react";
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
  {
    form: "Poland",
    description:
      "I AM VERY SATISFIED! Thank you so much! English was very well, and easily understood of all functions. LEGIT SELLER! I will be back for my ERC20 & Bridge Contract! Thanks Noman!",

    image: "testimonial-dark-01",
  },
  {
    form: "Germany",
    description:
      " Working with Nomanhaq was a real pleasure! He's super fast, explaining patiently everything one needs to know and guiding us perfectly through this journey! Already working on our next step together and looking forward to a longterm partnership with Nomanhaq! Thanks bro :)",

    image: "testimonial-dark-02",
  },
  {
    form: "USA",
    description:
      "A true professional. He answered all my questions and addressed all my concerns very patiently. I highly recommend him.",

    image: "testimonial-dark-03",
  },
  {
    form: "Scotland",
    description:
      "Being new to the crypto world I was not sure where to start. Noman was there to help me create my token and made the process seem so easy. I am now ready for the next steps and I have Noman on my radar for these next steps.",

    image: "testimonial-dark-03",
  },
  {
    form: "Dubai",
    description:
      " Best around, very easy to work with and goes above and beyond to make sure you understand his style of coding and every function. HIGHLY RECOMMEND!!!",

    image: "testimonial-dark-03",
  },
  {
    form: "UAE",
    description:
      "The work of Noman is very impressive!! He’s fast, highly skilful, and willing to go the extra mile! The way he do things are fantastic, I would say one of the very few best programmers in Fiverr! I look forward working with him in future projects.",

    image: "testimonial-dark-03",
  },
  {
    form: "USA",
    description:
      " Noman does an excellent job in a timely manner! Great communication and he securely helps you deploy your contract from your own computer. I look forward to working with him further!!",

    image: "testimonial-dark-03",
  },
  {
    form: "USA",
    description:
      " Noman is a pleasure to work with. He is very accommodating with sudden changes and foes the extra mile to ensure his customers are happy. 10000 out of 10 for his great work. I definitely recommend him to others. He is a trustworthy developer! Keep up the great work Noman",

    image: "testimonial-dark-03",
  },
  {
    form: "Canada",
    description:
      " Such an amazing guy, he took his time to explain everything and just clarify every single question mark. Definitely going to work with him in the future again!",

    image: "testimonial-dark-03",
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
              <div className="row align-items-center row--20">
                <div className="order-1 order-md-1 col-lg-10 col-md-12 offset-lg-1">
                  <div className="content mt_sm--40">
                    <span className="form">{data.form}</span>
                    <p className="description">{data.description}</p>
                    <div className="client-info">
                      <h4 className="title">{data.name}</h4>
                      <h6 className="subtitle">{data.subtitle}</h6>
                    </div>
                  </div>
                </div>
                {/* <div className="order-1 order-md-2 col-lg-4 col-md-4">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={`./images/testimonial/${data.image}.jpg`}
                      alt="Corporate React Template"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default TestimonialThree;
