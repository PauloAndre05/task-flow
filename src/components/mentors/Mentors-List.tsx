import { DataMentors } from "./DataMentors";
import { MentorsCard } from "./MentorCard";

interface MentorListProps {
  name: string;
}

export const MentorsList = ({ name }: MentorListProps) => {
    const filteredMentorList = name 
    ? DataMentors.filter((mentor) => (
        mentor.name.toLowerCase().includes(name.toLowerCase())
    )) : DataMentors
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Mentors</h1>
      <div className="grid grid-cols-3 gap-9 ">
        {filteredMentorList.map((mentor) => (
          <MentorsCard
            key={mentor.id}
            id={mentor.id}
            imageProfile={mentor.imageProfile}
            description={mentor.description}
            name={mentor.name}
            profession={mentor.profession}
            rating={mentor.rating}
            taskQuantity={mentor.taskQuantity}
          />
        ))}
      </div>
    </div>
  );
};
