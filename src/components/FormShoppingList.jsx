import { useState } from "react";
import { v4 as uuid } from "uuid";

export function FormShoppingList({ createNewShopping }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewShopping({ id: uuid(), amount, name });
    setName("");
    setAmount(1);
  };

  return (
    <header>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="ej: Papas, Arroz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>➕</button>
      </form>
    </header>
  );
}
