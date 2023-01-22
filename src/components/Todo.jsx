import {useState, useEffect} from 'react'

const Todo = (props) => {

  const [todoName, setTodoName] = useState((x)=>{props.todo?x=props.todo[1]:x='new todo'})

  const changeTodo = () => {}


  const onFormSubmit = (e) => {

    let indexChanged;

    props.changeTodoList(props.todo, todoName)

    // props.note.todoList[]

    // console.log(e);
    // props.changeNode(
    //   {id: props.note.id, name: props.note.name, todoList: `${e.target[0].value}`})

      e.preventDefault();
  }



  return (


<div>
<div>{props.todo[1]}</div>

<form onSubmit = {onFormSubmit} >
<input type = 'text' value = {todoName} onChange = { (e) => { console.log(e.target.value); setTodoName(e.target.value)  } } />

<button type = 'submit'>Submit</button>
</form>
<button onClick = {()=>{props.deleteTodo(props.todo)}}>Delete Todo</button>
</div>

  )


}


export default Todo;