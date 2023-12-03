import React, { useRef, useState } from "react";

export default function Form({getUserInput}) {


const [input,setInput] = useState('');

  return (
    <div>
      <h3 className="mb-3">Kyaw Zin Lin's To Do List</h3>
      <div className="row ">
        <div className="col-8">
          <input  value={input} onChange={e=>setInput(e.target.value)}
            className="form-control"
            placeholder="Enter Your Task"
            type="text"
          />
        </div>
        <div className="col-4">
          <button type="button" onClick={()=>{getUserInput(input),setInput('')}} className="btn btn-primary"><i className="fa-solid fa-plus"></i>Create</button>
        </div>
      </div>
    </div>
  );
}
