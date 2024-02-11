import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Shoes.css";

function Cart({result}){
    return(
        <>
            <ul>
                {result.map((item) => 
                {
                    return(
                    <li>
                        <div className="cartDiv">
                            <img src={item.image} className="img" alt="shoe"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <div className="card-reviews">
                                    <span className="total-reviews">{item.reviews}</span>
                                </div>
                                <div className="card-price">
                                    <div className="price">
                                        <del>{item.prevPrice}</del> {item.newPrice}
                                    </div>
                                </div> 
                            </div>

                        </div>
                        
                    </li>)
                }
                )}
            </ul>
        </>
    )
}

export default Cart;