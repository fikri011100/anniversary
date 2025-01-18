import { X } from "lucide-react";
import ReactDom from "react-dom";
import React, { useRef, useEffect } from 'react';
import heroImg from "./../assets/pics/9.jpeg";
import { january } from "./../constants/january";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ModalPerMonth = ({ openModal, setOpenModal, images }) => {
  const filteredImages = january.filter(month => month.month === images);
  const swiperRef = useRef(null);

  const resetSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // Slide to the first slide (index 0) without animation
    }
  };

  useEffect(() => {
    if (openModal === true) {
      resetSwiper();
    }
  }, [openModal]);

  return ReactDom.createPortal(
    <>
      <div
        onClick={() => setOpenModal(false)}
        className={`
          overlay w-full h-screen fixed top-0 left-0 bg-[#000] z-50 duration-200 ease-in-out cursor-pointer
          ${openModal ? "visible opacity-50" : "invisible opacity-0"}
        `}
      ></div>
      <div
        className={`fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] lg:w-[50%] bg-black rounded-lg z-50 duration-300 ease-in-out transition-all max-h-[90%] overflow-y-auto ${
          openModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <i
          className="absolute top-3 right-3 p-2 z-10 bg-black rounded-full text-white font-semibold cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <X size={20} fontSize={500} />
        </i>
        <div
          className="relative bg-cover bg-no-repeat h-[350px] lg:h-[750px] "
        >
          <Swiper 
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Store the swiper instance in the ref
            }} 
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <img
                src={filteredImages[0].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[1].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[2].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[3].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[4].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[5].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[6].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[7].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[8].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filteredImages[9].src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, You </h1>
          <p>Hi You...</p>
          <p>
            You don't know me, and maybe you never will. But from afar, I’ve
            been inspired by your journey, your energy, and the way you light up
            the lives of so many. On this special day, I just wanted to send a
            simple wish: May your path continue to be as beautiful as the person
            you are, and may this year bring even more joy, love, and success
            into your life.
          </p>
          <p>
            With all my love,
            <br />
            Didin
          </p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalPerMonth;
