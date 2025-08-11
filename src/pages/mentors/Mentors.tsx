import { use, useEffect, useState } from "react";
import { RecentMentors } from "../../components/mentors/Recent-Mentors";
import { MentorsList } from "../../components/mentors/Mentors-List";
import { SubHeader } from "../../components/subHeader/subHeader";

export const Mentors = () => {
  useEffect(() => {
    document.title = "Task Flow - Mentors";
  }, []);

  const [name, setName] = useState<string>()
  return (
      <div>
        <div className="sticky top-0 bg-white z-10 pb-6 px-8">
          <SubHeader onSearch={(value) => setName(value)} />
        </div>
        <RecentMentors />
        <MentorsList />
      </div>
  );
};
