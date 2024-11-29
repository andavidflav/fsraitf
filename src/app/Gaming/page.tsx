'use client';

import { FC, useState, useEffect } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai'; // For global icon
import { CiMail } from 'react-icons/ci'; // For mail icon
import { FaInstagram } from 'react-icons/fa'; // For Instagram icon
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gaming: FC = () => {
    // Set the target date to November 28th, 5:00 PM of the current year
    //(mm,dd,hh,mm,ss)
    const targetDate = new Date(new Date().getFullYear(), 11, 2, 16, 0, 0).toISOString();

    function calculateTimeLeft() {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    return (
        <div className="new-page">
            {/* Banner Section */}
            <section className="relative h-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-slate-900 py-0">
                {/* Left Section - Poster Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/g2.png" // Replace with your actual image path
                        alt="FIFA 2024"
                        className="object-contain w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Section - Text Content about FIFA 2024 */}
                <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white text-black mb-4 mt-[50px]">FIFA Tournament</h2> {/* Negative margin to move it up */}
                    <p className="text-base sm:text-lg text-white text-black leading-relaxed text-justify mb-6 mt-[20px]">
                        Dive into the world of FIFA 2024 and experience the most realistic football gaming with new features and game modes. Get ready for a gaming experience like no other with improved graphics, enhanced gameplay mechanics, and more immersive game modes. FIFA 2024 brings the excitement of football to your screen with new stadiums, teams, and an engaging multiplayer experience.
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold text-white text-black mb-4 mt-[50px]">Registrations Opens</h2>
                    {/* Registration Button */}
                    {/* <div className="mb-8">
                        <a
                            href="https://www.registration-link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                        >
                            Registration Link
                        </a>
                    </div> */}

                    {/* Countdown Timer */}
                    <div className="mb-8">
                        <div className="flex justify-center items-center my-5">
                            <div className="flex flex-wrap gap-2 text-base sm:text-lg md:text-xl font-mono text-gray-800 bg-gray-300 p-2 rounded-lg shadow-md w-full max-w-lg justify-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Days</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Hours</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Minutes</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Seconds</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 text-center">#First Come First Serve</h3>
                    </div>
                </div>
            </section>

            {/* Mario Kart Banner Section */}
            <section className="relative h-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-slate-900 py-0">
                {/* Left Section - Text Content about Mario Kart */}
                <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 mt-[50px]">Mario Kart Tournament</h2> {/* Negative margin to move it up */}
                    <p className="text-base sm:text-lg text-white leading-relaxed text-justify mb-6 mt-[20px]">
                        Get ready to race your way through the most exciting tracks with your favorite Mario Kart characters! Mario Kart 2024 brings new courses, iconic items, and thrilling multiplayer gameplay. Race against friends or challenge players worldwide for the ultimate kart racing experience. Power up with bananas, shells, and mushrooms as you speed through fun and dynamic environments. 
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white text-black mb-4 mt-[50px]">Registrations Opens</h2>
                    {/* Registration Button */}
                    {/* <div className="mb-8">
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                        >
                            Registration Link
                        </a>
                    </div> */}

                    {/* Countdown Timer */}
                    <div className="mb-8">
                        <div className="flex justify-center items-center my-5">
                            <div className="flex flex-wrap gap-2 text-base sm:text-lg md:text-xl font-mono text-gray-800 bg-gray-300 p-2 rounded-lg shadow-md w-full max-w-lg justify-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Days</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Hours</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Minutes</span>
                                </div>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs sm:text-sm">Seconds</span>
                                </div>
                            </div> 
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 text-center">#First Come, First Serve!</h3>
                    </div>
                </div>

                {/* Right Section - Poster Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/g3.jpg" // Replace with an actual Mario Kart poster or image
                        alt="Mario Kart Racing"
                        className="object-contain w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>


            {/* Contact Section with Grey Background */}
            <section className="slider bg-gray-800 py-10">
                <div className="boxed-container bg-gray-800">
                    <div className="about-section mt-5 pb-10">
                        <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Us</h2>
                        <div className="flex text-white justify-center">
                            <div className="mb-4 md:mb-0 flex flex-row">
                                <h3 className="text-xl font-semibold">FSR AI</h3>
                                <div className="flex space-x-2 ml-4">
                                    <a href="https://fsr-ai.de" className="text-blue-500">
                                        <AiOutlineGlobal className="text-2xl text-blue-500" />
                                    </a>
                                    <a href="mailto:fsr-ai@b-tu.de" className="text-blue-500">
                                        <CiMail className="text-2xl text-white" />
                                    </a>
                                    <a href="https://www.instagram.com/fsr.ai" target="_blank" className="text-blue-500">
                                        <FaInstagram className="text-2xl text-pink-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gaming;
