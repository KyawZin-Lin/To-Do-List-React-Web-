import React from "react";
import Form from "./Form";
import Card from './Card';

function List({tasks,deleteTask,updateTask}) {
 
  return (
    <div>
      <div className="row">
      
        {/* List */}
        <div className="col-8">
          <ol className="list-group">
            <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
         
          </ol>
        </div>
      </div>
    </div>
  );
}

export default List;
