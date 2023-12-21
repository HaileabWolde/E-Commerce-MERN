import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RatingComponent from "../Components/RatingComponent";
import { useParams } from "react-router-dom";
import { Singleproduct } from "../actions/productsAction";
import Loading from "../Components/shared/CircularLoading";
import { Col, Row, Image, 
    ListGroup, ListGroupItem, Button, Form} from "react-bootstrap"
const PageDetails = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(()=>{
      dispatch(Singleproduct(id))
    }, [dispatch, id])
    const [qty, setQty] = useState(1)
    const {product, isloading} = useSelector((state)=> state.Allproducts)

    const handlecart = ()=>{
        navigate(`/cart/${id}?qty=${qty}`)
    }
return (
    
  <div className="mt-16">
    {
        isloading && <Loading/>
    }
      {
        product &&  
        <Row>
        
        <Col md={6}>
            <Image src={product?.image} alt={product?.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h1>{product?.name}</h1>
                </ListGroupItem>
                <ListGroupItem>
                    <RatingComponent value={product?.rating} text={`${product?.numReviews} reviews`}/>
                </ListGroupItem>
                <ListGroupItem>
                    Price : ${product?.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product?.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroupItem>
            <Row>
                <Col>Status : </Col>
                <Col>
                {
                    product?.countInStock ? 'In Stock' : 'Out of Stock'
                }
                </Col>
                
            </Row>
                {
                    product.countInStock > 0 && 
                    <ListGroupItem>
                        <Row>
                            <Col>Quantity</Col>
                            <Form.Control as="select" value={qty} 
                            onChange={(e)=>setQty(e.target.value)}>
                                  {[...Array(product.countInStock).keys()].map((x)=>(
                                           <option key={x+1} value={x+1}>{x+1}</option>
                                  )    
                                  )}
                            </Form.Control>
                        </Row>
                        </ListGroupItem>
                }
           
            </ListGroupItem>
            <ListGroupItem>
            <Button className="btn-block" onClick={handlecart}>Add to cart</Button>
            </ListGroupItem>        
        </Col>
    </Row>
      }
    
  </div>
   
)
}
export default  PageDetails