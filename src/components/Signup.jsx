import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import './style/Signup.css'

function Signup() {

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate();
  
  const changeEventHandler = (e)=> {
    setInput({...input, [e.target.name]: e.target.value});
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); 
      const res = await axios.post('https://memeapp-4a8f.onrender.com/api/v1/user/register', input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate('/login')
        toast.success(res.data.message);
        setInput({
          username: '',
          email: '',
          password: ''
        });
      }
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <div className="signup-container">
      <form onSubmit={signupHandler} className="signup-form">
        <div className="form-header">
          <h1 className="logo">Logo</h1>
          <p className="subheading">Signup to make your status cool</p>
        </div>
        <div className="input-group">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={input.username}
            onChange={changeEventHandler}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={input.email}
            onChange={changeEventHandler}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            onChange={changeEventHandler}
            className="input-field"
          />
        </div>
        {loading ? (
          <button className="loading-button">
            <Loader2 className="loader-icon" />
            Please Wait
          </button>
        ) : (
          <button type="submit" className="submit-button">Signup</button>
        )}
        <span className="login-link">
          Already have an account? <Link to="/login" className="link">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Signup
