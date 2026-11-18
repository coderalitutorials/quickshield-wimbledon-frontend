







// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// // ─── COUNTER COMPONENT ───
// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//       <div className="text-4xl font-black mb-1">{count}+</div>
//       <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* HEADER */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// About Quick Shield</span>
//           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
//             QuickShield <br/> 
//             <span className="text-[#0A2240] text-3xl md:text-5xl block mt-2 tracking-normal font-medium italic">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6">
          
//           <div className="md:col-span-7 h-[500px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-2xl">
//             {/* <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">
//             <img src="images/shieldteam.webp" alt=""  className="object-cover object-center"/>
//             </div> */}

// <div className="md:col-span-7 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
//   <img
//     src="/images/shieldteam.webp"
//     alt="QuickShield Team"
//     className="w-full h-full object-cover object-center"
//   />
// </div>


//           </div>

//           <div className="md:col-span-5 bg-white/40 p-10 rounded-[2rem] flex flex-col justify-center border border-white/50">
//             <h2 className="text-4xl font-black uppercase mb-6">Securing Your Property.</h2>
//             <p className="text-lg font-medium leading-relaxed opacity-90">
//               At Quick Shield, we understand that a pest-free environment is essential for peace of mind. We provide rapid, discreet, and effective pest control solutions tailored for the unique needs of our local community.
//             </p>
//           </div>

//           {/* ─── UPDATED STATS SECTION WITH ANIMATION ─── */}
//           <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//             <Counter end={1200} label="Homes Cleared" />
//             {/* Special case for non-numeric stats */}
//             <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//               <div className="text-4xl font-black mb-1">24/7</div>
//               <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
//             </div>
//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods (%)" />
//           </div>

//           {/* <div className="md:col-span-5 h-[400px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_2</div>
//           </div> */}


//           <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
//   <img
//     src="/images/image2.webp"
//     alt="QuickShield Pest Control Team"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
//   />

//   {/* Optional Dark Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/20 via-transparent to-transparent"></div>
// </div>

//           <div className="md:col-span-7 bg-white/40 p-12 rounded-[2rem] border border-white/50 flex flex-col justify-center">
//             <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 font-bold text-lg">
//                   <CheckCircle2 className="text-[#0A2240]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* <div className="md:col-span-4 h-[350px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_3</div>
//           </div> */}


// <div className="md:col-span-4 h-[350px] rounded-[2rem] overflow-hidden relative shadow-xl group">
//   <img
//     src="/images/image3.webp"
//     alt="QuickShield Pest Control Service"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//   />

//   {/* Optional Premium Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/25 via-transparent to-transparent"></div>
// </div>


//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex items-center justify-between">
//             <div>
//               <h3 className="text-3xl font-black uppercase mb-4">Need Emergency Support?</h3>
//               <p className="text-white/70">Our dispatch team is ready to respond to your call immediately.</p>
//             </div>
//             <button className="bg-[#b99547] text-[#0A2240] px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     let timer;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);

//           observer.disconnect();
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//       if (timer) clearInterval(timer);
//     };
//   }, [end]);

//   return (
//     <div
//       ref={ref}
//       className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center w-full"
//     >
//       <div className="text-xl md:text-3xl font-black">{count}+</div>
//       <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] mt-1 break-words">
//         {label}
//       </div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 text-[#0A2240] py-6 w-full overflow-x-hidden">
//       <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 box-border overflow-hidden">
        
//         {/* HEADER */}
//         <div className="mb-6 min-w-0">
//           <span className="text-[#0A2240]/60 font-mono text-[9px] uppercase tracking-[0.2em] block break-words">
//             // About Quick Shield
//           </span>

//           <h1 className="text-2xl md:text-5xl font-black uppercase text-white mt-1 break-words">
//             QuickShield
//             <span className="text-[#0A2240] text-sm md:text-3xl block font-medium italic break-words">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         {/* CONTENT GRID */}
//         <div className="grid grid-cols-1 gap-4 w-full min-w-0">
          
//           {/* Main Hero Image */}
//           <div className="w-full max-w-full h-56 md:h-[500px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl min-w-0">
//             <img
//               src="/images/shieldteam.webp"
//               alt="Team"
//               className="block w-full max-w-full h-full object-cover object-top"
//             />
//           </div>

//           {/* About Text */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-10 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h2 className="text-lg md:text-4xl font-black uppercase mb-2 break-words">
//               Securing Your Property.
//             </h2>
//             <p className="text-xs md:text-lg font-medium leading-relaxed opacity-90 break-words">
//               At Quick Shield, we provide rapid, discreet, and effective pest
//               control solutions tailored for the unique needs of our local
//               community.
//             </p>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 gap-2 w-full min-w-0">
//             <Counter end={1200} label="Homes Cleared" />

