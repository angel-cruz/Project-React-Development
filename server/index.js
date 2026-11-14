import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express(); app.use(express.json({ limit: '10kb' }));
app.post('/api/shorten', async (req, res) => {
    const { longUrl } = req.body;
    try { const url = new URL(longUrl); if (!['https:', 'http:'].includes(url.protocol)) throw Error('Invalid protocol'); } catch { return res.status(400).json({ error: 'Enter a valid HTTP or HTTPS URL.' }); }
    if (!process.env.BITLY_ACCESS_TOKEN) return res.status(500).json({ error: 'Set BITLY_ACCESS_TOKEN in your .env file.' });
    try { const response = await fetch('https://api-ssl.bitly.com/v4/shorten', { method: 'POST', headers: { Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ long_url: longUrl }) }); const data = await response.json(); if (!response.ok) return res.status(response.status).json({ error: data.message || 'Bitly request failed' }); return res.json({ link: data.link }); } catch { return res.status(502).json({ error: 'Unable to reach Bitly. Try again later.' }); }
});
const port = process.env.PORT || 3001; app.listen(port, () => console.log(`API server running at http://localhost:${port}`));
