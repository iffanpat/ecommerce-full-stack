import { API } from '../../lib/api';
export const revalidate = 0;
async function getData(){ const r = await fetch(API+'/orders', {cache:'no-store'}); return r.json(); }
export default async function Orders(){
  const data = await getData();
  return (<main>
    <h1 style={{fontSize:22, fontWeight:700}}>Orders</h1>
    <ul style={{display:'grid', gap:12}}>
      {data.items.map((o:any)=> (
        <li key={o.id} style={{border:'1px solid #eee', borderRadius:8, padding:12, display:'flex', justifyContent:'space-between'}}>
          <span>#{o.id}</span>
          <span>{(o.total_cents/100).toFixed(2)} THB</span>
          <span style={{opacity:.7}}>{o.status}</span>
        </li>
      ))}
    </ul>
  </main>)
}
