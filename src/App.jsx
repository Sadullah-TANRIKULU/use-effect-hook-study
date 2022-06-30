import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectHook from './components/UseEffectHook';
import Users from "./components/Users";
import { useState } from "react";


function App() {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className="container">
      {/* <button className="btn btn-dark" onClick={()=> setShow(!show)} > Show </button> */}
      {/* {show && <LifeCycleMethods />} */}
      {/* {show && <UseEffectHook />} */}
      <Users />
    </div>
  );
}

export default App;
