import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increase & Decrease
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        <div onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl cursor-pointer">
          -
        </div>
        <div className=" text-center w-20 text-5xl">
          {count}
        </div>
        <div onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl cursor-pointer">
          +
        </div>
      </div>
      <div onClick={reset} className="text-lg px-6 py-2 rounded-sm bg-[#0398d4] cursor-pointer ">
        reset
      </div>
    </div>
  );
}

export default App;
