import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Home(props){
  return <div className="home">
      <Topbar />
      <Sidebar />
      <Body />
  </div>
}

export default Home;