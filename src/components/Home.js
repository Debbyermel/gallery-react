import React, {Component}  from 'react';
import Todo from './Todo';
import Contact from './Contact';
import Jokes from './Jokes';
import jokesData from "./jokesData";
class Home extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState( prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {

    const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <Todo />
            <div className="cards">
               {jokeComponents}
            </div>
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.handleClick}>Change</button>
            </div>
            <Contact />
          </div>
        </div>
      </main>
    )
  }
}

export default Home;

