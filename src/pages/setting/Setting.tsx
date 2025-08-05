import { useEffect } from "react";

export const Setting = () => {
  useEffect(() => {
    document.title = "Task Flow - Settings";
  }, []);
  return <h1>Setting</h1>;
};
