'use client'
import { API } from '@/lib/api';

export default function AddToCartButton({ productId }: { productId: number }){
  async function add(){
    const cart = await fetch(API+'/carts',{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({guest_token:'guest-123'})}).then(r=>r.json());
    await fetch(API+`/carts/${cart.cart_id}/items`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({product_id: productId, qty: 1})});
    alert('Added to cart');
  }
  return <button onClick={add} style={{padding:'8px 12px', background:'#000', color:'#fff', borderRadius:6}}>Add to Cart</button>
}
