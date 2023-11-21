import React from "react";
import Form from "./Form";

function List({data}) {
 
  return (
    <div>
      <div className="row">
      
        {/* List */}
        <div className="col-8">
          <ol className="list-group">
           {data.map((list)=>(
             <div className="list-group-item mt-3 shadow-sm">
             <div className="row">
               <div key={list.id} className="col-10">{list.task}</div>
               <button className="col-2 btn">
                 <i className="fa-solid fa-trash"></i>
               </button>
             </div>
             
           </div>
           ))}
            {/* <div className="list-group-item mt-3 shadow-sm">
              <div className="row">
                <div className="col-10">Task Message</div>
                <button className="col-2 btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              
            </div>  
            
             <div className="list-group-item mt-3 shadow-sm">
              <div className="row">
                <div className="col-10">Task Message</div>
                <button className="col-2 btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              
            </div>  
             <div className="list-group-item mt-3 shadow-sm">
              <div className="row">
                <div className="col-10">Task Message</div>
                <button className="col-2 btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              
            </div> */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default List;
