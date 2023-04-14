import homeIcon from '../images/home.png'
import dashboardIcon from '../images/dashboard.png'
import foodmenuIcon from '../images/food_menu.png'
import settingIcon from '../images/setting.png'
import {Link} from 'react-router-dom'
import FoodMenus from '../pages/FoodMenus'

function Sidebar(props) {
  return ( <div className="sidebar">
    <Link to='../'>
      <img src={homeIcon} />
    </Link>
    <Link to='../dashboard'>
      <img src={dashboardIcon} />
    </Link>
    <Link to='../foodmenus'>
      <img src={foodmenuIcon} />
    </Link>
    <Link className="settingIcon" to='../settings'>
      <img src={settingIcon} />
    </Link>
  </div> );
}

export default Sidebar;