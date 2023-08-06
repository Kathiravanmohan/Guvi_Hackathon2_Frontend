import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import useLogout from '../hooks/useLogout'
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Product() {
  let [data,setData]=useState([])
  let logout=useLogout()
  let token = sessionStorage.getItem('token')

  let handleGetdata=async()=>{
     try {
      console.log(token)
      let res=await axios.get(`${process.env.REACT_APP_API_URL}/product/all`,
      
      {
        headers:{
            authorization:`Bearer ${token}`
        }
       } )
      if(res.status===200)
      {
        toast.success(res.data.message)
        setData(res.data.product)
      }
     } catch (error) {
      toast.error(error.response.data.error || error.response.data.message) 
      if(error.response.status===401)
      logout()
     }
  }

  useEffect(()=>{
    if(token)
    handleGetdata()
    else
    logout()
  },[])
  return <>
    <div className='container-fluid'>
      <h2 className='title'>Rental Products</h2>
     {
        data.map((e,i)=>{
          return <ProductItem product={e} key={i}/>
        })
      }

    </div>
  </>
}

export default Product

function ProductItem({product}){
 
  return <Card className="card-style" style={{ width: "18rem" }}>
  <CardBody>
    <CardTitle>{product.name}</CardTitle>
  </CardBody>
  <img src={product.prodImage} alt="products" width="100%" />
  <CardBody>
    <CardText>{product.Description}</CardText>
    <CardText>Rent/day: {product.price}</CardText>
    <Button>Add to cart</Button>
    
  </CardBody>
</Card>

}