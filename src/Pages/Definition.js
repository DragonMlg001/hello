import React , {useEffect, useState} from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../Components/Notfound";
import DefinitionSearch from "../Components/DefinitionSearch";


export default function Definition(){
// use state starts here

const [word, setWord] = useState();
const [notFound, setNotfound] = useState(false);
const [error, setError] = useState(false);
const navigate = useNavigate();

console.log(useParams());
let {search} = useParams();
    // use effect starts here

useEffect(()=>{
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ search)
.then((response)=> {
    if (response.status === 404){
    console.log(response.status);
    setNotfound(true);
    //navigate('/404');
}else if(response.status === 401){
    navigate('/login');
} else if(response.status === 500){
setError(true)
}
if (!response.ok){
setError(true); 

throw new error ('something went wrong')
}
    return( 
        response.json()
    )
})
.then((data)=> {
setWord(data[0].meanings);
    console.log(data)
})
.catch((e)=>{
    console.log(e.message);
});
}, // eslint-disable-next-line 
[]);
if (notFound === true){
    return(
        <>
        <NotFound/>
        <Link to="/dictionary">Search word again</Link>
        
        </>
    )
};
if (error === true){
    return(
        <>
        <p>Something went wrong</p>
        <Link to="/dictionary">Search word again</Link>
        
        </>
    )
};
return(
    <>
    <h1>Here is a Definition</h1>
{word && word.map((meaning)=>{
return(

    <div>
    <p className="text-lg text-green-700 font-bold" key={uuidv4()}>
        {meaning.partOfSpeech+ ': '}
        {meaning.definitions[0].definition}
    </p>
    </div>
    
)
})}
<h3>Search Another Word</h3>
<DefinitionSearch/>
{/* <Link className="no-underline font-semibold text-black" to="/dictionary">Search word again</Link> */}
    </>
);
};