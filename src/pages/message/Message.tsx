import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    document.title = "Task Flow - Message";
  }, []);
  return <h1>Message</h1>;
};
