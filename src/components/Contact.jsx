import {useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {Loader2,CheckCircle2,AlertCircle,Mail} from 'lucide-react';
import {Reveal} from './ui';import SocialLinks from './SocialLinks';import {CONTACT_EMAIL} from '../config';
const KEY=import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const empty={name:'',email:'',subject:'',message:''};
const inp=e=>`w-full rounded-xl bg-white border px-4 py-3 text-xs outline-none transition focus:border-navy ${e?'border-red-400':'border-line'}`;
export default function Contact(){
 const [f,setF]=useState(empty);const [err,setErr]=useState({});const [status,setStatus]=useState('idle');const [msg,setMsg]=useState('');
 const set=k=>e=>{setF({...f,[k]:e.target.value});if(err[k])setErr({...err,[k]:''});};
 const validate=()=>{const x={};
  if(f.name.trim().length<2)x.name='Please enter your full name.';
  if(!f.email.trim())x.email='Please enter your email.';else if(!EMAIL_RE.test(f.email.trim()))x.email='Please enter a valid email address.';
  if(f.subject.trim().length<2)x.subject='Please enter a subject.';
  if(f.message.trim().length<10)x.message='Please write at least 10 characters.';return x;};
 const submit=async e=>{e.preventDefault();if(status==='loading')return;
  const x=validate();setErr(x);if(Object.keys(x).length)return;
  if(!KEY){setStatus('error');setMsg('The form is not configured yet (missing access key).');return;}
  setStatus('loading');setMsg('');
  try{
   const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify({access_key:KEY,name:f.name.trim(),email:f.email.trim(),subject:f.subject.trim(),message:f.message.trim(),from_name:'Portfolio Contact Form',botcheck:''})});
   const d=await r.json();
   if(r.ok&&d.success){setStatus('success');setF(empty);}else{setStatus('error');setMsg(d.message||'Something went wrong. Please try again.');}
  }catch{setStatus('error');setMsg('Network error. Please check your connection and try again.');}};
 return(
<section id="contact" className="bg-white py-24 px-6"><div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
<Reveal><p className="label !text-navy/70">Let's Connect</p><h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Let's build something amazing together!</h2>
<p className="mt-5 text-sm text-soft">Have a project in mind, an opportunity, or simply want to connect? I'd love to hear from you.</p>
<p className="mt-3 text-sm text-soft">Whether you're looking for a developer, have a project idea, or want to discuss technology, feel free to send me a message.</p>
<a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"><Mail size={16}/>{CONTACT_EMAIL}</a>
<SocialLinks className="mt-6"/></Reveal>
<Reveal delay={.1}><div className="rounded-3xl bg-lbeige p-6 md:p-8 shadow-[0_10px_40px_rgba(10,44,82,.08)] min-h-[420px] flex">
<AnimatePresence mode="wait">
{status==='success'?(
 <motion.div key="ok" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0}} className="m-auto text-center py-10">
  <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',stiffness:260,damping:18,delay:.1}} className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-navy text-white"><CheckCircle2 size={32}/></motion.div>
  <h3 className="mt-5 text-xl font-bold">Message sent!</h3><p className="mt-2 text-sm text-soft max-w-xs mx-auto">Thank you for reaching out. I'll get back to you as soon as possible.</p>
  <button onClick={()=>setStatus('idle')} className="btn mt-6 border border-navy text-navy hover:bg-navy hover:text-white">Send another message</button></motion.div>
):(
 <motion.form key="form" noValidate onSubmit={submit} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="grid gap-3 w-full content-start" aria-busy={status==='loading'}>
  {[['name','Full Name','text'],['email','Email Address','email'],['subject','Subject','text']].map(([k,p,t])=>(
   <div key={k}><input type={t} value={f[k]} onChange={set(k)} placeholder={p} aria-label={p} aria-invalid={!!err[k]} disabled={status==='loading'} className={inp(err[k])}/>
   {err[k]&&<p className="mt-1 ml-1 text-[11px] text-red-500">{err[k]}</p>}</div>))}
  <div><textarea rows={5} value={f.message} onChange={set('message')} placeholder="Your Message" aria-label="Your Message" aria-invalid={!!err.message} disabled={status==='loading'} className={inp(err.message)+' resize-none'}/>
   {err.message&&<p className="mt-1 ml-1 text-[11px] text-red-500">{err.message}</p>}</div>
  <AnimatePresence>{status==='error'&&<motion.div initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0}} role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-600"><AlertCircle size={16} className="shrink-0 mt-px"/>{msg}</motion.div>}</AnimatePresence>
  <motion.button type="submit" disabled={status==='loading'} whileHover={status==='loading'?{}:{y:-2}} whileTap={status==='loading'?{}:{scale:.98}} className="btn w-full justify-center bg-navy text-white hover:bg-dnavy disabled:opacity-70 disabled:cursor-not-allowed">
   {status==='loading'?<><Loader2 size={16} className="animate-spin"/>Sending...</>:'Submit Message →'}</motion.button>
 </motion.form>)}
</AnimatePresence></div></Reveal></div></section>);}
