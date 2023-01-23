import {useState,useEffect} from 'react'
import Todo from './Todo'
import {v4} from 'uuid';

const TodoList = (props) => {

  const [currentNote, setCurrentNote] = useState( () => { let x = JSON.parse(JSON.stringify(props.note)) ;return x || [];} )
  // const [todoList, setTodoList] = useState((x)=>{ props.note.todoList != undefined ?  x = [props.note.todoList] :  x = []})

  // useEffect(() => {


  //   console.log(currentNote.todoList)
  // setTodoList(currentNote.todoList)

  // },[currentNote])



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
    props.modifyTodoList(currentNote);

  }


  const deleteTodo = (todo) => {

    let deleteIndex;

    currentNote.todoList.map((x,index) => {x[0] === todo[0] ? deleteIndex = index : x[1]=x[1]})
    console.log(deleteIndex)
    currentNote.todoList.splice(deleteIndex, 1)
    setCurrentNote(JSON.parse(JSON.stringify(currentNote)));
    props.modifyTodoList(currentNote);

  }

const addTodo = (todoName) => {

    let uuid = v4();

    let todo = [uuid, todoName, false]
    console.log(props.note , currentNote)
    currentNote.todoList.push(todo);
    setCurrentNote(JSON.parse(JSON.stringify(currentNote)));

    console.log(currentNote);
    props.modifyTodoList(currentNote);

  }

const undo = () => {



}


  return (

    <div>
      From todo list

    <div>{currentNote.todoList?currentNote.todoList.map(x=><Todo key = {x[0]} todo = {x} changeTodoList = {changeTodoList} deleteTodo = {deleteTodo}/>) : <div></div> }</div>

    <button onClick = {()=>{addTodo('new todo')}}>+ Todo</button>
    <button onClick = {()=>{undo()}}>Undo Edit</button>
    <button onClick = {()=>{undo()}}>Undo ↩</button>
    </div>
  )


}


export default TodoList;
