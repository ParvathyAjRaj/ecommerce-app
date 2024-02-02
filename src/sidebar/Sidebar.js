import React from "react";
import Categories from "./Categories";
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