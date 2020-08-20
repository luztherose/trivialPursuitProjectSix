import React, { Component } from "react";

class SaveButton extends Component {
  render() {
    return (
      <>
        <button
          tabIndex="0"
          aria-label="load game"
          onClick={() => {
            this.props.gameToParent(this.props.thisIndex);
            alert(" Game loaded to memory! Click play loaded game to continue.")
          }}
        >
          Load Game to Memory
        </button>
      </>
    );
  }
}

export default SaveButton;
