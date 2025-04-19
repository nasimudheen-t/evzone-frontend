import React, { useContext, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { loginAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { myContextApi } from '../ContextApi/ContextAPI';

const Login = () => {
  const [login,setLogin] = useState({
   email:'',password:'',
  })
  const navigate = useNavigate('')
 const {setUserData} = useContext(myContextApi)
   console.log(login);
  

  const handleLogin = async()=>{
    const {email,password} = login

    if(email && password){
      try{
        const result = await loginAPI(login)
        console.log("logine user Data",result.data.user);
       
        console.log("Sending data to backend:", login);
        if(result.status == 200){
          const username = result.data.user.username;
          const mobile = result.data.user.mobile;
          sessionStorage.setItem('userdata',JSON.stringify(result.data.user))
          setUserData(result.data.user)
          
          sessionStorage.setItem("user",JSON.stringify({username,mobile}))
          
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("role",result.data.role)
         
          if(result.data.user.role === "admin"){
            navigate('/admin')
          }else{
            alert(`Welcome ${username}, Here We Goo...`)
            navigate('/')
          }
          // alert(`Welcome ${username}, Here We Goo...`)
          
        }else{
          alert("User not found , Please Register ...!!")
        }
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("complete the form...")
    }
  }
  return (
    <div style={{
      background: 'linear-gradient(135deg,rgb(255, 255, 255),rgb(8, 132, 141))', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Container>
        <Card style={{ 
          width: '400px', 
          borderRadius: '10px', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'  // **Deep Shadow for 3D Look**
        }} 
        className="p-4 mx-auto">
          <Card.Title className="text-center mb-3" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Login to Your Account
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#555' }}>Email</Form.Label>
              <Form.Control onChange={e=>setLogin({...login,email:e.target.value})} type="email" placeholder="Enter email" className="p-2"/>
                {
                  login.email && !/^[^\s@]+@(gmail|yahoo|outlook)\.com$/.test(login.email)&&(
                    <div className='text-danger' style={{ fontSize: "14px" }}>
                    Enter valid  Email
                  </div>
                  )
                }
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#555' }}>Password</Form.Label>
              <Form.Control onChange={e=>setLogin({...login,password:e.target.value})} type="password" placeholder="Enter password" className="p-2"/>
            </Form.Group>
            <Button variant="dark" className="w-100 p-2" style={{ fontWeight: 'bold' }} onClick={handleLogin}>Login</Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
