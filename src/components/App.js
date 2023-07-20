
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount] = useState(0);
  console.log(count);
  function increase(){
    return setCount(count+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p><b>Button clicked {count} times</b></p>
        <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