//             <div className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center flex flex-col justify-center">
//               <div className="text-xl md:text-3xl font-black">24/7</div>
//               <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] break-words">
//                 Availability
//               </div>
//             </div>

//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods" />
//           </div>

//           {/* Image 2 */}
//           <div className="w-full max-w-full h-56 md:h-[400px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-xl min-w-0">
//             <img
//               src="/images/image2.webp"
//               alt="Services"
//               className="block w-full max-w-full h-full object-[center_5%]"
//             />
//           </div>

//           {/* Technical Approach */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-12 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h3 className="text-base md:text-3xl font-black uppercase mb-3 break-words">
//               Our Technical Approach
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-0">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-2 font-bold text-[11px] md:text-lg min-w-0 break-words"
//                 >
//                   <CheckCircle2
//                     size={16}
//                     className="text-[#0A2240] shrink-0 mt-[1px]"
//                   />
//                   <span className="min-w-0 break-words">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer Call to Action */}
//           <div className="w-full max-w-full bg-[#0A2240] text-white p-5 md:p-12 rounded-2xl md:rounded-[1.5rem] text-center box-border min-w-0">
//             <h3 className="text-lg md:text-3xl font-black uppercase mb-2 break-words">
//               Need Emergency Support?
//             </h3>

//             <p className="text-white/70 text-[10px] md:text-base mb-4 break-words">
//               Our dispatch team is ready to respond to your call immediately.
//             </p>

//             <button className="bg-[#b99547] text-[#0A2240] w-full md:w-auto px-6 md:px-10 py-3 font-black uppercase tracking-widest rounded-xl text-xs md:text-base hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



















// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Building2,
//   Check,
//   ChevronDown,
// } from "lucide-react";

// const PHONE = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// const SERVICES = [
//   "Rats & Mice Control",
//   "Bed Bug Treatment",
//   "Cockroach Control",
//   "Wasp Control",
//   "Carpet Moth Treatment",
//   "Commercial Pest Control",
// ];

// const PRINCIPLES = [
//   {
//     number: "01",
//     title: "Understand",
//     description:
//       "We begin by understanding the pest concern, the signs of activity and the property involved.",
//     icon: Search,
//   },
//   {
//     number: "02",
//     title: "Respond",
//     description:
//       "Different pest problems require different approaches. We consider suitable treatment and management options.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "03",
//     title: "Protect",
//     description:
//       "Where appropriate, we consider access points and practical prevention measures to help reduce future pest activity.",
//     icon: Building2,
//   },
// ];

// /*
//   Safe reveal animation:
//   Content stays visible unless IntersectionObserver
//   is supported and has been successfully initialised.
// */
// function Reveal({ children, className = "", delay = 0 }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(true);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const element = ref.current;

//     if (!element) return;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (
//       prefersReducedMotion ||
//       !("IntersectionObserver" in window)
//     ) {
//       return;
//     }

//     const rect = element.getBoundingClientRect();

//     if (rect.top < window.innerHeight) {
//       return;
//     }

//     setVisible(false);
//     setAnimate(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px 80px 0px",
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={
//         className +
//         (animate
//           ? " transition-all duration-700 ease-out"
//           : "")
//       }
//       style={
//         animate
//           ? {
//               opacity: visible ? 1 : 0,
//               transform: visible
//                 ? "translateY(0)"
//                 : "translateY(28px)",
//               transitionDelay: visible ? `${delay}ms` : "0ms",
//             }
//           : undefined
//       }
//     >
//       {children}
//     </div>
//   );
// }

// export default function AboutUsPage() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F6F4EF] text-[#0A2240]">
//       {/* ============================= */}
//       {/* 01 — CINEMATIC HERO */}
//       {/* ============================= */}

//       <section
//         aria-labelledby="about-hero-title"
//         className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#0A2240] pt-36 pb-20 sm:min-h-[850px] lg:min-h-[900px]"
//       >
//         {/* FULL BACKGROUND IMAGE */}
//         <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#0A2240]">
//           {/* Keep the entire image in frame, with breathing room above the team. */}
//           <div className="absolute inset-x-0 top-[80px] bottom-0 flex items-start justify-center sm:top-[100px] lg:top-[125px]">
//             <img
//               src="/images/shieldteam.webp"
//               alt=""
//               aria-hidden="true"
//               fetchPriority="high"
//               className="block h-full w-full object-contain object-top"
//             />
//           </div>
//         </div>

//         {/* CINEMATIC GRADIENT OVERLAY */}
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,34,0.96)_0%,rgba(6,24,45,0.89)_37%,rgba(7,27,50,0.56)_68%,rgba(7,27,50,0.30)_100%)]" />

//         <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#06172B]/85 via-transparent to-[#06172B]/20" />

//         {/* Decorative Grid */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, white 1px, transparent 1px)",
//             backgroundSize: "25% 100%",
//           }}
//         />

