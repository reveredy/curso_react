import React from "react";

function App() {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {/* Função anônima */}
      <button onClick={(event) => alert(event.target.innerText)}>
        Função anônima
      </button>

      <div style={{ height: "200vh" }}></div>
    </>
  );
}

export default App;
