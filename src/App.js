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

  function createNewNode(name,todoList){

    const uuid = v4();

    //delete
    const todoUuid1 = v4();
    const todoUuid2 = v4();
    const todoUuid3 = v4();

    setData([...mockData, {id:uuid,name:'todoGuy',todoList:
    [
      [todoUuid1,'buyMilk', false],
      [todoUuid2,'buyCoffee', false],
      [todoUuid3,'buyFruits', false],
    ]
  }
  ])
    console.log(mockData);

    localStorage.setItem('list', JSON.stringify([...mockData, {id:uuid,name:'todoGuy',todoList: [
      [todoUuid1,'buyMilk', false],
      [todoUuid2,'buyCoffee', false],
      [todoUuid3,'buyFruits', false],
    ]}]))


  }

  function deleteNode(id){

    let deletedId;

    mockData.forEach((x,index)=>{ if(x.id===id) { deletedId = index; console.log(deletedId, x.id, id) } })

    if(deletedId!==undefined){
      var s = mockData.splice(deletedId,1);
     setData([...mockData])

     localStorage.setItem('list', JSON.stringify([...mockData]))

  }
    console.log(s, mockData)

  }

  function changeNode(updatedNode){

    let changedIndex;

    mockData.forEach((x,index)=>{ if(x.id===updatedNode.id) { changedIndex = index; console.log(changedIndex, x.id) } })

    if(changedIndex!==undefined){
    var s = [...mockData]
    s[changedIndex] = updatedNode;
     setData([...s])

     localStorage.setItem('list', JSON.stringify([...s]))

  }

  }

  function openNode(note){

    if(note){
      setNote((x)=>note);
    }

    setPage('note');

  }

  function backToTheList(){


    setPage('list');

  }




  useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('list'))

    console.log(items)

   if(items){setData(items)}
  }, [])

  return (
    <div className="App">

    {console.log('was rendered')}

    <button id ='add' onClick = {openNode}>+ Add</button>


    {currentPage==='list'?

    <List mockData = {mockData}
          openNode = {openNode}
          deleteNode = {deleteNode}
    />   :

    <Note note = {note}
          backToTheList = {backToTheList}
          changeNode = {changeNode}


    />

  }



    </div>
  );
}

export default App;
