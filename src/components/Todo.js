import React from 'react';

export default function Todo() {
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
    <div>
      <input type="checkbox" />
      <p style={styles}>Good {timeOfDay}</p>
      <input type="checkbox" />
      <p style={styles}>Good {timeOfDay}</p>
      <input type="checkbox" />
      <p style={styles}>Good {timeOfDay}</p>
    </div>
  )
}