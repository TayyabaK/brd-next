import PortfolioDetailsContent from "@/elements/portfolio2/PortfolioDetailsContent";
import PortfolioData from "@/app/data/PortfolioData.json";
import Head from 'next/head';
import Layout from "@/components/brdLayout/brdLayout"; // Adjusted import

const PortfolioDetails = ({ params }) => {
    const { id } = params;
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
};

// Fetching data at build time
export async function generateStaticParams() {
    return PortfolioData.map((portfolio) => ({
        id: portfolio.id.toString(),
    }));
}

export default PortfolioDetails;
