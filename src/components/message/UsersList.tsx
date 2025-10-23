import { BsSearch } from "react-icons/bs";

import { DataMentors } from "../mentors/DataMentors";
import { useState } from "react";

type InputType = {
  name?: string;
};

export const UsersList = () => {
  const [selectedUser, setSelectedUser] = useState<number>();

  const handleSelectUser = (id: number) => {
    setSelectedUser(id);
  };


  const getUserInitials = (name: string) => {
    const world = name.trim().split(/\s+/);
    const firstInitial = world[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      world.length > 1 ? world[world.length - 1].charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };
  return (
    <div className="w-[25%] bg-white overflow-y-auto max-h-[90vh]">
      <div className="sticky top-0 bg-white z-50 p-6 pb-0">
        <div className="flex items-center border border-[#F5F5F7] w-full rounded-md p-3 gap-2">
          <input
            type="text"
            placeholder="Search Name"
            className="flex-1 outline-hidden"
          />
          <BsSearch className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 ">
        {DataMentors ? (
          DataMentors.map((user) => (
            <div
              className={`w-full py-2 px-3 flex items-center gap-3 cursor-pointer hover:bg-[#FAFAFA] rounded-md ${
                selectedUser === user.id ? "bg-[#FAFAFA]" : ""
              } `}
              onClick={() => handleSelectUser(user.id)}
              key={user.id}
            >
              <div className="w-12 h-12">
                {user.imageProfile ? (
                  <img
                    src={user.imageProfile}
                    alt="user Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#141522] rounded-full flex items-center justify-center ">
                    <span className="font-semibold text-2xl text-white">
                      {getUserInitials(user.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-sm">{user.name}</h1>
                  <span className="text-xs text-[#8E92BC]">1mAgo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">
                    Thank’s. You are very helpful...
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#DB5962]" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Usuário não encontrado!</p>
        )}
      </div>
    </div>
  );
};
