// The frontend talks to our own server, not directly to Bitly.
export async function shortenUrl(longUrl){const response=await fetch('/api/shorten',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({longUrl})});const data=await response.json();if(!response.ok)throw new Error(data.error||'Unable to shorten URL');return data.link;}
