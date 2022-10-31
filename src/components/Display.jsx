import React, {useState} from 'react'

const Display = (props) => {



  return (
    <fieldset>
        <legend>Display.jsx</legend>
        {
            props.people.map((eachOneElement, i) => {
                return (
                    <p key={i}>
                        {eachOneElement.name}
                    </p>
                    )
            })
        }
    </fieldset>
  )
}

export default Display