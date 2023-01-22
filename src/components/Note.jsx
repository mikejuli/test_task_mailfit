import {useState, useEffect} from 'react'
import TodoList from './TodoList'

const Note = (props) => {

 const [noteData, setNoteData] = useState();
 const [nameValue, setNameValue] = useState('')

  useEffect(()=>{ setNoteData((x)=>props.note)  },[])

 // useEffect(()=>{setNameValue(props.note.name)},[props.note.name])
  useEffect(()=>{setNameValue(()=>props.note.name?props.note.name:'new note')},[props.note.name])



  const onFormSubmit = (e) => {

    console.log(e);
    props.changeNode(
      {id: props.note.id, name: `${e.target[0].value}`, todoList: props.note.todoList})

      e.preventDefault();
  }


  return (
    <div style = {{position: 'relative', left: '40%', width: '200px', lenght: '200px', backgroundColor: 'grey'}}>

    From Note
    <div>{nameValue}</div>

<form onSubmit = {onFormSubmit} >
<input type = 'text' value = {nameValue} onChange = { (e) => { console.log(e.target.value); setNameValue(e.target.value)  } } />

<button type = 'submit'>Submit</button>
</form>

<TodoList note = {props.note} changeNode = {props.changeNode}/>

<button id = 'save' onClick = {()=>{ props.backToTheList() }}>Back to the list</button>

    </div>



  )


}


export default Note;