import { useState } from "react";
import products from "./data";
// import Shoes from "./pages/Shoes";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./sidebar/Sidebar";
import Card from './pages/Card';
import "./index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems,setCartItems] = useState([]);

  // ----------- Input Filter -----------
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

 

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          handleAddtoCart = {handleAddtoCart}
        />
      )
    );
  }

  function handleAddtoCart(itemToAddInCart){
    
    console.log("name of the item to be added to cart is "+itemToAddInCart[0]["id"]);
    let prevCartItems = [...cartItems];
    const check = prevCartItems.find(({id}) => id === itemToAddInCart[0]["id"])
    console.log(check);
    if(check !== undefined){
      alert("Already added to Cart");
    }
    if(check === undefined){
      alert("Added to Cart");
      prevCartItems.push({
        id:itemToAddInCart[0]["id"],
        image : itemToAddInCart[0]["image"],
        title : itemToAddInCart[0]["title"],
        reviews : itemToAddInCart[0]["reviews"],
        prevPrice : itemToAddInCart[0]["prevPrice"],
        newPrice : itemToAddInCart[0]["newPrice"]
      });
      setCartItems(prevCartItems);
    }
    
  }

  const result = filteredData(products, selectedCategory, userInput);

  console.log("Cart :" + cartItems);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout
           page="home"
            handleChange = {handleChange}
            result = {result}
            handleInputChange = {handleInputChange}
          />}/>
          <Route path="/cart" element = {<Layout
          page="cart"
            cartItems={cartItems}
          />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;