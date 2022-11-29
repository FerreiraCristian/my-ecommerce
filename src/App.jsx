import './App.css';

import ItemDetailContainer from './components/ItemDetailContainer/Index';
import NavBar from './components/NavBar';
import Cart from './components/Cart/Index';
import ItemListContainer from './components/ItemListContainer/Index';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
