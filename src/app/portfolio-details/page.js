'use client';

import { useEffect, useState } from "react";
import PortfolioDetailsContent from "@/elements/portfolio2/PortfolioDetailsContent";
import PortfolioData from "@/app/data/PortfolioData.json";

import Head from 'next/head';
import Layout from "../brdLayout/brdLayout";
import { useRouter } from "next/router";

const PortfolioDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>;
    }

    if (!id) {
        return <div>Loading...</div>;
    }

    const portfolioId = parseInt(id, 10);
    const data = PortfolioData.find(portfolio => portfolio.id === portfolioId);

    if (!data) {
        return <div>Page not found</div>;
    }

    return (
        <>
            <Head>
                <title>Creative Portfolio || Button R Digitech</title>
            </Head>
            <Layout>
                <PortfolioDetailsContent data={data} />
            </Layout>
        </>
    );
}

export default PortfolioDetails;
