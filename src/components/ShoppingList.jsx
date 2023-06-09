import { RowShopping } from "./RowShopping";

export function ShoppingList({ shoppingList }) {
  return (
    <main className="list">
      <h2>List</h2>
      {shoppingList.map((shopping) => (
        <RowShopping key={shopping.id} shopping={shopping} />
      ))}
    </main>
  );
}
