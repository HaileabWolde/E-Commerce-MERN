import { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import ProductListing from '../../Components/ProductListing/ProudctListing'
import { Allproducts } from '../../actions/productsAction'
import Loading from '../../Components/Spinner/CircularLoading'
const HomePage = ()=>{
    const dispatch = useDispatch()
   
    useEffect(()=>{
      dispatch(Allproducts())
    }, [dispatch])

    const {products, isloading} = useSelector((state)=> state.Allproducts)
    return (

        <Row className='mt-12'>
            {
                isloading && <Loading/>
            }
            
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