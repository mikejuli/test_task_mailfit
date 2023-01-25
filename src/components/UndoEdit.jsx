import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'

const UndoEdit = (props) => {

  return (<Confirmation action = { ()=>{let s = props.requestInitialNote(); props.modifyNote(s) }} name = 'undoEdit' text = 'Undo Edit'/>)

}


export default UndoEdit;