import {useState, useEffect} from 'react'

const List = (props) => {



  return (
    <div>

   List
    <div style = {{position: 'absolute', width: '600px',height:'auto',backgroundColor: 'grey', left: '10%'}}>

<div>



</div>

  {props.mockData.map((x,index)=><div id = 'item' key = {index} style = {{margin: '20px',backgroundColor:'aqua', width: '150px', height: '100px'}} ><div>{x.name}</div><div>{x.todoList.map((x,index)=><div key = {index}>{x[2] ? '✅' : '⬜' }{x[1]}</div>)}</div>

<div id = 'showButtons'>
<div id ='add' style = {{backgroundColor: 'red'}} onClick = {()=>{props.openNode(x)}}>Change</div>
<button id ='delete'onClick = {()=>{props.deleteNode(x.id)}}>Delete</button>
</div>



 </div>)}
</div>

    </div>



  )



}


export default List;