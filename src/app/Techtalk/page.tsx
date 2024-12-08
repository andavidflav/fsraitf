'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const speakers = [
    {
        id: 1,
        name: "Abdullah Zeyn Hassan",
        title: "Startup Culture in Cottbus, Germany",
        description: `Abdullah Zeyn Hassan is a passionate advocate for entrepreneurship and innovation. 
                      Having played a pivotal role in nurturing startups in Cottbus, he focuses on fostering an ecosystem 
                      where young entrepreneurs can thrive, turning ideas into impactful ventures.`,
        additionalInfo: `In his talk, Abdullah highlights the unique opportunities Cottbus offers to startups, 
                         including its supportive community, access to resources, and strong ties to Germany's 
                         broader tech and industrial network. Discover how the city is shaping the future of 
                         entrepreneurship in Europe.`,
        image: "/cl1mainspe.jpg", // Replace with your actual speaker image path
        companyLogo: "/cl1main.jpg", // Replace with your actual company logo image path
        companyInfo: `The company, Museful, focuses on providing creative and collaborative tools to help startups 
                      streamline their workflows and transform ideas into tangible results. Based in Cottbus, Museful 
                      plays a significant role in the city's growing entrepreneurial scene.`,
        tags: "#Entrepreneurship #StartupCulture #Innovation #Cottbus #Germany #Museful",
      },
      
    {
      id: 2,
      name: "Jane Doe",
      title: "Tech Innovator",
      description: `Jane Doe has spearheaded groundbreaking advancements in AI, focusing on improving accessibility for marginalized communities.`,
      additionalInfo: `Join Jane as she discusses the ethical implications of AI in modern society and how we can shape technology to benefit everyone.`,
      image: "/l2.png",
      companyLogo: "/cl5.jpg",
      companyInfo: `An AI research lab dedicated to ethical and inclusive AI development for diverse global communities.`,
      tags: "#AI #Innovation #Ethics #Technology",
    },
  ];

const Tecktalks: FC = () => {

    const [isMuseLabExpanded, setMuseLabExpanded] = useState(false);
    const [isABCProfessorExpanded, setABCProfessorExpanded] = useState(false);
    const [isColabExpanded, setColabExpanded] = useState(false);
    const [isXYZCompanyExpanded, setXYZCompanyExpanded] = useState(false);

   

    const toggleMuseLab = () => setMuseLabExpanded(!isMuseLabExpanded);
    const toggleABCProfessor = () => setABCProfessorExpanded(!isABCProfessorExpanded);
    const toggleColab = () => setColabExpanded(!isColabExpanded);
    const toggleXYZCompany = () => setXYZCompanyExpanded(!isXYZCompanyExpanded);

    const [expandedBox, setExpandedBox] = useState(null);

    
    const targetDate = new Date(new Date().getFullYear(), 11, 2, 16, 0, 0).toISOString();

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: '/2.jpg', alt: 'Slide 1' },
        { src: '/4.jpg', alt: 'Slide 2' },
        { src: '/3.jpg', alt: 'Slide 3' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const logos = [
        { id: 1, src: '/l1.png', alt: 'Logo 1' },
        { id: 2, src: '/l2.png', alt: 'Logo 2' },
        { id: 3, src: '/l3.png', alt: 'Logo 3' },
        { id: 4, src: '/l4.png', alt: 'Logo 4' },
        { id: 5, src: '/l5.png', alt: 'Logo 5' },
        { id: 6, src: '/l6.png', alt: 'Logo 6' }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length
      );
    };
  
    const currentSpeaker = speakers[currentIndex];
    return (
        <div className="new-page">
            
        <section className="relative bg-purple-900 text-white py-16 px-8">
            <div className="max-w-4xl mx-auto relative">
                {/* Left Arrow */}
                <button
                onClick={handlePrev}
                className="absolute left-[-2rem] top-[50%] transform -translate-y-1/2 bg-yellow-400 text-purple-900 p-3 rounded-full shadow-lg hover:bg-yellow-300"
                >
                ❮
                </button>

                {/* Top Section: Speaker Details */}
                <div className="flex flex-col gap-12 bg-purple-800 rounded-lg shadow-lg p-8">
                {/* Speaker Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Speaker Image */}
                    <div className="md:w-1/3">
                    <img
                        src={currentSpeaker.image}
                        alt={currentSpeaker.name}
                        className="rounded-lg shadow-lg w-full"
                    />
                    </div>
                    {/* Speaker Details */}
                    <div className="md:w-2/3 md:ml-8 text-left">
                    <h3 className="text-2xl font-bold">{currentSpeaker.name}</h3>
                    <p className="text-lg mt-4 font-semibold">{currentSpeaker.title}</p>
                    <p className="mt-4">{currentSpeaker.description}</p>
                    <p className="mt-4">{currentSpeaker.additionalInfo}</p>
                    {/* Tags */}
                    <div className="mt-6 text-sm text-gray-300">
                        {currentSpeaker.tags}
                    </div>
                    </div>
                </div>

                {/* Bottom Section: Company Details */}
                <div className="flex flex-col md:flex-row items-center md:items-start mt-12">
                    {/* Company Logo */}
                    <div className="md:w-1/3">
                    <img
                        src={currentSpeaker.companyLogo}
                        alt={`${currentSpeaker.name} company logo`}
                        className="rounded-lg shadow-lg w-full"
                    />
                    </div>
                    {/* Company Details */}
                    <div className="md:w-2/3 md:ml-8 text-left">
                    <h4 className="text-xl font-semibold">About the Organization</h4>
                    <p className="mt-4">{currentSpeaker.companyInfo}</p>
                    </div>
                </div>
                </div>

                {/* Right Arrow */}
                <button
                onClick={handleNext}
                className="absolute right-[-2rem] top-[50%] transform -translate-y-1/2 bg-yellow-400 text-purple-900 p-3 rounded-full shadow-lg hover:bg-yellow-300"
                >
                ❯
                </button>
            </div>
        </section>

            {/* Contact Section */}
            <section className="bg-gray-800 py-10">
                <div className="container mx-auto text-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div>
                            <h3 className="text-xl font-semibold">FSR AI</h3>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="https://fsr-ai.de" className="text-blue-500">
                                    <AiOutlineGlobal className="text-2xl" />
                                </a>
                                <a href="mailto:fsr-ai@b-tu.de" className="text-blue-500">
                                    <CiMail className="text-2xl" />
                                </a>
                                <a href="https://www.instagram.com/fsr.ai" className="text-pink-600">
                                    <FaInstagram className="text-2xl" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tecktalks;
