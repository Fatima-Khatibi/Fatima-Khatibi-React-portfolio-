import {Reveal,Tilt} from './ui';
const stats=[['1+','Years of Experience'],['15+','Projects Built'],['100%','Passion for Learning']];
export default function About(){return(
<section id="about" className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
<Reveal className="flex justify-center"><Tilt max={12}><div className="rounded-full p-3 bg-beige shadow-xl"><div className="rounded-full p-1.5 bg-white"><img src="/images/about.jpg" alt="Workspace" className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full object-cover bg-beige"/></div></div></Tilt></Reveal>
<Reveal x={30} y={0}><p className="label !text-navy/70">About Me</p>
<h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Turning ideas into meaningful digital experiences</h2>
<div className="mt-5 space-y-3 text-sm text-soft leading-relaxed">
<p>I'm <b className="text-navy">Fatima Khatibi</b>, a Full Stack Developer with a Bachelor's degree in Computer Science. I enjoy creating modern websites and web applications that are simple, useful, responsive, and easy to use.</p>
<p>My development journey has given me experience working with both frontend and backend technologies. I enjoy building interfaces with HTML, CSS, JavaScript, Bootstrap, React, and Tailwind CSS, while also developing backend applications using PHP, Laravel, and MySQL.</p>
<p>I believe that becoming a good developer is a continuous journey. I keep learning, practicing, building projects, and improving my problem-solving skills so I can create better digital solutions.</p></div>
<div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-8">{stats.map(([n,l])=><div key={l} className="flex items-center gap-2"><span className="text-2xl font-extrabold">{n}</span><span className="text-[10px] text-soft w-16 leading-tight">{l}</span></div>)}</div>
<p className="mt-5 font-script text-4xl">Fatima Khatibi</p></Reveal></div></section>);}
