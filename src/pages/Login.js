import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login } = useLogin();
  const navigate = useNavigate();

  const loginUser = (event) => {
    //console.log('login user function issue');
    event.preventDefault();
    //console.log('login user function issue')
    login(email, password);
    navigate('/')
  }

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className='container'>
        <div className='login_area'>
          <div>
            <h3>─ Login ─</h3>
            <form onSubmit={(event)=>loginUser(event)}>
              <label htmlFor="userid" className='login_box'>
                <input type="email" id='userid' placeholder='아이디' required value={email} onChange={handleData}/>
              </label>
              <label htmlFor="userpwd" className='login_box'>
                <input type="password" id='userpwd' placeholder='비밀번호'  required value={password} onChange={handleData}/>
              </label>
              
              <div className="btn_area">
                <button type='submit'>로그인</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login