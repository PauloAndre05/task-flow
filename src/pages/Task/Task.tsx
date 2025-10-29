import { useEffect, useState } from "react";
import { TimeLimite } from "../../components/Task/Time-Limite";
import { NewTask } from "../../components/Task/New-Task";
import { SubHeader } from "../../components/subHeader/subHeader";
import { DataNewTask } from "../../components/Task/DataNewTask";
import { DataTimeLimite } from "../../components/Task/DataTimeLimite";

export const Task = () => {
  useEffect(() => {
    document.title = "Task Flow - Tasks";
  }, []);

  const [name, setName] = useState<string>("");

  const filteredNewTasks = DataNewTask.filter((task) =>
    task.title.toLowerCase().includes(name.toLowerCase())
  );
  const filteredDataLimite = DataTimeLimite.filter((task) =>
    task.title.toLowerCase().includes(name.toLowerCase())
  );

  const hasResulNewTask = filteredNewTasks.length > 0;
  const hasResulDataLimite = filteredDataLimite.length > 0;
  const hasResult = hasResulNewTask || hasResulDataLimite;

  return (
    <div className="relative">
      <div className="sticky top-0 bg-white z-10 pb-6 px-8">
        <SubHeader onSearch={(value) => setName(value)} />
      </div>
      <div className="flex flex-col gap-4 pl-8 pt-6 pb-6">
        {hasResult ? (
          <div className="flex flex-col gap-4">
            {hasResulDataLimite && <TimeLimite name={name} />}
            {hasResulNewTask && <NewTask name={name} />}
          </div>
        ) : (
          <h1 className="text-2xl font-semibold">Nenhuma task encontrado!</h1>
        )}
      </div>
    </div>
  );
};
