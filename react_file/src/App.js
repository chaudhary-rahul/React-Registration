
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
// import Mytemplate from './components/template'
import Imgtemp from './components/imgtemp';

function App() {
  return (
    // <>
    //  <Login/>
    // //  <Signup/> */}
    // // <Mytemplate/>
    // </>
    
    // <BrowserRouter>
     <Routes>
        <Route path="/" element={<Signup />}/>
          <Route index element={<Signup/>} />
          <Route path="mylogin" element={<Login/>} />
          <Route path="mytemplate" element={<Imgtemp/>}/>
      </Routes>
    // </BrowserRouter>      
  );
}

export default App;
