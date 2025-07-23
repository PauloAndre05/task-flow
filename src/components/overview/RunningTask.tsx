import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const RuuningTask = () => {
  const porcentagem = 45;

  return (
    <div className="bg-[#141522] text-white p-5 rounded-md flex flex-col gap-4 w-56">
      <h1 className=" font-medium">Running Task</h1>
      <p className="text-4xl font-medium">65</p>
      <div className="flex gap-3 items-center">
        <span className="w-20 h-20">
          <CircularProgressbar 
            value={porcentagem} 
            text={`${porcentagem} %`} 
            styles={buildStyles ({
                textColor: "white",
                pathTransitionDuration: 0.5,
                trailColor : '#8E92BC',
                pathColor: "#546FFF"
            })}
        />
        </span>
        <div className="flex gap-1 flex-col">
          <span>100</span>
          <p className="text-xs text-[#8E92BC]">Task</p>
        </div>
      </div>
    </div>
  );
};
