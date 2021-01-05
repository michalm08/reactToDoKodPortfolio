import React from "react";
import Task from "./Task";

const TaskList = ({tasks, delFn, checkFn,editFn}) => {

  

  return (
    <div className="TaskList">
      <h2>Tasks:</h2>
      
      {tasks.map(item=>(
        <Task key={item.id} task={item} delFn={delFn} checkFn={checkFn}/>
      ))}

    </div>
  );
};

export default TaskList;
