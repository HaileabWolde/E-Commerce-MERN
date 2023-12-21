import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Form, Button, Col, Container, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import CheckoutStep from "../Components/shared/sharedNavbar"
import { paymentInfo } from "../actions/cartAction";
const PaymentMethod = ()=>{
    const [paymentMethod, setPaymentMethod] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        dispatch(paymentInfo(paymentMethod, navigate))
    }
    console.log(paymentMethod)
    return (
       <Container fluid >
        <Card className=' md:max-w-lg md:mx-auto mt-10 p-5'>
        <CheckoutStep step1 step2 step3/>
        <h1 className="text-center">Payment Method</h1>
        <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label className="mb-3"> Select Payment Method</Form.Label>
                <Col>              
                <Form.Check
                    type="radio"
                    label="Paypal or Credit Card"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    className="text-center mb-3"
                    onChange={(e)=> setPaymentMethod(e.target.value)}
                  
                    />  
                  
                    <Button type="submit" variant="primary" >
                        Continue
                        </Button>      
                 
                           
                </Col>
            </Form.Group>
        </Form>
        </Card>
             
       </Container>
    )
    }
export default PaymentMethod