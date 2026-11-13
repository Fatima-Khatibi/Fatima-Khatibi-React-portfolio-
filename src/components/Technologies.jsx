import {useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {Github,Atom,Code2,Database,Wrench} from 'lucide-react';import {Reveal} from './ui';
const T={Frontend:[['HTML5','5','#FDECE6','#E34F26'],['CSS3','3','#E6F2FD','#1572B6'],['JavaScript','JS','#FFF8D6','#B8860B'],['React',null,'#E3F7FC','#00A8D6'],['Bootstrap','B','#F0E8FA','#7952B3'],['GitHub',null,'#F1F1F1','#0A2C52']],
Backend:[['PHP','php','#EEF0FA','#777BB3'],['Laravel','L','#FDECE9','#FF2D20'],['Node.js','N','#E8F5E9','#3C873A']],Database:[['MySQL','SQL','#E6F2FD','#00758F']],'Tools & Others':[['Git','G','#FDECE6','#F05032'],['VS Code','VS','#E6F2FD','#007ACC'],['Tailwind CSS','TW','#E3F7FC','#06B6D4']]};
export default function Technologies(){const [tab,setTab]=useState('Frontend');return(
<section id="skills" className="bg-cream py-24 px-6"><Reveal><div className="card mx-auto max-w-6xl p-8 md:p-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-5"><div><p className="label">My Skills</p><h2 className="mt-2 text-3xl md:text-4xl font-bold">Technologies I Work With</h2></div>
<div className="flex flex-wrap gap-2">{Object.keys(T).map(k=><button key={k} onClick={()=>setTab(k)} className={`rounded-lg px-4 py-2 text-[11px] font-medium border transition ${tab===k?'bg-navy text-white border-navy':'border-line text-soft hover:border-navy'}`}>{k}</button>)}</div></div>
<AnimatePresence mode="wait"><motion.div key={tab} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
{T[tab].map(([n,t,bg,c],i)=><motion.div key={n} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*.06}} whileHover={{y:-4}} className="rounded-2xl border border-line py-6 flex flex-col items-center gap-3">
<span className="grid place-items-center h-11 w-11 rounded-xl text-sm font-bold" style={{background:bg,color:c}}>{n==='React'?<Atom size={20}/>:n==='GitHub'?<Github size={20}/>:t}</span><span className="text-[11px] text-soft">{n}</span></motion.div>)}
</motion.div></AnimatePresence></div></Reveal></section>);}
