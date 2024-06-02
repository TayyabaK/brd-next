'use client'

// import PortfolioDetailsContent from "@/elements/portfolio2/PortfolioDetailsContent";
// import PortfolioData from "@/app/data/PortfolioData.json";

// import Head from 'next/head';
// import Layout from "../brdLayout/brdLayout";
// import { usePathname, useSearchParams } from "next/navigation";

//ISSUE (WHEN OPENING A PAGE with id . it is showing page not found  ) /portfolio-details/1 



// const PortfolioDetails = (
// ) => {
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');

//     if (!id) {
//         return <div>Loading...</div>;
//     }


//     const portfolioId = parseInt(id, 10)
//     const data = PortfolioData.filter(portfolio => portfolio.id === portfolioId);
//     return (
//         <>
//             {/* <SEO title="Portfolio Details || Doob" /> */}
//             <Head>
//                 <title>Creative Portfolio || Button R Digitech</title>
//             </Head>
//             <Layout>
            
//                 <PortfolioDetailsContent data={data[0]} />
//                 </Layout>
//         </>
//     )
// }

// export default PortfolioDetails;
