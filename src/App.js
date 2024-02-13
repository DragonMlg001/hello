import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import "./index.css";
import Employees from "../src/Pages/Employees";
import Header from "../src/Components/Header";
import Dictionary from "../src/Pages/Dictionary";
import Customers from "./Pages/Customers";
import Definition from "./Pages/Definition";
import NotFound from "./Components/Notfound";

function App() {
   return (
    <>
   <BrowserRouter>
    <Header>
   <Routes>
    <Route exact path="/" element={<Employees/>}/>
    <Route exact path="/customers" element={<Customers/>}/>
    <Route exact path="/dictionary" element={<Dictionary/>}/>
    <Route exact path="/dictionary/:search" element={<Definition/>}/>
    <Route exact path="/404" element={<NotFound/>}/>
    <Route exact path="*" element={<NotFound/>}/>
   </Routes>
    </Header>
   </BrowserRouter>
    
    </>
  );
}

export default App;
