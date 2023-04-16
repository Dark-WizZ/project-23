import { createContext, useState, useEffect, useContext } from "react";
import {getDoc, doc} from 'firebase/firestore'
import {storage, db, auth} from '../firebase'
import { AuthContext } from "./AuthContext"
import {onAuthStateChanged} from 'firebase/auth'

export const RestContext = createContext()

export const RestContextProvider = ({children}) => {
  const [rest, setRest] = useState(null)
  const {currentUser, loading:authLoading} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, async ()=>{
      console.log('auth change=>',auth)
      if (currentUser && !authLoading){
        const d = await getDoc(doc(db, 'restaurants', currentUser.uid))
        if(d.exists()){
          setRest(d.data())
        }else{
          console.log('no such data', currentUser.uid)
        }
      }
      console.log(rest)
      setLoading(false)

      return unsub
    })
  })



  return <RestContext.Provider value={{rest, setRest}}>
    {children}
  </RestContext.Provider>
}