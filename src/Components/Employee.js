//import EditEmployee from "./EditEmployee";

function Employee(props) {
return( 
<>
{/* 
<h3 className="text-3xl font-bold underline">Employee {props.name}</h3>
<p>{props.role ? props.role : "no role"}</p> */}


<div className="min-w-350 max-h-350 m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto  sm:mx-0 sm:shrink-0" src={props.img} alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {props.name}
      </p>
      <p className="text-slate-500 font-medium">
        {props.role}
      </p>
    </div>


{/* <EditEmployee id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee} /> */}
{props.editEmployee}
   
  </div>
</div>



</>
)}
export default Employee;
