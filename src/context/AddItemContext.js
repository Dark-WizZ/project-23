import { createContext, useEffect, useState } from "react";

export const AddItemContext = createContext()

export const AddItemContextProvider = ({children}) => {
  let [addItem, setAddItem]= useState(false)

  return(
  <AddItemContext.Provider value={{addItem, setAddItem}}>
    {children}
  </AddItemContext.Provider>)
}