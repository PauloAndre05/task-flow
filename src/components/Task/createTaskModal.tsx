interface CreateTaskModalProps {
  setIsOpenCreateTaskModal: (status: boolean) => void;
}

export const CreateTaskModal = ({
  setIsOpenCreateTaskModal,
}: CreateTaskModalProps) => {
  const closeModal = () => {
    setIsOpenCreateTaskModal(false);
  };
  return (
    <div className="w-full fixed">
      <div
        className="w-full border fixed inset-0 backdrop-blur-[1px] bg-[#546FFF]/5"
        onClick={closeModal}
      />
      <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 flex justify-center items-center p-6 flex-col gap-8 shadow-md rounded-md">
        <h1 className="text-2xl font-semibold text-center">
          Create a new Task
        </h1>
        <div className="w-96">
          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Task's title" className="outline-none border-b-2 border-[#546FFF]/30"/>
            <select name="" id="" aria-placeholder="Select the" className="outline-none border-b-2 border-[#546FFF]/30">
              <option value="">Select category</option>
              <option value="">UI/UX Design</option>
              <option value="">Front-End Development</option>
              <option value="">Back-End Development</option>
              <option value="">Document</option>
            </select>
            <textarea 
              name="" 
              id=""
              placeholder="Description"
              className="outline-none border-b-2 border-[#546FFF]/30 resize-none"
            />
            <button
              className=" py-3 bg-[#546FFF] text-white mt-auto rounded-xl cursor-pointer transition-colors hover: hover:bg-blue-50 hover:text-gray-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
