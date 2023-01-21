import {useState, useEffect} from 'react'

const Note = (props) => {

 const [noteData, setNoteData] = useState();

  useEffect(()=>{ setNoteData((x)=>props.note)  },[])


  const onFormSubmit = (e) => {

    e.preventDefault();
      console.log(e);
    props.changeNode(
      {id: props.note.id, name: `${e.target[0].value}`, todoList: '!!!!!!'})

  }


  return (
    <div>

    From Note
    <div>{props.note.name}</div><div>{props.note.todoList}</div>

<form onSubmit = {onFormSubmit}>
<input type = 'text'/>

<button type = 'submit'>Submit</button>
</form>


<button onClick = {()=>{props.changeNode(
{id: props.note.id, name: 'anotherList5', todoList: '!!!!!!'})}}>changeNode</button>

<button id = 'save' onClick = {()=>{ props.backToTheList() }}>Save</button>

    </div>



  )


}


export default Note;