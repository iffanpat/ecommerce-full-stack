export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en"><body style={{fontFamily:'ui-sans-serif, system-ui', padding:'16px'}}>
      <nav style={{display:'flex', gap:'12px', marginBottom:16}}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/checkout">Checkout</a>
        <a href="/orders">Orders</a>
      </nav>
      {children}
    </body></html>
  );
}
