import React, { Component } from 'react';
import Button from './AppButton.styled';

class AppButton extends Component {
  handleMouseMove = e => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
  };

  render() {
    return (
      <div>
        <Button className="button" onMouseMove={this.handleMouseMove}>
          Hover me!
        </Button>
      </div>
    );
  }
}

export default AppButton;
