import React from 'react';
import Todo from './Todo';
import Contact from './Contact';
import Jokes from './Jokes';
import jokesData from "./jokesData";

export default function Home () {
  const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />)


  return(
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <Todo />
          <div className="cards">
             {jokeComponents}
          </div>
          <Contact/>
        </div>
      </div>
    </main>
  )
}

