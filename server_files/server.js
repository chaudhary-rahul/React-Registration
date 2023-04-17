
const express = require('express');
const cors = require('cors');
const form = express()
form.use(express.json());
const port = 4000
const pool = require('./database')
// const bodyParser = require('body-parser')
// form.use(bodyParser.urlencoded({ extended: false }));

form.use(
    cors()
)


form.post('/signup',(req,res)=>{

  const full_name = req.body["full_name"]
  const email = req.body["email"]
  const password = req.body["password"]
  

  const insertqry = `INSERT INTO users (full_name,email,password) 
                                     VALUES ('${full_name}','${email}','${password}');`;

  pool.query(insertqry).then((response)=>{
      console.log("Data Saved");
  })
  .catch((err)=>{
      console.log(err)
  });
  res.send("okay ")

});
  
form.post('/login', async (req,res)=>{
    try{
    const {email,password} = req.body
    const user = await pool.query("SELECT * FROM users WHERE email=$1",[email]) ;
    
    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }
    if(password === user.rows[0].password) {
       return res.status(200).json("matched")
    }
    else{
      return res.status(401).json("not mathced")
    
    }
    }
    catch(err){
      console.error(err.message);
    }

});
form.post('/template',async (req,res)=>{
    // const myname = req.body["myname"]
    // const email = req.body["email"]
    // const text_field = req.body["text_field"]
    const {myname ,email,text_field} = req.body;
  
    const insertqry = `INSERT INTO text_info (myname,email,text_field) 
                                       VALUES ('${myname}','${email}','${text_field}');`;
  
    pool.query(insertqry).then((response)=>{
        console.log("Data Saved");
    })
    .catch((err)=>{
        console.log(err)
    });
    res.send("okay ")
})
 
form.listen(port,()=>{
    console.log(`server is running on port  ${port}`)
})