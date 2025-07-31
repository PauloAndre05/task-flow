import { useEffect } from "react";
import { RuuningTask } from "../../components/overview/RunningTask";
import { Activity } from "../../components/overview/Activity";
import { MonthlyMentors } from "../../components/overview/MonthlyMentors";
import { UpComingTask } from "../../components/overview/UpcomingTask";

export const Overview = () => {
  useEffect(() => {
    document.title = "Overview";
  }, []);

  return (
      <div className="h-fill py-4 px-8 flex flex-col gap-8">
        <div className="flex justify-between gap-10"> 
          <RuuningTask />
          <Activity />
        </div>
        <MonthlyMentors />
        <UpComingTask />
      </div>
  );
};
