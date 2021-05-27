import React from 'react';
import Todo from './Todo';

export default function Home(){
  return(
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <Todo />
        </div>
      </div>
    </main>
  )
}
