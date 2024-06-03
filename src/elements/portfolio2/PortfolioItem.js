import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="rwt-card h-100">
      <div className="inner">
        <div className="thumbnail">
          <figure className="card-image">
            <Link href={`/portfolio-details/${portfolio.id}`}>
              <Image
                className="img-fluid"
                src={portfolio.portfolioImage}
                width={500}
                height={300}
                alt="Portfolio-01"
              />
            </Link>
          </figure>
          <Link
            href={`/portfolio-details/${portfolio.id}`}
            className="rwt-overlay"
          ></Link>
        </div>
        <div className="content">
          <h5 className="title mb--10">
            <Link href={`/portfolio-details/${portfolio.id}`}>
              {portfolio.title}
            </Link>
          </h5>
          <span className="subtitle b2 text-capitalize">
            {portfolio.category}
          </span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
