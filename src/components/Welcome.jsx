import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { RestContext } from "../context/RestContext";

function Body(props) {

  const {currentUser} = useContext(AuthContext)
  const {rest} = useContext(RestContext)
  
  return ( <div className="welcome">
    <div className="greet">
      Welcome, {currentUser.displayName}
    </div>
    <div className="logo">
      <div className="name">

      </div>
      <img src={rest.photoURL} />
    </div>
  </div> );
}

export default Body;