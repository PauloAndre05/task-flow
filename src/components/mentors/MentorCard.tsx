import { CountTaskIcon, StarIcon } from "../../assets/mentors/index";

import type { MentorsType } from "./types/Mentors";

export const MentorsCard = ({
  id,
  name,
  imageProfile,
  profession,
  rating,
  taskQuantity,
}: MentorsType) => {

  const getMentorInitials = (name: string) => {
    const words = name.trim().split(/\s+/); 
    const firstInitial = words[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : "";

    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div
      className="w-full bg-white p-6 rounded-xl flex flex-col gap-6"
      key={id}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            {imageProfile ? (
              <img
                src={imageProfile}
                alt="Mentor Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#141522] flex items-center justify-center ">
                <span className="font-semibold text-2xl text-white">
                  {getMentorInitials(name)}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">{name}</h1>
            <p className="text-xs text-[#54577A]">{profession}</p>
          </div>
        </div>
        <span className="text-[#546FFF]">+Follow</span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={CountTaskIcon} alt="Icon" />
          <span>{taskQuantity}</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img src={StarIcon} alt="Icon" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
