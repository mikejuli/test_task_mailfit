import {useRef, useCallback, createContext , useContext, useState} from 'react'
import Confirmation from './Confirmation'
const ConfirmContext = createContext();

export function ConfirmProvider({children}){


  const [state, setState] = useState({isOpen: false})
  const fn = useRef()

  const confirm = useCallback((data) => {
    return new Promise((resolve)=>{
      setState({ ...data, isOpen: true })
      console.log(fn.current)
      fn.current = (choice) => {
        resolve(choice)
        setState({ isOpen: false })
      }

      console.log('here')
     // setState({ isOpen: false })
    } )
  },[setState])

  return (

  <ConfirmContext.Provider value = {confirm}>
   <Confirmation {...state}
   onClose={() => fn.current(true)}
   onConfirm={() => fn.current(false)}  />
   {children}
  </ConfirmContext.Provider>

  )

}

//export default ConfirmContext;


export default function useConfirm() {

  return useContext(ConfirmContext)

}