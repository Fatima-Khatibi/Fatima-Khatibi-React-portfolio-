import {motion} from 'framer-motion';
import {siFacebook,siInstagram,siLinkedin,siGithub} from 'simple-icons';
import {SOCIAL_URLS} from '../config';
const ITEMS=[
 {key:'facebook',label:'Facebook',icon:siFacebook,color:'#1877F2'},
 {key:'instagram',label:'Instagram',icon:siInstagram,color:'url(#ig-grad)'},
 {key:'linkedin',label:'LinkedIn',icon:siLinkedin,color:'#0A66C2'},
 {key:'github',label:'GitHub',icon:siGithub,color:'#181717'},
];
// variant: "light" = cream/white page, "dark" = navy page. Brand colors kept on a white circle in both.
export default function SocialLinks({variant='light',className=''}){
 const ring=variant==='dark'?'bg-white shadow-black/30':'bg-white border border-line shadow-navy/10';
 return(<div className={`flex items-center gap-3 ${className}`}>
  <svg width="0" height="0" className="absolute" aria-hidden="true"><defs>
   <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FCAF45"/><stop offset=".5" stopColor="#E4405F"/><stop offset="1" stopColor="#833AB4"/></linearGradient></defs></svg>
  {ITEMS.map(({key,label,icon,color})=>{const url=SOCIAL_URLS[key];return(
   <motion.a key={key} href={url||'#'} {...(url?{target:'_blank',rel:'noopener noreferrer'}:{})}
    aria-label={`${label} profile`} title={label}
    whileHover={{scale:1.12,y:-2,boxShadow:'0 8px 20px rgba(0,0,0,.18)'}} whileTap={{scale:.95}} transition={{type:'tween',duration:.18}}
    className={`grid place-items-center h-10 w-10 rounded-full ${ring}`}>
    <svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-hidden="true" fill={color}><path d={icon.path}/></svg>
   </motion.a>);})}
 </div>);}
