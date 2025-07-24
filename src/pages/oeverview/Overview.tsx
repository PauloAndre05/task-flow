import { useEffect } from "react";
import { RuuningTask } from "../../components/overview/RunningTask";
import { Activity } from "../../components/overview/Activity";

export const Overview = () => {
  useEffect(() => {
    document.title = "Overview";
  }, []);

  return (
    <div className="  h-full py-4 px-8">
      <div className="flex justify-between gap-10">
        <RuuningTask />
        <Activity />
      </div>
    </div>
  );
};
