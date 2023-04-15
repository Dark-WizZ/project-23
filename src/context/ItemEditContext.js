import { useState, createContext } from "react";

export const ItemEditContext = createContext();

export const ItemEditContextProvider = ({children}) => {
  const [itemEdit, setItemEdit] = useState(false);

  return <ItemEditContext.Provider value={{itemEdit, setItemEdit}}>
    {children}
  </ItemEditContext.Provider>
}