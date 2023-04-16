import { createContext, useEffect, useState } from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export const AuthContext = createContext()

export const AuthContextprovider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async(user) => {
      setCurrentUser(user)
      if (user){
        const docc = doc(db,'users',user.uid)
        await getDoc(docc).then(d => {
          setUserData(d.data())
        })
      }
      setLoading(false)
    })

    return () => unsub()
  }, [])

  return <AuthContext.Provider value={{currentUser, loading, userData}}>
    {children}
  </AuthContext.Provider>
}