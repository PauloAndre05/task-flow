import { use, useEffect } from "react";

export const Mentors = () => {
  useEffect(() => {
    document.title = "Task Flow - Mentors";
  }, []);
  return <h1>Mentors</h1>;
};
