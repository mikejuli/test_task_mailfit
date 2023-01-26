import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'
import {useContext} from 'react'
import ConfirmContext from './ConfirmContext'
import useConfirm from './ConfirmContext'


const DeleteNote = (props) => {

  const confirm = useConfirm()

 const handleDelete = async () => {
    const choice = await confirm({title: 'Delete current note?'})
  console.log(choice);
    if(choice){

      console.log(choice,'from delete');
       props.deleteNode(props.id)

    }
 }

return <div id = 'deleteNote' onClick = {handleDelete}>❌</div>

}



export default DeleteNote