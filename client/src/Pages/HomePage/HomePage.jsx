import { useEffect, useState } from 'react'
import axios from 'axios'
import {Col, Row} from 'react-bootstrap'
import ProductListing from '../../Components/ProductListing/ProudctListing'

const HomePage = ()=>{
    const [products, setProduct] = useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/product/getproduct")
                const {data} = res
                setProduct(data)
            }
            catch(error){
                console.log(error)
            }
        }; 
        fetchProducts()
    }, [])
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