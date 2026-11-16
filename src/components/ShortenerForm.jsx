import {useState} from 'react';
import {shortenUrl} from '../services/bitlyService.js';
export default function ShortenerForm({onAdd}){
 const [url,setUrl]=useState('');const [error,setError]=useState('');const [loading,setLoading]=useState(false);
 async function submit(event){event.preventDefault();setError('');
  let parsed;try{parsed=new URL(url);if(!['http:','https:'].includes(parsed.protocol))throw Error();}catch{setError('Please enter a valid URL starting with https://');return;}
  setLoading(true);try{const short=await shortenUrl(parsed.href);onAdd({original:parsed.href,short});setUrl('');}catch(err){setError(err.message);}finally{setLoading(false);}
 }
 return <form className="shorten-form" onSubmit={submit} noValidate><div className="input-wrap"><label className="sr-only" htmlFor="long-url">URL to shorten</label><input id="long-url" value={url} onChange={e=>setUrl(e.target.value)} placeholder="Shorten a link here..." aria-invalid={!!error} aria-describedby={error?'url-error':undefined}/>{error&&<small id="url-error" role="alert">{error}</small>}</div><button type="submit" disabled={loading}>{loading?'Shortening...':'Shorten It!'}</button></form>
}
