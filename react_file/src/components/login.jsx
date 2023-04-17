import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const [data,setData]= useState({
    email:"",
    password:""
  });

  function handleInput(e){
    let name = e.target.name
    let value = e.target.value
    setData({...data , [name]:value})
  }
  const handleSubmit = async(e)=>{
  e.preventDefault();
     await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response=>{
        if(response.status===200){
          window.alert("succesfullt logged In")
          navigate('/mytemplate')
        }else if(response.status===401){
          window.alert("succesfully failed");
          navigate("/mylogin")
        }
      })
  }

  
  return (
    <>
      <div className="shadow-part">
        <div className="content">
          <a>Composely.in</a>
          <h4>
            Get started comminishing <br />
            high quality content
          </h4>
          <br></br>
          <h3>Hire the top 1% of writers</h3>
          <p>
            less than 1% of applicants meet our standards <br /> because we only
            need perfections
          </p>
          <h3>Save Time and Money</h3>
          <br />
          <p id="p2">
            save an average 80% of content budget in
            <br /> comparison with high hiring in-house staff
          </p>
          <h3>Money Back Gaurantee</h3>
          <p>
            If you're not happy with the final content
            <br />
            you'll get your money back
          </p>
        </div>
      </div>
      <div className="signup">
        <div className="logback">
          <p id="logs">Don't Have an account ?</p>
          <button id="login" onClick={()=>navigate("/")}>SignUp</button>
        </div>
        <form className="myform" action="/" method="post" onSubmit={handleSubmit}>
          <h2>Login to your account</h2>
          <div className="inputfieds">
            <input
              placeholder="Enter Your Email "
              type={"email"}
              name="email"
              value={data.email}
              onChange={handleInput}
              required
            />
            <input
              placeholder="Enter Your Password"
              type={"password"}
              name="password"
              value={data.password}
              onChange={handleInput}
              required
            />

            <button type={"submit"}>
              Login Now
            </button>
            <a onClick={()=>navigate("/mytemplate")}>template</a>
          </div>
        </form>

        <div className="message">
          <p id="apply">Are you a writer looking to write</p>
          <br></br>
          <a id="linkapply">Click here to apply</a>
          
        </div>
      </div>
    </>
  );
};

export default Login;
