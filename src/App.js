//library imports
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    lidi:
    [{name:"Václav",Surname:"Šoupa"},
    {name:"Pepa",Surname:"Altman"},
    {name:"Tomáš",Surname:"Fejtek"},
    {name:"Lukáš",Surname:"Gryč"}
  ],
  value:""
  }
  handleChange=(event)=>{
    this.setState({value: event.target.value})
  }
  render() {
    const {lidi,value} = this.state
    const filterPeople = lidi.filter(value=>value.name.includes(this.state.value)||
                                           value.Surname.includes(this.state.value))
    return(
<form className='App'>
<input type="text" value={this.state.value} onChange={this.handleChange} />
<table className="App-table"><th>Name</th><th>Surname</th>
  {filterPeople.map((human)=>
    <tr><td>{human.name}</td><td>{human.Surname}</td></tr>
  )
  }

</table>
</form>

   );
  }
}

export default App;
