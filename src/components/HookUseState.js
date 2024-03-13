import { useState } from "react"


const HookUseState = () => {
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Souza";
    
    setName("Matheus Battisti");

    console.log(userName)
    
    
  };
  console.log(name);
  
    return (
    <div>
        
        <h2>UseState</h2>
        <p>Variável: {userName}</p>
        <p>UseState: {name}</p>
        <button onClick = {changeNames}>Mudar Names</button>
        <hr />
    </div>
  )
}

export default HookUseState