import {Button, ListGroup, ListGroupItem, 
    Col, Row, Image, Container, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutStep from '../Components/shared/sharedNavbar'
import Message from '../Components/shared/message'
import { createOrder } from '../actions/orderAction'
const Order = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state)=> state.cart)
    const {cartItems, ShippingInfo, paymentInfo} = useSelector((state)=> state.cart)

    const addDecimal = (num)=>{
        return (Math.round(num * 100)/100).toFixed(2);
    }
    cart.itemPrice = addDecimal(cartItems.reduce((acc, item)=> acc + item.price * item.qty, 0))
    cart.shippingPrice = addDecimal((cartItems  > 500 ? 0 : 50))
    cart.taxPrice = addDecimal(Number((0.15 * cart.itemPrice).toFixed(2)))
    cart.totalPrice = (
        Number(cart.itemPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)

    const handleOrder = ()=> {
        dispatch(createOrder({
            orderItems: cartItems, 
            shippingAddress: ShippingInfo, 
            paymentMethod: paymentInfo, 
            taxPrice: cart.taxPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice,
            price: cart.itemPrice
         }, navigate))
    }
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
                            <span>{ShippingInfo.postalCode}</span>&nbsp;
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
                    {
                        cartItems.length === 0 && <Message >Your Cart is Empty</Message>
                    }
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
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h1>ORDER SUMMARY</h1>
                    </ListGroupItem>
                    <ListGroupItem>
                    <Row>
                        <Col>Items</Col>
                        <Col>$ {cart.itemPrice}</Col>
                       </Row>

                       <Row>
                        <Col>Shipping Price</Col>
                        <Col>$ {cart.shippingPrice}</Col>
                       </Row>

                       <Row>
                        <Col>Tax Price</Col>
                        <Col>$ {cart.taxPrice}</Col>
                       </Row>

                       <Row>
                        <Col>Total Price</Col>
                        <Col>$ {cart.totalPrice}</Col>
                       </Row>
                  
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button
                        type="button"
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={handleOrder}
                        >
                        Place Order

                        </Button>
                        </ListGroupItem>          
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </Container>
   
)
}
export default Order