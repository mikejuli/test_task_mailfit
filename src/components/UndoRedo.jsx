import {useEffect, useState} from 'react'


const UndoRedo = (props) => {


  const [history, setHistory] = useState(props.historyOfChanges)
  const [pointer, setPointer] = useState( history.length - 1 )

  useEffect(()=>{setHistory(props.historyOfChanges)},[props.historyOfChanges])

  useEffect (()=>{setPointer(history.length - 1)},[history])

  const undo = () => {

    if(pointer>=1){

    props.setNoteFromHistory(  history[pointer-1]  )

    setPointer(pointer-1)
    }
  }


  const redo = () => {

    if(pointer<history.length - 1){

      props.setNoteFromHistory(  history[pointer+1]  )

      setPointer(pointer+1)
      }

  }


  return (

    <div id = 'undoredo'>
    <button className = 'buttonInButtonSection' onClick = {undo}>↩</button>
    <button className = 'buttonInButtonSection' onClick = {redo}>↪</button>

    </div>

  )


}


export default UndoRedo;