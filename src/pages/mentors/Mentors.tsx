import { use, useEffect } from "react";
import { RecentMentors } from "../../components/mentors/Recent-Mentors";
import { MentorsList } from "../../components/mentors/Mentors-List";

export const Mentors = () => {
  useEffect(() => {
    document.title = "Task Flow - Mentors";
  }, []);
  return <div className="flex flex-col gap-4 pl-6 pt-6 pb-6">
    <RecentMentors />
    <MentorsList />
  </div>;
};
