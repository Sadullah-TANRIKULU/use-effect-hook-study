import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectHook from './components/UseEffectHook';
import Users from "./components/Users";
import { useState } from "react";
import Timer from './components/Timer';


function App() {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="btn bg-slate-300 " onClick={()=> setShow(!show)} > Show </button>
      {show && <LifeCycleMethods />}
      {/* {show && <UseEffectHook />} */}
      {/* <Users /> */}
      {/* <Timer /> */}
    </div>
  );
}

export default App;
