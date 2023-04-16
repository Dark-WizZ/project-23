import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar"
import { useEffect, useContext } from "react";
import { AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RestContext } from "../context/RestContext";

function Home(props){

  const {currentUser, loading:authLoading} = useContext(AuthContext)  
  const {rest, loading:restLoading} = useContext(RestContext)
  const nav = useNavigate()

  useEffect(()=>{
    if(!currentUser && !authLoading){
      nav('/login')
    }
    if(!rest && !restLoading){
      nav('/restinfo')
    }
  },[currentUser, authLoading, rest, restLoading])

  return <div className="home">
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        {props.body}
      </div>
  </div>
}

export default Home;