import {useState, useEffect} from 'react'

const List = (props) => {



  return (
    <div>

   List
    <div style = {{position: 'absolute', width: '600px',height:'auto',backgroundColor: 'grey', left: '10%'}}>

<div>

<button id ='add' onClick = {props.createNewNode}>+ Add</button>


</div>

{props.mockData.map((x)=><div id = 'item' style = {{margin: '20px',backgroundColor:'aqua', width: '150px', height: '100px'}} onClick = {(e)=>{ e.target.clicked = true; console.log(e)}}><div>{x.name}</div><div>{x.todoList}</div>

<div id = 'showButtons'>
<div id ='add' style = {{backgroundColor: 'red'}} onClick = {()=>{props.changeNode(x)}}>Change</div>
<button id ='delete'onClick = {()=>{props.deleteNode(x.id)}}>Delete</button>
</div>



 </div>)}
</div>

    </div>



  )



}


export default List;