import {useState, useEffect} from 'react'
import TodoList from './TodoList'

const Note = (props) => {

 const [noteData, setNoteData] = useState(props.note);
 const [nameValue, setNameValue] = useState(props.note.name)

 const [toggleNameValue, setToggleNameValue] = useState(true)

  useEffect(()=>{ setNoteData(props.note)  },[props.note])
  useEffect(()=>{ setNoteData(noteData)  },[noteData])

 // useEffect(()=>{setNameValue(props.note.name)},[props.note.name])
 // useEffect(()=>{setNameValue(props.note.name)},[props.note.name])

  const safe = () => {

    console.log(noteData, props.note)
    props.changeNode(
      noteData)

  }

  const modifyTodoList = (note) => {

    setNoteData(note)
    console.log(note)
  }

  const onFormSubmit = (e) => {

    console.log(e.target[0].value);
    setNoteData(
      {id: props.note.id, name: `${e.target[0].value}`, todoList: props.note.todoList})

      e.preventDefault();

      setToggleNameValue(!toggleNameValue)
  }


  return (
    <div style = {{position: 'relative', left: '40%', width: '400px', lenght: '200px', backgroundColor: 'grey'}}>

    From Note
  {toggleNameValue? <div style = {{fontSize: '30px'}}>{nameValue}<button onClick={()=>{ setToggleNameValue(!toggleNameValue)}}>✍️</button></div> :

  <form onSubmit = {onFormSubmit} >
<input type = 'text' value = {nameValue} onChange = { (e) => { console.log(e.target.value); setNameValue(e.target.value)  } } />

<button type = 'submit'>✍️</button>
</form>}

{/* <form onSubmit = {onFormSubmit} >
<input type = 'text' value = {nameValue} onChange = { (e) => { console.log(e.target.value); setNameValue(e.target.value)  } } />

<button type = 'submit'>✍️</button>
</form> */}
<br/>
<TodoList note = {noteData} changeNode = {props.changeNode} modifyTodoList = {modifyTodoList}/>
<button id = 'save' onClick = {safe}>Save</button>
<button id = 'back' onClick = {()=>{ props.backToTheList() }}>Back to the list</button>

    </div>



  )


}


export default Note;