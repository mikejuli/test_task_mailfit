import {useState, useEffect} from 'react'

const Confirmation = (props) => {


  const [toggle, setToggle] = useState(props.isOpen)

  useEffect(()=>{setToggle(props.isOpen)},[props.isOpen])


  const form = () => {


    return (
      <div id = "confirmation">
        <div id = 'inConfirmation'>
        <div>Please confirm the action {props.title}</div>
        <button onClick = {()=>{ props.onClose()}}>
          Confirm
        </button>
        <button onClick = {()=>{props.onConfirm()}}>Cancel</button>
        </div>
      </div>
    )

  }



  return (

    <div>
    <div id = {props.name} onClick = {()=>{ setToggle(1); console.log('hee')}}>{props.text}</div>
    {toggle?form():<div></div>}

    </div>
  )


}

export default Confirmation;