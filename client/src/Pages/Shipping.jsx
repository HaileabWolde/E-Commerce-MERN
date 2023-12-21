import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {Card, Container, Form, Button} from 'react-bootstrap'
import {shippingAddressInfo} from '../actions/cartAction'
import CheckoutStep from "../Components/shared/sharedNavbar";
const Shipping = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        address: "",
        City: "",
        postalCode: 300,
        country: ""
    })
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
  
    const {ShippingInfo} = useSelector((state)=> state.cart)

    useEffect(()=>{
        setData({
            address: ShippingInfo?.address,
            City: ShippingInfo?.City,
            postalCode: ShippingInfo?.postalCode,
            country: ShippingInfo?.country
        })
    }, [])
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(shippingAddressInfo(data, navigate))
    }
    return (
        <Container fluid>
        <Card className=' md:max-w-lg md:mx-auto mt-10 p-5 rounded-lg shadow-md'>
            <h1 className="text-center">Shipping Info</h1>
            <CheckoutStep step1 step2 />
        <Form onSubmit={handleSubmit}>
        
           <Form.Group className="mb-3" controlId="Address">
           <Form.Label>Address</Form.Label>
           <Form.Control type="text" placeholder="Enter Address" value={data.address} name= "address" onChange={handleChange}/>
         </Form.Group>
        
       
 <Form.Group className="mb-3" controlId="CITY">
   <Form.Label>City</Form.Label>
   <Form.Control type="text" placeholder="Enter City" value={data.City} name= "City" onChange={handleChange}/>
 </Form.Group>

 <Form.Group className="mb-3" controlId="PostalCode">
   <Form.Label>PostalCode</Form.Label>
   <Form.Control type="number" className="relative" placeholder="Postal Code" value={data.postalCode} name="postalCode" onChange={handleChange}/>
   
 </Form.Group>

 
     <Form.Group className="mb-3" controlId="Country">
       <Form.Label>Country</Form.Label>
       <Form.Control type="text" placeholder="Enter Country" value={data.country} name= "country" onChange={handleChange}/>
       </Form.Group>
        
    <Button variant="primary" type="submit" className='w-full mb-3'>
                Continue
    </Button>

</Form>
       </Card>
   </Container>
    )
}
export default Shipping;