import React,{useState,useRef} from 'react';
import './css/style.css';
import image from "./images/illustration-dashboard.png";

import MessageSuss from './components/MessageSucc';
import MessageFail from './components/MessageFail';

import Face from './components/FacebookSvg'; 
import Twitter from './components/TwitterSvg';
import Insta from './components/InsatSvg';


function App() {
  const [message,setMessage] = useState();
  const emailInput = useRef();

  const showmessage = (e) =>{
    e.preventDefault();
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email  = emailInput.current.value;
  if(reg.test(email)){
    setMessage(<MessageSuss/>);
    emailInput.current.value = "";
    emailInput.current.className = "success";
  }else{
    setMessage(<MessageFail/>)
    emailInput.current.className = "false"
  };
};

  return (
    <div className="flex-box">
      <ul className="title">
        <li className="ping">Ping</li>
        <li className="dot">.</li>
      </ul>
      <ul className="title">
        <li className="text">We are launching</li>
        <li className="soon">soon!</li>
      </ul>
      <p className="text2">Subscribe and get notified</p>
      <form className="form" >
        <div className="message">
        <input
        placeholder="Your email address"
        ref={emailInput}
         />
         {message}
         </div>
        <button onClick={showmessage}>Notify Me</button>    
      </form>
      <img className="dashboard" src={image} alt="dashboard"/>
    <div  className="list-image">
         <Face/>
         <Twitter/>
         <Insta/>
      </div>
      <p className="footer"> © Copyright Ping. All rights reserved.</p>
    </div>
  );
}

export default App;
