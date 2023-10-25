import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Nome</label>
        <Input />
      </div>
      <div>
        <label htmlFor="mail">E-mail</label>
        <Input />
      </div>
      <Button />
    </form>
  );
};

export default Form;
