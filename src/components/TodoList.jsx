import {useState,useEffect} from 'react'


const TodoList = (props) => {


  return (

    <div>
      From todo list
    <div>{props.todoList?props.todoList.map(x=><div>{x[1]}</div>):<div></div>}</div>
    </div>
  )


}


export default TodoList;