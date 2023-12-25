import {useParams} from 'react-router-dom'
import axios from 'axios'
import {PayPalButton} from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../constants/orderConstant'
import { useEffect, useState } from 'react'
import Loading from '../Components/shared/CircularLoading'
import Message from '../Components/shared/message'
import { useDispatch, useSelector} from 'react-redux'
import { getOrder, payOrder } from '../actions/orderAction'
import {ListGroup, ListGroupItem, Card, Row, Col, Image } from 'react-bootstrap'


const OrderScreen = ()=>{
    const dispatch = useDispatch()
    const [sdkReady, setSdkReady] = useState(false);
    const { id } = useParams()
    const {orderObject} = useSelector((state)=> state.order)
    const { loading: loadingPay, success: successpay} = useSelector((state)=> state.orderPay)
    
    
    useEffect(()=>{
        const addPaypalScript = async () => {
            const { data: clientId } = await axios.get("http://localhost:5000/config/paypal");
          
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
              };
            document.body.appendChild(script);
          };
          if(successpay){
            dispatch({type: ORDER_PAY_RESET})
         
          }
          else if(!orderObject.isPaid){
            if (!window.paypal) {
                addPaypalScript();
              } else {
                setSdkReady(true);
              }
          }
       
          dispatch(getOrder(id))
    }, [dispatch, id, successpay, orderObject])
    
    const successPaymentHandler = (paymentResult)=>{
        console.log(paymentResult)
        dispatch(payOrder(id, paymentResult))
    }
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
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                             <Row>
                                <Col>Items</Col>
                                <Col>${orderObject.price}</Col>
                            </Row>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>${orderObject.shippingPrice}</Col>
                            </Row>
                            <Row>
                                <Col>Tax</Col>
                                <Col>${orderObject.taxPrice}</Col>
                            </Row>
                            <Row>
                            <Col>Total</Col>
                            <Col>${orderObject.totalPrice}</Col>
                            </Row>
              </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    {
                        !orderObject.isPaid && (
                            <ListGroupItem>
                                {
                                    loadingPay && <Loading/>
                                }
                            {
                                !sdkReady ? (
                                    <Loading/>
                                ) : (
                                    <PayPalButton
                                    amount={orderObject.totalPrice}
                                    onSuccess={successPaymentHandler}
                                    />
                                )
                            }
                               
                            </ListGroupItem>
                        )
                    }
                </Col>
            </Row>
           
       
    )
}
export default OrderScreen