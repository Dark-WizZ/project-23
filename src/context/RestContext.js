import { createContext, useState, useEffect, useContext } from "react";
import {getDoc, doc, onSnapshot} from 'firebase/firestore'
import {storage, db, auth} from '../firebase'
import { AuthContext } from "./AuthContext"
import {onAuthStateChanged} from 'firebase/auth'

export const RestContext = createContext()

export const RestContextProvider = ({children}) => {
  const [rest, setRest] = useState(null)
  const {currentUser, loading:authLoading} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let unsub = () => {};
    if (currentUser && !authLoading){
      const docc = doc(db, 'restaurants', currentUser.uid)
      unsub = onSnapshot(docc,(d)=>{
        setRest(d.data())
      })
    }
    setLoading(false)
    return ()=>unsub
  },[currentUser, authLoading, loading])



  return <RestContext.Provider value={{rest, setRest, loading, setLoading}}>
    {children}
  </RestContext.Provider>
}