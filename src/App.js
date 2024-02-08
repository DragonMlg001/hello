import Employees from "../src/Pages/Employees";
import Header from "../src/Components/Header";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import "./index.css";
import Customers from "./Pages/Customers";

function App() {
   return (
    <>
   <BrowserRouter>
    <Header>
   <Routes>
    <Route path="/" element={<Employees/>}/>
    <Route path="/customers" element={<Customers/>}/>
   </Routes>
    </Header>
   </BrowserRouter>
    
    </>
  );
}

export default App;
