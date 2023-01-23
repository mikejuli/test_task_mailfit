import {useState, useEffect} from 'react'

const Todo = (props) => {

  const [todoName, setTodoName] = useState((x)=>{props.todo?x=props.todo[1]:x='new todo'})
  const [todoBox, setTodoBox] = useState((x)=>{props.todo?x=props.todo[2]:x=false})

  const [toggleChangeTodo, setToggleChangeTodo] = useState(false);

  useEffect(()=>{setTodoName((x)=>props.todo[1])},[props.todo])
  useEffect(()=>{setTodoBox((x)=>props.todo[2])},[props.todo])


  const onFormSubmit = (e) => {

    let indexChanged;

    props.changeTodoList(props.todo, todoName, todoBox)
    console.log(props.todo, todoName, todoBox)
    // props.note.todoList[]

    // console.log(e);
    // props.changeNode(
    //   {id: props.note.id, name: props.note.name, todoList: `${e.target[0].value}`})

      e.preventDefault();

     setToggleChangeTodo(!toggleChangeTodo)
  }

  const onCheckBox = () => {

    //here is suppose to implement cb : setTodo and then changeTodoList
    // setTodoBox(!todoBox)

    props.changeTodoList(props.todo, todoName, !todoBox)

  }



  return (


<div>


{/* <input type="checkbox" value="on" checked = {todoBox || false} onChange = { (e) => { console.log(e.target.value); setTodoBox(!todoBox);  } } /> */}


<div style ={{display: 'flex'}}>

<div style = {{cursor: 'pointer'}} onClick = {onCheckBox}>{props.todo[2] ? '✅' : '⬜' }</div>


<div>
{toggleChangeTodo?<form onSubmit = {onFormSubmit} >

{/* <input type="checkbox" id="c1" value="on" name="cb1" checked = {todoBox || false} onChange = { (e) => { console.log(e.target.value); setTodoBox(!todoBox)  } } /> */}

<input type = 'text' value = {todoName || ''} onChange = { (e) => { console.log(e.target.value); setTodoName(e.target.value)  } } />

<button type = 'submit'>✍️</button>
</form>:<div>{props.todo[1]}<button onClick = {()=>{setToggleChangeTodo(!toggleChangeTodo)}}>✍️</button>
</div>}
</div>

<button onClick = {()=>{props.deleteTodo(props.todo)}}>❌</button>

</div>




<br/>
<br/>
</div>

  )


}


export default Todo;