import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'


function Login(props){
  const [err, setErr] = useState(false)
  const nav = useNavigate()

  const submitHandler = async e => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try{
      await signInWithEmailAndPassword(auth, email, password)
      nav('/')
    }catch(error){
      console.log('error signing in: ', error)
      setErr(true)
    }
  }

  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Chef's Login</span>
      <form onSubmit={submitHandler}>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password"/>
        <button>Sign in</button>
      </form>
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>

  </div>
}

export default Login;