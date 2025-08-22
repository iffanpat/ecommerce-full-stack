'use client'
import { useState } from 'react';
import { API } from '@/lib/api';

export default function Checkout(){
  const [result,setResult] = useState<any>();
  async function pay(){
    const cart = await fetch(API+'/carts', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({guest_token: 'guest-123'})}).then(r=>r.json());
    const idem = 'idem-'+Date.now();
    const res = await fetch(API+'/checkout', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({cart_id: cart.cart_id, idempotency_key: idem})});
    setResult(await res.json());
  }
  return (<main>
    <h1 style={{fontSize:22, fontWeight:700}}>Checkout (Mock)</h1>
    <button onClick={pay} style={{padding:'8px 12px', background:'#10b981', color:'#fff', borderRadius:6}}>Pay</button>
    {result && <pre style={{marginTop:12, background:'#f7f7f7', padding:12, borderRadius:8}}>{JSON.stringify(result,null,2)}</pre>}
  </main>)
}
