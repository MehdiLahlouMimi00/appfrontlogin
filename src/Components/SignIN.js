import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const navigate= useNavigate()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [error, setError]= useState('')
  const [formData, setFormData] = useState({
    l: '',
    p: ''
  });

  const handleButtonClick = () => {
    axios.post('https://backend-onde.onrender.com/loginenfant',{
      l:email,
      p:password
    }).then((response)=>{
      console.log(response);
      if(response.data.access){
        window.location.href = 'https://static-site-ten-zeta.vercel.app';
      }else{
        setError('False credentials!')
      }
    }).catch((error)=>{
      console.log(error)
    })
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  
  return (
    <div className="container" id="signin">
      <div className="heading">Sign In</div>
      <form className="form" >
      {error}
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail" onChange={(e)=> {
          setEmail(e.target.value)
        }}/>
        <input required className="input" type="password" name="password" id="password" placeholder="Password" onChange={(e)=> {
          setPassword(e.target.value)
        }}/>
        <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
        <button type="button" className="login-button" value="Log In" onClick={handleButtonClick}>Login</button>
      </form>
      
      <div className="social-account-container">
        <span className="title">Create an Account? <span > Sign Up</span></span>
      </div>
      <span className="agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
  );




}

export default SignInForm;