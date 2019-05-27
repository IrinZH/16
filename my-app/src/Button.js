import React from 'react';
import './App.css';

class Button extends React.Component {
  constructor(props) {
      super(props)
      this.myClick = this.myClick.bind(this)
  }

  myClick() {
      let color = document.getElementsByClassName('wrapper')[0].style.backgroundColor;
      if (color !== "lightyellow") {
          document.getElementsByClassName('wrapper')[0].style.backgroundColor = "lightyellow";
      }
      if (color === "lightyellow") {
          document.getElementsByClassName('wrapper')[0].style.backgroundColor = "white";
      }      
  }

  render() {
      return (
          <button onClick={this.myClick} className="clicker"> Изменить дизайн </button>
      )
  }
}

export default Button;