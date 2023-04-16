import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar"
import { useEffect, useContext } from "react";
import { AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home(props){

  const {currentUser} = useContext(AuthContext)  
  const nav = useNavigate()

  useEffect(()=>{
    if(!currentUser){
      nav('./login')
    }
  })

  return <div className="home">
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        {props.body}
      </div>
  </div>
}

export default Home;