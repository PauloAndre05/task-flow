import { useEffect } from "react";
import { RuuningTask } from "../../components/overview/RunningTask";
import { Activity } from "../../components/overview/Activity";
import { MentorsCard } from "../../components/mentors/MentorCard";

export const Overview = () => {
  useEffect(() => {
    document.title = "Overview";
  }, []);

  return (
    <div className="  h-full py-4 px-8 flex flex-col gap-8">
      <div className="flex justify-between gap-10">
        <RuuningTask />
        <Activity />
      </div>
      <h1 className="text-2xl font-semibold">Monthly Mentors</h1>
      <MentorsCard />
    </div>
  );
};
