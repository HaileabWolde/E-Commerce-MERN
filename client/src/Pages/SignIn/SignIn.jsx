import { useState } from 'react'
import {Card, Container, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../actions/userAction'
const SignIn = ()=>{
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(Login(data, navigate))
    }
    return (
        <Container fluid>
             <Card className=' md:max-w-lg md:mx-auto mt-10 p-5 rounded-lg shadow-md'>
                <h1 className='text-center'>SIGN IN</h1>
             <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} name= "email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={data.password} name="password" onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='w-full'>
        SIGN IN
      </Button>
    </Form>
            </Card>
        </Container>
    )
    }
export default SignIn