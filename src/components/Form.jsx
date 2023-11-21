import React from "react";

export default function Form() {
  return (
    <div>
      <h3 className="mb-3">React To Do List</h3>
      <div className="row ">
        <div className="col-8">
          <input
            className="form-control"
            placeholder="Enter Your Task"
            type="text"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Create</button>
        </div>
      </div>
    </div>
  );
}
