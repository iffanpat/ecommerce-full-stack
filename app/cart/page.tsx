'use client'
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';

type Item = { id:number; product_id:number; name:string; price_cents:number; qty:number };

export default function CartPage(){
  const [cartId,setCartId] = useState<number|undefined>();
  const [items,setItems] = useState<Item[]>([]);
  const [loading,setLoading] = useState(true);

  async function ensureCart(){
    const cart = await fetch(API+'/carts',{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({guest_token:'guest-123'})}).then(r=>r.json());
    setCartId(cart.cart_id);
    return cart.cart_id;
  }
  async function loadItems(cid:number){
    const data = await fetch(API+`/carts/${cid}/items`, {cache:'no-store'}).then(r=>r.json());
    setItems(data.items||[]);
    setLoading(false);
  }
  useEffect(()=>{ (async()=>{ const cid = await ensureCart(); await loadItems(cid); })(); },[]);

  async function setQty(item: Item, qty:number){
    if(!cartId) return;
    if(qty<=0){
      await fetch(API+`/carts/${cartId}/items/${item.id}`, {method:'DELETE'});
    }else{
      await fetch(API+`/carts/${cartId}/items/${item.id}`, {method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({qty})});
    }
    await loadItems(cartId);
  }

  const total = items.reduce((s,it)=> s + it.qty*it.price_cents, 0);

  return (<main>
    <h1 style={{fontSize:22, fontWeight:700}}>Cart</h1>
    {loading ? <div>Loading...</div> : items.length===0 ? <div>Cart is empty</div> : (
      <ul style={{display:'grid', gap:12}}>
        {items.map(it=> (
          <li key={it.id} style={{border:'1px solid #eee', borderRadius:8, padding:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontWeight:600}}>{it.name}</div>
              <div style={{opacity:.7}}>{(it.price_cents/100).toFixed(2)} THB</div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <button onClick={()=>setQty(it, it.qty-1)}>-</button>
              <span>{it.qty}</span>
              <button onClick={()=>setQty(it, it.qty+1)}>+</button>
              <button onClick={()=>setQty(it, 0)} style={{marginLeft:12}}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    )}
    <div style={{textAlign:'right', marginTop:16, fontSize:18}}>Total: {(total/100).toFixed(2)} THB</div>
  </main>)
}
