import { Link, useNavigate } from 'react-router-dom';
import addProfilePic from '../images/add_profile_picture.png'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {onAuthStateChanged} from 'firebase/auth'
import {auth, storage, db} from '../firebase'
import {doc, setDoc} from 'firebase/firestore'
import {uploadBytesResumable, getDownloadURL, ref} from 'firebase/storage'
 
function RestInfo(props) {

  const nav = useNavigate()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    onAuthStateChanged(auth, ()=>{
      if(!currentUser){
        nav('/login')
      }
    })
  })

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    const restName = e.target[0].value
    const address = e.target[1].value
    const city = e.target[2].value
    const pin = e.target[3].value
    const file = e.target[4].files[0]

    try{
      const  date = new Date().getTime()
      const storageRef = ref(storage, currentUser.displayName+date)

      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async (url) => {
          try{
            await setDoc(doc(db, 'restaurants', currentUser.uid),{
              restName,address,city,pin,photoUrl:url
            })
            nav('/')
          }catch(error){
            console.log('error setting restaurant info: ', error)
            setLoading(true)
            setErr(true)
          }
        })
      })

    }catch(error){
      console.error('error storing picture on firebase storage', error)
      setErr(true)
      loading(false)
    }
    setLoading(false)
  }

  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Restaurant's detials</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Restaurant name" />
        <input required type="text" placeholder="Flat no, street name" />
        <input required type="text" placeholder="City"/>
        <input required type="number" placeholder="Pin no" />
        <input style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>Add an Logo</span>
        </label>
        <button disabled={loading}>Submit</button>
        {loading && "Uploading image please wait..."}
        {err && <span>Something went wrong!</span>}
      </form>
    </div>

  </div>
}

export default RestInfo;