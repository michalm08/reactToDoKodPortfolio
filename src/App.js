import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import './sass/main.css'
import TaskList from "./components/TaskList";


let idNumber = 3;
class App extends React.Component {
  state = {
    tasks: [
      { id: 1, text: "kupić jabłka", done: false },
      { id: 2, text: "odebrać paczkę", done: true },
      { id: 3, text: "posprzątać dom", done: false },
    ],
  };

  clickDelete = (id) => {
    console.log("detele");
    let Arr = [...this.state.tasks];
    Arr = Arr.filter((Arr) => Arr.id !== id);
    this.setState({
      tasks: Arr,
    });
  };

  clickCheck = (id) => {
    let Arr = [...this.state.tasks];
    Arr.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    this.setState({
      tasks: Arr,
    });
  };

  clickAdd = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {return;}

    idNumber++;
    const elem = { id: idNumber, text: e.target[0].value, done: false };
    this.setState({
      tasks: [...this.state.tasks, elem],
    });
    e.target.reset();
  };

  clickActual = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    let Arr = [...this.state.tasks];
    Arr.forEach((task) => {
      if (task.id === this.state.modalId) {
        task.text = e.target[0].value;
      }
    });
    this.setState({
      tasks: Arr,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <AddTask addFn={this.clickAdd} />
        <TaskList
          tasks={this.state.tasks}
          delFn={this.clickDelete}
          checkFn={this.clickCheck}
        />
      </div>
    );
  }
}

export default App;
