import { useEffect, useState } from "react";
import { TimeLimite } from "../../components/Task/Time-Limite";
import { NewTask } from "../../components/Task/New-Task";
import { SubHeader } from "../../components/subHeader/subHeader";

export const Task = () => {
  useEffect(() => {
    document.title = "Task Flow - Tasks";
  }, []);

  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<boolean>(true); // começa true para exibir na primeira vez

  return (
    <div>
      <div className="sticky top-0 bg-white z-10 pb-6 px-8">
        <SubHeader onSearch={(value) => setName(value)} />
      </div>
      <div className="flex flex-col gap-4 pl-6 pt-6 pb-6">
        {/* Sempre renderiza os componentes para que possam atualizar o estado */}
        <TimeLimite name={name} result={result} setResult={setResult} />
        <NewTask name={name} result={result} setResult={setResult} />

        {/* Só mostra a mensagem se não houver resultados */}
        {!result && (
          <h1 className="text-2xl font-semibold">
            Nenhum resultado encontrado
          </h1>
        )}
      </div>
    </div>
  );
};
