import React, { useState, useEffect } from "react";

const UserOffline = () => {
  const [basketPosition, setBasketPosition] = useState(150);
  const [foods, setFoods] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const foodItems = ["🍔", "🍕", "🍟", "🍩", "🍎", "🍌", "🥑", "🥕"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gameContainer = document.getElementById("gameContainer");
      const containerRect = gameContainer.getBoundingClientRect();
      const newPosition = e.clientX - containerRect.left - 25; // Adjust for the basket's width
      setBasketPosition(
        Math.max(0, Math.min(newPosition, containerRect.width - 50))
      );
    };

    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        setBasketPosition((prev) => Math.max(prev - 30, 0));
      } else if (e.key === "ArrowRight") {
        setBasketPosition((prev) => Math.min(prev + 30, 300)); // Adjust for the game container's width
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return; // Stop adding new food when the game is over

    const interval = setInterval(() => {
      setFoods((prevFoods) => [
        ...prevFoods,
        {
          id: Date.now(),
          left: Math.random() * 300, // Adjust for the game container's width
          top: 0,
          food: foodItems[Math.floor(Math.random() * foodItems.length)],
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return; // Stop updating food positions when the game is over

    const interval = setInterval(() => {
      setFoods((prevFoods) =>
        prevFoods.map((food) => ({
          ...food,
          top: food.top + 5,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    foods.forEach((food) => {
      if (food.top > 250) {
        // Adjust for the game container's height
        if (
          food.left > basketPosition - 25 &&
          food.left < basketPosition + 25
        ) {
          setScore((prevScore) => prevScore + 1);
          setFoods((prevFoods) => prevFoods.filter((f) => f.id !== food.id));
        } else if (food.top > 300) {
          setGameOver(true);
        }
      }
    });
  }, [foods, basketPosition]);

  const handlePlayAgain = () => {
    setFoods([]);
    setScore(0);
    setGameOver(false);
    setBasketPosition(150);
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div
        id="gameContainer"
        className="relative w-80 h-80 bg-gradient-to-b from-purple-400 to-pink-600 rounded-lg overflow-hidden shadow-lg p-4"
      >
        <div className="absolute top-4 left-4 text-xl font-bold text-white">
          Score: {score}
        </div>
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 text-red-600">
                Game Over!
              </h1>
              <p className="text-lg mb-6">Your score: {score}</p>
              <button
                onClick={handlePlayAgain}
                className="px-4 py-2 bg-orange-500 text-white text-lg font-semibold rounded-md hover:bg-orange-600 transition"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
        <div
          className="absolute bottom-0 h-10 w-16 bg-green-600 rounded-t-lg"
          style={{ left: basketPosition }}
        >
          <div className="flex justify-center items-center h-full text-white font-semibold">
            Basket
          </div>
        </div>
        {foods.map((food) => (
          <div
            key={food.id}
            className="absolute h-10 w-10 text-2xl"
            style={{ left: food.left, top: food.top }}
          >
            {food.food}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOffline;
