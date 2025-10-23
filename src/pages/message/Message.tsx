import { useEffect } from "react";
import { Chat } from "../../components/message/Chat";
import { UsersList } from "../../components/message/UsersList";

export const Message = () => {
  useEffect(() => {
    document.title = "Task Flow - Message";
  }, []);
  return(
    <div className="flex border-t-[1px] border-gray-100">
      <UsersList />
      <Chat />
    </div>
  )
};