//         <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           {/* BREADCRUMB */}
//           <div className="mb-14 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:mb-20">
//             <Link
//               to="/"
//               className="text-white/55 transition-colors hover:text-[#D9B976]"
//             >
//               Home
//             </Link>

//             <span className="h-px w-5 bg-[#B99547]" />

//             <span className="text-[#E5C98D]">
//               About QuickShield
//             </span>
//           </div>

//           <div className="max-w-[1000px]">
//             {/* EYEBROW */}
//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-[#D5AE62]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E5C98D] sm:text-xs">
//                 QuickShield Services Notting Hill
//               </span>
//             </div>

//             {/* MAIN HERO TITLE — ALWAYS VISIBLE */}
//             <h1
//               id="about-hero-title"
//               className="text-[clamp(3.8rem,8.5vw,9.5rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-white"
//             >
//               WE PROTECT
//               <span className="mt-2 block font-serif font-normal italic tracking-[-0.075em] text-[#E5C98D]">
//                 what matters.
//               </span>
//             </h1>

//             <div className="mt-10 grid max-w-[780px] gap-8 border-t border-white/25 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
//               <p className="max-w-[530px] text-base leading-8 text-white/80 sm:text-lg">
//                 Professional pest control in Notting Hill,
//                 London. A considered approach to protecting
//                 homes, workplaces and the spaces that matter
//                 to you.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex w-fit items-center gap-5 rounded-full border border-[#E5C98D] bg-[#B99547] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//               >
//                 Get in Touch

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM HERO DETAILS */}
//         <div className="absolute bottom-8 left-6 right-6 z-10 hidden items-center justify-between border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:flex sm:left-10 sm:right-10 lg:left-16 lg:right-16">
//           <span>Notting Hill · London · United Kingdom</span>

//           <a
//             href="#our-story"
//             className="flex items-center gap-3 transition-colors hover:text-white"
//           >
//             Discover Our Story
//             <ChevronDown size={17} className="text-[#E5C98D]" />
//           </a>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 02 — EDITORIAL INTRODUCTION */}
//       {/* ============================= */}

//       <section
//         id="our-story"
//         className="relative bg-[#F6F4EF] py-24 sm:py-32 lg:py-40"
//       >
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
//             <Reveal>
//               <div className="flex items-center gap-4 lg:pt-4">
//                 <span className="h-px w-9 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   01 / Our Story
//                 </span>
//               </div>
//             </Reveal>

//             <div>
//               <Reveal>
//                 <h2 className="max-w-[1050px] text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[1.08] tracking-[-0.065em]">
//                   Pest control is
//                   <span className="font-serif font-normal italic text-[#B99547]">
//                     {" "}more than{" "}
//                   </span>
//                   removing the problem.
//                 </h2>
//               </Reveal>

//               <div className="mt-12 grid gap-10 border-t border-[#0A2240]/15 pt-10 md:grid-cols-2 md:gap-16">
//                 <Reveal delay={80}>
//                   <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-[#0A2240]">
//                     It's about understanding your property,
//                     identifying concerns and finding the
//                     right way forward.
//                   </p>
//                 </Reveal>

//                 <Reveal delay={160}>
//                   <div className="space-y-5 text-[15px] leading-8 text-[#566273]">
//                     <p>
//                       QuickShield Services Notting Hill
//                       provides pest control assistance for
//                       residential and commercial properties
//                       in Notting Hill, London.
//                     </p>

//                     <p>
//                       Whether you're dealing with rats,
//                       mice, bed bugs, cockroaches or wasps,
//                       our focus is on understanding the
//                       situation and discussing appropriate
//                       management options.
//                     </p>
//                   </div>
//                 </Reveal>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 03 — PHOTOGRAPHIC STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240]">
//         <div className="grid min-h-[650px] lg:grid-cols-2">
//           {/* IMAGE */}
//           <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[700px]">
//             <img
//               src="/images/image2.webp"
//               alt="Pest control service and property inspection"
//               loading="lazy"
//               className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#06182D]/45 to-transparent" />

//             <div className="absolute bottom-8 left-8 border-l-2 border-[#D9B976] pl-5 text-xs font-semibold uppercase tracking-[0.17em] text-white sm:bottom-12 sm:left-12">
//               A property-first perspective
//             </div>
//           </div>

//           {/* TEXT */}
//           <div className="relative flex items-center overflow-hidden px-7 py-20 text-white sm:px-12 lg:px-16 lg:py-28">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/15"
//             />

//             <Reveal className="relative z-10 max-w-[620px]">
//               <div className="mb-9 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                   What Defines Us
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3rem,5.2vw,6rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//                 Every property
//                 <br />
//                 has its own
//                 <br />
//                 <span className="font-serif font-normal italic text-[#E5C98D]">
//                   story.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-lg text-base leading-8 text-white/65">
//                 A pest issue in a London townhouse may
//                 require different considerations from one
//                 affecting a commercial premises. That's why
//                 understanding the environment matters.
//               </p>

