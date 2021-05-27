import React from "react"

function Jokes(props) {
  return (
      <div className="meme-card">
          <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
          <p style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</p>
          <hr/>
      </div>
  )
}

export default Jokes;
