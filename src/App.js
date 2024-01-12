import Employee from "./Components/Employee";
import { useState } from "react";


function App() {
  console.log("we are lisint the employees")
  const showEmployees = true;
  const [role, setRole] = useState('no role')
  
  return (
    <>
    {showEmployees ? 
    <div>
      <input type="text" 
      onChange={(e)=>{
        console.log(e.target.value)
        setRole( e.target.value)
      }}
      />
    <Employee name="heather" role="pencil pusher"/>
    <Employee name="meather" role={role}/>
    <Employee name="feather" role=""/>
     </div>: <p>cant show man</p>}
    </>
  );
}

export default App;
