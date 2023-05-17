import React, { useState } from "react";
function App() {
  const username = "luis matos";
  const [num, setNum] = useState(0);
  const textColor = num === 0 ? "green" : "darkblue";
  console.log("Acabei de renderizar");
  const isOnTheHighestNum = num === 5;
  console.log(isOnTheHighestNum);
  return (
    <div>
      {isOnTheHighestNum && <p>Estas no numero mais alto possivel</p>}
      <div style={{ color: "red" }}>Ola : {username}</div>
      <p style={{ color: textColor }}>Clicas-te {num} vezes</p>
      <button
        onClick={() => {
          if (num < 5) {
            setNum(num + 1);
          }
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (num > 0) {
            setNum(num - 1);
          }
        }}
      >
        Decrement
      </button>
      <ul>
        <li>Banana</li>
        <li>Arroz</li>
        <li>Tomates</li>
      </ul>
    </div>
  );
}

export default App;
