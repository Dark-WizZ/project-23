import homeIcon from '../images/home.png'
import dashboardIcon from '../images/dashboard.png'
import foodmenuIcon from '../images/food_menu.png'
import settingIcon from '../images/setting.png'
import {Link} from 'react-router-dom'
import FoodMenus from '../pages/FoodMenus'

function Sidebar(props) {
  return ( <div className="sidebar">
    <img src={homeIcon} />
    <img src={dashboardIcon} />
    <Link to='../foodmenus'>
      <img src={foodmenuIcon} />
    </Link>
    <img className="settingIcon" src={settingIcon} />
  </div> );
}

export default Sidebar;