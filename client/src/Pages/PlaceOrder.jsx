import {Form, Button, ListGroup, ListGroupItem, 
    Col, Row, Image, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutStep from '../Components/shared/sharedNavbar'
const Order = ()=>{
    const {cartItems, ShippingInfo, paymentInfo} = useSelector((state)=> state.cart)
return (
    <Container>
        <CheckoutStep step1 step2 step3 step4/>
         <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                        <h1>SHIPPING INFO</h1>
                        <p>
                            <strong> Address</strong>&nbsp;
                            <span>{ShippingInfo.address}</span>&nbsp;
                            <span>{ShippingInfo.City}</span>&nbsp;
                            <span>{ShippingInfo.country}</span>&nbsp;
                        </p>
                </ListGroupItem>
                <ListGroupItem>
                    <h1>PAYMENT METHOD</h1>
                    <p>{paymentInfo}</p>
                </ListGroupItem>
                <ListGroupItem>
                    <h1>ORDER ITEMS</h1>
                    <ListGroup variant='flush'>
                        {
                            cartItems.map((item)=> (
                                
                                <ListGroupItem>
                                     <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name}></Image>
                                        </Col>
                                        <Col md={2}>
                                            <label>{item.name}</label>
                                        </Col>
                                        <Col md={3}>
                                            
                                            {item.qty} * $ {item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                               
                            ))
                        }
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>

        </Col>
    </Row>
    </Container>
   
)
}
export default Order