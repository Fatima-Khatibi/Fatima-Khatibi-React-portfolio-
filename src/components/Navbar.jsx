import {useState} from 'react';import {motion} from 'framer-motion';import {Menu,X,ArrowRight} from 'lucide-react';import {Logo,links,ids} from './ui';
export default function Navbar(){const [o,setO]=useState(false);return(
<motion.header initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6}} className="fixed top-4 inset-x-0 z-50 px-4">
<nav className="mx-auto max-w-6xl rounded-2xl bg-[#EDE6DB]/95 backdrop-blur shadow-lg px-5 py-3 flex items-center justify-between">
<Logo/>
<ul className="hidden md:flex gap-8 text-xs font-medium">{links.map(l=><li key={l}><a href={'#'+ids[l]} className="hover:text-[#A8845C] transition">{l}</a></li>)}</ul>
<a href="#contact" className="hidden md:inline-flex btn !py-2 !px-4 bg-navy text-white text-xs">Let's Talk <ArrowRight size={14}/></a>
<button className="md:hidden" aria-label="Menu" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>
{o&&<div className="md:hidden mt-2 mx-auto max-w-6xl rounded-2xl bg-[#EDE6DB] p-5 grid gap-3 text-sm font-medium shadow-lg">
{links.map(l=><a key={l} href={'#'+ids[l]} onClick={()=>setO(false)}>{l}</a>)}
<a href="#contact" onClick={()=>setO(false)} className="btn mt-2 justify-center bg-navy text-white">Let's Talk <ArrowRight size={14}/></a></div>}
</motion.header>);}
