import {
  format,
  addWeeks,
  subWeeks,
  startOfWeek,
  addDays,
  isToday,
} from "date-fns";
import { pt } from "date-fns/locale";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const Calendary = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = format(currentDate, "MMMM", { locale: pt });
  const year = format(currentDate, "yyyy");

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const handlePreviousWeek = () => {
    setCurrentDate((prev) => subWeeks(prev, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate((prev) => addWeeks(prev, 1));
  };

  return (
    <div className="bg-white w-96 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <GoChevronLeft
          size={24}
          color="#141522"
          className="cursor-pointer"
          onClick={handlePreviousWeek}
        />
        <span className="font-semibold text-lg">{`${month} ${year}`}</span>
        <GoChevronRight
          size={24}
          color="#141522"
          className="cursor-pointer"
          onClick={handleNextWeek}
        />
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-700 mb-3">
        {weekDays.map((day, index) => (
          <div key={index}>{format(day, "EEE", { locale: pt })}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-sm text-gray-800">
        {weekDays.map((day, index) => {
          const isCurrentDay = isToday(day);
          return (
            <div
              key={index}
              className={`rounded-full w-8 h-8 mx-auto flex items-center justify-center ${
                isCurrentDay ? "bg-black text-white font-bold" : ""
              }`}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};
