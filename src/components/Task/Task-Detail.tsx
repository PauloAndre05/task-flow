import { SubHeader } from "../subHeader/subHeader";
import { ImageTaskToday } from "../../assets/overview";
import { BsClock } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { DataNewTask } from "./DataNewTask";

const DataDetailTask = [
  { id: 1, description: "Understanding the tools in Figma" },
  { id: 2, description: "Understand the basics of making designs" },
  { id: 3, description: "Design a mobile application with figma" },
];
export const TaskDetail = () => {
  const { id } = useParams<{ id: string }>();
  const task = id ? DataNewTask.find((task) => task.id === parseInt(id)) : null;
  console.log(task);

  return (
    <>
      {task && (
        <div>
          <div className="sticky top-0 bg-white z-10 pb-6 px-8">
            <SubHeader />
          </div>
          <div className="flex p-8 gap-8">
            <div className=" flex-1 bg-white">
              <div className="w-full">
                <img
                  src={task.image}
                  alt="Image-Task"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">
                  {task.title}
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
                    Follow the video tutorial above. Understand how to use each
                    tool in the Figma application. Also learn how to make a good
                    and correct design. Starting from spacing, typography,
                    content, and many other design hierarchies. Then try to make
                    it yourself with your imagination and inspiration.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold">
                    Essence of Assessment
                  </h1>
                  <div className="flex flex-col gap-4">
                    {DataDetailTask.map((detail) => (
                      <div key={detail.id} className=" flex gap-3 items-center">
                        <IoCheckmarkCircleSharp color="#546FFF" size={24} />{" "}
                        <span>{detail.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] rounded-md p-6 bg-white h-fit">
              <span className="font-semibold">Assigned Assignments</span>
              <div className="my-6">
                <h1 className="text-2xl font-semibold mb-3">
                  Creating Awesome Mobile Apps
                </h1>
                <span className="text-[#54577A]">
                  UI UX Design . Apps Design
                </span>
              </div>
              <h2 className="text-2xl font-semibold">Detail Student</h2>
              <div className="my-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#54577A]">Student's name</span>
                  <span className="font-semibold">Skylar Dias</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#54577A]">Student Class</span>
                  <span className="font-semibold">MIPA 2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#54577A]">Student Number</span>
                  <span className="font-semibold">10</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold">File Task</h2>
              <div className="flex justify-between items-center my-4">
                <span className="text-[#54577A]">Last Modified</span>
                <span className="font-semibold">1 July 2022</span>
              </div>
              <span className="text-[#54577A]">File submissions</span>
              <form className="mt-2">
                <input
                  type="file"
                  name=""
                  id=""
                  className="w-full border-dashed border-2 border-[#546FFF] p-4 place-content-center rounded-md h-[15rem] outline-0"
                />
              </form>
              <p className="text-sm my-2 text-[#54577A]">
                *drag or browser from device
              </p>
              <button
                type="submit"
                className="w-full h-11 bg-[#546FFF] text-white rounded-xl cursor-pointer transition-colors hover: hover:bg-blue-50 hover:text-gray-700 mt-14"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
