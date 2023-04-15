import addProfilePic from '../images/add_profile_picture.png'
import cancelIcon from '../images/cancel.png'
import { useState, useEffect } from 'react'

function AddMenu(props) {

  useEffect(()=>{
    console.log('im here')

    return console.log('im out')
  })

  const cancelClk = () => {
    const addItem = document.querySelector('.addMenu')
    addItem.style.display = 'none'

  }

  return ( <div className="container addMenu">
    <div className="wrapper">
      <img className='cancel' src={cancelIcon} height='25' onClick={cancelClk}/>
      <span className="heading">Add Menu</span>
      <form>
        <input required type="text" placeholder="Name" />
        <input required type="text" placeholder="Description" />
        <input required type="number" placeholder="Price"/>
        <div className="isVeg">
          <input required type="checkbox" id='isVeg'/>
          <label htmlFor="isVeg">Veg</label>
        </div>
        <input required style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>Add picture for Dish</span>
        </label>
        <button>Add Menu</button>
      </form>
    </div>
  </div> );
}

export default AddMenu;