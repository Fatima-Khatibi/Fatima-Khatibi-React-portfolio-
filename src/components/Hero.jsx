import {motion,useMotionValue,useSpring,useTransform} from 'framer-motion';import {ArrowRight} from 'lucide-react';
export default function Hero(){
 const mx=useMotionValue(0),my=useMotionValue(0);
 const s=v=>useSpring(v,{stiffness:70,damping:18});
 const imgX=s(useTransform(mx,[-.5,.5],[-14,14])),imgY=s(useTransform(my,[-.5,.5],[-14,14]));
 const c1x=s(useTransform(mx,[-.5,.5],[30,-30])),c1y=s(useTransform(my,[-.5,.5],[20,-20]));
 const c2x=s(useTransform(mx,[-.5,.5],[-40,40])),c2y=s(useTransform(my,[-.5,.5],[-25,25]));
 const onMove=e=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5);};
 return(
<section id="home" onMouseMove={onMove} className="relative overflow-hidden bg-gradient-to-br from-dnavy via-[#0F3A68] to-navy text-white pt-28 sm:pt-36 pb-16 sm:pb-24">
<motion.div style={{x:c1x,y:c1y}} className="absolute right-[12%] top-24 h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-white/10"/>
<motion.div style={{x:c2x,y:c2y}} className="absolute left-[8%] sm:left-[30%] bottom-8 h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-white/10"/>
<div className="absolute right-[6%] bottom-10 h-24 w-28 opacity-40 [background:radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:14px_14px]"/>
<div className="relative mx-auto max-w-6xl px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="order-2 md:order-1 text-center md:text-left">
<p className="text-sm mb-2">Hi, I'm</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Fatima <span className="text-beige">Khatibi</span></h1>
<h2 className="mt-3 text-lg sm:text-2xl font-semibold">Full Stack Developer</h2>
<p className="mt-5 max-w-md text-sm text-white/75 leading-relaxed mx-auto md:mx-0">I build modern, responsive, and user-friendly web applications with clean code and thoughtful design. I enjoy turning ideas into practical digital solutions using modern web technologies.</p>
<div className="mt-7 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
<motion.a whileHover={{y:-2}} whileTap={{scale:.97}} href="#projects" className="btn bg-beige text-navy">View My Work <ArrowRight size={14}/></motion.a>
<motion.a whileHover={{y:-2}} whileTap={{scale:.97}} href="#contact" className="btn border border-white/40 text-white hover:bg-white/10">Let's Connect <ArrowRight size={14}/></motion.a></div></motion.div>
<motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}} className="order-1 md:order-2 flex justify-center">
<motion.div style={{x:imgX,y:imgY}} className="rounded-full p-2 border-2 border-beige/70"><div className="rounded-full p-1.5 bg-white"><img src="/images/profile.jpg" alt="Fatima Khatibi" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full object-cover object-top bg-beige"/></div></motion.div></motion.div>
</div></section>);}
