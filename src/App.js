import { useState } from "react";
import { Html, Java, Sql } from "./Subject";
import './styles.css';

function App() {

  const[pg, setPg] = useState(1)
  function changePage(pgNum) {
    setPg(pgNum)
  }

  return (
    <div>
   
      <button onClick={() => changePage(1)} className={pg === 1?"activeButton":""}>JAVA</button>
      <button onClick={() => changePage(2)} className={pg === 2?"activeButton":""}>SQL</button>
      <button onClick={() => changePage(3)} className={pg === 3?"activeButton":""}>HTML</button>

      {pg === 1 && <Java />}
      {pg === 2 && <Sql />}
      {pg === 3 && <Html />}
    </div>
  );  
}

export default App;
