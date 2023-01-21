import {useState, useEffect} from 'react'

const Note = (props) => {



  return (
    <div>

    From Note
    <div>{props.note.name}</div><div>{props.note.todoList}</div>

    </div>



  )



}


export default Note;