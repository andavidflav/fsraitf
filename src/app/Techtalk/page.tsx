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
        title: "Dare to Begin: Your Startup Journey Has No Limits",
        description: `Get ready to be inspired and empowered! In this motivational tech talk, I'll share my
transformation from an Egyptian museum guide to the founder of an award-winning AI startup in
Germany. Drawing from my experiences with multiple accelerator programs and winning the Star Parade
2024, I'll show you why your background doesn't define your future. You'll learn:
- How to navigate the German startup ecosystem and access funding opportunities
- Key resources available for international founders in Germany
- Practical steps to turn your innovative idea into a viable business
- Ways to leverage accelerators, incubators, and support programs
- Building a strong network in a new entrepreneurial environment
- Common pitfalls to avoid and how to overcome typical challenges
Whether you're a student with a bold idea or an aspiring entrepreneur wondering where to start, this talk
will give you the motivation and practical roadmap to begin your startup journey in Germany.`,
        image: "/cl1mainspe.jpg", // Replace with your actual speaker image path
        companyLogo: "/cl3.png", // Replace with your actual company logo image path
        companyInfo: `Museful is an innovative startup revolutionizing museum experiences through AI
and augmented reality technology. We're creating digital solutions that enhance educational experiences
in museums and cultural institutions, making culture more accessible and engaging for visitors.`,
        
      },
      
    {
      id: 2,
      name: "Serghei Baltag",
      title: "3D Printing with colab: Turning Ideas into Reality",
      description: `Discover the possibilities of 3D printing at colab! This session highlights our innovative projects, including prototypes, architectural models, design objects, and spare parts. Learn about the Fürst-Pückler-Star Project, where tradition meets technology, and explore the 3D printing process from design to final product. We’ll showcase how tools like FFF-3D-Prinnting bring creativity to life, using eco-friendly materials and cutting-edge technology.`,
      image: "/cl2mainspe.jpg",
      companyLogo: "/cl4.png",
      companyInfo: `CreativeOpenLab (COLab) >>>>>>> structural
                    change project of the BTU >>>>>>> new Makerspace on Campus >>>>>>> open for everyone >>>>>>>
                    at the Cottbus Start-up Centre Startblock B2
                    >>>>>>> state-of-the-art technology on over 600m²
                    WORKSHOPS & TRAININGS 3D Print, Lasercutting, Soldering, CNC exp. LECTURES for students, founding teams and researchers EVENTS TeamEvents for companies, idea competitions, open.COLab.day. PROTOTYPING`,
      
    },
    {
        "id": 3,
        "name": "Anton Galich",
        "title": "Artificial Intelligence in Transport Research",
        "description": "Anton Galich’s presentation will focus on artificial intelligence in transport research. For this purpose, he will briefly discuss the rapid rise of AI and its potential use cases in the transport area as a short introduction before the main part of his talk in which he will outline how AI can help filling some gaps in transport research. More specifically, he will illustrate existing problems in the collection of data needed in transport research and highlight how AI can help overcoming these issues on the basis of two use cases that he is currently working on. The two use cases center on objection detection and image generation models.",
      image: "/cl3mainspe.jpg",
      companyLogo: "/cl6.png",
      companyInfo: `The DLR Institute of Structures and Design introduces itself. In addition to an introduction to our research work, the following pages provide insights into our five research departments as well as more detailed information on contact persons and the Institute's two sites.`,
      
       
      },
      {
        "id": 4,
        "name": "Matthias Richter",
        "title": "Foundation Models and the AI Landscape",
        "description": "With a background in software engineering, Matthias Richter has successfully transitioned into AI development over the past several years. His expertise lies in retrieval problems, NLP, and Generative AI. Matthias is part of ML6, an AI consultancy that empowers businesses to transform their models through cutting-edge AI technology. In this tech talk, Matthias will explore how foundation models are shifting the AI landscape. He'll delve into diverse use cases, examining traditional implementation methods and how they're evolving with the adoption of large language models.",
      image: "/cl4mainspe.jpg",
      companyLogo: "/cl7.jpg",
      companyInfo: `ML6 is a leading AI & Machine Learning company with a team of 100+ AI and ML experts, based in Ghent, Amsterdam and Berlin. 

As exciting developments are happening in the world of AI, unprecedented opportunities are being offered for businesses to innovate and gain a competitive edge. And now more than ever is the time to create intelligence with lasting positive impact. 

Our goal? To help clients to adapt faster and to stay on top of this technological revolution. We help you to navigate, activate or build intelligence for all your business challenges, cross-industry and cloud agnostic. Together, we guide the AI revolution towards positive impact. 

We offer a broad range of AI and ML solutions and services, including NLP, Generative AI, Large Language Models, Computer Vision, MLOps and much more. From software development to data sourcing, edge deployment and security best practices, our goal is to provide your business with complete end-to-end AI solutions. 

ML6 works with European governments, enterprises and startups in various industries - and is trusted by organizations like Randstad, P&G, ASML, Funke, Pfizer, Creative Fabrica and the Flemish Government.`,
        
      },
      {
        "id": 5,
        "name": "Mahdi Taheri",
        "title": "Reliability in Edge-AI Chips",
        "description": "Very recently, Artificial Intelligence started undergoing a remarkable transformation by moving closer to the source of data, thus establishing the Edge AI concept. This trend sets new reliability requirements for the related hardware chips used for safety- and mission-critical applications. The key research and engineering challenges stem from the limited computing and energy resources of the edge devices. Furthermore, the compute efficiency and the cost of the reliability of the Edge-AI chips are becoming enabling factors for their way to the market. The talk discusses techniques for soft error and lifetime reliability assessment and enhancement for Deep Learning accelerators. It advocates the role of approximate computing and looks into specifics of the systolic-array-, data-flow-based, and industry-grade accelerator architectures for ASICs and FPGAs.",
      image: "/cl8.jpg",
      companyLogo: "/cl5.jpg",
      companyInfo: `Mahdi received his B.Sc. degree in electrical engineering in 2017 and his M.SC. degree in electrical engineering in
2021. He finished his Ph.D. at Tallinn University of Technology in 2024, and since then, he has been a postdoctoral
researcher at BTU Cottbus. His research interests include reliability and fault tolerance design, approximate
computing, neural networks (NNs), hardware accelerators, and applications of field-programmable gate arrays
(FPGAs).`,
        
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
                    {/* Tags */}
                
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
