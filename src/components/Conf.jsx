import { createContext, useContext, useState } from "react"
import Confirmation from './Confirmation'

const ConfirmDialog = createContext()

export function ConfirmDialogProvider({ children }) {
  const [state, setState] = useState({ isOpen: false })

  return (
    <ConfirmDialog.Provider>
      {state}
    </ConfirmDialog.Provider>
  )
}

export default function useConfirm() {
  return useContext(ConfirmDialog)
}