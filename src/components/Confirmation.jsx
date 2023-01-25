import {useState, useEffect} from 'react'

const Confirmation = (props) => {


  const [toggle, setToggle] = useState(0)

  const form = () => {

    return (
      <div>
        <div>Please confirm the action</div>
        <button onClick = {()=>{ props.action(); setToggle(0) }}>Confirm</button>
        <button onClick = {()=>{setToggle(0)}}>Cancel</button>
      </div>
    )

  }



  return (

    <div>
    <button onClick = {()=>{ setToggle(1)}}>{props.name}</button>
    {toggle?form():<div></div>}
    </div>
  )


}

export default Confirmation;