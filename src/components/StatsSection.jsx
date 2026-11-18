// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1200 }) { // Duration thoda optimized kiya
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const hasAnimated = useRef(false);

//   const isFraction = value.includes("/");
//   const numericString = value.replace(/[^0-9]/g, "");
//   const numericValue = parseInt(numericString, 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           let startTime = null;
//           let lastUpdate = 0;

//           const animateCount = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
            
//             // FIX: Throttle state updates to save main-thread frame rates (approx 60fps cap)
//             if (timestamp - lastUpdate > 16 || progress === 1) {
//               const currentValue = Math.round(progress * numericValue);
//               setCount(currentValue);
//               lastUpdate = timestamp;
//             }

//             if (progress < 1) {
//               requestAnimationFrame(animateCount);
//             }
//           };

//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.1 } // Optimized threshold to trigger early and smoothly
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [numericValue, duration]);

//   if (isFraction) {
//     return (
//       <span ref={ref} className="inline-flex items-center transform-gpu">
//         <span>{count}</span>
//         <span className="text-[#0A2240]/30 mx-1">/</span>
//         <span>{value.split("/")[1]}</span>
//       </span>
//     );
//   }

//   return (
//     <span ref={ref} className="inline-flex transform-gpu">
//       <span>{count}</span>
//       {suffix}
//     </span>
//   );
// }

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   const stats = [
//     {
//       number: "15+",
//       label: "Years Premium Depth",
//       desc: "Rapid emergency response across high-end West London sectors.",
//     },
//     {
//       number: "5/5",
//       label: "Client Trust Score",
//       desc: "Top ratings for seamless eradication and zero-trace execution.",
//     },
//     {
//       number: "100%",
//       label: "Eradication Rate",
//       desc: "Comprehensive protection warranties securing luxury estates.",
//     },
//     {
//       number: "3K+",
//       label: "Properties Shielded",
//       desc: "Successful active proofing setups deployed across Mayfair.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Premium Linear Accents */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Monolithic Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#0A2240]/10">
//           <div className="space-y-4 text-left">
//             <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0A2240]/60 block">
//               // Performance Index
//             </span>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//               Mayfair Track Record
//             </h2>
//           </div>
          
//           <div className="text-left md:text-right">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="inline-flex items-center gap-8 bg-[#0A2240] text-white rounded-full pl-6 pr-2 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-[#0A2240]/90 active:scale-[0.98] group/btn shadow-xl shadow-[#0A2240]/10"
//             >
//               <span>Schedule Eradication</span>
//               <div className="w-10 h-10 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
//                 <ArrowRight className="w-4 h-4 text-[#0A2240]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* LINEAR HORIZON TIMELINE STREAM */}
//         <div className="mt-12 divide-y divide-[#0A2240]/10">
//           {stats.map((stat, idx) => (
//             <div 
//               key={idx} 
//               // FIX: Replaced transition-all with specific property transitions to avoid re-paints
//               className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left group transition-colors duration-300 relative transform-gpu will-change-transform"
//             >
//               {/* Invisible background glow */}
//               <div className="absolute inset-y-0 -inset-x-4 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none transform-gpu" />

//               {/* Index Column */}
//               <div className="md:col-span-1 hidden md:block relative z-10">
//                 <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200">
//                   0{idx + 1}
//                 </span>
//               </div>

//               {/* Big Counter Column */}
//               <div className="md:col-span-3 relative z-10">
//                 {/* FIX: Removed text scaling on hover to completely remove text jittering on scroll */}
//                 <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#0A2240] font-sans flex items-center transform-gpu">
//                   <AnimatedCounter value={stat.number} />
//                 </div>
//               </div>

//               {/* Label/Title Column */}
//               <div className="md:col-span-3 relative z-10">
//                 <h4 className="text-sm font-black tracking-wider uppercase text-[#0A2240] group-hover:text-white transition-colors duration-200">
//                   {stat.label}
//                 </h4>
//               </div>

//               {/* Description Context Column */}
//               <div className="md:col-span-5 relative z-10">
//                 <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//                   {stat.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }













// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useSpring, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // Helper component for animating numbers
// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   // Extract numeric part (e.g., "15+" -> 15, "3K+" -> 3000)
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000; // 2 seconds animation
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

// const navigate = useNavigate();

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}{suffix}
//     </span>
//   );
// }

