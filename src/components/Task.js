import React, { createRef } from "react";
// import "./Task.css";

// const Task = ({task, delFn,checkFn,editFn}) => {

class Task extends React.Component {
  state = {
    isInput: false,
    valueInput: "",
  };

  textInput = createRef();
  focusTextInput = () => this.textInput.current.focus();

  render() {
    let { checkFn, delFn, task } = this.props;

    let changeButton = () => {
      this.setState({
        isInput: true,
        valueInput: task.text,
      });
      
      

    };

    let changeInput = (e) => {
      this.setState({
        valueInput: e.target.value,
      });
    };

    let changeButtonInput = () => {
      task.text = this.state.valueInput;
      this.setState({
        isInput: false,
      });
    };

    let submitEnter = (e) => {
      e.key === "Enter" && changeButtonInput();
    };

    return (
      
        <div className={task.done ? "Task done" : "Task"}>
        <button onClick={() => checkFn(task.id)}>Check</button>
        {this.state.isInput ? (
          <>
            <input
              id="inputToFocus"
              value={this.state.valueInput}
              onChange={changeInput}
              onKeyUp={submitEnter}
              ref={this.textInput}
            />
            <button onClick={changeButtonInput}>OK</button>
          </>
        ) : (
          <>
            <span>{task.text} </span>
            <button
              onClick={() => {
                changeButton();
                setTimeout(this.focusTextInput, 10);
              }}
            >
              Edit
            </button>
          </>
        )}

        <button onClick={() => delFn(task.id)}>Del</button>
        {/* <button onClick={this.focusTextInput}>new</button> */}

        <br />
      </div>
      
    );
  }
}

export default Task;
