import addProfilePic from '../images/add_profile_picture.png'
import cancelIcon from '../images/cancel.png'
import { useState, useEffect, useContext } from 'react'
import { AddItemContext } from '../context/AddItemContext'
import { ItemEditContext } from '../context/ItemEditContext'

function AddMenu(props) {

  const {addItem, setAddItem} = useContext(AddItemContext)
  const {itemEdit, setItemEdit} = useContext(ItemEditContext)

  useEffect(()=>{
    const bg = document.querySelectorAll('.foodMenus > *:not(.addMenu)');
    bg.forEach(e => e.style='filter: blur(0px)')
    if (addItem || itemEdit)  bg.forEach(e => e.style='filter: blur(5px)')
  })

  const cancelClk = () => {
    setAddItem(false)
    setItemEdit(false)
  }

  return (itemEdit || addItem) && ( <div className="container addMenu">
    {window.scrollTo(0,0)}
    <div className="wrapper">
      <img className='cancel' src={cancelIcon} height='25' onClick={cancelClk}/>
      <span className="heading">{(itemEdit)?'Edit':'Add'} Menu</span>
      <form>
        <input required type="text" placeholder="Name" />
        <input required type="text" placeholder="Description" />
        <input required type="text" placeholder="Category" />
        <input required type="number" placeholder="Price"/>
        <div className="isVeg">
          <input required type="checkbox" id='isVeg'/>
          <label htmlFor="isVeg">Veg</label>
        </div>
        <input required style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>{(itemEdit)?'Change':'Add'} picture for Dish</span>
        </label>
        <button>{(itemEdit)?'Edit':'Add'} Menu</button>
      </form>
    </div>
  </div> );
}

export default AddMenu;