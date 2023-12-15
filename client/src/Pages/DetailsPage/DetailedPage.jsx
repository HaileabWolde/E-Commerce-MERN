import { useEffect, useState } from "react";
import axios from "axios";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import { useParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, ListGroupItem, Button} from "react-bootstrap"
const PageDetails = ()=>{
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const fetchSingleProduct = async()=>{
            const res = await axios.get(`http://localhost:5000/product/getsingleproduct/${id}`) 
            const {data} = res
            setProduct(data)
        };
        fetchSingleProduct()
    })
    console.log(product)
return (
  <div className="mt-16">
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
  </div>
   
)
}
export default  PageDetails