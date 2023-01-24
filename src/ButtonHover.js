import React, { useState, useEffect } from "react";
import Logo from "./logo.svg";

export default function ButtonHover() {
  const [isClicked, setIsClicked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setShowAnimation(true);
      }, 30000);
    }
  }, [isClicked]);

  return (
    <div>
      <div>
        {showAnimation ? (
          <div>
            <img className="logoAnimation" src={Logo} />
          </div>
        ) : (
          <div>
            <img className="logo" src={Logo} />
          </div>
        )}
      </div>

      <button
        onClick={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
      >
        {showAnimation ? <div>Look I can spin !</div> : <div>Spin me !</div>}
      </button>
    </div>
  );
}
