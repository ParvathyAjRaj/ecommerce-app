import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Color from "./Color";
import "./Sidebar.css";

function Sidebar(props){
    return(
    <>
    <section className="sidebar">
        <Categories handleFilter = {props.handleFilter}/>
        {/* <Price/>
        <Color/> */}
    </section>
    </>)
}

export default Sidebar