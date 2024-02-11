import React from "react";
import Header from "../components/Header";
import Sidebar from "../sidebar/Sidebar";
import Shoes from "./Shoes";
import Footer from "../components/Footer";
import Cart from "./Cart";

function Layout({page,handleChange,result,handleInputChange,handleAddtoCart,cartItems}){
    return(
        <>
            <Header/>
            {page === "home" ? 
            <div>
                <Sidebar handleFilter = {handleChange}/>
                <Shoes result = {result} handleSearch={handleInputChange} handleAddtoCart={handleAddtoCart}/>
            </div>
            :
            <div>
                <Cart result={cartItems}/>
            </div>}
            
            <Footer/>
        </>
    )
}

export default Layout