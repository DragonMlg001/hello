import React,{ useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        
      console.log('here it is ', word );
    },// eslint-disable-next-line
     [word]);
     

    return(<>
        <div>
<form  className="flex space-between space-x-2 max-w-[300px]"
 onSubmit={()=>{
        navigate('/dictionary/' + word);
        console.log("Word search clicked");}}>

<input type="text" onChange={(e)=>{
        setWord(e.target.value)
}} placeholder=" Your Word Here" className="px-1 py-1 rounded shrink min-w-0"/>

<button className="bg-green-400 hover:bg-green-600 text-white font-bold rounded p-2" >Search</button>
</form>
</div>
</> );
}