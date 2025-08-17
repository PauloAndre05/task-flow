import { useEffect, useState } from "react";
import { RecentMentors } from "../../components/mentors/Recent-Mentors";
import { MentorsList } from "../../components/mentors/Mentors-List";
import { SubHeader } from "../../components/subHeader/subHeader";
import { DataRecentMentors } from "../../components/mentors/DataRecenteMentors";
import { DataMentors } from "../../components/mentors/DataMentors";

export const Mentors = () => {
  useEffect(() => {
    document.title = "Task Flow - Mentors";
  }, []);

  const [name, setName] = useState<string>("");
  const filteredRecentMentors = DataRecentMentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(name.toLowerCase())
  );
  const filteredMentorList = DataMentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(name.toLowerCase())
  );

  const hasResultRecentMentors = filteredRecentMentors.length > 0;
  const hasResultMentorList = filteredMentorList.length > 0;
  const hasResult = hasResultRecentMentors || hasResultMentorList;
  return (
    <div>
      <div className="sticky top-0 bg-white z-10 pb-6 px-8">
        <SubHeader onSearch={(value) => setName(value)} />
      </div>
      {hasResult ? (
        <div className="flex flex-col gap-4 pl-6 pt-6 pb-6">
          {hasResultRecentMentors && <RecentMentors name={name} />}
          {hasResultMentorList && <MentorsList name={name} />}
        </div>
      ) : (
        <h1 className="text-2xl font-semibold">Nenhum resultado encontrado</h1>
      )}
    </div>
  );
};
