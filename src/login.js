import { useState } from "react";
import {} from "./index.css";

export const UserLogin = () => {

    const userName = './images/user1.jpg';
    const email = " ./images/Email2.png";
  const password = "./images/password.jpg"
  
  const [action,setAction] = useState("Login")

  return (
    <div className="container">
      <div className="header">
        <div className="text">{ action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div>:<div className="input">
          <img src={userName} alt="username"></img>
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input">
         <img src={email} alt="email" style={{opacity:0.9}}></img>
          <input type="email"  placeholder="Email Id"/>
        </div>

        <div className="input">
         <img src={password}></img>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up"?<div></div>:<div className="forgot-password">
        forgot password <span> click here</span>
      </div>}
      <div className="submit-container">
        <div className={action === "Login"?"submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up"?"submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
};
