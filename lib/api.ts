export const API = process.env.NEXT_PUBLIC_API_BASE!;

export async function api(path: string, init?: RequestInit){
  const res = await fetch(API + path, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers||{}) } });
  if(!res.ok){
    let txt = await res.text();
    throw new Error(txt || res.statusText);
  }
  return res.json();
}
