import React from 'react';
import './About.css';
import Image from '../../assets/himanshu-avatar-3.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Himanshu Pahuja, a dedicated and forward-thinking software engineer specializing in full-stack web development, blockchain solutions, and advanced backend architectures. With a B.Tech in Computer Science from Central University of Haryana.<br /><br />
                            Currently, I am employed at Zeeve DeepTech Pvt. Ltd., where my role encompasses not only the development and maintenance of complex blockchain architectures—including smart contracts, sidechains, and rollups on the Ethereum platform—but also setting up robust backend systems for diverse applications. My daily responsibilities include designing scalable databases and crafting efficient, secure RESTful APIs to enhance application performance and user experience.
                            <br /><br />
                            My technical toolkit includes proficiency in languages such as JavaScript, Python, and Solidity, and I am skilled in utilizing technologies like React JS, Node JS, MongoDB, Docker, and Kubernetes for cloud services and container orchestration. This ensures optimal deployment and scalability of applications.
                            <br /><br />
                            Passionate about technology, I am driven to deliver high-quality, user-centric solutions that improve engagement and operational efficiency. Continually seeking to challenge myself, I am eager to leverage my extensive skills to drive more innovative and impactful projects.
                        </p>
                        {/* <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Postgres SQL</li>
                            <li>NestJS</li>
                        </ul> */}
                        {/* <button className="btn" onClick={downloadResume}>Donwload CV</button> */}
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About