import React,{use, useEffect,useState} from "react";
import { FaBeer } from "react-icons/fa";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [showData, setshowData] = useState([]);
  const loaddata = () => {
    fetch(url,{
      method: "GET",

    }).then(res=>res.json())
    .then((result) => {
      if(result){
        setshowData(result);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=> {
    loaddata();
  },[]);

  return (
    <div className="container">
      <h1>hi there</h1>
      <h2>{JSON.stringify(showData)}</h2>
    </div>
  );
}

export default App;
