import React from "react";



class AddTask extends React.Component {
  state = {
    inputValue: "",
  };
  render() {
    return (
      <div className="AddTask">
        {/* <h2>AddSection</h2> */}
        {/* <p>Add Task</p> */}
        <form onSubmit={this.props.addFn}>
          <input
            type="text"
            placeholder= " "
          />
          <button >Add</button>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default AddTask;
