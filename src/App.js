//library imports
import React, { Component } from "react";
import "./App.css";

const humanDefinition = {
  name: "",
  surname: ""
};

class App extends Component {
  state = {
    lidi: [
      { name: "Václav", surname: "Šoupa" },
      { name: "Pepa", surname: "Altman" },
      { name: "Tomáš", surname: "Fejtek" },
      { name: "Lukáš", surname: "Gryč" }
    ],
    searchValue: ""
  };

  handleCreateRow = () => {
    const { lidi } = this.state;
    this.setState({
      lidi: [...lidi, { ...humanDefinition }]
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

  handleChangeSearch = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleChangeLidi = (event, index, type) => {
    const { lidi } = this.state;
    this.setState({
      lidi: [
        ...lidi.slice(0, index),
        {
          ...lidi[index],
          [type]: event.target.value
        },
        ...lidi.slice(index + 1)
      ]
    });
  };

  render() {
    const { lidi, searchValue } = this.state;
    const filterPeople = lidi.filter(
      value =>
        value.name.includes(searchValue) || value.surname.includes(searchValue)
    );

    return (
      <div>
        <form className="App">
          {/*<input type="Button" value="ADD" onClick={this.handleCreateCol}/>*/}

          <div class="input-group">
            <span class="input-group-addon">Search:</span>
            <input
              className="form-control"
              type="text"
              value={this.state.searchValue}
              onChange={event => this.handleChangeSearch(event)}
            />
            <span class="input-group-btn">
              <button
                className="btn btn-secondary"
                type="button"
                value="ADD"
                onClick={this.handleCreateRow}
              >
                Add
              </button>
            </span>
          </div>
          <table className="table table-striped">
            <thead>
              <th>Name</th>
              <th>Surname</th>
            </thead>
            <tbody>
              {filterPeople.map((human, index) => (
                <tr>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={human.name}
                      onChange={event =>
                        this.handleChangeLidi(event, index, "name")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="textField"
                      value={human.surname}
                      onChange={event =>
                        this.handleChangeLidi(event, index, "surname")
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
