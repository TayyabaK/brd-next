import React from 'react';
import Link from 'next/link';
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: './../images/service/NFT Minting Engine.jpg',
        title: ' NFT Minting Engine',
        description: ''
    },
    {
        image: './images/service/NFT Marketplace.png',
        title: 'NFT Marketplace',
        description: ''
    },
    {
        image: './images/service/NTF Artwork.webp',
        title: 'NFT Artwork',
        description: ''
    },
    {
        image: './images/service/service__NFT.jpg',
        title: 'NFT Staking',
        description: ''
    },
    {
        image: './images/service/service__launchpad.jpg',
        title: 'Launchpad/ ICO / IDO',
        description: ''
    },
    {
        image: './images/service/service__crypto.jpg',
        title: 'Crypto Staking',
        description: ''
    },
    {
        image: './images/service/Gaming.jpeg',
        title: 'Game Development',
        description: ''
    },
    {
        image: './images/service/MLM.jpg',
        title: 'MLM',
        description: ''
    },
    {
        image: './images/service/Swapping Staking.png',
        title: 'Swapping/ Staking',
        description: ''
    },
    {
        image: './images/service/Bridging.jpg',
        title: 'Bridging',
        description: ''
    },
    {
        image: './images/service/WebDevelopment.jpg',
        title: 'Website Development (JavaScript & Web3)',
        description: ''
    },
    {
        image: './images/service/Website (WordPress).jpg',
        title: 'Website (WordPress)',
        description: ''
    },
    {
        image: './images/service/dashboard-development.jpg',
        title: 'Dashboard Development',
        description: ''
    },
    {
        image: './images/service/Audit Services.jpg',
        title: 'Audit Services',
        description: ''
    },
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <a href="#service" dangerouslySetInnerHTML={{__html: val.title}}></a>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;