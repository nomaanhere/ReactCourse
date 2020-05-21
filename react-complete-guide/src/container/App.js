import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons : [
      { id :'asfa1', name :"Nomaan", age : 21},
      { id : 'ashfa1', name : "Tara", age : 17},
      { id :'qpzm1', name : "Nome", age : 10}
    ],
    Otherstate : 'some other state',
    showPersons : false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  
  render() {
  let btnClass = '';
  let persons = null;
  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return ( 
            <Person
            click = {this.deletePersonHandler}
            name = {person.name}
            age = {person.age} 
            key = {person.id}
            changed = {(event) => this.nameChangeHandler(event , person.id)}/>
          )
        })}
      </div> 

  );
  btnClass = classes.Red;
}

const assignedClasses = [];
if(this.state.persons.length <=2){
  assignedClasses.push(classes.red);  //assignedClasses = ['red']
}

if(this.state.persons.length <=1){
  assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
}


    return (
      <div className={classes.App}>
        <h1> Hi, I am React! </h1>
        <p className={assignedClasses.join(' ')}> Everything is working well</p>
        <button  
        className={btnClass}
        onClick = {this.togglePersonsHandler}> Toggle Persons </button>
        {persons}
        </div>  
    );
  }
}

export default App;
