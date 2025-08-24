import { CiSearch } from "react-icons/ci";
import { Category, SortBy } from "../../assets/subHeader/index";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

type InputType = {
  name?: string;
};

type SubHeaderProps = {
  onSearch?: (value: string) => void;
  onClick?: (value: string) => void;
};

export const SubHeader = ({onSearch, onClick}: SubHeaderProps) => {
  const [placeholder, setPlaceholder] = useState<string>();
  const location = useLocation();

  const {id} = useParams<{id: string}>()

  useEffect(() => {
    if (location.pathname === "/task") {
      setPlaceholder("Search Task");
    } else if (location.pathname === "/mentors") {
      setPlaceholder("Search Mentors");
    } else if (location.pathname === `/task/task-detail/${id}`) {
      setPlaceholder("Search task to show detail");}
      else setPlaceholder("");
  }, [location.pathname]);

  const {register, handleSubmit} = useForm<InputType>();
  const handleSearch = (data: InputType) => {
    if (onSearch)
      onSearch(data.name ?? "") 
  };
  const handleSearchClick = (data: InputType) => {
    if (onClick)
      onClick(data.name ?? "") 
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
          <CiSearch size={24} className="cursor-pointer text-[#8E92BC]" onClick={handleSubmit(handleSearchClick)}/>
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
