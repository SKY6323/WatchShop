//signUP.js
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup'
/* import googleLoginImg from '../img/google_login.svg'; */
import { Form, Container, button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나
    // 때문에 다른 변수명을 사용하지 말기

    const { signup } = useSignup();
    const navigate = useNavigate();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value)
        } else if (event.target.type === "password") {
            setPassword(event.target.value)
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //submit 버튼은 화면을 기본적으로 새로고침하므로
        console.log(email, password);
        signup(email, password, displayName)
        navigate('/')
    }

    return (
        <div className='container'>
            <div className='login_area'>
              <div>
                <h3>─ Sign Up ─</h3>
                <label htmlFor="username" className='login_box'>
                    <input type="text" id='username' placeholder='이름'onChange={handleData}/>
                  </label>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="userid" className='login_box'>
                    <input type="email" id='userid' placeholder='아이디'onChange={handleData}/>
                  </label>

                  <label htmlFor="userpwd" className='login_box'>
                    <input type="password" id='userpwd' placeholder='비밀번호' onChange={handleData}/>
                  </label>
                  
                  <div className="btn_area">
                    <button type='submit' className='btn_join'>회원가입</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      )
}