import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import { useParams } from "react-router-dom";
import { Singleproduct } from "../../actions/products";
import Loading from "../../Components/Spinner/CircularLoading";
import { Col, Row, Image, ListGroup, ListGroupItem, Button} from "react-bootstrap"
const PageDetails = ()=>{
    const dispatch = useDispatch()

    const { id } = useParams();
    useEffect(()=>{
      dispatch(Singleproduct(id))
    }, [id])
    const {product, isloading} = useSelector((state)=> state.Allproducts)
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
            </ListGroupItem>
            <ListGroupItem>
            <Button className="btn-block">Add to cart</Button>
            </ListGroupItem>        
        </Col>
    </Row>
      }
    
  </div>
   
)
}
export default  PageDetails