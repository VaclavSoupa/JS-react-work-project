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

  handleCreateRow = () => {
      const {lidi, value} = this.state
      this.setState({
          value: "",
          lidi:[
              ...lidi,
              {
                  name: value,
              }
          ]
      });
  };
/*  handleCreateCol = ()
  => {
  const {lidi} = this.state
    this.setState({
      value: "",
      lidi:[

      ]
    })
  }*/
  handleChange=(event)=>{
    this.setState({value: event.target.value})
  }
  handleChangeLidi = (event ,index) => {
      const {lidi} = this.state
      this.setState({
          lidi:[
              ...lidi.slice(0, index),
              {
                  ...lidi[index],
                  name:event.target.value
              },
              ...lidi.slice(index+1)
          ]
      });
  };
  render() {
    const {lidi,value} = this.state
    const filterPeople = lidi.filter(value=>value.name.includes(this.state.value)||
                                           value.Surname.includes(this.state.value))
    return(

<div>
<form className='App'>
<input type="Button" value="ADD" onClick={this.handleCreateRow}/>
{/*<input type="Button" value="ADD" onClick={this.handleCreateCol}/>*/}
<input type="text" value={this.state.value} onChange={this.handleChange}/>
<table className="App-table">
<th>Name</th>
<th>Surname</th>
  {filterPeople.map((human, index)=>
    <tr>
    <td>
    <input type="text" value={human.name} onChange={(event)=>
                              this.handleChangeLidi(event, index)
                            }/>
                              </td>
                        <td>
              <input type="textField" value={human.Surname}
         onChange={(event)=>this.handleChangeLidi(event, index)}/>
         </td>
    </tr>
  )
  }
</table>
</form>
</div>
   );
  }
}

export default App;
