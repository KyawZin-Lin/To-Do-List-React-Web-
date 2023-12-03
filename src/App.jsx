import { useEffect, useState } from "react";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

import { api } from "./api/apiResource";
import uuid from "react-uuid";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/toDoLists");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("use eff run");
    fetchData();
  }, []);

  const getUserInput = async (userInput) => {
    // console.log(typeof(userInput));
    if (userInput !== "") {
      const newData = { id: uuid(), task: userInput, status: "false" };
      try {
        const response = await api.post("/toDoLists", newData);
        console.log(response);
        // setData([...data,response.data]);

        setData(prevState => [...prevState, response.data])
        // fetchData()
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      alert("Need to added to do list ");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await api.delete(`/toDoLists/${taskId}`);
        setData(prevState => prevState.filter(item => item.id != taskId ))
      //  fetchData()
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const updateTask=async(taskId,status)=>{
  //  console.log(taskId, status);
  try{
    const response = await api.patch(`toDoLists/${taskId}`,{status});
      fetchData()

  }catch(error){
    console.error("Error posting data:", error);

  }

  };

  return (
    <div className="container w-50">
      <Form getUserInput={getUserInput} />
      <List tasks={data} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
