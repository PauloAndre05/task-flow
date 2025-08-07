import { useLocation } from "react-router-dom";
import { Notification } from "../../assets/header";
import { ImageProfile } from "../../assets/header";
import { SubHeader } from "../subHeader/subHeader";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div
      className={`${
        !isHomePage ? "bg-white" : ""
      } flex flex-col py-4 px-8 `}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 justify-center">
          {title && <h2 className="font-semibold text-2xl">{title}</h2>}
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
        <div className="flex gap-5 items-center">
          <img src={Notification} alt="Notification" />
          <img src={ImageProfile} alt="ImageProfile" />
        </div>
      </div>
    </div>
  );
};
