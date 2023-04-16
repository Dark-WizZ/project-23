import addProfilePic from '../images/add_profile_picture.png'
import cancelIcon from '../images/cancel.png'
import foodItem from '../images/cancel.png'
import { useState, useEffect, useContext } from 'react'
import { AddItemContext } from '../context/AddItemContext'
import { ItemEditContext } from '../context/ItemEditContext'
import {doc, setDoc, collection, getDoc, getDocs} from 'firebase/firestore'
import {uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage'
import {db, auth, storage} from '../firebase'
import {AuthContext} from '../context/AuthContext'
import { async } from '@firebase/util'

function AddMenu(props) {

  const {addItem, setAddItem} = useContext(AddItemContext)
  const {itemEdit, setItemEdit} = useContext(ItemEditContext)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const {currentUser} = useContext(AuthContext)

  const menu = [
    {
      catName: 'Biriyani',
      items: [
        {
          name: 'Chicken Biriyani',
          desc: `Succulent bone-in chicken pieces cooked in rich spices and steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love.`,
          price: 352,
          veg: false,
          image:foodItem,
        },
        {
          name: 'Mushroom Biriyani',
          desc: `Steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love.`,
          price:471,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Mutton Biriyani',
          desc: `Soft and tender pieces of mutton in rich spices and steeped in seeraga samba rice and cooked to perfection from Kongu Nadu with love`,
          price:340,
          veg: false,
          image:foodItem,
        }
      ]
    },
    {
      catName: 'Rice',
      items: [
        {
          name: 'Szechwan Veg Fried Rice',
          desc: 'A spicy Indo-Chinese intermix of vegetables and rice tossed in Schezwan sauce that adds a unique peppery flavour to the dish.',
          price: 250,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Veg Fried Rice',
          desc: 'A deliciously aromatic and flavourful dish prepared from rice and stir-fried vegetables.',
          price:240,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Chicken Fried Rice',
          desc: 'A satisfying combination of stir-fried vegetables, chicken and rice with a tinge of vinegar.',
          price:275,
          veg: false,
          image:foodItem,
        }
      ]
    },
    {
      catName: 'Juice',
      items: [
        {
          name: 'Apple Juice',
          desc: 'A revitalizing juice made from fresh apples.',
          price: 175,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Orange Juice',
          desc: 'Freshly squeezed orange juice packed with vitamins and minerals.',
          price:185,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Pineapple Juice',
          desc: 'Sweet and tangy pineapple juice blended until smooth and frothy.',
          price:197,
          veg: true,
          image:foodItem,
        }
      ]
    },
  ]

  useEffect(()=>{
    const bg = document.querySelectorAll('.foodMenus > *:not(.addMenu)');
    bg.forEach(e => e.style='filter: blur(0px)')
    if (addItem || itemEdit)  bg.forEach(e => e.style='filter: blur(5px)')
  })

  const cancelClk = () => {
    setAddItem(false)
    setItemEdit(false)
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const dishName = e.target[0].value
    const desc = e.target[1].value 
    const category = e.target[2].value
    const price = e.target[3].value
    const file = e.target[4].files[0]

    try{
      const date = new Date().getTime()
      const storageRef = ref(storage,currentUser.displayName+date)

      await uploadBytesResumable(storageRef,file).then(() => {
        getDownloadURL(storageRef).then(async url => {
          try{
            const docc = doc(db,'menus',currentUser.email,category, dishName)
            await setDoc(docc,{
              dishName,desc,category,price,photoURL:url
            }).then(async()=>{

              //sandbox
              const menuRef = collection(db,'menus');
              menu.forEach(cat => {
                let catRef = doc(menuRef, currentUser.email)
                catRef = collection(catRef, cat.catName)

                cat.items.forEach(i => {
                  let iRef=doc(catRef, i.name)
                  setDoc(iRef,i)
                  .then(()=>console.log('added'))
                  .catch(error => console.error('error adding',error))
                })
              })
            }).then(async()=>{
              const menuRef = collection(db, 'menus')
              console.log(menuRef.get())

              getDocs(menuRef).then(q => {
                const menuItem = []
                q.forEach(doc => {
                  const data = doc.data()

                  const cat ={
                    catName: data.category,
                    item: data.foods.map(food => {
                      return{
                        name: food.name,
                      }
                    })
                  }
                  menuItem.push(cat)
                })
                console.log(menuItem)
              })
            })
            setAddItem(false)
            setItemEdit(false)
          }catch(error){
            console.error('error updating menu on firebase db: ',error)
            setErr(true)
            setLoading(false)
          }
        })
      })

    }catch(error){
      console.error('error uploading file to firbase storage:',error)
      setErr(true)
      setLoading(false)
    }
    setLoading(false)
  }

  return (itemEdit || addItem) && ( <div className="container addMenu">
    {window.scrollTo(0,0)}
    <div className="wrapper">
      <img className='cancel' src={cancelIcon} height='25' onClick={cancelClk}/>
      <span className="heading">{(itemEdit)?'Edit':'Add'} Menu</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Dish Name" />
        <input required type="text" placeholder="Description" />
        <input required type="text" placeholder="Category" />
        <input required type="number" placeholder="Price"/>
        {/* <div className="isVeg">
          <input required type="checkbox" id='isVeg'/>
          <label htmlFor="isVeg">Veg</label>
        </div> */}
        <input required style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>{(itemEdit)?'Change':'Add'} picture for Dish</span>
        </label>
        <button>{(itemEdit)?'Edit':'Add'} Menu</button>
        {loading && 'please wait...'}
      </form>
    </div>
  </div> );
}

export default AddMenu;