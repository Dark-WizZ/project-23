import { createContext, useEffect, useState } from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import {onAuthStateChanged} from 'firebase/auth'

export const AuthContext = createContext()

export const AuthContextprovider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => unsub()
  }, [])

  return <AuthContext.Provider value={{currentUser, loading}}>
    {children}
  </AuthContext.Provider>
}