import AddEmployee from "../Components/AddEmployee";
import Employee from "../Components/Employee";
import EditEmployee from "../Components/EditEmployee";
import "../index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

function Emoloyees() {
    
const showEmployees = true;
  // eslint-disable-next-line
  const [role, setRole] = useState("no role");

  const [employee, setEmployees] = useState([
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

function updateEmployee(id , newName,newRole) {
  console.log('update was pushed')
  const updatedEmployees = employee.map((employee)=>{
if (id === employee.id){
  // return new emoloyees
  return {...employee, name:newName , role: newRole};
}
return employee;
  });
  setEmployees(updatedEmployees)
};

function newEmployee(name , role , img){
  const newEmployee = {
    id: uuidv4,
    name: name,
    role: role,
    img: img
  }
setEmployees([...employee, newEmployee])
}



  return (
    <>
    


      {showEmployees ? (
        <div className="bg-gray-400 min-h-screen" >
          {/* <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          /> */}
          <div className="flex flex-wrap justify-center">
            {/* // the employee can be named anything */}
            {employee.map((employee) => {
              const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee} />
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </div>
      ) : (
        <p>cant show man</p>
      )}
    </>
  );
}

export default Emoloyees;
