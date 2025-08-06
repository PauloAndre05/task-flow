import { FaEllipsis } from "react-icons/fa6";
import { Progress } from "../Progress";

import type { TaskType } from "./TypeTask";

export const Task = ({ id, image, title, Sector }: TaskType) => {
  return (
    <div key={id} className="flex flex-col gap-4 bg-white p-6 rounded-2xl cursor-pointer">
      <div className="w-full overflow-hidden rounded-xl">
        {image && (
          <img
            src={image}
            alt="Image-Taskl-Today"
            className="object-cover w-full overflow-hidden"
          />
        )}
      </div>
      <div>
        <h1 className="font-semibold text-sm">
          {/* Creating Awesome Mobile Apps */} {title}
        </h1>
        <p className="text-xs text-[#54577A]">
          {/* UI /UX Designer */} {Sector}
        </p>
      </div>
      <Progress />
    </div>
  );
};
