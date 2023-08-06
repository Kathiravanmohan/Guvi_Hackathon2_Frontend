import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate=useNavigate()
  return <>
  <div className='background'>
  <h1 className='title'>EquipRentKart</h1>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">EquipRent App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/navbar')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/product')}>Rental Products</Nav.Link>
            <Nav.Link onClick={()=>navigate('/contact')}>Contact us</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Addproduct')}>Add Product</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Signin')}>Signin</Nav.Link>
            <Nav.Link onClick={()=>navigate('/signup')}>Signup</Nav.Link>
            
          </Nav>
          
        </Container>
      </Navbar>

      <h2 className='title'>Welcome to equipment rentKart</h2><br></br>
      <h3 className='title'>You can take rent on your poduct you need</h3>
      <h3 className='title'>This will save your money and you don't need to buy a new one for small period of time.</h3>
      </div>
  </>
}

export default NavBar