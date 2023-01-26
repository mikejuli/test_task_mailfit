import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'
import ConfirmContext from './ConfirmContext'
import useConfirm from './ConfirmContext'


const UndoEdit = (props) => {

  const confirm = useConfirm()

  const handleCancel = async () => {
    const choice = await confirm({title: 'Cancel all recent modification?'})
  console.log(choice);
    if(choice){

      console.log(choice,'from delete');
      let s = props.requestInitialNote(); props.modifyNote(s)

    }
 }


 return <div id = 'cancelNote' className = 'buttonInButtonSection' onClick = {handleCancel}>Back</div>

}


export default UndoEdit;