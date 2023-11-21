import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import axios from 'axios'


function App() {
  const [data, setData] = useState([])
  const fetchData=()=>{
    axios.get('http://localhost:3001/toDoLists').then((response)=>{
      // console.log(response.data);
      setData(response.data);
    })
  }
  useEffect(()=>{
   fetchData();
  },[]);

  return (
    <div className="container w-50">
       <Form />
      <List data={data}/>
    </div>
  )
}

export default App
