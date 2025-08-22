import AddToCartButton from '@/components/AddToCartButton';
import { API } from '@/lib/api';
export const revalidate = 0;
async function getData(id:string){ const r = await fetch(`${API}/products/${id}`, { cache:'no-store' }); if(!r.ok) throw new Error('404'); return r.json(); }
export default async function Page({ params }: { params: { id: string } }){
  const p = await getData(params.id);
  return (<main>
    <img src={p.image_url} alt={p.name} style={{width:'100%', maxWidth:720, height:360, objectFit:'cover', borderRadius:8}}/>
    <h1 style={{fontSize:24,fontWeight:700, marginTop:12}}>{p.name}</h1>
    <p style={{opacity:.8}}>{p.description}</p>
    <div style={{fontSize:18, margin:'12px 0'}}>{(p.price_cents/100).toFixed(2)} THB</div>
    <AddToCartButton productId={p.id} />
  </main>)
}
