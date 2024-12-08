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

    const toggleExpand = (boxId) => {
        setExpandedBox(expandedBox === boxId ? null : boxId);
    };
    

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
            <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/1.png"
                    alt="Tech Talks Banner"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                {/* Right Heading */}
                <div
                    className="order-first md:order-last text-right relative mt-8 md:mt-0 md:translate-x-[-50%] md:translate-y-[-50%]"
                    style={{ transform: 'translate(-90%, -60%)' }}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r text-white bg-clip-text text-transparent leading-tight whitespace-nowrap md:whitespace-normal">
                        Tech <br /> Talk
                    </h1>
                </div>

                {/* Left Text */}
                <div className="max-w-lg text-left mb-8 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Welcome to Tech Talk
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300">
                        Explore cutting-edge innovations, network with industry leaders, and
                        participate in exciting challenges. Let’s shape the future together!
                    </p>

                    {/* Timer Section */}
                    <div className="mt-6 text-gray-100">
                        <div className="flex flex-wrap gap-6 md:gap-4 justify-center text-gray-100 text-lg font-mono">
                            {Object.entries(timeLeft).map(([unit, value], index) => (
                                <div key={unit} className="flex flex-col items-center">
                                    <span className="text-3xl sm:text-4xl font-bold">
                                        {String(value).padStart(2, '0')}
                                        {index < 3 && <span className="text-3xl sm:text-4xl font-bold mx-1">:</span>}
                                    </span>
                                    <span className="text-sm sm:text-base">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="py-10">
            <div className="container mx-auto text-black px-20">
                <h2 className="text-3xl font-bold mb-6">Tech Talk</h2>

                {/* Muse Lab Section */}
                <h3
                    className="text-2xl mb-2 cursor-pointer text-black"
                    onClick={toggleMuseLab}
                >
                    Muse Lab {isMuseLabExpanded ? '-' : '+'}
                </h3>
                {isMuseLabExpanded && (
                    <p className="text-gray-300 bg-gray-900 p-4 rounded-md transition text-black">
                        Detailed information about Muse Lab goes here...
                    </p>
                )}

                {/* ABC Professor Section */}
                <h3
                    className="text-2xl mb-2 cursor-pointer text-black"
                    onClick={toggleABCProfessor}
                >
                    ABC Professor {isABCProfessorExpanded ? '-' : '+'}
                </h3>
                {isABCProfessorExpanded && (
                    <p className="text-gray-300 bg-gray-900 p-4 rounded-md transition text-black">
                        Detailed information about ABC Professor goes here...
                    </p>
                )}
            </div>

            <div className="container mx-auto text-black px-20">
                <h2 className="text-3xl font-bold mb-6">Exhibition</h2>

                {/* Colab Section */}
                <h3
                    className="text-2xl mb-2 cursor-pointer text-black"
                    onClick={toggleColab}
                >
                    Colab {isColabExpanded ? '-' : '+'}
                </h3>
                {isColabExpanded && (
                    <p className="text-gray-300 bg-gray-900 p-4 rounded-md transition text-black">
                        Detailed information about Colab goes here...
                    </p>
                )}

                {/* XYZ Company Section */}
                <h3
                    className="text-2xl mb-2 cursor-pointer text-black"
                    onClick={toggleXYZCompany}
                >
                    XYZ Company {isXYZCompanyExpanded ? '-' : '+'}
                </h3>
                {isXYZCompanyExpanded && (
                    <p className="text-gray-300 bg-gray-900 p-4 rounded-md transition text-black">
                        Detailed information about XYZ Company goes here...
                    </p>
                )}
            </div>
        </section>
        <section className="py-10 bg-black">
            <div className="container mx-auto text-white px-10">
                <h2 className="text-4xl font-bold mb-12">Our Benefits</h2>

                {/* Box 1 */}
                <div
                    className={`cursor-pointer mb-8 p-6 rounded-[20px] bg-yellow-500/10 shadow-md transition-all duration-300 ${
                        expandedBox === 1 ? 'max-h-[500px] py-8' : 'max-h-[80px]'
                    } overflow-hidden`}
                    onClick={() => toggleExpand(1)}
                >
                    <h3 className="text-2xl font-bold">
                        Proactive Threat Detection and Response
                    </h3>
                    {expandedBox === 1 && (
                        <p className="mt-4 text-gray-300">
                            Security providers continuously monitor network traffic, log files, and
                            system activities to identify suspicious patterns or anomalies that may
                            indicate a security breach.
                        </p>
                    )}
                </div>

                {/* Box 2 */}
                <div
                    className={`cursor-pointer mb-8 p-6 rounded-[20px] bg-yellow-500/10 shadow-md transition-all duration-300 ${
                        expandedBox === 2 ? 'max-h-[500px] py-8' : 'max-h-[80px]'
                    } overflow-hidden`}
                    onClick={() => toggleExpand(2)}
                >
                    <h3 className="text-2xl font-bold">
                        Expertise and Industry Knowledge
                    </h3>
                    {expandedBox === 2 && (
                        <p className="mt-4 text-gray-300">
                            Gain access to highly skilled professionals with in-depth industry
                            expertise and knowledge to stay ahead of security challenges.
                        </p>
                    )}
                </div>

                {/* Box 3 */}
                <div
                    className={`cursor-pointer mb-8 p-6 rounded-[20px] bg-yellow-500/10 shadow-md transition-all duration-300 ${
                        expandedBox === 3 ? 'max-h-[500px] py-8' : 'max-h-[80px]'
                    } overflow-hidden`}
                    onClick={() => toggleExpand(3)}
                >
                    <h3 className="text-2xl font-bold">
                        Advanced Monitoring and Tools
                    </h3>
                    {expandedBox === 3 && (
                        <p className="mt-4 text-gray-300">
                            Leverage state-of-the-art monitoring systems and security tools
                            designed to provide optimal protection and threat detection.
                        </p>
                    )}
                </div>
            </div>
        </section>
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






            {/* Slider Section */}
            {/* <section className="slider bg-gray-400 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-white text-center">
                        Exhibiting Companies (Mockup logos)
                    </h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 2000 }}
                        loop
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 }
                        }}
                        className="flex items-center justify-center"
                    >
                        {logos.map((logo) => (
                            <SwiperSlide key={logo.id} className="flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="object-contain w-20 h-20 sm:w-32 sm:h-32 border border-gray-600 p-2 rounded-sm"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section> */}

            {/* Highlighted Talks Section */}
            {/* <section className="relative h-screen bg-gray-100 text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage: 'url(/giphy.gif)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <h2 className="text-3xl font-bold text-cyan-600 mb-10 pt-10">
                    Highlighted Talks from Industry Experts
                </h2>
                <div className="relative mx-auto pt-5 w-[90%] sm:w-[75%] lg:w-[60%] overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide flex-shrink-0 w-full ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-50'
                                }`}
                            >
                                <div className="relative w-full h-[300px] sm:h-[500px]">
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() =>
                            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                        }
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full"
                    >
                        &#8594;
                    </button>
                </div>
            </section> */}

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
