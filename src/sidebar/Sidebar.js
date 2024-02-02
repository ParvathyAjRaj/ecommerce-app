import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Color from "./Color";
import "./Sidebar.css";

function Sidebar(){
    return(
    <>
    <section className="sidebar">
        <Categories/>
        <Price/>
        <Color/>
    </section>
    </>)
}

export default Sidebar