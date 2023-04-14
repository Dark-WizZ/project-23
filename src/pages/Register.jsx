import { Link } from 'react-router-dom';
import addProfilePic from '../images/add_profile_picture.png'

function Login(props){
  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Chef's Register</span>
      <form>
        <input required type="text" placeholder="Name" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password"/>
        <input required type="number" placeholder="Phone no" />
        <input required style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>Add an profile picture</span>
        </label>
        <Link to='/restinfo'>
          <button>Sign in</button>
        </Link>
      </form>

      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>

  </div>
}

export default Login;