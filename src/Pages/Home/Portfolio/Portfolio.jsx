import React from 'react';
import Title from '../Title/Title';
import { FaGithub, FaLink } from "react-icons/fa";
import project1 from '../../../assets/images/images/project-1.png'
import project2 from '../../../assets/images/images/project-2.png'
import project3 from '../../../assets/images/images/project-3.png'

const Portfolio = () => {
    return (
        <div id='portfolio' className='lg:flex gap-20'>
            <Title>Portfolio</Title>
            <div className='hidden lg:block'>
            <p className='font-bold  my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">Portfolio</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>

            <div>
            <button className='secondary-btn flex mx-auto lg:mx-0 mb-5'>Projects</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card h-96 bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects  rounded-t-lg'>

                </div>
               
                <div className="p-5 space-y-3">
                <img src={project1} className='h-20% -mb-4 -top-60' alt="" />
                    <h2 className=" font-bold text-2xl text-white">Sound Safari</h2>
                    <p className='text-white'>Sound Safari is a Educational single page web application.On this website dashboard and user different types roles are provided.</p>
                   
                    <div className='text-white gap-2 my-3 flex pt-1 justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/summer-camp-school-client">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/summer-camp-school-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://64a26c4713d46c50bb5483f5--lucky-paprenjak-3f9e3a.netlify.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card w-full h-96 bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-2 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-2">
                <img src={project2} className='h-20% -mb-4 -top-60' alt="" />
                    <h2 className="font-bold text-2xl text-white">MasteryKarate</h2>
                    <p className='text-white'>MasteryKarate is a dynamic full-stack  website.The website offers a user-friendly interface for customers to create account, browse, upload, search, details etc.</p>
                   

                    <div className='text-white gap-2 my-5 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/masteryKarate-client">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/masteryKarate-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://mastery-karate-client.web.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card h-96 bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-3 rounded-t-lg'>
                </div>
                
                <div className="p-5 space-y-3">
                <img src={project3} className='h-20% -mb-4 -top-60' alt="" />
                <h2 className=" font-bold text-2xl mt-3 text-white">Toy MarketPlace</h2>
                    <p className='text-white'>Toy MarketPlace website.dynamic full-stack  website.The website offers a user-friendly interface for customers to create account, browse, upload, search, see toy details etc</p>
                    
                    <div className='text-white gap-2 pt-2 my-3 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/toy-marketplace-client">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/Bilkish-akther/toy-marketplace-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href=" https://646b12b94560f324a256de6d--dynamic-gumdrop-a4d996.netlify.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>



            
            </div>
            </div>
        </div>
    );
};

export default Portfolio;