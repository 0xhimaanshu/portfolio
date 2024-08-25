import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import Image4 from '../../assets/blockchain-3.png';
import Image5 from '../../assets/API.png';
import Image6 from '../../assets/cloud.png';

const data = [
    
    {
        id: 1,
        image: Image2,
        title: "Full-Stack Web Development",
        description:
            "Develop responsive, user-focused web applications leveraging the MERN stack.",
    },
    {
        id: 2,
        image: Image3,
        title: "Mobile Development",
        description:
            "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 4,
        image: Image4,
        title: "Blockchain Solutions & Development",
        description:
            "Specialize in creating, deploying smart contracts, building user-friendly decentralized applications and establishing blockchain networks, sidechains, and rollups on Ethereum for advanced token-based ecosystems.",
    },
    {
        id: 5,
        image: Image5,
        title: "API Development",
        description:
            "Offer design and implementation of scalable RESTful APIs, ensuring seamless integration and data flow for robust applications.",
    },
    {
        id: 6,
        image: Image6,
        title: "Cloud & Containerization Expertise",
        description:
            "Skilled in configuring cloud infrastructures, containerizing applications with Docker, and orchestrating deployments with Kubernetes for enhanced scalability and reliability."
    },
    
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services