import './App.css';
import Form from './components/Form';
import {useState} from 'react';
import Display from './components/Display';
import Person from './components/Person';


function App() {

  const [ people, setPeople] = useState([
    {name: "john", color: "red"},
    {name: "bob", color : "blue"}
  ]);

  //add to state
  const addToPeopleState = (name) => {
    console.log("hello, ", name)

    //add to state
    const peopleCopy = [...people];
    peopleCopy.push(name);
    //change / overwrite state
    setPeople(peopleCopy);

    //alternate way
    //setPeople([...people, name])
  }

  return (
    <div className="App">
       <h1>forms</h1>
      state: {JSON.stringify(people)} <br />
      <Form
       addToPeopleState = {addToPeopleState}
       x = {44}
       people = {people}
       setPeople = {setPeople}/>
       <hr />
       {
        people.map((person, idx) => {
          return <Person key={idx} person = {person}/>
        })
       }
       {/* <Display people={people}/> */}
    </div>
  );
}

export default App;
