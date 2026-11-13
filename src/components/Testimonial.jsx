import {Reveal} from './ui';
export default function Testimonial(){return(
<section className="bg-white py-24 px-6"><Reveal><div className="mx-auto max-w-3xl rounded-3xl bg-lbeige border border-line px-6 sm:px-8 py-12 sm:py-14 text-center">
<span className="block font-serif text-7xl leading-none text-beige">“</span>
<p className="text-sm md:text-base text-soft leading-relaxed">Fatima is a dedicated developer who approaches every project with curiosity, attention to detail, and a strong desire to learn. Her commitment to improving her technical skills and building practical solutions makes her a promising professional in web development.</p>
<img src="/images/reviewer.webp" alt="Reviewer" loading="lazy" className="mx-auto mt-6 h-14 w-14 rounded-full object-cover border-2 border-beige"/>
<p className="mt-3 text-[11px] font-bold">— Professional Recommendation</p><p className="text-[11px] text-soft">Web Development</p></div></Reveal></section>);}