//               <Link
//                 to="/services"
//                 className="group mt-10 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#E5C98D]"
//               >
//                 Discover Our Services

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 04 — EDITORIAL APPROACH */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//             {/* LEFT STICKY HEADING */}
//             <div>
//               <Reveal>
//                 <div className="lg:sticky lg:top-32">
//                   <div className="mb-8 flex items-center gap-4">
//                     <span className="h-px w-10 bg-[#B99547]" />

//                     <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                       02 / Our Approach
//                     </span>
//                   </div>

//                   <h2 className="text-[clamp(3.2rem,5.5vw,6.5rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                     Thoughtful
//                     <br />
//                     from the
//                     <br />
//                     <span className="font-serif font-normal italic text-[#B99547]">
//                       first step.
//                     </span>
//                   </h2>

//                   <p className="mt-8 max-w-sm text-base leading-8 text-[#566273]">
//                     A clear, practical approach to pest
//                     management, with attention to the
//                     details of each situation.
//                   </p>
//                 </div>
//               </Reveal>
//             </div>

//             {/* RIGHT PROCESS ROWS */}
//             <div className="border-t border-[#0A2240]/20">
//               {PRINCIPLES.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <Reveal key={item.number} delay={index * 80}>
//                     <div className="group grid gap-5 border-b border-[#0A2240]/20 py-10 transition-colors duration-300 hover:bg-[#0A2240]/[0.025] sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-12">
//                       <span className="font-serif text-3xl italic text-[#B99547]">
//                         {item.number}
//                       </span>

//                       <div>
//                         <div className="flex items-start justify-between gap-5">
//                           <h3 className="text-[clamp(2.3rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.06em]">
//                             {item.title}
//                           </h3>

//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0A2240]/15 transition-all duration-300 group-hover:rotate-12 group-hover:border-[#B99547] group-hover:bg-[#B99547]">
//                             <Icon size={21} strokeWidth={1.5} />
//                           </div>
//                         </div>

//                         <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#566273]">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </Reveal>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 05 — SERVICES STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#0A2240]/10"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-9 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#0A2240]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/75">
//                 03 / What We Do
//               </span>
//             </div>

//             <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//               <h2 className="max-w-[1000px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">
//                 Different pests.
//                 <br />
//                 <span className="font-serif font-normal italic text-[#F7F2E7]">
//                   One clear focus.
//                 </span>
//               </h2>

//               <p className="max-w-[300px] text-base leading-8 text-[#0A2240]/80">
//                 Helping customers explore appropriate
//                 pest control solutions for their homes
//                 and businesses.
//               </p>
//             </div>
//           </Reveal>

//           {/* SERVICE INDEX */}
//           <div className="mt-16 grid border-t border-[#0A2240]/25 md:grid-cols-2 lg:mt-20">
//             {SERVICES.map((service, index) => (
//               <Reveal key={service} delay={(index % 2) * 80}>
//                 <Link
//                   to="/services"
//                   className={
//                     "group flex min-h-[110px] items-center justify-between gap-6 border-b border-[#0A2240]/25 py-6 transition-all duration-300 hover:pl-3 " +
//                     (index % 2 === 0
//                       ? "md:pr-10"
//                       : "md:border-l md:border-[#0A2240]/25 md:pl-10 md:hover:pl-12")
//                   }
//                 >
//                   <div className="flex items-center gap-5">
//                     <span className="text-xs font-bold text-[#0A2240]/55">
//                       0{index + 1}
//                     </span>

//                     <span className="text-xl font-medium tracking-[-0.035em] text-[#0A2240] sm:text-2xl">
//                       {service}
//                     </span>
//                   </div>

//                   <ArrowUpRight
//                     size={23}
//                     className="shrink-0 text-[#0A2240] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </Reveal>
//             ))}
//           </div>

//           <div className="mt-12">
//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#0A2240]"
//             >
//               View All Services

//               <ArrowUpRight
//                 size={19}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 06 — LOCAL PRESENCE */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-16">
//           <Reveal>
//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   04 / Our Location
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3.5rem,6vw,7rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                 Rooted in
//                 <br />
//                 <span className="font-serif font-normal italic text-[#B99547]">
//                   Notting Hill.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-base leading-8 text-[#566273]">
//                 Based in Notting Hill, London,
//                 QuickShield Services is a local point
//                 of contact for pest control enquiries
//                 concerning residential and commercial
//                 properties.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={100}>
//             <div className="border-l-2 border-[#B99547] bg-[#EDE9E0] px-8 py-12 sm:px-12 sm:py-14">
//               <MapPin
//                 size={33}
//                 strokeWidth={1.4}
//                 className="text-[#B99547]"
//               />

