export function RowShopping({ shopping }) {
  return (
    <div className="row">
      <p className="cantidad">{shopping.amount}</p>
      <p className="producto">{shopping.name}</p>
    </div>
  );
}
