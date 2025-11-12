import { useEffect, useState } from "react";

export const Setting = () => {
  useEffect(() => {
    document.title = "Task Flow - Settings";
  }, []);

  const [selectedSetting, setSelectedSetting] = useState<boolean>(true)
  const handleSelectSetting = (id: number, setting: boolean) => {
    setSelectedSetting(!setting)
  }
  return (
    <div className="p-6">
      <div className="bg-white rounded-md p-8">
        <div className="flex gap-10 border-b pb-4 border-gray-200">
          <span className={`${selectedSetting ? "border-b-2 border-[#546FFF] ": ""}cursor-pointer`}
          onClick={() => handleSelectSetting(1, true)}>General</span>
          <span className={`cursor-pointer`}>Notification</span> 
        </div>
        <div></div>
      </div>
    </div>    
  )
}
