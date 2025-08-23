import { Progress } from "../Progress";
import { useNavigate} from "react-router-dom";

import type { TaskType } from "./TypeTask";

export const Task = ({ id, image, title, Sector }: TaskType) => {
  const navigate = useNavigate()

  return (
    <div
      key={id}
      className="flex flex-col gap-4 bg-white p-6 rounded-2xl cursor-pointer"
      onClick={() => navigate(`/task/task-detail/${id}`)}
    >
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
        <h1 className="font-semibold text-sm">{title}</h1>
        <p className="text-xs text-[#54577A]">{Sector}</p>
      </div>
      <Progress />
    </div>
  );
};
