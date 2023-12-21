import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Card, Container, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Login } from '../actions/userAction'
import Message from '../Components/shared/message'
import Loading from '../Components/shared/CircularLoading'
const SignIn = ()=>{
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [check, setCheck] = useState(false)
    const [Error, setError] = useState(false)
    const { error, isloading} = useSelector((state)=> state.user)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault();

      if (data.name || data.confirmpassword) {
        dispatch(Login(data, navigate));
      } else {
        const { name, confirmpassword, ...rest } = data;
        dispatch(Login(rest, navigate));
      }
    };
    const handleSignup = ()=>{
      setCheck((prev)=> !prev)
    }
    
    useEffect(()=>{
      if(error){
        setError(true)
      }
    }, [error])

    useEffect(() => {
      if (Error) {
        const timeoutId = setTimeout(() => {
          setError(false);
        }, 4000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }, [Error]);
    return (
        <Container fluid>
             <Card className=' md:max-w-lg md:mx-auto mt-10 p-5 rounded-lg shadow-md'>
              {
                check ?  <h1 className='text-center'>SIGN UP</h1> :  <h1 className='text-center'>SIGN IN</h1>
              }
             
             <Form onSubmit={handleSubmit}>
              {
                check &&  
                <Form.Group className="mb-3" controlId="UserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter UserName" value={data.name} name= "name" onChange={handleChange}/>
              </Form.Group>
              }
            
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name= "email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" className="relative"placeholder="Password" value={data.password} name="password" onChange={handleChange}/>
        <i class="fa-regular fa-eye" className='absolute top-2'></i>
      </Form.Group>
     
      {
         check &&  
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={data.confirmpassword} name= "confirmpassword" onChange={handleChange}/>
            </Form.Group>
              }
      <Button variant="primary" type="submit" className='w-full mb-3'>
        {
          isloading ?  <Loading/> :  <>
          {
            check ? 'SIGN UP': 'SIGN IN'
          } 
          </>
        }
       
      </Button>
      <button onClick={handleSignup} type="button" className='text-center w-full'> {check ? <p>
        <span>have an account</span>
        <span className='text-blue-500 ml-2'>Please Sign In</span>
      </p>   
      : <p>
        <span >Doesn't have an account</span>
        <span className='text-blue-500 ml-2'>Please Sign Up</span>
        </p>}</button>
        {
          Error && 
          <Message variant='danger'>
            {error}
          </Message>
        }
    </Form>
            </Card>
        </Container>
    )
    }
export default SignIn