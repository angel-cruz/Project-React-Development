import {useState} from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ShortenerForm from './components/ShortenerForm.jsx';
import ShortenedLink from './components/ShortenedLink.jsx';
import Statistics from './components/Statistics.jsx';
import Footer from './components/Footer.jsx';
export default function App(){
  // Load saved links when the page starts.
  const [links,setLinks]=useState(()=>{try{return JSON.parse(localStorage.getItem('shortly-links'))||[]}catch{return []}});
  function addLink(link){const updated=[link,...links];setLinks(updated);localStorage.setItem('shortly-links',JSON.stringify(updated));}
  return <><Navbar/><main><Hero/><section className="work-area" id="shorten"><div className="container"><ShortenerForm onAdd={addLink}/><div aria-live="polite" className="results">{links.map((item,index)=><ShortenedLink key={item.short+index} item={item}/>)}</div><Statistics/></div></section></main><Footer/></>;
}
