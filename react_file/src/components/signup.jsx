import { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {toast} from 'react-toastify';
const Signup = () => {

  const navigate = useNavigate();
  const [data,setData]= useState({
    username:"",
    email:"",
    password:""
  });
function handleInput(e){
  let name = e.target.name
  let value = e.target.value
  setData({...data , [name]:value})
}
const handleSubmit =()=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
fetch('http://localhost:4000/signup', requestOptions)
    .then(response => response.json())
    window.alert("data saved")
    navigate('mylogin')
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
          <i className="fa fa-save"></i>
          <h3>Hire the top 1% of writers</h3>
          <p>
            less than 1% of applicants meet our standards <br /> because we only
            need perfections
          </p>
          <i className="fa fa-cog"></i>
          <h3>Save Time and Money</h3>
          <br />
          <p id="p2">
            save an average 80% of content budget in
            <br /> comparison with high hiring in-house staff
          </p>
          <i className="fa fa-user"></i>
          <h3>Money Back Gaurantee</h3>
          <p>
            If you're not happy with the final content
            <br />
            you'll get your money back
          </p>
        </div>
      </div>
      <div className="signup" >
        <div className="logback">
          <p id="logs">Already Have an account ?</p>
          <button id="login" onClick={()=>navigate("/mylogin")}>SignIn</button>
        </div>
        <form className="myform" onSubmit={handleSubmit} method={"post"}>
          <h2>create your free account</h2>
          <div className="inputfieds">
            <input placeholder="Enter Your Full Name" 
            type={"text"} name="full_name" required
            onChange={handleInput}
            value={data.full_name} />

            <input placeholder="Enter Your Email " 
            type={"email"} name="email" required
            value={data.email}
           
            onChange={handleInput} />
            <input
              placeholder="Enter Your Password"
              type={"password"}
              name="password"
              onChange={handleInput}
             
              value={data.password}
              required
            />
            <input
              placeholder="Confirm Your Password"
              type={"password"}
              onChange={handleInput}
              
              required
            />
            <button type={"submit"}  >Register</button>
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
export default Signup;
