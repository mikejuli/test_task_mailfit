import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'

const UndoEdit = (props) => {

  return (<Confirmation action = { ()=>{let s = props.requestInitialNote(); props.modifyNote(s) }} name = {'Undo Edit'}/>)

}


export default UndoEdit;