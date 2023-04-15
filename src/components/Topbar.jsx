import sideMenuIcon from '../images/side_menu.png'
import downArrow from '../images/arrow_down.png'
import manDP from '../images/man_dp.png'

function Topbar(props) {
  return ( <div className="topbar">
    <img height={20} src={sideMenuIcon} />
    <span className='title'>RESTAURANT NAME</span>
    <img height={15} className='downArrow' src={downArrow} />
    <img height={25} className='profilePic' src={manDP} />
  </div> );
}

export default Topbar;