// const stats = [
//   { value: "15+", label: "Years of Elite Service", desc: "Decades of mastery in discreet pest eradication for luxury estates." },
//   { value: "5/5", label: "Trust Rating", desc: "Perfect client satisfaction scores for our precision protocols." },
//   { value: "100%", label: "Eradication Success", desc: "Zero-tolerance policy for pests with lifetime proofing warranties." },
//   { value: "3000+", label: "Estates Secured", desc: "Successfully protected premier properties across Mayfair." },
// ];

// export default function PesSaveStatsSection() {
//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">Operational Excellence</span>
//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />
//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">{stat.label}</h4>
//               <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">Ready to secure your property with the QuickShield standard?</p>
//       <button
//   onClick={() => navigate("/contact-us")}
//   className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
// >
//   Get A Private Consultation
// </button>
//         </div>
//       </div>
//     </section>
//   );
// }









// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   {
//     value: "15+",
//     label: "Years of Elite Service",
//     desc: "Decades of mastery in discreet pest eradication for luxury estates.",
//   },
//   {
//     value: "5/5",
//     label: "Trust Rating",
//     desc: "Perfect client satisfaction scores for our precision protocols.",
//   },
//   {
//     value: "100%",
//     label: "Eradication Success",
//     desc: "Zero-tolerance policy for pests with lifetime proofing warranties.",
//   },
//   {
//     value: "3000+",
//     label: "Estates Secured",
//     desc: "Successfully protected premier properties across Mayfair.",
//   },
// ];

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">
//             Operational Excellence
//           </span>

//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />

//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">
//                 {stat.label}
//               </h4>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {stat.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">
//             Ready to secure your property with the QuickShield standard?
//           </p>

//           <button
//             type="button"
//             onClick={() => navigate("/contact-us")}
//             className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
//           >
//             Get A Private Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


















// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, ArrowRight, MapPin, ScanSearch, ShieldCheck, CheckCircle2 } from "lucide-react";

// const STEPS = [
//   {
//     number: "01",
//     label: "UNDERSTAND",
//     title: "Start with the signs.",
//     description: "Tell us what you have noticed, where the activity is happening and how it is affecting your property.",
//     icon: ScanSearch,
//   },
//   {
//     number: "02",
//     label: "ASSESS",
//     title: "Look beyond the surface.",
//     description: "A considered assessment can help identify pest activity, possible access points and areas that may need attention.",
//     icon: MapPin,
//   },
//   {
//     number: "03",
//     label: "RESPOND",
//     title: "Choose a suitable approach.",
//     description: "The pest type, location and property conditions inform the treatment or control options to discuss.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "04",
//     label: "PREVENT",
//     title: "Think about what follows.",
//     description: "Where appropriate, practical advice and proofing measures can help reduce opportunities for repeat pest access.",
//     icon: CheckCircle2,
//   },
// ];

