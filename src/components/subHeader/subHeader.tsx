import { CiSearch } from "react-icons/ci";
import { Category, SortBy } from "../../assets/subHeader/index";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

type InputType = {
  name?: string;
};

type SubHeaderProps = {
  onSearch?: (value: string) => void;
};

export const SubHeader = ({onSearch}: SubHeaderProps) => {
  const [placeholder, setPlaceholder] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/task") {
      setPlaceholder("Search Task");
    } else if (location.pathname === "/mentors") {
      setPlaceholder("Search Mentors");
    } else setPlaceholder("");
  }, [location.pathname]);

  const {register, handleSubmit} = useForm<InputType>();
  const handleSearch = (data: InputType) => {
    if (onSearch && data.name)
      onSearch(data.name)
  };

  return (
    <div className="flex justify-between items-center bg-white">
      <form className="w-2/5" onChange={handleSubmit(handleSearch)}>
        <div className="border flex items-center py-3 px-4 rounded-md border-[#F5F5F7]">
          <input
            type="text"
            placeholder={placeholder}
            className=" border-hidden outline-hidden w-full"
            {...register("name")}
          />
          <CiSearch size={24} className="cursor-pointer text-[#8E92BC]" onClick={() => handleSearch}/>
        </div>
      </form>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 border rounded-md border-[#F5F5F7] py-3 px-4 cursor-pointer">
          <img src={Category} alt="Category-Icon" />
          <p>Category</p>
        </div>
        <div className="flex items-center gap-2 border rounded-md border-[#F5F5F7] py-3 px-4 cursor-pointer">
          <img src={SortBy} alt="Sort-By-Icon" />
          <p>Sort By : Deadline</p>
        </div>
      </div>
    </div>
  );
};
