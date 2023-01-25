import {useState, useEffect} from 'react'
import TodoList from './TodoList'
import NoteName from './NoteName'
import DeleteNote from './DeleteNote'
import UndoEdit from './UndoEdit'
import UndoRedo from './UndoRedo'
const Note = (props) => {

 const [noteData, setNoteData] = useState(props.note);

 const [historyOfChanges, addAction] = useState([props.note])
 //const [nameValue, setNameValue] = useState(props.note.name)



  useEffect(()=>{ setNoteData(props.note)},[props.note])
  useEffect(()=>{ setNoteData(noteData)  },[noteData])
 // useEffect(()=>{addAction([props.note])},[props.note])
 // useEffect(()=>{setNameValue(props.note.name)},[props.note.name])
 // useEffect(()=>{setNameValue(props.note.name)},[props.note.name])

  const safe = () => {

    console.log(noteData, props.note)
    props.changeNode(
      noteData)

  }

  const modifyNote = (note) => {

    setNoteData(note)
    console.log(note)

    addAction([...historyOfChanges,note])

  }

  const setNoteFromHistory = (note) => {

    setNoteData(note);

  }



  return (

  <div id = 'note'>
    <div id = 'innerNote'>

        <div id = 'noteNameSection'>
          <NoteName note ={noteData} modifyNote = {modifyNote}/>
        </div>

        <div id = 'noteTodoListSection'>
          <TodoList note = {noteData} changeNode = {props.changeNode} modifyNote = {modifyNote}/>
        </div>


        <div id = 'noteButtonSection'>
          <button id = 'save' onClick = {safe}>Save</button>
          <button id = 'back' onClick = {()=>{ props.backToTheList() }}>Back to the list</button>
          <UndoRedo historyOfChanges = {historyOfChanges} setNoteFromHistory = {setNoteFromHistory}/>
          <UndoEdit modifyNote = {modifyNote} requestInitialNote = {props.requestInitialNote}/>
          <DeleteNote id = {props.note.id} deleteNode = {props.deleteNode}/>
        </div>

    </div>
  </div>



  )


}


export default Note;