// export default function PesSaveStatsSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const root = sectionRef.current;
//     if (!root) return;
//     const elements = root.querySelectorAll("[data-qs-reveal]");
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
//       elements.forEach((el) => el.classList.add("qs-approach-visible"));
//       return;
//     }
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("qs-approach-visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.08, rootMargin: "0px 0px 30px 0px" });
//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} aria-labelledby="quickshield-approach-title" className="relative isolate overflow-hidden bg-[#F7F4EC] text-[#0A2240]">
//       <style>{`
//         .qs-approach-reveal { opacity: 0; transform: translateY(22px); transition: opacity 650ms ease, transform 650ms cubic-bezier(.2,.75,.2,1); }
//         .qs-approach-visible { opacity: 1; transform: translateY(0); }
//         @media (prefers-reduced-motion: reduce) { .qs-approach-reveal { opacity: 1; transform: none; transition: none; } }
//       `}</style>

//       {/* Architectural header, intentionally unlike the old four-stat cards */}
//       <div className="relative border-b border-[#0A2240]/15 px-5 pt-20 pb-12 sm:px-8 sm:pt-28 lg:px-12">
//         <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full border border-[#B99547]/20" aria-hidden="true" />
//         <div className="pointer-events-none absolute right-[-5%] top-[-40%] h-[400px] w-[400px] rounded-full border border-[#B99547]/20" aria-hidden="true" />
//         <div className="relative mx-auto max-w-[1400px]">
//           <div data-qs-reveal className="qs-approach-reveal grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end lg:gap-16">
//             <div>
//               <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#92712F]"><span className="h-px w-10 bg-[#B99547]" /> OUR APPROACH · NOTTING HILL</p>
//               <h2 id="quickshield-approach-title" className="mt-6 max-w-[880px] text-[clamp(2.8rem,6.7vw,7.2rem)] font-extrabold leading-[.94] tracking-[-.075em]">
//                 Thoughtful pest control<span className="text-[#B99547]">.</span><br />
//                 <span className="font-serif font-normal italic text-[#9C7D3F]">From first signs onward.</span>
//               </h2>
//             </div>
//             <div className="lg:pb-2">
//               <p className="max-w-md border-l-2 border-[#B99547] pl-5 text-sm leading-8 text-[#0A2240]/70 sm:text-base">
//                 Pest control in Notting Hill should begin with understanding the problem, not jumping to assumptions. Here is how we approach the conversation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full-width editorial rows with a continuous line; no generic cards */}
//       <div className="px-5 sm:px-8 lg:px-12">
//         <div className="mx-auto max-w-[1400px]">
//           {STEPS.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <div key={step.number} data-qs-reveal className="qs-approach-reveal group relative grid gap-5 border-b border-[#0A2240]/15 py-9 transition-colors duration-300 hover:bg-[#B99547]/[.055] sm:grid-cols-[90px_1fr] sm:gap-7 sm:py-11 lg:grid-cols-[115px_minmax(0,1fr)_minmax(250px,.8fr)_52px] lg:items-center lg:gap-10 lg:py-12" style={{ transitionDelay: `${Math.min(index * 75, 225)}ms` }}>
//                 <span className="font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-none tracking-[-.09em] text-[#B99547]" aria-hidden="true">{step.number}</span>
//                 <div>
//                   <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#92712F]">{step.label}</p>
//                   <h3 className="max-w-[570px] text-[clamp(1.8rem,3.1vw,3.4rem)] font-bold leading-[1.05] tracking-[-.055em]">{step.title}</h3>
//                 </div>
//                 <p className="max-w-[450px] text-sm leading-7 text-[#0A2240]/65 sm:col-start-2 lg:col-auto">{step.description}</p>
//                 <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#0A2240]/15 text-[#9C7D3F] transition-all duration-300 group-hover:rotate-[-12deg] group-hover:border-[#B99547] group-hover:bg-[#0A2240] group-hover:text-[#B99547] lg:flex"><Icon size={20} strokeWidth={1.6} /></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Contrasting integrated CTA rather than a separate button under cards */}
//       <div className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
//         <div data-qs-reveal className="qs-approach-reveal relative mx-auto grid max-w-[1400px] overflow-hidden bg-[#0A2240] text-white lg:grid-cols-[1fr_auto] lg:items-center">
//           <div className="relative z-10 p-7 sm:p-11 lg:p-14">
//             <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D8BC7B]">YOUR NEXT STEP</p>
//             <h3 className="mt-4 max-w-[760px] text-[clamp(2rem,4vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-.06em]">Tell us what is happening at your property.</h3>
//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">Speak to QuickShield Services Notting Hill about a pest concern at your home or workplace in London.</p>
//           </div>
//           <Link to="/contact-us" className="group relative z-10 flex min-h-24 items-center justify-between gap-8 bg-[#B99547] px-8 py-7 text-sm font-extrabold uppercase tracking-[.08em] text-[#0A2240] transition-colors duration-300 hover:bg-[#D6B973] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-white lg:mx-10 lg:min-h-20 lg:min-w-[245px]">
//             Request a callback <ArrowUpRight size={22} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//           </Link>
//           <div className="pointer-events-none absolute -bottom-28 right-[15%] h-80 w-80 rounded-full border-[40px] border-white/[.035]" aria-hidden="true" />
//         </div>
//       </div>
//     </section>
//   );
// }


































import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  ScanSearch,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   PROCESS BLUEPRINT — ARCHITECTURAL TIMELINE

   Navy:  #0A2240
   Gold:  #B99547
   Cream: #F7F5EF

   No additional CSS files or animation libraries.
========================================================== */

const STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Every concern starts with a conversation.",
    description:
      "Tell us what you have noticed, where the activity is taking place and how it is affecting your home or business. The details help us understand your situation.",
    icon: Search,
    micro: "Initial Enquiry",
  },
  {
    number: "02",
    label: "INVESTIGATE",
    title: "Look closer. Understand more.",
    description:
      "A considered assessment can help establish the type of pest activity, possible access points and the conditions that may be contributing to the problem.",
    icon: ScanSearch,
    micro: "Property Assessment",
  },
  {
    number: "03",
    label: "ADDRESS",
    title: "A response shaped by the property.",
    description:
      "Suitable control or treatment options depend on the pest involved, the location of activity and the particular requirements of the affected environment.",
    icon: ShieldCheck,
    micro: "Control Approach",
  },
  {
    number: "04",
    label: "PROTECT",
    title: "Consider what happens next.",
    description:
      "Where appropriate, practical recommendations and proofing measures can help address potential entry points and reduce opportunities for future pest activity.",
    icon: CheckCircle2,
    micro: "Prevention Guidance",
  },
];

