import {useState, useEffect} from 'react'


const NoteName = (props) => {

  const [nameValue, setNameValue] = useState(props.note.name)
  const [toggleNameValue, setToggleNameValue] = useState(true)


  useEffect(()=>{setNameValue(props.note.name)},[props.note.name])

  const onFormSubmit = (e) => {

    console.log(e.target[0].value);

    props.modifyNote(
      {id: props.note.id, name: `${e.target[0].value}`, todoList: props.note.todoList})

      e.preventDefault();

      setToggleNameValue(!toggleNameValue)
  }



return (

  <div>

  {toggleNameValue? <div>{nameValue}<button onClick={()=>{ setToggleNameValue(!toggleNameValue)}}>✍️</button></div> :

  <form onSubmit = {onFormSubmit} >
    <input type = 'text' value = {nameValue} onChange = { (e) => { console.log(e.target.value); setNameValue(e.target.value)  } } />

    <button type = 'submit'>✍️</button>
  </form>}

  </div>

)

}


export default NoteName