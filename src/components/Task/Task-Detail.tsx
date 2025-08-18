import { SubHeader } from "../subHeader/subHeader";
import { ImageTaskToday } from "../../assets/overview";
import { BsClock } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import {IoCheckmarkCircleSharp} from "react-icons/io5"

const DataDetailTask = [
  { id: 1, description: "Understanding the tools in Figma" },
  { id: 2, description: "Understand the basics of making designs", },
  { id: 3, description: "Design a mobile application with figma" },
];

const TastTodayData = {
  id: 1,
  image: ImageTaskToday,
  title: "Creating Awesome Mobile Apps",
  Sector: "UI /UX Designer",
};

export const TaskDetail = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10 pb-6 px-8">
        <SubHeader />
      </div>
      <div className="flex p-8 gap-8">
        <div className=" flex-1 bg-white">
          <div className="w-full">
            <img
              src={ImageTaskToday}
              alt="Image-Task"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">
              Creating Awesome Mobile Apps
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center text-sm">
                <span className="text-[#54577A]">
                  UI UX Design . Apps Design
                </span>
                <div className="bg-[#DFDFDF] h-5 w-[.06rem]" />
                <a href="#" className="text-[#04A4F4]">
                  + Get Mentors
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <span className="flex items-center gap-1">
                  <PiUsers size={12} />
                  200 Students Involved
                </span>
                <span className="flex items-center gap-1">
                  <BsClock size={12} />
                  1Hour
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Descrption</h1>
              <p className="text-sm">
                Follow the video tutorial above. Understand how to use each tool
                in the Figma application. Also learn how to make a good and
                correct design. Starting from spacing, typography, content, and
                many other design hierarchies. Then try to make it yourself with
                your imagination and inspiration.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Essence of Assessment</h1>
              <div className="flex flex-col gap-4">
                {DataDetailTask.map(detail => (
                  <div key={detail.id} className=" flex gap-3 items-center">
                    <IoCheckmarkCircleSharp color="#546FFF" size={24}/> <span>{detail.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border w-[23rem]"></div>
      </div>
    </div>
  );
};
