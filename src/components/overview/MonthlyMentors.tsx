import { MentorsCard } from "../../components/mentors/MentorCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../index.css";

import { DataMentors } from "../mentors/DataMentors";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";

export const MonthlyMentors = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Monthly Mentors</h1>
        <div className="flex gap-1">
          <button ref={prevRef} className="cursor-pointer hover:bg-gray-300">
            <GoChevronLeft size={30} color="#141522" />
          </button>
          <button ref={nextRef} className="cursor-pointer hover:bg-gray-300">
            <GoChevronRight size={30} color="bg-[#141522]" />
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        {DataMentors ? (
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="mySwiper"
            navigation={
              {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              } as NavigationOptions
            }
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            modules={[Navigation]}
          >
            {DataMentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <MentorsCard
                  id={mentor.id}
                  name={mentor.name}
                  imageProfile={mentor.imageProfile}
                  profession={mentor.profession}
                  rating={mentor.rating}
                  taskQuantity={mentor.taskQuantity}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span>loading...</span>
        )}
      </div>
    </div>
  );
};
