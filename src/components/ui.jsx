import {motion} from 'framer-motion';
export const Reveal=({children,delay=0,x=0,y=24,className=''})=>(
<motion.div className={className} initial={{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay,ease:'easeOut'}}>{children}</motion.div>);
export const Logo=({dark})=>(<a href="#home" className="flex items-center gap-2 font-bold text-xs tracking-wider">
<span className={`grid place-items-center h-9 w-9 rounded-full text-[11px] ${dark?'bg-beige text-navy':'bg-navy text-white'}`}>FK</span>FATIMA KHATIBI</a>);
export const links=['Home','About','Skills','Projects','Experience','Contact'];
export const ids={Home:'home',About:'about',Skills:'skills',Projects:'projects',Experience:'experience',Contact:'contact'};
import {useRef} from 'react';import {useMotionValue,useSpring,useTransform} from 'framer-motion';
// 3D tilt that follows the mouse over the element.
export const Tilt=({children,max=8,className=''})=>{
 const ref=useRef(null),px=useMotionValue(0),py=useMotionValue(0);
 const rx=useSpring(useTransform(py,[-.5,.5],[max,-max]),{stiffness:200,damping:20}),ry=useSpring(useTransform(px,[-.5,.5],[-max,max]),{stiffness:200,damping:20});
 const move=e=>{const r=ref.current.getBoundingClientRect();px.set((e.clientX-r.left)/r.width-.5);py.set((e.clientY-r.top)/r.height-.5);};
 const leave=()=>{px.set(0);py.set(0);};
 return <motion.div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{rotateX:rx,rotateY:ry,transformPerspective:900}} className={className}>{children}</motion.div>;
};
