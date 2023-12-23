import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import Loading from '../Components/shared/CircularLoading'
import Message from '../Components/shared/message'
import { useDispatch, useSelector} from 'react-redux'
import { getOrder } from '../actions/orderAction'
import { Container, ListGroup, ListGroupItem, Card, Row, Col, Image } from 'react-bootstrap'

const OrderScreen = ()=>{
    const dispatch = useDispatch()
    const { id } = useParams()
    const {orderObject} = useSelector((state)=> state.order)
    
    useEffect(()=>{
        dispatch(getOrder(id))
    }, [dispatch, id])
    
    return (
       
            <Row>
                <Col md={8}>
                <Card className='mt-[50px]'>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h1>SHIPPING</h1>
                        <Col>
                        <strong>Name: 
                            <span> {orderObject.user.name}</span>
                        </strong>
                        </Col>
                        <Col>
                        <strong>
                            Email:
                            <span>{orderObject.user.email}</span>
                        </strong>
                        </Col>
                        <Col>
                        <strong>
                            Address:
                            <span>{orderObject.shippingAddress.address}</span> &nbsp;
                            <span>{orderObject.shippingAddress.City}</span> &nbsp;
                            <span>{orderObject.shippingAddress.postalCode}</span> &nbsp;
                            <span>{orderObject.shippingAddress.country}</span> &nbsp;
                        </strong>
                        </Col>
                        <Col>
                        {
                            orderObject.isDeliverd ? 
                            <Message variant="success">
                                    Items have been Deliverd Successfully
                            </Message> : 
                            <Message variant="danger">
                                Not Deliverd
                            </Message>
                        }
                        </Col>
                    </ListGroupItem>
                    <ListGroupItem>
                       <h1>PAYMENT METHOD</h1>
                       <Col>
                       <strong>Method</strong>
                       <span> {orderObject.paymentMethod}</span>
                       </Col>
                       <Col>
                        {
                            orderObject.isPaid ? 
                            <Message variant="success">
                                    Successfully Paid
                            </Message> : 
                            <Message variant="danger">
                                Not Paid
                            </Message>
                        }
                        </Col>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h1>ORDER ITEMS</h1>
                        <ListGroup variant='flush'>
                        {
                            orderObject.orderItems.map((item)=> (
                                <ListGroupItem>
                                    <Row>
                                        <Col sd={2}>
                                            <Image src={item.image} alt={item.name}/>
                                        </Col>
                                        <Col sd={2}>
                                        <label>{item.name}</label>
                                        </Col>
                                        <Col sd={8}>
                                            {item.qty} * {item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))
                        }
                        </ListGroup>
                       
                    </ListGroupItem>
                </ListGroup>
            </Card>
                </Col>
            </Row>
           
       
    )
}
export default OrderScreen