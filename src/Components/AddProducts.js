import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddProducts() {
    let navigate= useNavigate()
    let token=sessionStorage.getItem('token')

    let handleAddproduct=async(e)=>{
      e.preventDefault()
        
      let data={
        name:e.target.name.value,
        prodImage:e.target.prodImage.value,
        Description:e.target.Description.value,
        price:e.target.price.value,
        unitAvailable:e.target.unitAvailable.value
         
      }
      try {
        
        let res=await axios.post(`${process.env.REACT_APP_API_URL}/product/addproduct`,data,{
          headers:{
            authorization:`Bearer ${token}`
          }
         } )
        if (res.status===200){
            toast.success(res.data.message)
            navigate('/product')
        }
      } catch (error) {
        console.log(error)
      toast.error(error.response.data.error || error.response.data.message)
        
      }

    }

  return  <div className='container-fluid'>
  <h1 className='title'>Add Product</h1>
  <div className='signup-wrapper'>
<div>
<Form onSubmit={handleAddproduct}>
<Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Product Name" name='name' />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Product Image</Form.Label>
      <Form.Control type="text" placeholder="Product URL" name="prodImage"/>
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="Enter product description" name='Description'/>
      
    </Form.Group>
    <Form.Group className="mb-3"  >
      <Form.Label>Price</Form.Label>
      <Form.Control type="Number" placeholder="Rent price" name='price'/>
    </Form.Group>
    
    <Form.Group className="mb-3"  >
      <Form.Label>Unit Available</Form.Label>
      <Form.Control type="Number" placeholder="Enter unit available" name='unitAvailable'/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>
</div>
  </div>
}

export default AddProducts