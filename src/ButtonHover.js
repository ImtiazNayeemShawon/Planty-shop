import React, { useState, useEffect } from "react";

export default function ButtonHover() {
  //create a  function for calling after finish 10 second
  function after10SecondCall() {
    alert("I am here because someone call me by hover this button");
  }

  //call a useState hook
  const [hover, setHover] = useState(false);

  //call a useEffect Hook
  useEffect(() => {
    if (hover) {
      //setTimeout for react after 10 second
      const timeout = setTimeout(() => {
        after10SecondCall();
      }, 10000);

      //clearTimeout to cancel sheduled setTimeout
      return () => clearTimeout(timeout);
    }
    //give hover in Array
  }, [hover]);

  //return a button which have 2 event onMouseEnter for start count time and onMouseLeave for stop count when mouse is not hovered
  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover me
      </button>
    </div>
  );
}
