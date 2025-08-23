import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../index.css";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef, useEffect, useState } from "react";
import { Task } from "./Task";
import { DataTimeLimite } from "./DataTimeLimite";

type TimeLimiteProps = {
  name: string;
};

export const TimeLimite = ({ name }: TimeLimiteProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const DataTaskFiltered = name
    ? DataTimeLimite.filter((task) =>
        task.title.toLowerCase().includes(name.toLowerCase())
      )
    : DataTimeLimite;


  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between items-center pr-6">
        <h1 className="text-2xl font-semibold">Time Limit</h1>
        <div className="flex gap-1">
          <button ref={prevRef} className="cursor-pointer hover:bg-gray-300">
            <GoChevronLeft size={30} color="#141522" />
          </button>
          <button ref={nextRef} className="cursor-pointer hover:bg-gray-300">
            <GoChevronRight size={30} color="#141522" />
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        {DataTaskFiltered ? (
          <Swiper
            slidesPerView={4}
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
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[Navigation]}
          >
            {DataTaskFiltered.map((task) => (
              <SwiperSlide key={task.id}>
                <Task
                  id={task.id}
                  image={task.image}
                  title={task.title}
                  Sector={task.Sector}
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
