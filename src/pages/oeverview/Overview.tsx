import { useEffect } from "react";
import { RuuningTask } from "../../components/overview/RunningTask";
import { Activity } from "../../components/overview/Activity";
import { MentorsCard } from "../../components/mentors/MentorCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { DataMentors } from "../../components/mentors/DataMentor";

export const Overview = () => {
  useEffect(() => {
    document.title = "Overview";
  }, []);

  return (
    <>
      <div className="  h-full py-4 px-8 flex flex-col gap-8">
        <div className="flex justify-between gap-10">
          <RuuningTask />
          <Activity />
        </div>
        <h1 className="text-2xl font-semibold">Monthly Mentors</h1>
        <div className="max-w-full overflow-x-auto ">
          {DataMentors ? (
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="mySwiper w-full flex"
          >
            {DataMentors.map((mentor) => (
              <SwiperSlide key={mentor.id} className="border" >
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
    </>
  );
};
