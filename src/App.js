import './App.css';
import {useState, useEffect} from 'react';
function App() {

  //mock data

  const [mockData,setData] = useState([]);


  function createNewNode(){
    setData([...mockData, {id:5,name:'anotherList5',todoList:'123'}])
    console.log(mockData);

    localStorage.setItem('list', JSON.stringify([...mockData, {id:5,name:'anotherList5',todoList:'123'}]))
  }

  function deleteNode(id){

    let deletedId;

    mockData.forEach((x,index)=>{ if(x.id===id) { deletedId = index } })

    if(deletedId){
      var s = mockData.splice(deletedId,1);
     setData([...mockData])
  }
    console.log(s, mockData)
  }



  useEffect(()=>{

    // localStorage.setItem('list', JSON.stringify([{id: 1, name: 'get to groceries', todoList: 'do smth'},{id: 2, name: 'go to the store', todoList: 'do smth'}]) )

    const items = JSON.parse(localStorage.getItem('list'))

    console.log(items)

   if(items){setData(items)}
  }, [])

  return (
    <div className="App">

    {console.log('was rendered')}
  {mockData.map((x)=><div>{x.name}{x.todoList}</div>)}

    <button id ='add' onClick = {createNewNode}>Create</button>
    <button id ='add'onClick = {()=>{deleteNode(5)}}>Delete</button>

    </div>
  );
}

export default App;
