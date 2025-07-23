// import Header from './components/Header'
// import Main from './components/Main'
import { useState } from "react";
import "./App.css";
import pads from "./components/pads";

function App(props) {
const[color, setColor]=useState(pads)



  mappedColors = pads.map(item=>(
  <button key={pads.id}></button>
))

  return (
    <>
      {/* <Header />
    <Main /> */}

      <main>
         <div className="pad-container">{mappedColors}</div>
      </main>
    </>
  );
}

export default App;
