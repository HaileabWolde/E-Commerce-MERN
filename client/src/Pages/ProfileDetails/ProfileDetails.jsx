import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {Card, Container, Form, Button} from 'react-bootstrap'
import { updateUser } from "../../actions/userAction";
const ProfileDetails = ()=>{
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = (e)=>{
        setData({
            [e.target.name] : e.target.value
        })
    }
    const {userInfo} = useSelector((state)=> state.user)

    useEffect(()=>{
        setData({
            name: userInfo.name,
            email: userInfo.email
        })
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(data))
    }
    return (
        <Container fluid>
        <Card className=' md:max-w-lg md:mx-auto mt-10 p-5 rounded-lg shadow-md'>
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
   Update A User
 </Button>
 
</Form>
       </Card>
   </Container>
    )
}
export default ProfileDetails;