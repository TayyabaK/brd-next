import PortfolioData from "@/app/data/PortfolioData.json";
import ClientComponent from "./ClientComponent";
import Layout from "@/components/brdLayout/brdLayout"; // Adjusted import

export async function generateStaticParams() {
  return PortfolioData.map((portfolio) => ({
    id: portfolio.id.toString(),
  }));
}

const PortfolioDetails = ({ params }) => {
  const { id } = params;
  const portfolioId = parseInt(id, 10);
  const data = PortfolioData.find((portfolio) => portfolio.id === portfolioId);

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <Layout>
      <ClientComponent data={data} />
    </Layout>
  );
};

export default PortfolioDetails;
