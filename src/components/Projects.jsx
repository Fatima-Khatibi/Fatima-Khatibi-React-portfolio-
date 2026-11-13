import {motion} from 'framer-motion';import {ArrowRight} from 'lucide-react';import {Reveal,Tilt} from './ui';
const P=[['Oberlo Showroom','A full-stack car selling system developed with Laravel, PHP, MySQL, and Bootstrap. The platform includes car listings, search and filtering, authentication, CRUD operations, image management, and an administrative dashboard.',['Laravel','PHP','MySQL','Bootstrap'],'/images/oberlo.jpg'],
['Personal Portfolio','A responsive personal portfolio website created to showcase my development skills, projects, experience, education, and professional journey with a clean and modern interface.',['HTML','CSS','JavaScript','Responsive'],'/images/portfolio.png'],
['JavaScript Projects','A collection of practical JavaScript projects created to strengthen programming, problem-solving, arrays, objects, conditions, DOM manipulation, and real-world application logic.',['JavaScript','DOM','APIs'],'/images/js.jpg']];
export default function Projects(){return(
<section id="projects" className="bg-white py-20 sm:py-24 px-5 sm:px-6"><div className="mx-auto max-w-6xl">
<div className="flex items-end justify-between gap-4"><Reveal><p className="label !text-navy/70">My Projects</p><h2 className="mt-2 text-3xl md:text-4xl font-bold">Featured Projects</h2></Reveal>
<a href="#projects" className="text-xs font-semibold hover:underline whitespace-nowrap">View All Projects →</a></div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{P.map(([t,d,tags,img],i)=><Reveal key={t} delay={i*.1} className="h-full">
<Tilt className="h-full"><motion.article whileHover={{y:-6}} className="card overflow-hidden group h-full flex flex-col">
<div className="h-44 bg-lbeige overflow-hidden"><img src={img} alt={t} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"/></div>
<div className="p-6 flex flex-col flex-1"><h3 className="font-bold">{t}</h3><p className="mt-2 text-[11px] text-soft leading-relaxed">{d}</p>
<div className="mt-auto pt-5 flex items-center justify-between gap-2"><div className="flex flex-wrap gap-1.5">{tags.map(x=><span key={x} className="rounded bg-[#EDE6DB] px-2 py-1 text-[9px] text-soft">{x}</span>)}</div>
<motion.button whileHover={{scale:1.15,rotate:-45}} aria-label={'Open '+t} className="grid place-items-center h-8 w-8 rounded-full bg-navy text-white shrink-0"><ArrowRight size={14}/></motion.button></div></div></motion.article></Tilt></Reveal>)}</div></div></section>);}
