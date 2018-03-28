//library imports
import React, { Component } from "react";
import Modal from "react-modal";
//import "./App.css";

//Modal CSS
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
//Creating parametrs
const humanDefinition = {
  name: "",
  surname: ""
};

//Class extending Component
class App extends Component {
  //creating state
  state = {
    lidi: [
      { name: "Václav", surname: "Šoupa" },
      { name: "Pepa", surname: "Altman" },
      { name: "Tomáš", surname: "Fejtek" },
      { name: "Lukáš", surname: "Gryč" }
    ],
    searchValue: "",
    isShowingModal: false,
    parametrName: ""
  };
  //Modal function on/off
  handleModalShow = () => this.setState({ isShowingModal: true });
  handleModalClose = () => this.setState({ isShowingModal: false });

  //Button ADD row function
  handleCreateRow = () => {
    const { lidi } = this.state;
    this.setState({
      lidi: [...lidi, { ...humanDefinition }]
    });
  };
<<<<<<< HEAD
  handleChange = event => {
    this.setState({ parametrName: event.target.value });
  };
  //
  handleChangeSearch = event => {
    this.setState({ searchValue: event.target.value });
  };
  //Every time item is edit this happens
  handleEditItem = (event, index, type) => {
=======

  handleChange = event =>{
    this.setState({parametrName: event.target.value})
  };

  //Search function
  handleChangeSearch = event => {
    this.setState({ searchValue: event.target.value });
  };

    /**
     * Edits cell value in lidi array
     * @param event event
     * @param index index position in lidi
     * @param type type of key
     */
  handleEditCell = (event, index, type) => {
>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
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
  //Remove buttons function
  handleRemoveLidi(index) {
    const lidi = this.state.lidi;
    lidi.splice(index, 1);
    this.setState({ lidi });
  }
  //Render function all output is here
  render() {
    const { lidi, searchValue } = this.state;
    const filterPeople = lidi.filter(
      value =>
        value.name.includes(searchValue) || value.surname.includes(searchValue)
    );
    // HTML in return of render function
    return (
      <div>
        <div>
          <Modal
            isOpen={this.state.isShowingModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
<<<<<<< HEAD
            onRequestClose={this.handleClose}
=======
            onRequestClose={this.handleModalClose}

>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
          >
            <div className="modal-header">
              <h4 className="modal-title">Parametr name:</h4>
              <button
                type="button"
                className="close"
<<<<<<< HEAD
                onClick={this.handleClose}
=======
                onClick={this.handleModalClose}
>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
              >
                &times;
              </button>
            </div>
            <form className="form-inline">
              <div>
                <input
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  type="text"
                  value={this.state.parametrName}
                  onChange={event => this.handleChange(event)}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  value={this.state.parametrName}
<<<<<<< HEAD
                  onClick={(this.handleCreateCol, this.handleClose)}
=======
                  onClick={() => {
                      this.handleModalClose();
                  }}
>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
                >
                  Add
                </button>
              </div>
            </form>
          </Modal>
        </div>
        <form className="App">
          <div className="input-group">
            <span className="input-group-addon">Search:</span>
            <input
              className="form-control"
              type="text"
              value={this.state.searchValue}
              onChange={event => this.handleChangeSearch(event)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-warning"
                type="button"
                value="ADD"
                onClick={this.handleCreateRow}
              >
                Add ROW
              </button>
              <button
                className="btn btn-danger"
                type="button"
                value="ADD"
                onClick={this.handleModalShow}
              >
                Modal Window
              </button>
            </span>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
              </tr>
            </thead>
            <tbody>
              {filterPeople.map((human, index) => (
                <tr>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={human.name}
                      disabled={this.state.searchValue}
                      onChange={event =>
<<<<<<< HEAD
                        this.handleEditItem(event, index, "name")
=======
                        this.handleEditCell(event, index, "name")
>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="textField"
                      value={human.surname}
                      disabled={this.state.searchValue}
                      onChange={event =>
<<<<<<< HEAD
                        this.handleEditItem(event, index, "surname")
=======
                        this.handleEditCell(event, index, "surname")
>>>>>>> 14a9da5be6e948317746dccd8a08a997f2b4dd8f
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="button"
                      value="REMOVE"
                      onClick={event => this.handleRemoveLidi(index)}
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
