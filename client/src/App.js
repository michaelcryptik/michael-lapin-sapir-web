import './App.css';
import {useEffect, useState, useContext, createContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import ItemPage from './pages/ItemPage'
import CheckOut from './pages/CheckOut';
import PaymentPage from './pages/PaymentPage';

import { itemsContext } from './contexts/itemsContext'


function App() {

  const [items, setItems] = useState([])  
  const [cartItems, setCartItems] = useState([])

  useEffect(() =>{
    fetch("/api").then((response) => response.json())
    .then((responseJSON) => {
      setItems(responseJSON)
    })
  }, [])


  return (
    <div>
      <itemsContext.Provider value={[items, setItems, cartItems, setCartItems]}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

            
              <Route path="items">
                <Route path=":id" element={<ItemPage />} />
              </Route>
              
              <Route path="Checkout" element={<CheckOut />} />
              <Route path="PaymentPage" element={<PaymentPage />} />

              <Route path="*" element={<NoPage />} />

            </Route>

          </Routes>
        </BrowserRouter>
        </itemsContext.Provider>
    </ div>
  );

}

export default App;
