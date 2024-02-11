import React, { useState } from "react";
import "./Shoes.css";
// import Cart from "./Cart";

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice,handleAddtoCart }) => {

    // const itemToAddInCart = [img,title,reviews,prevPrice,newPrice];
    // console.log(itemToAddInCart);
    const itemToAddInCart = [{"id":id,"image":img,"title":title,"reviews":reviews,"prevPrice":prevPrice,"newPrice":newPrice}]

  return (
    <div className="card">
        <img src={img} className="img" alt="shoe"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
            </div>
            <div className="card-price">
                <div className="price">
                    <del>{prevPrice}</del> {newPrice}
                </div>
            </div>
        </div>
        <button onClick={() => {handleAddtoCart(itemToAddInCart)}}>Add to Cart</button>
    </div>
  );
};

export default Card;