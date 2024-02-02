import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Ladies from './pages/Ladies';
import Men from './pages/Men';
import products from "./data";
import { useState } from 'react';
import Cart from './pages/hello';
import Card from './pages/Card';

function App() {
  /*-----------------------------Search-------------------------------*/
  const [userSearch,setUserSearch] = useState("");

  function handleSearch(event){
    setUserSearch(event.target.value);
  }

  const filteredItem = products.filter((product) => 
                product.category.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1);

  /*---------------------------Radio Filter---------------------------*/
  const [userFilter,setUserFilter] = useState(null);

  function handleFilter(event){
    setUserFilter(event.target.value);
  }

  /*------------------------------function---------------------------*/
  function filteredData(products,userSearch,userFilter){
    let displayData = products;

    // Search
    if(userSearch){
      displayData = filteredItem;
    }
    
    // Filter
    if(userFilter){
      displayData = displayData.filter(({category}) => category === userFilter)
    }

    // result 
    return displayData.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => 
        (<Card title={title}/>)
      //   <Card
      //     key={Math.random()}
      //     img={img}
      //     title={title}
      //     star={star}
      //     reviews={reviews}
      //     prevPrice={prevPrice}
      //     newPrice={newPrice}
      //   />
      // )
    );
  }

  const result = filteredData(products,userSearch,userFilter);

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout 
                                  handleSearch={handleSearch}
                                  handleFilter={handleFilter}
                                  result = {result}/>}>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
