import {motion} from 'framer-motion';
export default function Motivation(){return(
<section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0F3A68] to-dnavy py-24 px-6">
<motion.div initial={{opacity:0,scale:.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.7}} className="glass relative overflow-hidden mx-auto max-w-3xl rounded-[2rem] px-8 py-14 text-center text-white">
<div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white/15"/><div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-white/10"/>
<p className="relative label !text-white/70">A Reminder</p>
<p dir="rtl" className="relative mt-5 font-arabic text-4xl md:text-5xl">وَإِنَّ مَعَ الْعُسْرِ يُسْرًا</p>
<p className="relative mt-4 italic text-sm text-white/85">“Indeed, with hardship comes ease.”</p><p className="relative text-[11px] text-white/60 mt-1">Qur'an 94:5</p>
<div className="relative mx-auto my-5 h-px w-16 bg-white/40"/><p className="relative text-sm font-semibold">Keep learning. Keep building. Keep believing.</p></motion.div></section>);}
