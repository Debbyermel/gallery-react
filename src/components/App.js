import React, {Component}  from  "react";
import '../css/App.css';

import Home from "./Home"
import Nav from "./Nav"
// import About from "./About"
// import Contact from "./Contact"
// import Appointments from "./Appointments"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;







