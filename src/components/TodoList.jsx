import {useState,useEffect} from 'react'
import Todo from './Todo'
import {v4} from 'uuid';

const TodoList = (props) => {

  const [todoList, setTodoList] = useState((x)=>{ props.note.todoList != undefined ?  x = [props.note.todoList] :  x = []})

  useEffect(() => {


    console.log(props.note.todoList)
  setTodoList(props.note.todoList)

  },[props.note])



  const changeTodoList = (todo, todoName) => {

    props.note.todoList.map((x) => {x[0] === todo[0] ? x[1] = todoName : x[1]=x[1]})
    console.log(props.note)
    props.changeNode(props.note);

  }


  const deleteTodo = (todo) => {

    let deleteIndex;

    props.note.todoList.map((x,index) => {x[0] === todo[0] ? deleteIndex = index : x[1]=x[1]})
    console.log(deleteIndex)
    props.note.todoList.splice(deleteIndex, 1)
    props.changeNode(props.note);

  }

const addTodo = (todoName) => {

    let uuid = v4();

    let todo = [uuid, todoName, false]
    console.log(props.note)
    props.note.todoList.push(todo);
    props.changeNode(props.note);

  }


  return (

    <div>
      From todo list
      {console.log(todoList)}
    <div>{todoList?todoList.map(x=><Todo key = {x[0]} todo = {x} changeTodoList = {changeTodoList} deleteTodo = {deleteTodo}/>) : <div></div> }</div>

    <button onClick = {()=>{addTodo('new todo')}}>+ Todo</button>

    </div>
  )


}


export default TodoList;



  //   var updatedTodoList = [
  //     [
  //         "a535259b-61c6-436b-9ad9-88f4432ed622",
  //         "soooon",
  //         false
  //     ],
  //     [
  //         "dca14846-543b-48e0-8c7c-9af49ffc2399",
  //         "buyCoffee",
  //         false
  //     ],
  //     [
  //         "d906e963-8870-4505-a18e-eb7cb5df1248",
  //         "buyFruits",
  //         false
  //     ]
  // ]