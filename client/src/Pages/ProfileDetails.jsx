import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {Form, Button, Col, Row, Table} from 'react-bootstrap'
import { updateUser } from "../actions/userAction";
import { AllOrder } from "../actions/orderAction";
import Message from "../Components/shared/message";
import Loading from "../Components/shared/CircularLoading";
import {Link} from 'react-router-dom'
const ProfileDetails = ()=>{
    const dispatch = useDispatch()
    const [Error, setError] = useState(false)
    const [Success, setSuccess] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const {userInfo, error, isloading} = useSelector((state)=> state.user)
    const {AllOrders, loading, Err} = useSelector((state)=>state.orderPay)
    console.log(AllOrders)
    useEffect(()=>{
        setData({
            ...data,
            name: userInfo.name,
            email: userInfo.email
        })
        dispatch(AllOrder())
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(data))
    }
    useEffect(()=>{
        if(userInfo?.success){
            setSuccess(true)
        }
    }, [userInfo])

    useEffect(()=>{
        if(error){
            setError(true)
        }
    }, [error])

    useEffect(()=>{
        if(Error){
            const timeoutId = setTimeout(()=>{
                setError(false)
            }, 4000)
           return ()=>{
            clearTimeout(timeoutId)
           } 
        }
    }, [Error])

    useEffect(()=>{
        if(Success){
            const timeoutId = setTimeout(()=>{
                setSuccess(false)
            }, 4000)
           return ()=>{
            clearTimeout(timeoutId)
           } 
        }
    }, [Success])
  
    return (
    <Row className="pt-8">
        <Col md={4}>
        <h1 className="text-center">Update A User</h1>
        <Form onSubmit={handleSubmit}>
        
           <Form.Group className="mb-3" controlId="UserName">
           <Form.Label>User Name</Form.Label>
           <Form.Control type="text" placeholder="Enter UserName" value={data.name} name= "name" onChange={handleChange}/>
         </Form.Group>
        
       
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" value={data.email} name= "email" onChange={handleChange}/>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>New Password</Form.Label>
   <Form.Control type="password" className="relative"placeholder="Password" value={data.password} name="password" onChange={handleChange}/>
   <i class="fa-regular fa-eye" className='absolute top-2'></i>
 </Form.Group>

 
     <Form.Group className="mb-3" controlId="confirmPassword">
       <Form.Label>ConfirmPassword</Form.Label>
       <Form.Control type="password" placeholder="Enter Password" value={data.confirmpassword} name= "confirmpassword" onChange={handleChange}/>
       </Form.Group>
        
 <Button variant="primary" type="submit" className='w-full mb-3'>
    {
        isloading ? <Loading/> : 'Update A User'
    }
  
 </Button>
 {
    Error && 
    <Message variant='danger'>
        {error}
    </Message>
 }
 {
    Success && 
    <Message variant='success'>
        <p>Profile updated Successfully</p>
    </Message>
 }
 
</Form>
      </Col> 
      <Col md={8}>
            <h1>My Oders</h1>
            <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>TotalPrice</th>
                            <th>Paid</th>
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading  ? <Loading/> : Err ? (
                                <Message variant="danger">{Err}</Message>
                            ) : (
                                AllOrders?.map((Order)=>(
                                    <tr>
                                        <td>{Order._id}</td>
                                        <td>{Order.createdAt.substring(0, 10)}</td>
                                        <td>{Order.totalPrice}</td>
                                        <td>
                                            {
                                                Order.isPaid ?  (Order.paidAt.substring(0, 10)) : (
                                                    <i
                                                    className="fas fa-times"
                                                    style={{ color: "red" }}
                                                  ></i>
                                                )
                                            }</td>
                                        <td>
                                            {
                                                Order.isDeliverd ? (
                                                    Order.deleverdAt.substring(0, 10)
                                                ) : (
                                                    <i
                                                    className="fas fa-times"
                                                    style={{ color: "red" }}
                                                  ></i>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/order/${Order._id}`}>
                                            <Button variant="light">Details</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            
                            )
                        }
                        
                    </tbody>
            </Table>

      </Col>    
   </Row>
    )
}
export default ProfileDetails;