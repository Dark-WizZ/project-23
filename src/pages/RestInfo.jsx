import { Link } from 'react-router-dom';
import addProfilePic from '../images/add_profile_picture.png'

function RestInfo(props) {
  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Restaurant's detials</span>
      <form>
        <input required type="text" placeholder="Restaurant name" />
        <input required type="text" placeholder="Flat no, street name" />
        <input required type="text" placeholder="City"/>
        <input required type="number" placeholder="Pin no" />
        <input style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>Add an Logo</span>
        </label>
        <Link to='/'>
          <button>Submit</button>
        </Link>
      </form>
    </div>

  </div>
}

export default RestInfo;