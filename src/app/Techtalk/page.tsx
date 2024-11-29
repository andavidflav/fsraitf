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

const Tecktalks: FC = () => {

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
                    style={{ transform: 'translate(-50%, -50%)' }}
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
