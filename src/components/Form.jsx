import React, {useState} from 'react'
import Display from './Display'

const Form = (props) => {

    const [ people, setPeople] = useState(["john", "jenny", "bob"]);

    const [name, setName] = useState("")
    const [color, setColor] = useState("white")

    console.log(props)

    //form submission
    const createUser = (e) => {
        e.preventDefault()
        console.log("created")

        //setting state
        // setPeople([...people, name])
        props.addToPeopleState(name, color)
        // props.setPeople([...props.people, name])
        setName("")
        setColor("")
    }

  return (
    <fieldset>

        form state name: {JSON.stringify(name)}
        form state color: {JSON.stringify(color)}
        <legend>Form</legend>
        <form onSubmit={createUser}>
            name: <input onChange={(e) => setName(e.target.value)} value={name}/> <br />
            color: <input onChange={(e) => setName(e.target.value)} value={color}/> <br />
            <button>submit</button>
        </form>
        <hr />
        <Display people = {people}/>
    </fieldset>
  )
}

export default Form