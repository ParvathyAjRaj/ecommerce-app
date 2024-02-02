import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Ladies from './pages/Ladies';
import Men from './pages/Men';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* first page to load by default in the "/" path is mentioned using index */}
          <Route index element={<Kids/>}/>

          {/* all other pages should be mentioned in their specific path */}
          {/* <Route path='/kids' element={<Kids/>}/>
          <Route path='/ladies' element={<Ladies/>}/>
          <Route path='/men' element={<Men/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
