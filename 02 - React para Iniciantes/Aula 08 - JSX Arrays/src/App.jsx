import React from "react";

function App() {
  const produtos = ["Notebook", "Tablet", "Smartphone"];
  const keys = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
  const keysWithMap = ["Before Sunrise", "Before Sunset", "Before Midnigth"];
  const objectArrays = [
    { name: "A Game of Thrones", year: 1996 },
    { name: "A Clash of Kings", year: 1998 },
    { name: "A Storm of Swords", year: 2000 },
  ];

  return (
    <>
      {produtos}
      {<ul>{keys}</ul>}
      <ul>
        {keysWithMap.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <ul>
        {objectArrays
          .filter(({ year }) => year >= 1998)
          .map(({ name, year }) => (
            <li key={name}>
              {name}, {year}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
