import React, {Component} from 'react';
import {useLocation} from "react-router-dom";

class Woops404 extends Component {

  render() {
    let location = useLocation();
    return(
      <div>
        <h1>Resource not find at {location.pathname}!</h1>
      </div>
    )
  }
}

export default Woops404;