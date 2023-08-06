import React from 'react' 
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import ContactUs from './Components/ContactUs';
import AddProducts from './Components/AddProducts';

function App() {
  console.log(process.env.REACT_APP_API_URL)
  return <>
  <BrowserRouter>
  <Routes>
<Route path='/signin' element={<Signin/>}/> 
<Route path='/signup' element={<Signup/>}/> 
<Route path='/navbar' element={<NavBar/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/contact' element={<ContactUs/>}/>
<Route path='/Addproduct' element={<AddProducts/>}/>
<Route path='*' element={<Navigate to ='/signin'/>}/>     
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App;
