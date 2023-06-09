import { useState } from "react";
import "./App.css";
import { FormShoppingList } from "./components/FormShoppingList";
import { ShoppingList } from "./components/ShoppingList";
import { v4 as uuid } from "uuid";

function App() {
  const [shoppingList, setShoppingList] = useState([
    { id: uuid(), amount: 3, name: "Arroz" },
    { id: uuid(), amount: 1, name: "Cafe" },
    { id: uuid(), amount: 4, name: "Azucar" },
  ]);

  const createNewShopping = (shopping) => {
    const existingShop = shoppingList.find(
      (shop) => shop.name === shopping.name
    );

    if (existingShop) {
      const updatedShoppingList = shoppingList.map((shop) =>
        shop.name === shopping.name
          ? {
              ...shop,
              amount: parseInt(shop.amount) + parseInt(shopping.amount),
            }
          : shop
      );
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, shopping]);
    }
  };

  return (
    <div className="content">
      <FormShoppingList createNewShopping={createNewShopping} />
      <ShoppingList shoppingList={shoppingList} />
    </div>
  );
}

export default App;
