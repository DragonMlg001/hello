import Employee from "./Components/Employee";
import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  console.log("we are lisint the employees");
  const showEmployees = true;
  const [role, setRole] = useState("no role");

  const [emoloyees, setEmoloyees] = useState([
    {
      id: 1,
      name: "calub",
      role: "youtuber",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "SAL",
      role: "manager",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "john",
      role: "cowboy",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Melanie",
      role: "SoftWare Eng",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Corey",
      role: "the what guy",
      img: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Jake",
      role: "Intern",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <>
      {showEmployees ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {/* // the employee can be named anything */}
            {emoloyees.map((employee) => {
              console.log(employee);
              return (
                <Employee
                  //key={employee.id}
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>cant show man</p>
      )}
    </>
  );
}

export default App;
