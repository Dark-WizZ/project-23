import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar"
import { useEffect, useContext , useState} from "react";
import { AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RestContext } from "../context/RestContext";

function Home(props){

  const {currentUser, loading:authLoading} = useContext(AuthContext)  
  const {rest, loading:restLoading} = useContext(RestContext)
  const nav = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(!currentUser && !authLoading){
      nav('/login')
    }
    if(!rest && !restLoading){
      nav('/restinfo')
    }
  },[currentUser, authLoading, rest, restLoading])


  useEffect(()=>{
    setLoading(true)
    if(!restLoading && rest) {
      setLoading(false)
    }
  })

  return !loading && <div className="home">
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        {props.body}
      </div>
  </div>
}

export default Home;