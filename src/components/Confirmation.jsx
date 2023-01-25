import {useState, useEffect} from 'react'

const Confirmation = (props) => {


  const [toggle, setToggle] = useState(0)

  const form = () => {

    return (
      <div>
        <div>Please confirm the action</div>
        <button onClick = {()=>{ props.action(); setToggle(0) }}>
          Confirm
        </button>
        <button onClick = {()=>{setToggle(0)}}>Cancel</button>
      </div>
    )

  }



  return (

    <div>
    <div id = {props.name} onClick = {()=>{ setToggle(1)}}>{props.text?props.text:props.name}</div>
    {toggle?form():<div></div>}
    </div>
  )


}

export default Confirmation;