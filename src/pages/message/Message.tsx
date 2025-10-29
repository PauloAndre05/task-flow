import { useEffect, useState } from "react";
import { Chat } from "../../components/message/Chat";
import { UsersList } from "../../components/message/UsersList";

export const Message = () => {
  useEffect(() => {
    document.title = "Task Flow - Message";
  }, []);

  const [user, setUser] = useState<number | undefined>(undefined);

  return(
    <div className="flex border-t-[1px] border-gray-100">
      <UsersList onselectUser={setUser}/>
      <Chat user={user}/>
    </div>
  )
};
