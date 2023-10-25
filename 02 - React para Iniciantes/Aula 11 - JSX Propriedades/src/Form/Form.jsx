import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const arr = ["Item 1", "Item 2"];

  return (
    <form>
      <Input label="Email" id="email" required />
      <Input label="Senha" type="password" id="password" />
      <Button items={arr} />
    </form>
  );
};

export default Form;
