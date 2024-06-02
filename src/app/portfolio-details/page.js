import PortfolioDetailsContent from "@/elements/portfolio2/PortfolioDetailsContent";
import PortfolioData from "@/app/data/PortfolioData.json";
import Head from 'next/head';
import Layout from "../brdLayout/brdLayout";

const PortfolioDetails = ({ data }) => {
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
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    const portfolioId = parseInt(id, 10);
    const data = PortfolioData.find(portfolio => portfolio.id === portfolioId);

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data,
        },
    };
}

export default PortfolioDetails;
