import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
function Home(props){
  return <div className="home">
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        {props.body}
      </div>
  </div>
}

export default Home;