export default function PesSaveStatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-qsw-process-reveal]"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("qsw-process-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "qsw-process-visible"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 70px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="qsw-process-heading"
      className="qsw-process relative isolate overflow-hidden bg-[#0A2240] text-[#F7F5EF]"
    >
      <style>{`
        .qsw-process .qsw-process-reveal {
          opacity: 0;
          transform: translateY(38px);
          transition:
            opacity 850ms cubic-bezier(.2,.75,.2,1),
            transform 850ms cubic-bezier(.2,.75,.2,1);
        }

        .qsw-process .qsw-process-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes qsw-process-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(185,149,71,.18);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(185,149,71,0);
          }
        }

        .qsw-process .qsw-process-node {
          animation: qsw-process-pulse 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-process .qsw-process-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .qsw-process .qsw-process-node {
            animation: none;
          }
        }
      `}</style>

      {/* ======================================================
          BACKGROUND ARCHITECTURAL DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                #F7F5EF 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                #F7F5EF 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="absolute -right-28 top-[5%] h-[550px] w-[550px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -right-12 top-[8%] h-[420px] w-[420px] rounded-full border border-[#B99547]/10" />

        <span className="absolute -left-12 top-[28%] select-none text-[35vw] font-black leading-none tracking-[-0.12em] text-white/[0.018]">
          Q
        </span>

        <div className="absolute bottom-[12%] left-[6%] h-[250px] w-[250px] border-b border-l border-[#B99547]/15" />
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-40">

        <div
          data-qsw-process-reveal
          className="qsw-process-reveal"
        >
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 pb-7">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#B99547]">
                QuickShield / Wimbledon
              </span>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/40">
              Our Working Approach · SW19
            </span>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">

            <div>
              <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                01 — Understanding the Process
              </p>

              <h2
                id="qsw-process-heading"
                className="max-w-[1050px] text-[clamp(3.3rem,7vw,8rem)] font-medium uppercase leading-[0.94] tracking-[-0.075em]"
              >
                A CLEAR
                <span className="block">
                  PATH
                </span>
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  forward.
                </span>
              </h2>
            </div>

            <div className="lg:pb-3">
              <div className="mb-7 h-[2px] w-20 bg-[#B99547]" />

              <p className="max-w-[440px] text-[15px] leading-8 text-white/65 sm:text-base">
                Pest management begins with understanding
                what is happening at your property.
                Explore the stages that help shape a
                considered response to pest concerns
                in Wimbledon and London.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          PROCESS TIMELINE
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-20 sm:px-10 lg:px-16 lg:pb-32">

        {/* Vertical central timeline for desktop */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-28 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#B99547]/15 via-[#B99547]/70 to-[#B99547]/15 lg:block"
        />

        <div className="relative space-y-12 lg:space-y-0">

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const reverse = index % 2 === 1;

            return (
              <div
                key={step.number}
                data-qsw-process-reveal
                className="qsw-process-reveal relative"
                style={{
                  transitionDelay: `${Math.min(
                    index * 100,
                    300
                  )}ms`,
                }}
              >

                <div
                  className={`relative grid items-center gap-8 border-t border-white/15 py-10 sm:py-14 lg:grid-cols-2 lg:gap-28 lg:border-0 lg:py-24 ${
                    reverse ? "" : ""
                  }`}
                >

                  {/* ==========================================
                      TEXT SIDE
                  ========================================== */}

                  <div
                    className={`relative ${
                      reverse
                        ? "lg:order-2 lg:pl-8"
                        : "lg:order-1 lg:pr-8"
                    }`}
                  >

                    <div className="mb-7 flex items-center gap-5">
                      <span className="font-serif text-[clamp(5rem,10vw,10rem)] italic leading-none tracking-[-0.09em] text-[#B99547]/80">
                        {step.number}
                      </span>

                      <div className="h-px w-14 bg-[#B99547]/55" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="max-w-[590px] text-[clamp(2.1rem,3.8vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.06em]">
                      {step.title}
                    </h3>

                    <p className="mt-7 max-w-[510px] text-[15px] leading-8 text-white/60">
                      {step.description}
                    </p>

                    <div className="mt-9 flex items-center gap-4">
                      <span className="h-px w-9 bg-[#B99547]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B99547]">
                        {step.micro}
                      </span>
                    </div>
                  </div>

                  {/* ==========================================
                      ARCHITECTURAL VISUAL SIDE
                  ========================================== */}

                  <div
                    className={`relative ${
                      reverse
                        ? "lg:order-1 lg:pr-8"
                        : "lg:order-2 lg:pl-8"
                    }`}
                  >

                    <div className="group relative mx-auto flex aspect-[1.25/1] w-full max-w-[530px] items-center justify-center overflow-hidden border border-[#B99547]/25 bg-[#F7F5EF]/[0.035] transition-colors duration-500 hover:bg-[#B99547]/[0.07]">

                      {/* Blueprint grid */}

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to right,
                              #B99547 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              to bottom,
                              #B99547 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "35px 35px",
                        }}
                      />

                      {/* Corner brackets */}

                      <div className="absolute left-6 top-6 h-12 w-12 border-l border-t border-[#B99547]/70" />

                      <div className="absolute bottom-6 right-6 h-12 w-12 border-b border-r border-[#B99547]/70" />

                      {/* Large icon geometry */}

                      <div className="relative flex h-[200px] w-[200px] items-center justify-center sm:h-[250px] sm:w-[250px]">

                        <div className="absolute inset-0 rotate-45 border border-[#B99547]/35 transition-transform duration-700 group-hover:rotate-[60deg]" />

                        <div className="absolute inset-[14%] -rotate-12 border border-[#B99547]/25 transition-transform duration-700 group-hover:rotate-0" />

                        <div className="absolute inset-[27%] flex items-center justify-center bg-[#B99547] text-[#0A2240] transition-transform duration-500 group-hover:scale-110">
                          <Icon
                            size={58}
                            strokeWidth={1.25}
                          />
                        </div>
                      </div>

                      {/* Micro labels */}

                      <span className="absolute bottom-7 left-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                        QS / {step.number}
                      </span>

                      <span className="absolute right-7 top-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                        SW19
                      </span>
                    </div>
                  </div>

                  {/* ==========================================
                      CENTRAL TIMELINE NODE
                  ========================================== */}

                  <div
                    aria-hidden="true"
                    className="qsw-process-node absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#0A2240] bg-[#B99547] lg:flex"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================
          FINAL CALL TO ACTION
      ====================================================== */}

      <div className="relative border-t border-white/15 bg-[#071A32]">

        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          <div
            data-qsw-process-reveal
            className="qsw-process-reveal grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
          >

            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#B99547]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                  Ready to Discuss Your Property?
                </span>
              </div>

              <h3 className="max-w-[950px] text-[clamp(2.8rem,5.5vw,6.3rem)] font-medium uppercase leading-[1.02] tracking-[-0.07em]">
                YOUR NEXT
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  step starts here.
                </span>
              </h3>

              <p className="mt-7 max-w-[600px] text-[15px] leading-8 text-white/60">
                Speak to QuickShield Services Wimbledon
                about pest activity at your home or
                workplace. Tell us what you have
                noticed and we can discuss possible
                next steps.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">

              <Link
                to="/contact-us"
                className="group inline-flex min-h-[64px] items-center justify-between gap-10 bg-[#B99547] px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F7F5EF]"
              >
                Request an Enquiry

                <ArrowUpRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="tel:+447459860336"
                className="group inline-flex min-h-[64px] items-center justify-between gap-8 border border-white/25 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#B99547]"
              >
                <span className="inline-flex items-center gap-3">
                  <Phone size={18} />

                  +44 7459 860336
                </span>

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Location footer */}

          <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-7">

            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              <MapPin
                size={17}
                className="text-[#B99547]"
              />

              3 Thornton Rd, London SW19 4NB
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B99547]">
              QuickShield Services Wimbledon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
