import React,{ useState , useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState();
    const [word2, setWord2] = useState();


    useEffect(() => {
        
      console.log('here it is ', word );
    },// eslint-disable-next-line
     [word]);
    

     useEffect(() => {
        
        console.log('here it is ', word2);
      },// eslint-disable-next-line
       [word2]);


    return(<>


<input type="text" onChange={(e)=>{
        setWord(e.target.value)
}}/>

<h1 className="py-5">Lets search for the word {word}</h1>

<input type="text" onChange={(e)=>{
        setWord2(e.target.value)
}}/>

<h1 className="py-5">Lets search for the word {word2}</h1>


</> );
}