// HomePage.js

import React, { useState } from "react";

const HomePage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);

    // Simulate animation completion after 1 second
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transform ${
          isAnimating ? "scale-110" : ""
        } transition-transform duration-300 ease-in-out`}
        onClick={handleButtonClick}
      >
        {isAnimating ? "Animating..." : "Click Me"}
      </button>
    </div>
  );
};

export default HomePage;
