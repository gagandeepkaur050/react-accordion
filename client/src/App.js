import React,{use, useEffect,useState} from "react";
import { FaBeer } from "react-icons/fa";
import Data from "./Data";

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
      <h5>Accordion</h5>
      <div className="row">
        {
          showData.map((item,index) => (
            <div className="cal-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
              <Data {...item} />
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default App;
