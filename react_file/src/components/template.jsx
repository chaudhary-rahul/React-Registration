import "./template.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const Mytemplate = () => {

  // const [data, setData] = useState({
  //   myname: "",
  //   email: "",
  //   text_field: "",
  // });
  
  // function myFunction(e) {
    
  //   let name = e.target.name
  //   let value = e.target.value
  //   setData({...data , [name]:value})
  // }
  const navigate = useNavigate()
  const [myname , setName ] = useState("")
  const [email , setEmail ] = useState("")
  const [text_field, setText] = useState("")
  const HandleSubmit =  async ()=>{
    // e.preventDefault();
    const body = {myname,email,text_field}
     const response = await fetch("http://localhost:4000/template",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)
      })
      window.alert("data saved successfully")
      navigate('/mytemplate')
      
  }

  return (
    <>
      <div className="mysignup">
        <form className="my_form" onSubmit={HandleSubmit} >
          <h2>Welcome to your email template</h2>
          <div className="my_inputfieds">
            <input
              placeholder="Enter Your Name"
              type="text"y
              name="myname"
              value={myname}
              onChange={e=>setName(e.target.value)}
              required
            />
            <input
              placeholder="Enter Your Email "
              type="email"
              name="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />

            <input id="textfields_text" placeholder="enter the text here "
             name="text_field"
             value={text_field}
             onChange={e=>setText(e.target.value)}

            />
            <button type="submit">Store Data</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Mytemplate;
