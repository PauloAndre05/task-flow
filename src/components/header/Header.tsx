import { Notification } from "../../assets/header"
import { ImageProfile } from "../../assets/header"

export const Header = () => {
    return (
        <div className="flex justify-between py-4 px-8 bg-white">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Hi, Paulo André</h2>
                <p className="text-gray-400">Let's finish your task today!</p>
            </div>
            <div className="flex gap-5">
                <img src={Notification} alt="Notification" />
                <img src={ImageProfile} alt="ImageProfile" />
            </div>
        </div>
    )
}