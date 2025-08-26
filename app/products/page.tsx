import Link from 'next/link';
import { API } from '../../lib/api';

export const revalidate = 0;
async function getData() { 
  const res = await fetch(API + '/products', { cache: 'no-store' });
   return res.json(); 
}
export default async function Page() {
  
  const data = await getData();
  return (<main>
    <h1 style={{ fontSize: 22, fontWeight: 700 }}>Products</h1>
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
      {data.data.items.map((p: any) => (
        <li key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
          <img src={p.image_url} alt={p.name} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
          <div style={{ marginTop: 8, fontWeight: 600 }}>{p.name}</div>
          <div>{(p.price_cents / 100).toFixed(2)} THB</div>
          <Link href={`/products/${p.id}`}>View</Link>
        </li>
      ))}
    </ul>
  </main>)
}
