import {useState,useEffect} from 'react'
import Todo from './Todo'
import {v4} from 'uuid';

const TodoList = (props) => {

  const [currentNote, setCurrentNote] = useState( () => { let x = JSON.parse(JSON.stringify(props.note)) ;return x || [];} )


  useEffect(() => {

    setCurrentNote(currentNote)

  },[currentNote])


  useEffect(() => {

    setCurrentNote(() => { let x = JSON.parse(JSON.stringify(props.note)) ;return x || [];})

  },[props.note])





  const changeTodoList = (todo, todoName, todoBox) => {

    currentNote.todoList = currentNote.todoList.map((x) => { if(x[0] === todo[0]) { x[1] = todoName ; x[2] = todoBox } return x })

    setCurrentNote(JSON.parse(JSON.stringify(currentNote)))

    console.log(currentNote, props.note)
    props.modifyNote(currentNote);

  }


  const deleteTodo = (todo) => {

    let deleteIndex;

    currentNote.todoList.map((x,index) => {x[0] === todo[0] ? deleteIndex = index : x[1]=x[1]})
    console.log(deleteIndex)
    currentNote.todoList.splice(deleteIndex, 1)
    setCurrentNote(JSON.parse(JSON.stringify(currentNote)));
    props.modifyNote(currentNote);

  }

const addTodo = (todoName) => {

    let uuid = v4();

    let todo = [uuid, todoName, false]
    console.log(props.note , currentNote)
    currentNote.todoList.push(todo);
    setCurrentNote(JSON.parse(JSON.stringify(currentNote)));

    console.log(currentNote);
    props.modifyNote(currentNote);

  }




  return (

    <div>


    <div>{currentNote.todoList?currentNote.todoList.map(x=><Todo key = {x[0]} todo = {x} changeTodoList = {changeTodoList} deleteTodo = {deleteTodo}/>) : <div></div> }</div>

    <button id = 'newTodo' onClick = {()=>{addTodo('New todo')}}><div style ={{marginTop:'-7px'}}>+</div></button>

    </div>
  )


}


export default TodoList;
