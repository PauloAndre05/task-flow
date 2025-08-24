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
    <div
      className="w-full border fixed z-10 inset-0 backdrop-blur-[1px]"
      onClick={closeModal}
    >
      <div className="bg-red-400 w-60 h-96  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
        Modal
      </div>
    </div>
  );
};
