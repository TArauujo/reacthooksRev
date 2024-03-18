import { useState } from "react"

//1
const HookUseState = () => {
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Souza";
    
    setName("Matheus Battisti");

    console.log(userName)
    
    
  };
  console.log(name);
  
 // 2
  const [age, setAge] = useState(18);
 
    return (
    <div>
        
        <h2>UseState</h2>
        <p>Variável: {userName}</p>
        <p>UseState: {name}</p>
        <button onClick = {changeNames}>Mudar Names</button>
        
        {/* 2 */}
        <form action="">
          <input type="text" value={age} onChange = {(e) => setAge(e.target.value)}/>
        </form>
        
        <p>Você tem {age} anos!!</p>
        <hr />
    </div>
  )
}

export default HookUseState