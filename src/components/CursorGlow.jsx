import {useEffect,useState} from 'react';import {motion,useMotionValue,useSpring} from 'framer-motion';
// Soft beige/blue glow that follows the mouse (desktop only, hidden on touch devices).
export default function CursorGlow(){
 const x=useMotionValue(-200),y=useMotionValue(-200);
 const sx=useSpring(x,{stiffness:120,damping:20,mass:.4}),sy=useSpring(y,{stiffness:120,damping:20,mass:.4});
 const [on,setOn]=useState(false);
 useEffect(()=>{if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches)return;setOn(true);
  const m=e=>{x.set(e.clientX-150);y.set(e.clientY-150);};window.addEventListener('mousemove',m,{passive:true});return()=>window.removeEventListener('mousemove',m);},[]);
 if(!on)return null;
 return <motion.div aria-hidden style={{x:sx,y:sy}} className="pointer-events-none fixed top-0 left-0 z-[60] h-[300px] w-[300px] rounded-full mix-blend-soft-light [background:radial-gradient(circle,rgba(221,206,187,.9),rgba(221,206,187,0)_65%)]"/>;
}
