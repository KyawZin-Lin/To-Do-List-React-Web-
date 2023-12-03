import React from "react";

function Card({ tasks ,deleteTask,updateTask}) {
 
const deleteHandler= (id)=>{
  if(confirm('Are you sure you want to delete?')){
    deleteTask(id);
  }
}

const updateHandler=(id,status)=>{
  var oppositeStatus=!status;
  // console.log(status,opposite);
 updateTask(id,oppositeStatus);
}
 
  return (
    <div className="">

      {tasks.map((task)=>(
        <div key={task.id} className={task.status == true ? 'list-group-item mt-3 shadow-sm text bg-success text-decoration-line-through' : 'list-group-item mt-3 shadow-sm'}>
        <div className="row">
          <div className="col-10"> <input  type="checkbox"  onClick={()=>{updateHandler(task.id, !task.status)}} defaultChecked={task.status== true ? 'checked' : ''} name="" id="" /> {task.task}</div>
          <button onClick={()=>{deleteHandler(task.id)}} className="col-2 btn">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Card;
