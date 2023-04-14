import {Link} from 'react-router-dom'

function Login(props){
  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Chef's Login</span>
      <form>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password"/>
        <button>Sign in</button>
      </form>
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>

  </div>
}

export default Login;