//               <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                 QuickShield Services Notting Hill
//               </p>

//               <address className="mt-5 text-2xl font-medium not-italic leading-[1.45] tracking-[-0.035em] sm:text-3xl">
//                 3A Denbigh Rd
//                 <br />
//                 London W11 2SJ
//                 <br />
//                 United Kingdom
//               </address>

//               <div className="mt-9 h-px bg-[#0A2240]/15" />

//               <a
//                 href={PHONE_LINK}
//                 className="group mt-7 inline-flex items-center gap-4 text-lg font-semibold transition-colors hover:text-[#9A793F]"
//               >
//                 <Phone size={19} className="text-[#B99547]" />

//                 {PHONE}

//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 07 — FINAL STATEMENT CTA */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/15"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-10 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                 Your Property. Our Conversation.
//               </span>
//             </div>

//             <h2 className="max-w-[1100px] text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.98] tracking-[-0.075em]">
//               Let's make
//               <br />
//               <span className="font-serif font-normal italic text-[#E5C98D]">
//                 the next move.
//               </span>
//             </h2>

//             <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
//               <p className="max-w-xl text-base leading-8 text-white/65">
//                 Tell us about your pest concern.
//                 Contact QuickShield Services Notting Hill
//                 to discuss the situation and suitable
//                 next steps.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//                 >
//                   Contact QuickShield

//                   <ArrowUpRight
//                     size={19}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>

//                 <a
//                   href={PHONE_LINK}
//                   className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#E5C98D]"
//                 >
//                   <Phone size={17} />
//                   Call Now
//                   <ArrowRight size={17} />
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }


























import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  MoveDownRight,
  Mouse,
  Bug,
  BedDouble,
  Building2,
  ShieldCheck,
  Sparkles,
  ScanSearch,
  ClipboardList,
  LockKeyhole,
  Plus,
} from "lucide-react";

const NAVY = "#0A2240";
const GOLD = "#B99547";
const CREAM = "#F6F4EF";

const PHONE = "+44 7459 860336";
const PHONE_HREF = "tel:+447459860336";

const services = [
  { id: "01", title: "Rats & Mice", detail: "Rodent control", icon: Mouse },
  { id: "02", title: "Bed Bugs", detail: "Bed bug treatments", icon: BedDouble },
  { id: "03", title: "Cockroaches", detail: "Cockroach control", icon: Bug },
  { id: "04", title: "Wasps", detail: "Wasp control", icon: ShieldCheck },
  { id: "05", title: "Carpet Moths", detail: "Carpet moth treatments", icon: Sparkles },
  { id: "06", title: "Commercial", detail: "Business pest control", icon: Building2 },
];

