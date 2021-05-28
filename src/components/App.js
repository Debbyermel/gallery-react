import React, {Component}  from  "react";
import '../css/App.css';

import Home from "./Home"
import Nav from "./Nav"
// import About from "./About"
// import Contact from "./Contact"
// import Appointments from "./Appointments"
import Footer from "./Footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      answer: "Yes"
    }
  }

  render() {
    let wordDisplay;
    if(this.state.isLoggedIn === true) {
      wordDisplay = "in";
    }
    else {
      wordDisplay = "out";
    }

    return (
      <div>
        <p>Are you logged {wordDisplay}?</p>
        <Nav />
        <Home />
        <h1>State is important? {this.state.answer}</h1>
        <Footer />
      </div>
    )
  }
}

export default App;








