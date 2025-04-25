import React,{useState} from "react";
import "./App.css";
import { FcExpand, FcCollapse } from "react-icons/fc";


const Data = ({title,body}) => {
    const [show,setshow] = useState(false);
    const haddleClick = () => {
        setshow(!show);
    }
    return (
        <div className={show? "acoordion-open accordionItem" : "accordionItem"} onClick={haddleClick} 
        // onMouseEnter = {() => {setshow(true)}} 
        // onMouseLeave = {() => {setshow(false)}}
        >
            <div className="accordionTitle">
                <h4>{title}</h4>
                <p>            
                    {show ? <FcCollapse size={20}/> : <FcExpand size={20}/> } 
                </p>
            </div>
            {show && <p>{body}</p>}
        </div>
    );
}

export default Data;