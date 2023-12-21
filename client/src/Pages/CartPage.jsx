import {useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { AddCartItem, DeleteCartItem } from "../actions/cartAction"
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    Image,
    ListGroup,
    ListGroupItem,
  } from "react-bootstrap";
const CartPage = ()=>{
const dispatch = useDispatch()
const {id} = useParams()
const urlParams = new URLSearchParams(window.location.search)
const qtyFromUrl = Number(urlParams.get('qty') || 1)
useEffect(()=>{
    dispatch(AddCartItem(qtyFromUrl, id))
}, [id, qtyFromUrl, dispatch])
const {cartItems} = useSelector((state)=> state.cart)

const handleDeleteCartItem = (id)=>{
    dispatch(DeleteCartItem(id))
}
return (
   <Row>
    <Col md={8}>
        <h1>SHOPPING CART</h1>
        {
            cartItems.length === 0 ? (
                <h2>
                There is no Item inside of the cart Add more items
            </h2>
            ) 
            : (
                <ListGroup variant="flush">
                     {
                    cartItems?.map((item)=> (
                        <ListGroupItem>
                            <Row>
                                <Col md={4}>
                                    <Image src={item.image}
                                            alt={item.name}
                                    />
                                    </Col>
                                <Col md={3}>{item.name}</Col>
                                <Col md={2}>$ {item.price}</Col>
                                <Col md={2}>
                                    <Form.Control as="select" value={item.qty} onChange={(e)=> dispatch(AddCartItem(Number(e.target.value), item._id))}>
                                        {
                                            [...Array(item.countInStock).keys()].map((x)=> (
                                                <option value={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </Form.Control>
                                    <Button
                                    type="button"
                                    variant="light"
                                     onClick={()=> handleDeleteCartItem(item._id)}>
                                    <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"

                        ></i>
                                    </Button>
                                </Col>

                            </Row>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>
               
            )
               
            
        }

    </Col>
    <Col md={4}>
        <Card>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h1>SUBTOTAL (
                        {
                          cartItems?.reduce((acc, item) => (acc + item.qty), 0)
                        }
                        )ITEMS</h1>
                        $ &nbsp; {
                            cartItems.reduce((acc, item)=> (acc + item.qty * item.price), 0).toFixed(2)
                        }
                        <Link to='/shipping'>
                        <Button 
                        type="button"
                        className="btn-block"
                        >
                            Proceed to Checkout

                        </Button>
                        </Link>
                      
                </ListGroupItem>
            </ListGroup>
        </Card>
    </Col>
   </Row>
)
}
export default  CartPage