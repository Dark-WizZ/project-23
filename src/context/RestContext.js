import { createContext, useState, useEffect, useContext } from "react";
import {getDoc, doc} from 'firebase/firestore'
import {storage, db, auth} from '../firebase'
import { AuthContext } from "./AuthContext"
import {onAuthStateChanged} from 'firebase/auth'

export const RestContext = createContext()

export const RestContextProvider = ({children}) => {
  const [rest, setRest] = useState({})
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    onAuthStateChanged(auth, async ()=>{
      if (currentUser){
        const d = await getDoc(doc(db, 'restaurant', currentUser.uid))
        if(d.exists()){
          console.log('data=> ',d.data())
        }else{
          console.log('no such data')
        }
      }
    })
  })



  return <RestContext.Provider value={{rest, setRest}}>
    {children}
  </RestContext.Provider>
}