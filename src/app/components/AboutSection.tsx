// "use client";

// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animations on component mount
//     setTimeout(() => setIsVisible(true), 100);
//   }, []);

//   const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

//   return (
//     <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
//       {/* Hero Section */}
//       <div className="container mx-auto px-6 py-20 text-center">
//         <h1
//           className={`text-6xl font-extrabold tracking-tight leading-tight md:text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${fadeInClass}`}
//         >
//           Tech Fest 2024
//         </h1>
//         <h1
//           className={`mt-4 text-4xl font-bold tracking-tight leading-tight md:text-6xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${fadeInClass}`}
//         >
//           12.12.24
//         </h1>
//         <p
//           className={`mt-6 text-lg text-gray-400 md:text-3xl transition-all duration-1000 delay-500 ${fadeInClass}`}
//         >
//           Where innovation meets creativity. Explore, create, and conquer!
//         </p>

//         {/* Subtle Glowing Rings */}
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl delay-200"></div>
//       </div>

//       {/* Event Sections */}
//       <div className="mt-20">
//         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Event 1 */}
//           <Link href="/Aihackathon" passHref>
//             <div
//               className={`relative p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-100 ${fadeInClass}`}
//             >
//               <h2 className="text-3xl font-bold text-white">AI Hackathon</h2>
//               <p className="mt-4 text-gray-400">
//                 🧠 12 hours of intense coding with real-world challenges. Top
//                 solutions handpicked by industry experts.
//               </p>
//             </div>
//           </Link>

//           {/* Event 2 */}
//           <Link href="/Techtalk" passHref>
//             <div
//               className={`relative p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-200 ${fadeInClass}`}
//             >
//               <h2 className="text-3xl font-bold text-white">Tech Talk</h2>
//               <p className="mt-4 text-gray-400">
//                 💬 Dive into insightful sessions with industry leaders discussing
//                 cutting-edge topics.
//               </p>
//             </div>
//           </Link>

//           {/* Event 3 */}
//           <Link href="/Gaming" passHref>
//             <div
//               className={`relative p-6 bg-gradient-to-l from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-300 ${fadeInClass}`}
//             >
//               <h2 className="text-3xl font-bold text-white">Gaming Tournament</h2>
//               <p className="mt-4 text-gray-400">
//                 🎮 Compete in FIFA and DOTA tournaments for ultimate gaming
//                 glory.
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null); // Ref to access the video element

  useEffect(() => {
    // Trigger animations on component mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  const handleVideoClick = () => {
    if (videoRef.current) {
      // Play the video when clicked
      setIsVideoPlaying(true);

      // Request fullscreen for the video
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section
      className="relative min-h-screen bg-slate-900 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/7.png)', // Replace with the actual path to your GIF
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 text-center">
        <h1
          className={`text-6xl font-extrabold tracking-tight leading-tight md:text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${fadeInClass}`}
        >
          Tech Fest 2024
        </h1>
        <h1
          className={`mt-4 text-4xl font-bold tracking-tight leading-tight md:text-6xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${fadeInClass}`}
        >
          12.12.24
        </h1>
        <p
          className={`mt-6 text-lg text-gray-400 md:text-3xl transition-all duration-1000 delay-500 ${fadeInClass}`}
        >
          Where innovation meets creativity. Explore, create, and conquer!
        </p>

        {/* Subtle Glowing Rings */}
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl delay-200"></div>
      </div>

      {/* Video Section */}
<div className="relative mt-10 flex justify-center items-center">
  <div
    className={`transition-all duration-300 ease-in-out mx-auto`}
  >
    <video
      ref={videoRef}
      src="/your-video.mp4" // Replace with your video path
      controls
      autoPlay={isVideoPlaying}
      className="w-[500px] h-[500px] rounded-xl cursor-pointer"
      onClick={handleVideoClick}
    />
  </div>
</div>


      {/* Event Sections */}
      <div className="relative mt-10 my-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Event 1 */}
          <Link href="/Aihackathon" passHref>
            <div
              className={`relative p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer ${fadeInClass}`}
            >
              <h2 className="text-3xl font-bold text-white">AI Hackathon</h2>
              <p className="mt-4 text-gray-400">
                🧠 12 hours of intense coding with real-world challenges. Top
                solutions handpicked by industry experts.
              </p>
            </div>
          </Link>

          {/* Event 2 */}
          <Link href="/Techtalk" passHref>
            <div
              className={`relative p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer ${fadeInClass}`}
            >
              <h2 className="text-3xl font-bold text-white">Tech Talk</h2>
              <p className="mt-4 text-gray-400">
                💬 Dive into insightful sessions with industry leaders discussing
                cutting-edge topics.
              </p>
            </div>
          </Link>

          {/* Event 3 */}
          <Link href="/Gaming" passHref>
            <div
              className={`relative p-6 bg-gradient-to-l from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer ${fadeInClass}`}
            >
              <h2 className="text-3xl font-bold text-white">Gaming Tournament</h2>
              <p className="mt-4 text-gray-400">
                🎮 Compete in FIFA and DOTA tournaments for ultimate gaming
                glory.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
