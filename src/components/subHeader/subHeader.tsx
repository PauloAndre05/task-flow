import { CiSearch } from "react-icons/ci";
import { Category, SortBy } from "../../assets/subHeader/index";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { CreateTaskModal } from "../Task/createTaskModal";
import Modal from "@mui/material/Modal";

type InputType = {
  name?: string;
};

type SubHeaderProps = {
  onSearch?: (value: string) => void;
  onClick?: (value: string) => void;
};

export const SubHeader = ({ onSearch, onClick }: SubHeaderProps) => {
  const [placeholder, setPlaceholder] = useState<string>();
  const location = useLocation();
  const currentPath = location.pathname === "/task";
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);

  const openModal = () => {
    setIsOpenCreateTaskModal(!isOpenCreateTaskModal);
  };

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (location.pathname === "/task") {
      setPlaceholder("Search Task");
    } else if (location.pathname === "/mentors") {
      setPlaceholder("Search Mentors");
    } else if (location.pathname === `/task/task-detail/${id}`) {
      setPlaceholder("Search task to show detail");
    } else setPlaceholder("");
  }, [location.pathname]);

  const { register, handleSubmit } = useForm<InputType>();
  const handleSearch = (data: InputType) => {
    if (onSearch) onSearch(data.name ?? "");
  };
  const handleSearchClick = (data: InputType) => {
    if (onClick) onClick(data.name ?? "");
  };

  return (
    <div className="flex justify-between items-center bg-white relative">
      <form className="w-2/5" onChange={handleSubmit(handleSearch)}>
        <div className="border flex items-center py-3 px-4 rounded-md border-[#F5F5F7]">
          <input
            type="text"
            placeholder={placeholder}
            className=" border-hidden outline-hidden w-full"
            {...register("name")}
          />
          <CiSearch
            size={24}
            className="cursor-pointer text-[#8E92BC]"
            onClick={handleSubmit(handleSearchClick)}
          />
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
        <div>
          {currentPath && (
            <button
              className="px-14 py-3 bg-[#546FFF] text-white mt-auto rounded-xl cursor-pointer transition-colors hover: hover:bg-blue-50 hover:text-gray-700"
              onClick={openModal}
            >
              New Task
            </button>
          )}
        </div>
      </div>
      {isOpenCreateTaskModal && (
        <CreateTaskModal setIsOpenCreateTaskModal={setIsOpenCreateTaskModal} />
      )}
    </div>
  );
};