const stages = [
  {
    id: "01",
    title: "The conversation",
    subtitle: "It starts with what you've noticed.",
    text: "Tell us about the signs of pest activity, the areas affected and the type of property involved. These details help establish a clearer picture of the concern.",
    icon: ClipboardList,
  },
  {
    id: "02",
    title: "The assessment",
    subtitle: "Understanding before acting.",
    text: "Pest identification, the property environment and potential sources of activity all help inform which management options may be appropriate.",
    icon: ScanSearch,
  },
  {
    id: "03",
    title: "The way forward",
    subtitle: "Practical steps, clearly explained.",
    text: "Suitable control measures and, where relevant, prevention considerations can help address the immediate concern and reduce conditions that encourage future activity.",
    icon: LockKeyhole,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const rect = node.getBoundingClientRect();

    if (rect.top < window.innerHeight + 100) {
      setShown(true);
      return;
    }

    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.04, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        ready
          ? {
              opacity: shown ? 1 : 0,
              transform: shown
                ? "translate3d(0,0,0)"
                : "translate3d(0,28px,0)",
              transition:
                "opacity 750ms ease, transform 750ms cubic-bezier(.2,.7,.2,1)",
              transitionDelay: shown ? `${delay}ms` : "0ms",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div
      className={`flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] ${
        light ? "text-white/65" : "text-[#0A2240]/60"
      }`}
    >
      <span className="text-[#B99547]">{number}</span>
      <span className={`h-px w-8 ${light ? "bg-white/25" : "bg-[#0A2240]/20"}`} />
      <span>{children}</span>
    </div>
  );
}

export default function AboutUsPage() {
  useEffect(() => {
    document.title =
      "About QuickShield Services Wimbledon | Pest Control London";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Discover QuickShield Services Wimbledon, providing pest control assistance for residential and commercial properties in Wimbledon and London."
    );
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#F6F4EF] text-[#0A2240]">

      {/* =====================================================
          01 — ARCHITECTURAL EDITORIAL HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F6F4EF]">
        <div className="absolute right-0 top-0 hidden h-full w-[19%] border-l border-[#0A2240]/10 lg:block" />
        <div className="absolute right-[19%] top-0 hidden h-full w-[19%] border-l border-[#0A2240]/10 lg:block" />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-36 sm:px-10 lg:px-16 lg:pb-28 lg:pt-44">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/20 pb-5">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-[#B99547]">
                Home
              </Link>
              <span className="text-[#B99547]">/</span>
              <span className="text-[#0A2240]/45">About Us</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/50">
              Wimbledon — London
            </span>
          </div>

          <div className="relative pt-14 lg:pt-20">
            <div className="relative z-20">
              <Reveal>
                <p className="mb-7 text-xs font-bold uppercase tracking-[0.3em] text-[#98763A]">
                  QuickShield Services Wimbledon
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="max-w-[1450px] text-[clamp(4.2rem,10.8vw,11.8rem)] font-semibold uppercase leading-[0.78] tracking-[-0.095em]">
                  BEYOND
                  <span className="block">THE</span>
                  <span className="relative block text-[#B99547]">
                    VISIBLE.
                  </span>
                </h1>
              </Reveal>
            </div>

            <div className="relative mt-12 grid gap-10 lg:mt-[-15px] lg:grid-cols-[0.37fr_0.63fr] lg:items-end">
              <Reveal className="relative z-20 lg:pb-12">
                <div className="max-w-[380px]">
                  <div className="mb-8 h-[2px] w-16 bg-[#B99547]" />
                  <p className="text-xl font-medium leading-[1.55] tracking-[-0.025em] sm:text-2xl">
                    The signs you notice are only the beginning
                    of understanding a pest problem.
                  </p>
                  <p className="mt-6 text-[15px] leading-8 text-[#566273]">
                    We help Wimbledon property owners navigate
                    pest concerns through clear communication,
                    considered solutions and practical next steps.
                  </p>
                  <Link
                    to="/contact-us"
                    className="group mt-9 inline-flex items-center gap-4 border-b-2 border-[#B99547] pb-3 text-xs font-bold uppercase tracking-[0.15em]"
                  >
                    Start a Conversation
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-full w-full border border-[#B99547] sm:-left-7 sm:-top-7" />

                  <div className="relative aspect-[5/4] overflow-hidden bg-[#0A2240]">
                    <img
                      src="/images/shieldteam.webp"
                      alt="Pest control team"
                      fetchPriority="high"
                      className="h-full w-full object-contain object-bottom"
                    />
                  </div>

                  <div className="absolute -bottom-6 right-0 flex items-center gap-4 bg-[#0A2240] px-6 py-5 text-white sm:-bottom-8 sm:px-9 sm:py-7">
                    <span className="font-serif text-4xl italic text-[#B99547]">
                      SW19
                    </span>
                    <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.17em] text-white/70">
                      Based in
                      <br />
                      Wimbledon
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-28 flex flex-wrap items-center justify-between gap-5 border-t border-[#0A2240]/15 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/50">
            <span>01 / An Introduction</span>
            <a href="#manifesto" className="flex items-center gap-3 hover:text-[#B99547]">
              Scroll to Explore
              <MoveDownRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — MANIFESTO: GIANT TYPOGRAPHIC COMPOSITION
      ===================================================== */}
      <section
        id="manifesto"
        className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-44"
      >
        <div className="absolute right-0 top-0 h-full w-px bg-white/10 lg:right-[18%]" />
        <div className="absolute bottom-0 right-0 hidden text-[24vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025] lg:block">
          Q
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="02" light>
              Our Perspective
            </SectionLabel>
          </Reveal>

          <Reveal>
            <div className="mt-14 max-w-[1300px]">
              <p className="text-[clamp(2.9rem,6.7vw,8rem)] font-medium leading-[1.09] tracking-[-0.07em]">
                A pest problem isn't just about
                <span className="text-[#B99547]"> what you see.</span>
                <span className="text-white/35">
                  {" "}It's about what may be happening
                  beyond it.
                </span>
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-10 border-t border-white/20 pt-9 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="max-w-[330px] text-xs font-bold uppercase leading-6 tracking-[0.2em] text-[#B99547]">
                A more considered approach to pest management.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-[610px] text-lg leading-9 text-white/65">
                At QuickShield Services Wimbledon, our approach
                begins with the circumstances behind each
                enquiry. The type of pest, the building and
                the signs of activity can all influence
                the options worth considering.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — IMMERSIVE PHOTOGRAPHIC CHAPTER
      ===================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#0A2240] sm:min-h-[750px] lg:min-h-[850px]">
        <img
          src="/images/image2.webp"
          alt="Pest control property inspection"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2240]/90 via-[#0A2240]/45 to-[#0A2240]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/65 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1500px] flex-col justify-between px-6 py-16 text-white sm:min-h-[750px] sm:px-10 lg:min-h-[850px] lg:px-16 lg:py-24">
          <Reveal>
            <SectionLabel number="03" light>
              Property Matters
            </SectionLabel>
          </Reveal>

          <Reveal>
            <div className="max-w-[950px]">
              <h2 className="text-[clamp(3.5rem,7.8vw,9rem)] font-medium leading-[0.98] tracking-[-0.075em]">
                EVERY SPACE
                <span className="block font-serif font-normal italic text-[#DCC48C]">
                  tells a different
                </span>
                STORY.
              </h2>
              <p className="mt-9 max-w-xl border-l-2 border-[#B99547] pl-6 text-base leading-8 text-white/80">
                A home, an office and a commercial premises
                can each present different pest management
                considerations. Understanding the environment
                is part of understanding the concern.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          04 — PROPERTY EXPERTISE: NON-CARD LAYOUT
      ===================================================== */}
      <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="04">
              The Environments We Consider
            </SectionLabel>
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <h2 className="text-[clamp(3.3rem,6.2vw,7.5rem)] font-medium leading-[1.02] tracking-[-0.075em]">
                NOT ALL
                <br />
                PROPERTIES
                <br />
                <span className="font-serif font-normal italic text-[#B99547]">
                  are alike.
                </span>
              </h2>
            </Reveal>

            <div className="border-t border-[#0A2240]/20">
              <Reveal>
                <div className="grid gap-6 border-b border-[#0A2240]/20 py-11 sm:grid-cols-[75px_1fr]">
                  <span className="font-serif text-5xl italic text-[#B99547]">
                    01
                  </span>
                  <div>
                    <div className="flex items-center gap-4">
                      <ShieldCheck size={27} strokeWidth={1.5} />
                      <h3 className="text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                        Residential Spaces
                      </h3>
                    </div>
                    <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-[#566273]">
                      From kitchens and bedrooms to lofts,
                      gardens and concealed areas, domestic
                      pest concerns can affect many parts
                      of everyday living.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid gap-6 border-b border-[#0A2240]/20 py-11 sm:grid-cols-[75px_1fr]">
                  <span className="font-serif text-5xl italic text-[#B99547]">
                    02
                  </span>
                  <div>
                    <div className="flex items-center gap-4">
                      <Building2 size={27} strokeWidth={1.5} />
                      <h3 className="text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                        Commercial Spaces
                      </h3>
                    </div>
                    <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-[#566273]">
                      Workplaces, retail settings and other
                      business environments may require
                      attention to operational needs,
                      hygiene concerns and property access.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <p className="max-w-[400px] text-sm leading-7 text-[#566273]">
                    Tell us about your property and the signs
                    of pest activity you've encountered.
                  </p>
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.13em]"
                  >
                    Discuss Your Property
                    <ArrowUpRight
                      size={20}
                      className="text-[#B99547] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — OVERSIZED INTERACTIVE SERVICE INDEX
      ===================================================== */}
      <section className="bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/70">
              <span>05</span>
              <span className="h-px w-8 bg-[#0A2240]/40" />
              <span>Our Pest Control Services</span>
            </div>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-[clamp(3.4rem,7vw,8rem)] font-medium uppercase leading-[0.95] tracking-[-0.08em]">
                WHAT WE
                <br />
                <span className="font-serif font-normal italic normal-case text-[#F6F4EF]">
                  help manage.
                </span>
              </h2>

              <p className="max-w-[310px] text-base leading-8 text-[#0A2240]/80">
                Explore a selection of pest control
                services available through QuickShield
                Services Wimbledon.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 border-t-2 border-[#0A2240] lg:mt-20">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.id} delay={(index % 2) * 50}>
                  <Link
                    to="/services"
                    className="group grid items-center gap-4 border-b border-[#0A2240]/35 py-7 transition-all duration-300 hover:bg-[#0A2240] hover:px-5 sm:grid-cols-[70px_1fr_auto] sm:gap-7 sm:py-9"
                  >
                    <span className="font-serif text-3xl italic text-[#0A2240]/65 transition-colors group-hover:text-[#B99547]">
                      {service.id}
                    </span>

                    <div className="flex items-center gap-5">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="shrink-0 transition-colors group-hover:text-[#B99547]"
                      />
                      <div>
                        <h3 className="text-[clamp(1.8rem,3.5vw,4rem)] font-medium leading-none tracking-[-0.06em] transition-colors group-hover:text-white">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#0A2240]/60 transition-colors group-hover:text-white/55">
                          {service.detail}
                        </p>
                      </div>
                    </div>

                    <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#0A2240]/40 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#B99547] group-hover:bg-[#B99547] sm:flex">
                      <Plus size={25} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-7">
              <p className="max-w-lg text-sm leading-7 text-[#0A2240]/75">
                Unsure which pest you're dealing with?
                Describe the issue and contact our team.
              </p>
              <Link
                to="/services"
                className="group inline-flex items-center gap-5 bg-[#0A2240] px-8 py-5 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors duration-300 hover:bg-[#F6F4EF] hover:text-[#0A2240]"
              >
                View All Services
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          06 — VERTICAL ARCHITECTURAL PROCESS
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-16">
          <div>
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel number="06">
                  A Practical Framework
                </SectionLabel>

                <h2 className="mt-9 text-[clamp(3.4rem,6vw,7rem)] font-medium leading-[1.02] tracking-[-0.075em]">
                  A CLEAR
                  <br />
                  PATH
                  <br />
                  <span className="font-serif font-normal italic text-[#B99547]">
                    forward.
                  </span>
                </h2>

                <p className="mt-9 max-w-[380px] text-base leading-8 text-[#566273]">
                  Rather than treating every situation
                  as identical, our approach considers
                  the concern, the property and the
                  available options.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative border-l border-[#0A2240]/20 pl-8 sm:pl-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <Reveal key={stage.id} delay={index * 60}>
                  <div className="relative border-b border-[#0A2240]/20 py-12 first:pt-0 last:border-b-0 last:pb-0">
                    <div className="absolute -left-[39px] top-14 h-3 w-3 rounded-full border-[3px] border-[#B99547] bg-[#F6F4EF] sm:-left-[55px]" />

                    <div className="flex items-start justify-between gap-5">
                      <span className="font-serif text-7xl italic leading-none text-[#B99547] sm:text-8xl">
                        {stage.id}
                      </span>
                      <Icon
                        size={30}
                        strokeWidth={1.3}
                        className="mt-3 text-[#0A2240]"
                      />
                    </div>

                    <h3 className="mt-9 text-[clamp(2.2rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.06em]">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-[#98763A]">
                      {stage.subtitle}
                    </p>

                    <p className="mt-6 max-w-[540px] text-[15px] leading-8 text-[#566273]">
                      {stage.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — WIMBLEDON IDENTITY: TYPOGRAPHIC LOCATION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute -right-20 bottom-[-80px] text-[25vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025]">
          SW19
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="07" light>
              Our Local Presence
            </SectionLabel>

            <h2 className="mt-12 text-[clamp(3.5rem,9vw,10.5rem)] font-semibold uppercase leading-[0.87] tracking-[-0.09em]">
              WIMBLEDON
              <span className="mt-4 block font-serif font-normal italic normal-case text-[#B99547]">
                is our base.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-white/20 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <Reveal>
              <p className="max-w-[500px] text-lg leading-9 text-white/70">
                Based on Thornton Road in Wimbledon,
                QuickShield Services Wimbledon provides
                pest control assistance for residential
                and commercial enquiries in Wimbledon,
                nearby areas and London.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  Wimbledon
                </span>
                <span className="border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  Nearby Areas
                </span>
                <span className="border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  London
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-l-2 border-[#B99547] pl-7 sm:pl-10">
                <MapPin size={30} className="text-[#B99547]" />

                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                  QuickShield Services Wimbledon
                </p>

                <address className="mt-5 text-[clamp(1.8rem,3vw,3.2rem)] font-medium not-italic leading-[1.35] tracking-[-0.045em]">
                  3 Thornton Rd
                  <br />
                  London SW19 4NB
                  <br />
                  United Kingdom
                </address>

                <a
                  href={PHONE_HREF}
                  className="group mt-10 inline-flex flex-wrap items-center gap-4 border-b border-white/30 pb-3 text-xl font-medium transition-colors hover:text-[#B99547]"
                >
                  <Phone size={20} />
                  {PHONE}
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — MINIMAL LUXURY FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#0A2240]/20 pb-7">
              <SectionLabel number="08">
                Begin With a Conversation
              </SectionLabel>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/45">
                QuickShield / Wimbledon
              </span>
            </div>

            <h2 className="mt-16 text-[clamp(3.5rem,9vw,10rem)] font-medium leading-[0.94] tracking-[-0.085em]">
              LET'S FIND
              <span className="block font-serif font-normal italic text-[#B99547]">
                a way forward.
              </span>
            </h2>

            <div className="mt-14 flex flex-col gap-10 border-t border-[#0A2240]/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[580px] text-lg leading-9 text-[#566273]">
                Have a pest concern at your home or
                business? Contact QuickShield Services
                Wimbledon to explain the situation
                and discuss suitable next steps.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-6 bg-[#0A2240] px-8 py-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
                >
                  Get in Touch
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-4 border border-[#0A2240]/25 px-8 py-5 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#B99547] hover:text-[#98763A]"
                >
                  <Phone size={18} />
                  Call Us
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
