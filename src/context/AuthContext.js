import { createContext, useEffect, useState } from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import {onAuthStateChanged} from 'firebase/auth'

export const AuthContext = createContext()

export const AuthContextprovider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(currentUser)
      setCurrentUser(user)
    })

    return () => unsub()
  }, [])

  return <AuthContext.Provider value={{currentUser}}>
    {children}
  </AuthContext.Provider>
}