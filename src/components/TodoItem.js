import React, {Component} from 'react';
import todoData from './todoData';

class TodoItem extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
      display: "block",
      fontSize: "16px"
    }

    if(hours > 12 && hours < 18) {
      timeOfDay = "Afternoon"
      styles.color = "#fea000"
    }
    else if (hours < 12) {
      timeOfDay = "Morning"
      styles.color = "#73bedb"
    }
    else {
      timeOfDay = "Night"
      styles.color = "#000"
    }

    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.completed}/>
        {/* <p style={styles}>Good {timeOfDay}</p> */}
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TodoItem;



