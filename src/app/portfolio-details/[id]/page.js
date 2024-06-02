import PortfolioData from "@/app/data/PortfolioData.json";
import ClientComponent from "./ClientComponent";
import Layout from "@/components/brdLayout/brdLayout"; // Adjusted import

export async function generateStaticParams() {
  return PortfolioData.map((portfolio) => ({
    id: portfolio.id.toString(),
  }));
}

export async function getStaticProps({ params }) {
  const portfolioId = parseInt(params.id, 10);
  const data = PortfolioData.find((portfolio) => portfolio.id === portfolioId);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

const PortfolioDetails = ({ data }) => {
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
