import React from 'react';
import myPic from '../../../assets/images/oli.png'
import Title from '../Title/Title';

const About = () => {
    return (
        <div id='about' className='lg:flex gap-28 my-40'>
            <Title>About ME</Title>
            <div className='order-2 lg:order-1'>
                <p className='text-white text-lg'>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development.</p>
                <div className='mt-9 flex gap-5'>
            <button className='secondary-btn'>Get Resume</button>
            <button className='primary-btn'>My Skills</button>
            </div>
            </div>
            <div className=' order-1 lg:order-2'>
                <img className='rounded-bl-full bg-green-500 rounded-br-full' src={myPic} alt="" />
            </div>
            <div className='hidden lg:block'>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">About me</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>
        </div>
    );
};

export default About;