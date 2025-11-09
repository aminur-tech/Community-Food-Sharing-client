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
      title: "Community Food Sharing",
      description: "Connect with neighbors and share meals together."
    },
    {
      id: 2,
      image: "https://i.ibb.co/nsW6DTXh/s2.jpg",
      title: "Cozy Outfits, Cozy Meals",
      description: "Enjoy food and comfort in a friendly environment."
    },
    {
      id: 3,
      image: "https://i.ibb.co/jkFWqsDw/s3.jpg",
      title: "Make Every Meal Count",
      description: "Join PlateShare and spread happiness through food."
    }
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
            <div className="relative text-center text-white z-10 px-6">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <>
                    <motion.h1
                      key={slide.id + "title"}
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      key={slide.id + "desc"}
                      variants={descVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-lg md:text-xl mb-6 drop-shadow-md"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      key={slide.id + "btn"}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Link
                        to="/services"
                        className="btn bg-blue-600 text-white hover:bg-sky-500 border-none font-semibold rounded-full px-6 py-2"
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
    </Swiper>
  );
};

export default HeroSection;
