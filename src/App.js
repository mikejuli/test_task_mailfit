import './App.css';
import {useState, useEffect} from 'react';
import {v4} from 'uuid';
import Note from './components/Note'
import List from './components/List'
function App() {

  //mock data

  const [mockData,setData] = useState([]);
  const [currentPage, setPage] = useState('list')
  const [note, setNote] = useState(0)

  function createNewNode(updatedNode){



    const uuid = v4();

    const newNode = {id:uuid,name:updatedNode.name,todoList:updatedNode.todoList
    }
    //delete
    // const todoUuid1 = v4();
    // const todoUuid2 = v4();
    // const todoUuid3 = v4();
    console.log(newNode);
    setData([...mockData, newNode
  ])
    console.log(mockData);

    localStorage.setItem('list', JSON.stringify([...mockData, newNode]))

    setNote((x)=>newNode)

  }

  function deleteNode(id){

    let deletedId;

    mockData.forEach((x,index)=>{ if(x.id===id) { deletedId = index; console.log(deletedId, x.id, id) } })

    if(deletedId!==undefined){
      var s = mockData.splice(deletedId,1);
     setData([...mockData])

     localStorage.setItem('list', JSON.stringify([...mockData]))

  }


    setNote(0);
    setPage('list')

    console.log(s, mockData)

  }

  //action with note
  function changeNode(updatedNode){

    if(updatedNode.id === null){
      console.log(updatedNode);
      createNewNode(updatedNode);



    } else {

      console.log(updatedNode);
    let changedIndex;

    mockData.forEach((x,index)=>{ if(x.id===updatedNode.id) { changedIndex = index; console.log(changedIndex, x.id) } })

    if(changedIndex!==undefined){
    var s = [...mockData]
    s[changedIndex] = updatedNode;
     setData([...s])

     localStorage.setItem('list', JSON.stringify([...s]))

  }

      //to make sure that right after saving we won't be able to undo
      setNote(updatedNode);


    }

  }

  function openNode(note){

    if(!note){note = null}

    console.log(note);

    if(note){
      setNote((x)=>note);
    }else {
      setNote({ id:null,name:'new node',todoList: []});
    }

    setPage('note');

  }

  function backToTheList(){


    setPage('list');

    setNote(0);  // optional

  }


  function requestInitialNote() {

    return note

  }


  useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('list'))

    console.log(items)

   if(items){setData(items)}
  }, [])

  return (
    <div className="App">

    {console.log('was rendered')}



    {currentPage==='list'?
    <div>

    <List mockData = {mockData}
          openNode = {openNode}
          deleteNode = {deleteNode}
    />
    </div>
       :

    <Note note = {note}
          backToTheList = {backToTheList}
          changeNode = {changeNode}
          deleteNode = {deleteNode}
          requestInitialNote = {requestInitialNote}


    />

  }



    </div>
  );
}

export default App;
