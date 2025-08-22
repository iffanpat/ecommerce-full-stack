export default function Page() {
  return (
    <main>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Ecommerce Demo</h1>
      <p>Next.js (App Router) + Go (Gin) + PostgreSQL</p>
      <ul>
        <li>ดูสินค้าทั้งหมดที่ <a href="/products">/products</a></li>
        <li>ตะกร้า <a href="/cart">/cart</a></li>
        <li>ชำระเงิน (mock) <a href="/checkout">/checkout</a></li>
        <li>ดูออเดอร์ <a href="/orders">/orders</a></li>
      </ul>
    </main>
  )
}
