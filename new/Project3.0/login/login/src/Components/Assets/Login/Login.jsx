import React from "react";
import "./Login.css";

const Login = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="name" />
          </div>

          <div className="input">
            <input type="email"  placeholder="email" />
          </div>

          <div className="input">
            <input type="password" placeholder="password" />
          </div>
        </div>
        <div className="password">
          lost pass<span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>submit</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
