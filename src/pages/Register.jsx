import { Link, useNavigate } from 'react-router-dom';
import addProfilePic from '../images/add_profile_picture.png'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth, db , storage} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {doc, setDoc} from 'firebase/firestore'
import { useState, useEffect } from 'react';

function Register(props){

  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handleSubmit = async(e) => {
    setLoading(true)
    console.log(e)
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const phoneNo = e.target[3].value
    const file = e.target[4].files[0]
    console.log(file)

    try{
      //create user
      const res = await createUserWithEmailAndPassword(auth, email, password)
      //create unique image url
      const date  =new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async url => {
          console.log(url)
          try{
            await updateProfile(res.user, {
              displayName,
              photoURL: url,
              phoneNo
            })

            //create user on firebase
            await setDoc(doc(db, 'users',res.user.id),{
              uid: res.user.id,
              displayName,
              email,
              photoURL: url,
              phoneNo
            })
            //create restaurant detail and empty menu for new user
            // await setDoc(doc(db,'restaurants',res.user.id),{})
            // await setDoc(doc(db, 'menus', res.user.id), {})
            nav('/restinfo')
          }catch(error){
            console.error('error creating user data', error)
            setErr(true)
            setLoading(false)
          }
        })
      })
    }catch(error){
      console.error('error creating user: ',error)
      setErr(true)
      setLoading(false)
    }
  }

  return <div className="container">
    <div className="wrapper">
      <span className="logo">Restro App</span>
      <span className="title">Chef's Register</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Name" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password"/>
        <input required type="number" placeholder="Phone no" />
        <input required style={{display:'none'}} type="file" id="file"/>
        <label htmlFor='file'>
          <img src={addProfilePic} height='20' className="pic"/>
          <span>Add an profile picture</span>
        </label>
        <button disabled={loading}>Sign in</button>
        {loading && "Uploading image please wait..."}
        {err && <span>Something went wrong!</span>}
      </form>

      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>

  </div>
}

export default Register;