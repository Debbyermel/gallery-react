import React, {Component}  from 'react';
 class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li> About </li>
          <li> Make Appointment</li>
          <li> Contact </li>
          <li> Services </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;