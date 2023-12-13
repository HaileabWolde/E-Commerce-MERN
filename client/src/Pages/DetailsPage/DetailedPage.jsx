import Products from "../../products"
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import { useParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, ListGroupItem, Button} from "react-bootstrap"
const PageDetails = ()=>{
    const { id } = useParams();
    const product = Products.find((p)=> p._id === id)
return (
  <div className="mt-16">
     <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h1>{product.name}</h1>
                </ListGroupItem>
                <ListGroupItem>
                    <RatingComponent value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroupItem>
                <ListGroupItem>
                    Price : ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroupItem>
            <Row>
                <Col>Status : </Col>
                <Col>
                {
                    product.countInStock ? 'In Stock' : 'Out of Stock'
                }
                </Col>
                
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Button className="btn-block">Add to cart</Button>
            </ListGroupItem>        
        </Col>
    </Row>
  </div>
   
)
}
export default  PageDetails