import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Xx1KBpWp/s1.jpg",
      title: "Make Every Meal Count",
      description: "Join PlateShare and spread happiness through food."
    },
    {
      id: 2,
      image: "https://i.ibb.co/nsW6DTXh/s2.jpg",
      title: "Community Food Sharing",
      description: "Connect with neighbors and share meals together."
    },
    {
      id: 3,
      image: "https://i.ibb.co/jkFWqsDw/s3.jpg",
      title: "Cozy Meals, Happy Hearts",
      description: "Enjoy food and comfort in a friendly environment."
    }
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ 
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active"
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="relative group"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Improved Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            
            <div className="relative text-center text-white z-10 px-6 max-w-4xl">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <>
                    <motion.h1
                      key={slide.id + "title"}
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      key={slide.id + "desc"}
                      variants={descVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-lg md:text-2xl mb-8 drop-shadow-md font-light"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      key={slide.id + "btn"}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/available-foods"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform"
                      >
                        View All Foods
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Enhanced Navigation Buttons */}
      <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 !w-12 !h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm"></button>
      <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 !w-12 !h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm"></button>

      {/* Enhanced Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 swiper-pagination"></div>
    </Swiper>
  );
};

export default HeroSection;
