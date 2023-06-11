export function RowShopping({ shopping }) {
  return (
    <div className="row">
      <div className="descripcion">
        <p className="cantidad">{shopping.amount}</p>
        <p className="producto">{shopping.name}</p>
      </div>
      <button>Del</button>
    </div>
  );
}
