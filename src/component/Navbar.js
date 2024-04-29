import React from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons' */
import { IoMdLogIn } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import {useLogout} from '../hooks/useLogout'


const Navbar = () => {
    const menuList = ['Retro','Woman','Cute','Steampunk']

    const {user} = useAuthContext();
    const {logout} = useLogout()

    //로그인 페이지 이동
    const navigator = useNavigate();

    const search = (event)=>{
        //console.log('key down')
        if(event.key == 'Enter'){
            let keyword = event.target.value; //리액트에서 input 값 가져오기

            navigator(`/?q=${keyword}`)
        }
    }

  return (
    <div className='header'>
        <div className="login_section">
            {/* 로그인 X */}
            {
                !user && (
                    <ul className='login_section'>
                        <li><Link to='/login'><FaUserAlt />로그인</Link></li>
                        <li><Link to='/signup'><IoMdLogIn />회원가입</Link></li>
                    </ul>
                )
            }

            {/* 로그인 O */}
            {
                user && (
                    <ul className='login_section'>
                        <li><strong>환영합니다. {user.displayName}님</strong></li>
                        <li><button type='button' onClick={logout}><IoMdLogOut />로그아웃</button></li>
                    </ul>
                )
            }
        </div>

        <div className="logo_section">
            <Link to='/'><figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYd3RImgrUxn7dER6hdGYQZzMGpPJmEgyj30M4YcLt5w&s" alt="" /></figure></Link>
        </div>

        <div className="gnb_section">
            <ul className="gnb">
                {menuList.map((menu, index)=>(
                        <li key={index} > {menu}</li>
                ))}
            </ul>
            <div className="search_area">
                <label htmlFor="search" className='search_box'>
                    <IoSearchSharp size='20'/>
                    <input type="text" id='search' placeholder='제품검색' 
                        onKeyDown={(event)=> search(event)}
                    />
                </label>
            </div>
        </div>
    </div>
  )
}

export default Navbar