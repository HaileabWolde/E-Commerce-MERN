import { Card } from "react-bootstrap";
import RatingComponent from "../RatingComponent/RatingComponent";
const ProductListing = ({product})=>{
    return (
        <Card className="p-3 rounded-lg overflow-hidden">
            <Card.Img variant="top" src={product.image} className="hover:scale-105"/>
            <Card.Body>
                <Card.Title>
                   <strong>{product.name}</strong> 
                </Card.Title>
                <Card.Text as="div">
                      <RatingComponent value={product.rating} text={`${product.numReviews} Reviews`}/> 
                </Card.Text>
               <Card.Text as="div">
                ${product.price}
               </Card.Text>
            </Card.Body>
            
        </Card>
    )

}
export default ProductListing;