import { DataMentors } from "../mentors/DataMentors";
import {
  videocall,
  voicecall,
  logoTaskFlow,
  iconBottomSendMessage,
  iconClipFile,
} from "../../assets/message/index";
import { PiLockSimple } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ChatProps {
  user?: number;
}

type InputType = {
  message?: string;
};

export const Chat = ({ user }: ChatProps) => {
  const userChat = DataMentors.find((u) => u.id === user);
  const [message, setMessage] = useState<string>("");

  const getUserInitials = (name: string) => {
    const world = name.trim().split(/\s+/);
    const firstInitial = world[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      world.length > 1 ? world[world.length - 1].charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const { register, handleSubmit, reset } = useForm<InputType>();
  const handleSendMessage = (data: InputType) => {
    console.log("Message sent:", data.message);
    setMessage(data.message || "");
    reset();
  };

  return (
    <>
      {userChat ? (
        <div className="flex-1 flex flex-col">
          <div className="bg-white p-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                {userChat?.imageProfile ? (
                  <img
                    src={userChat.imageProfile}
                    alt={`Foto de perfil de ${userChat.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#141522] rounded-full flex items-center justify-center ">
                    <span className="font-semibold text-xl text-white">
                      {getUserInitials(userChat?.name || "")}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">{userChat?.name}</h2>
                <div className="flex gap-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#25C78B] ml-1" />
                  <p className="text-sm font-medium">online</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                src={videocall}
                alt="Video call icon"
                className="cursor-pointer"
              />
              <img
                src={voicecall}
                alt="Voice call icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className=" p-8 flex-1 flex items-end justify-end">
            {message && (
              <div className="bg-[#546FFF] text-white p-2 rounded-lg text-sm max-w-[40%] text-wrap">
                {message}
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit(handleSendMessage)}
            className="bg-white mt-auto flex justify-between items-center py-3 px-8"
          >
            <textarea
              placeholder="Send you message"
              className="outline-none flex-1 mr-4 py-4 resize-none overflow-y-auto rounded-md text-sm text-gray-700 hidden-scrollbar"
              rows={1}
              {...register("message")}
            />
            <div className="flex items-center gap-4">
              <button className="cursor-pointer">
                <img src={iconClipFile} alt="Clip-File-Icon" />
              </button>
              <button className="cursor-pointer" type="submit">
                <img src={iconBottomSendMessage} alt="Clip-File-Icon" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* View if no user selected */
        <div className="flex-1 flex flex-col items-center justify-center  py-14">
          <div className="inset-0  flex-1 flex flex-col justify-center items-center gap-1">
            <img src={logoTaskFlow} alt="" className="w-24" />
            <h1 className="font-semibold text-xl text-gray-500">
              Task Flow for Web
            </h1>
            <p className="text-gray-400">
              Select a user to start a conversation
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <PiLockSimple className="text-gray-400 font-semibold" size={14} />
            <p className="mt-auto text-gray-500 text-sm">
              End-to-end encrypted
            </p>
          </div>
        </div>
      )}
    </>
  );
};
