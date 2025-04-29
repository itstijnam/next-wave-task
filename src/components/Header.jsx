import React, { useState } from 'react'
import './style/Header.css'
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { setAuthUser } from '../redux/authSlice';

function Header() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const topNavList = [
        {
            img: 'qrImage',
            text: 'Lorem ipsum dolor'
        },
        {
            img: 'qrImage',
            text: 'Lorem ipsum dolor'
        },
        {
            img: 'qrImage',
            text: 'Lorem ipsum dolor'
        },
    ]

    const logoutHandler = async()=>{
      try {
        const res = await axios.get(`https://memeapp-4a8f.onrender.com/api/v1/user/logout`, {withCredentials: true});
        if(res.data.success){
          dispatch(setAuthUser(null));
          navigate('/login')
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.error(error.respone.data.message) 
      }
    }

  return (
    <div className='header-container'>
      <div className='header-top'>
        {topNavList.map((t, i)=> (
            <p key={i} >{t.text}</p>
        ))}
      </div>
      <div className='header'>
        <div className="company-detail">
          <div className="comapany-image">
            <img src="/LOGO.png" alt="" />
          </div>
          <div className="comapany-name">LOGO</div>
          <div className="comapany-feature">
            <ul>
              <li><FiSearch size={18} /></li>
              <li><FiHeart size={18} /></li>
              <li><FiShoppingBag size={18} /></li>
              <li onClick={()=>setShow(!show)} ><FiUser size={18} />
              {show &&
                <div className="logoutbtn"
                 style={{
                  background: '#333', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '10px'
                  }} >
                  <p onClick={logoutHandler}>Logout</p>
                </div>
              }
              </li>
            </ul>
            <p>ENG <span className='dropdownIcon'>v</span></p>
          </div>
        </div>
        <div className="company-services">
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>Contact US</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
