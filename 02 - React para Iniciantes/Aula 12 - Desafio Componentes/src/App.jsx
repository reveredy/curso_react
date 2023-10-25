import React from "react";
import Header from "./Header";
import Titulo from "./Titulo";
import Produtos from "./Produtos";
import Home from "./Home";

function App() {
  const { pathname } = window.location;

  return (
    <>
      <Header />
      {pathname == "/" ? <Home /> : <Produtos />}
    </>
  );
}

export default App;
