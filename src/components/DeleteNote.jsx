import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'

const DeleteNote = (props) => {

  return (<Confirmation action = { ()=>{props.deleteNode(props.id)} } name = {'Delete Note'}/>)

}


export default DeleteNote