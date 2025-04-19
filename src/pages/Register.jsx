import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';







const Register = () => {

const navigate = useNavigate('')

  const [register,setRegister] = useState({
    username:'',email:'',mobile:'',password:''
  })

  // const [apiResult,setApiResult] = useState()
console.log(register);

useEffect(()=>{

})


// register api call

const handleRegister = async()=>{
  const {username,email,mobile,password} = register

 if( username && email && password && mobile){
 
  try{
    const result = await registerAPI(register)
    console.log("Sending data to backend:", register);
    if(result.status == 200){
      alert("Registered successfully")
     navigate('/login')
      
    }
  
    }catch(err){
      console.log(err);
      
    }
  
  }else{
    alert("Fill the form completely....")
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
        }}  className="p-4 shadow-lg mx-auto">
          <Card.Title className="text-center mb-3" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Create an Account
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#555' }}>Username</Form.Label>
              <Form.Control onChange={e=>setRegister({...register,username:e.target.value})} type="text" placeholder="Enter username" className="p-2"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#555' }}>Email</Form.Label>
              <Form.Control onChange={e=>setRegister({...register,email:e.target.value})} type="email" placeholder="Enter email" className="p-2"/>
                {
                  register.email && !/^[^\s@]+@(gmail|yahoo|outlook)\.com$/.test(register.email)&&(
                    <div className='text-danger' style={{ fontSize: "14px" }}>
                    Enter valid mobile number
                  </div>
                  )
                }
            </Form.Group>
            <Form.Group className="mb-3">
  <Form.Label style={{ fontWeight: '600', color: '#555' }}>Mobile No</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter mobile no"
    className="p-2"
    onChange={e => setRegister({ ...register, mobile: e.target.value })}
  />
  {
    register.mobile && !/^[6-9]\d{9}$/.test(register.mobile) && (
      <div className='text-danger' style={{ fontSize: "14px" }}>
        Enter valid mobile number
      </div>
    )
  }
</Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#555' }}>Password</Form.Label>
              <Form.Control onChange={e=>setRegister({...register,password:e.target.value})} type="password" placeholder="Enter password" className="p-2"/>
            </Form.Group>
            <Button variant="dark" className="w-100 p-2" style={{ fontWeight: 'bold' }} disabled={register.username && register.email && register.mobile && register.password ? false : true} onClick={handleRegister}>Register</Button>
            <p className='mt-2 p-3'>Already Registered ?  <Link to={'/login'}>Login</Link></p> 
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
