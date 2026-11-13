import {Briefcase,Code2,GraduationCap,BookOpen} from 'lucide-react';import {Reveal} from './ui';
const E=[['Web Developer Intern','NETLINKS Company','2025 - Present',Briefcase],['Full Stack Developer','Personal & Freelance Projects','2023',Code2],['Bachelor of Computer Science','Salam University','Completed',GraduationCap],['Continuous Learning','Web Development & Programming','Ongoing',BookOpen]];
export default function Experience(){return(
<section id="experience" className="bg-lbeige py-24 px-6"><div className="mx-auto max-w-5xl text-center"><p className="label">My Journey</p><h2 className="mt-2 text-3xl md:text-4xl font-bold">Experience & Education</h2></div>
<div className="relative mx-auto max-w-4xl mt-14"><div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-beige"/>
{E.map(([t,s,d,Icon],i)=>{const left=i%2===0;return(<div key={t} className="relative md:grid md:grid-cols-2 md:gap-16 pl-14 md:pl-0 mb-10">
<span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 grid place-items-center h-10 w-10 rounded-full bg-navy text-white z-10"><Icon size={16}/></span>
<Reveal x={left?-40:40} y={0} className={`${left?'md:col-start-1':'md:col-start-2'}`}><div className="card p-6 text-left"><h3 className="font-bold">{t}</h3><p className="text-[11px] text-soft mt-1">{s}</p><p className="text-[11px] font-semibold text-[#A8845C] mt-3">{d}</p></div></Reveal></div>);})}
</div></section>);}
