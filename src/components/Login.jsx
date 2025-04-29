import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser } from '../redux/authSlice'
import './style/Login.css'

function Login() {

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post('https://memeapp-4a8f.onrender.com/api/v1/user/login', input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setAuthUser(res.data.user))
        navigate('/');
        toast.success(res.data.message);
        setInput({
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
    <div className="login-container">
      <form onSubmit={loginHandler} className="login-form">
        <div className="form-header">
          <h1 className="logo">Logo</h1>
          <p className="subheading">Login to get make your home cool</p>
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
          <button type="submit" className="submit-button">Login</button>
        )}
        <span className="signup-link">
          Don't have an account? <Link to="/signup" className="link">Signup</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
