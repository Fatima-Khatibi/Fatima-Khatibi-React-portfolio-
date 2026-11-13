import {Logo} from './ui';import SocialLinks from './SocialLinks';
export default function Footer(){return(
<footer className="bg-navy text-white pt-16 pb-8 px-6"><div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
<div><Logo dark/><p className="mt-4 text-xs text-white/70 max-w-xs leading-relaxed">Full Stack Developer passionate about building modern web applications, solving problems through technology, and creating meaningful digital experiences.</p><SocialLinks variant="dark" className="mt-5 justify-start"/></div>
<div><h4 className="font-semibold text-sm">Quick Links</h4><ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/70 max-w-[200px]">{['Home','Projects','About','Experience','Skills','Contact'].map(l=><li key={l}><a href={'#'+l.toLowerCase()} className="hover:text-white">{l}</a></li>)}</ul></div>
<div><h4 className="font-semibold text-sm">Let's Connect</h4><p className="mt-4 text-xs text-white/70 max-w-xs">I'm open to learning opportunities, professional collaborations, freelance projects, and exciting full-time opportunities.</p>
<a href="#contact" className="btn mt-4 !py-2 !px-4 text-xs bg-beige text-navy">Let's Talk →</a></div></div>
<div className="mt-8 border-t border-white/15 pt-6 text-center text-[11px] text-white/60">© 2026 Fatima Khatibi. All rights reserved.</div></footer>);}
