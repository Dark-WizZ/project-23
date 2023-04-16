import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { RestContext } from "../context/RestContext";

function Body(props) {

  const {currentUser, userData} = useContext(AuthContext)
  const {rest} = useContext(RestContext)
  
  return ( <div className="welcome">
    <div className="greet">
      Welcome, {currentUser.displayName}
    </div>
    <div className="logo">
      <img src={rest.photoURL} />
      <div className="name">
        {rest.restName}
      </div>
      <div className="address">
        {rest.address}<br />
        {rest.city}<br />
        {rest.pin}<br />{console.log(currentUser)}
        ph: {userData.phoneNo}
      </div>
    </div>
  </div> );
}

export default Body;