import { format, addYears } from "date-fns";
import { useState } from "react";
import { FaArrowLeft, FaChevronLeft } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const date = new Date();
const month = format(date, "MMMM");
const year = format(date, "yyyy");


export const Calendary = () => {
    const [currentYear, setCurrentYear] = useState(year);

    const handleNextYear = () => {
        const nextYear = addYears(new Date(currentYear), 1); 
        setCurrentYear(format(nextYear, "yyyy"));
    console.log(currentYear);
    }

  return (
    <div className="bg-white w-96 h-40 rounded-2xl p-6">
      <div className="flex justify-between">
        <GoChevronLeft size={24} color="#141522" className="cursor-pointer" onClick={() => handleNextYear}/>
          {`${month} ${currentYear}`}
        <GoChevronRight size={24} color="#141522" />
      </div>
    </div>
  );
};
