import { FaEllipsis } from "react-icons/fa6";
import { ImageTaskToday } from "../../assets/overview/index";
import { Progress } from "../../components/Progress";

const DataDetailTask = [
  { id: 1, position: 1, description: "Understanding the tools in Figma" },
  {
    id: 2,
    position: 2,
    description: "Understand the basics of making designs",
  },
  { id: 3, position: 3, description: "Design a mobile application with figma" },
];

export const TaskToday = () => {
    return(
        <div className="bg-white w-96 flex-1 rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <h1>Task Today</h1>
              <FaEllipsis />
            </div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={ImageTaskToday}
                alt="Image-Taskl-Today"
                className="object-cover w-full overflow-hidden"
              />
            </div>
            <div>
              <h1 className="font-semibold text-sm">
                Creating Awesome Mobile Apps
              </h1>
              <p className="text-xs text-[#54577A]">UI /UX Designer</p>
            </div>
            <Progress />
            <hr className="text-[#F5F5F7]" />
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-sm">Detail Task</h1>
              <p className="text-xs text-[#54577A]">UI /UX Designer</p>
            </div>
            <div className="flex flex-col gap-4">
              {DataDetailTask.map((item) => (
                <div className="flex gap-3 items-center" key={item.id}>
                  <span className="w-10 h-10 bg-[#F5F5F7] rounded-md text-xl flex justify-center items-center">
                    {item.position}
                  </span>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <button className="w-full h-11 bg-[#546FFF] text-white mt-8 rounded-xl cursor-pointer transition-colors hover: hover:bg-blue-50 hover:text-gray-700  ">Go To Detail</button>
          </div>
    )
}