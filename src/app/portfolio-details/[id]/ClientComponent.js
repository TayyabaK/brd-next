"use client";

import PortfolioDetailsContent from "@/elements/portfolio2/PortfolioDetailsContent";
import Head from "next/head";

const ClientComponent = ({ data }) => {
  return (
    <>
      <Head>
        <title>Creative Portfolio || Button R Digitech</title>
      </Head>
      <PortfolioDetailsContent data={data} />
    </>
  );
};

export default ClientComponent;
