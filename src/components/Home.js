import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <nav>
              <Link to="about"> About </Link>
              <Link to="appointments"> Make Appointment</Link>
              <Link to="contact"> Contact </Link>
            </nav>
          </div>
        </div>
    </main>
    )
  }
}

export default Home;