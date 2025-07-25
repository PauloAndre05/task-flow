import { ImageProfile } from "../../assets/header/index";
import { CountTaskIcon, StarIcon } from "../../assets/mentors/index";

export const MentorsCard = () => {
  return (
    <div className="w-[20.5rem] bg-white p-6 rounded-xl flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={ImageProfile}
              alt="Image-Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Curious George</h1>
            <p className="text-xs text-[#54577A]">UI UX Design</p>
          </div>
        </div>
        <span className="text-[#546FFF]">+Follow</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={CountTaskIcon} alt="Icon" />
          <span>40Task</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img src={StarIcon} alt="Icon" />
            <span>4,7  (750 Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
