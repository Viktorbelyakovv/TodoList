import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getTasksError } from "../../store/tasks/selectors";
import { getCategoriesError } from "../../store/categories/selectors";
import "./Error.css";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  const errorTasks = useSelector(getTasksError);
  const errorCategories = useSelector(getCategoriesError);

  return (
    <div className="Error">
      <h1>{errorTasks || errorCategories ? message : ""} </h1>
    </div>
  );
};

export default Error;