import sideMenuIcon from '../images/side_menu.png'
import downArrow from '../images/arrow_down.png'
import manDP from '../images/man_dp.png'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import {RestContext} from '../context/RestContext'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

function Topbar(props) {
  const {rest} = useContext(RestContext)
  const {currentUser} = useContext(AuthContext)

  return ( <div className="topbar">
    <img height={20} src={sideMenuIcon} />
    <span className='title'>{rest.restName}</span>
    <img height={15} className='downArrow' src={downArrow} />
    <img className='profilePic' onClick={()=>signOut(auth)} src={currentUser.photoURL} />
  </div> );
}

export default Topbar;