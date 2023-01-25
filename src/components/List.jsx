import {useState, useEffect} from 'react'
import DeleteNote from './DeleteNote'

const List = (props) => {



  return (
    <div>

<div id = 'toDoList'>
  <div id ='title'> DAILY TO DO LIST </div>
    <div id = 'listItems' >

  {props.mockData.map((x,index)=>

      <div id = 'item' key = {index} >
        <div id = 'itemNameWrap'>
          <div id ='itemName'>
            {x.name}
          </div>
        </div>
        <div id = 'todoNote'>{x.todoList.slice(0, 3).map((x,index)=>
          <div id = 'todoSingeNote' key = {index}>
            <div id = 'todoSingeNoteItem'>{x[2] ? '✅ ' : '⬜ ' }</div>
            <div id = 'todoSingeNoteItem'>{x[1]}</div>
          </div>)}
          {x.todoList.length>3?<div>...</div>: null}
        </div>

        <div id = 'showButtons'>
            <div id ='changeNoteButton' onClick = {()=>{props.openNode(x)}}>
              🖋️
            </div>
            <DeleteNote id = {x.id} deleteNode = {props.deleteNode}/>
        </div>
     </div>

 )}

    <div id ='item' onClick = {()=>{props.openNode()}}>
      <div id = 'itemAddWraper'>
        +
      </div>
    </div>
</div>

</div>

    </div>



  )



}


export default List;