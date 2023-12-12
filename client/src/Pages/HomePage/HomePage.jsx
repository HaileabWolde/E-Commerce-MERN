import {Col, Row} from 'react-bootstrap'
import products from '../../products'
const HomePage = ()=>{
    return (
        <Row className='mt-12'>
            
            {
                products.map((product)=> 
                <Col md={3}>
                 <h3>{product.name}</h3>
                </Col>
               )
            }
          
        </Row>
    )
}
export default HomePage