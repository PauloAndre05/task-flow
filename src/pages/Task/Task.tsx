import { useEffect, useState } from "react";
import { TimeLimite } from "../../components/Task/Time-Limite";
import { NewTask } from "../../components/Task/New-Task";
import { SubHeader } from "../../components/subHeader/subHeader";

export const Task = () => {
  useEffect(() => {
    document.title = "Task Flow - Tasks";
  }, []);

  const [name, setName] = useState<string>("");

  return (
    <div>
      <div className="sticky top-0 bg-white z-10 pb-6 px-8">
        <SubHeader onSearch={(value) => setName(value)} />
      </div>
      <div className="flex flex-col gap-4 pl-6 pt-6 pb-6">
        <TimeLimite name={name} />
        <NewTask />
      </div>
    </div>
  );
};
