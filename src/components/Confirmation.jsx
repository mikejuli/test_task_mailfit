import {useState, useEffect} from 'react'

const Confirmation = (props) => {


  const [toggle, setToggle] = useState(props.isOpen)

  useEffect(()=>{setToggle(props.isOpen)},[props.isOpen])


  const form = () => {


    return (
      <div id = "confirmation">
        <div id = 'inConfirmation'>
        <div id = 'titleInConfirmation'>Please confirm the action </div>{props.title}
        <div id = 'buttonsInConfirmation'>

          <button id = 'confirmConfirmation' onClick = {()=>{ props.onClose()}}>
          ✔
        </button>
        <button id = 'confirmConfirmation' onClick = {()=>{props.onConfirm()}}>✖</button>
        </div>
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