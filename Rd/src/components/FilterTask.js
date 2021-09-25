import React from "react";
import { useDispatch } from "react-redux";
import { filter_task } from "../JS/Actions/action";
const FilterTask = () => {
  const dispatch = useDispatch();
  return (
    <div className="add">
      <button onClick={() => dispatch(filter_task("all"))}>All</button>
      <button onClick={() => dispatch(filter_task("done"))}>Done</button>
      <button onClick={() => dispatch(filter_task("notDone"))}>NotDone</button>
    </div>
  );
};

export default FilterTask;
