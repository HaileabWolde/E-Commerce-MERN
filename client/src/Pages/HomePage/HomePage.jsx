import {Col, Row} from 'react-bootstrap'
import products from '../../products'
import ProductListing from '../../Components/ProductListing/ProudctListing'
const HomePage = ()=>{
    return (
        <Row className='mt-12'>
            
            {
                products.map((product)=> 
                <Col md={3}>
                 <ProductListing product={product}/>
                </Col>
               )
            }
          
        </Row>
    )
}
export default HomePage