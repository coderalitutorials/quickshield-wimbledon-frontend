// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PhoneCall, Calendar, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       step: "01",
//       title: "Assessment",
//       icon: Calendar,
//       bullets: [
//         "Instant Online Slot Booking",
//         "Thermal Inspection & Detection",
//         "Risk Mapping Report Ready"
//       ]
//     },
//     {
//       step: "02",
//       title: "Targeted Eradication",
//       icon: ClipboardCheck,
//       bullets: [
//         "Eco-Certified Actives Deployment",
//         "Precision Heat Treatments",
//         "100% Non-Disruptive Clean Injection"
//       ]
//     },
//     {
//       step: "03",
//       title: "Long-term Protection",
//       icon: PhoneCall,
//       bullets: [
//         "Structural Entry Point Sealing",
//         "Premium Hygiene Baseline Clear",
//         "Post-Treatment Monitoring Plan"
//       ]
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-b border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Structural Minimal Tech Grid Lines */}
//       <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0A2240_2px,transparent_2px),linear-gradient(to_bottom,#0A2240_2px,transparent_2px)] bg-[size:5rem_5rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modern Left-Aligned Header Block */}
//         <div className="max-w-3xl mb-24 space-y-6">
//           <div className="inline-flex items-center gap-2.5 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-lg transform-gpu">
//             <span className="w-2 h-2 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//             <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//               Deployment Flow
//             </span>
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-[#0A2240]">
//             3-Stage Property <br />
//             <span className="text-white bg-[#0A2240] px-4 py-1 rounded-xl inline-block mt-2 shadow-xl">
//               Sanctuary Protocol
//             </span>
//           </h2>
//         </div>

//         {/* HIGH-END INTERACTIVE TIMELINE ELEMENT */}
//         <div className="relative transform-gpu">
          
//           {/* Background Connecting Vector Line (Desktop Only) */}
//           <div className="absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#0A2240]/10 hidden md:block z-0" />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
//             {steps.map((item, idx) => {
//               const Icon = item.icon;
//               const isActive = activeStep === idx;

//               return (
//                 <div 
//                   key={item.step}
//                   onMouseEnter={() => setActiveStep(idx)}
//                   className="group/step relative space-y-8 cursor-pointer transform-gpu"
//                 >
//                   {/* Timeline Header Badge & Progress Hub */}
//                   <div className="flex items-center md:flex-col md:items-start gap-6 relative">
                    
//                     {/* Glowing Sequential Indicator */}
//                     {/* FIX: Handled scale and layout translation safely using explicit transform rules */}
//                     <div className={`w-20 h-20 rounded-[24px] border-2 flex items-center justify-center transition-[transform,background-color,border-color] duration-300 shadow-2xl relative transform-gpu ${
//                       isActive 
//                         ? "bg-[#0A2240] border-[#0A2240] text-[#C5A86B] scale-105 -translate-y-0.5" 
//                         : "bg-[#C5A86B] border-[#0A2240]/20 text-[#0A2240]"
//                     }`}>
//                       <Icon className="w-8 h-8" strokeWidth={1.5} />
                      
//                       {/* Absolute Mini Index Badge */}
//                       <span className="absolute -bottom-2.5 right-2 font-mono text-xs font-black bg-[#0A2240] text-white px-1.5 py-0.5 rounded-md shadow-sm">
//                         {item.step}
//                       </span>
//                     </div>

//                     {/* Stage Header Block */}
//                     {/* FIX: Smoothed typography background injection changes to stop rendering hops */}
//                     <div className="md:pt-4 transition-all duration-300">
//                       <h3 className={`text-xl lg:text-2xl font-black uppercase tracking-tight transition-[colors,background-color] duration-300 px-2.5 py-0.5 rounded-md ${
//                         isActive ? "text-white bg-[#0A2240]" : "text-[#0A2240] bg-transparent"
//                       }`}>
//                         {item.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Bullet Content Chassis */}
//                   {/* FIX: Swapped out performance killing backdrop-blur with hardware-accelerated translucent background solid */}
//                   <div className={`p-6 rounded-[24px] transition-[transform,background-color,shadow] duration-300 border transform-gpu will-change-transform ${
//                     isActive 
//                       ? "bg-[#0A2240] border-[#0A2240] shadow-2xl shadow-black/30 -translate-y-1" 
//                       : "bg-[#0A2240]/5 border-transparent"
//                   }`}>
//                     <ul className="space-y-3.5">
//                       {item.bullets.map((bullet, bIdx) => (
//                         <li key={bIdx} className="flex items-start gap-3">
//                           <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
//                             isActive ? "text-[#C5A86B]" : "text-[#0A2240]"
//                           }`} strokeWidth={2.5} />
//                           <span className={`text-xs font-bold leading-tight transition-colors duration-300 ${
//                             isActive ? "text-slate-200" : "text-[#0A2240]/80"
//                           }`}>
//                             {bullet}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CRISP ULTRA-PREMIUM EMERGENCY PANEL */}
//         <div className="mt-20 bg-[#0A2240] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-2xl group/panel transform-gpu">
          
//           {/* FIX: Reduced blur complexity to ensure high-speed paint cycle on layout changes */}
//           <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-[#C5A86B]/5 rounded-full blur-[60px] pointer-events-none" />
          
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
//             <div className="space-y-4 max-w-2xl">
//               <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-md transform-gpu">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//                 </span>
//                 <span className="text-[9px] font-mono tracking-[0.2em] text-red-400 uppercase font-bold">
//                   Critical Response Grid
//                 </span>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
//                 Dealing with an active emergency pest outbreak?
//               </h3>
//               <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
//                 Our elite rapid London field squads remain on standby 24/7. Immediate dispatch guarantees arrival and deployment initiation within an absolute 2-hour window.
//               </p>
//             </div>

//             <button 
//               onClick={() => navigate("/contact-us")}
//               className="w-full lg:w-auto inline-flex items-center justify-center gap-5 bg-[#C5A86B] hover:bg-[#b39559] text-[#0A2240] font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shrink-0 shadow-lg shadow-[#C5A86B]/10"
//             >
//               <span>Request Urgent Call</span>
//               <div className="w-5 h-5 rounded-md bg-[#0A2240] flex items-center justify-center group-hover/panel:translate-x-1 transition-transform duration-300">
//                 <ArrowRight className="w-3 h-3 text-[#C5A86B]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();

//   const stages = [
//     { num: "01", title: "Site Assessment", text: "Expert inspection to identify hotspots and entry points." },
//     { num: "02", title: "Targeted Treatment", text: "Eco-friendly, precise solutions for fast, effective results." },
//     { num: "03", title: "Prevention Plan", text: "Structural sealing and monitoring to ensure no returns." }
//   ];

//   return (
//     <section className="bg-[#b99547] py-20 text-[#0A2240]">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* Header - Fixed responsive scaling */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
//             Our <br/><span className="text-white">Professional</span> <br/>Process
//           </h2>
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="flex items-center justify-center gap-2 border-2 border-[#0A2240] px-6 py-4 font-black uppercase tracking-[0.1em] hover:bg-[#0A2240] hover:text-white transition-all duration-300 shrink-0 text-sm"
//           >
//             Book Inspection <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Process Pillars - Responsive Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stages.map((stage, idx) => (
//             <div key={idx} className="relative flex flex-col p-8 border border-[#0A2240]/20 hover:bg-[#0A2240] group transition-colors duration-500">
//               <span className="text-6xl font-black text-[#0A2240]/20 group-hover:text-[#b99547]/30 transition-colors mb-8 block">
//                 {stage.num}
//               </span>
//               <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">
//                 {stage.title}
//               </h3>
//               <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed text-sm">
//                 {stage.text}
//               </p>
//               <div className="mt-8 w-full h-[2px] bg-[#0A2240]/20 group-hover:bg-[#b99547] transition-colors" />
//             </div>
//           ))}
//         </div>

//         {/* Emergency Footnote */}
//         <div className="mt-16 p-8 lg:p-12 bg-[#0A2240] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
//           <div className="max-w-xl">
//             <h4 className="text-xl font-black uppercase tracking-tight mb-2">Need Immediate Help?</h4>
//             <p className="text-white/60 text-sm">Our rapid response units are on standby 24/7 for high-priority containment.</p>
            
//             <button 
//                 onClick={() => navigate("/contact-us")}
//                 className="mt-4 flex items-center gap-2 text-[#b99547] font-bold uppercase tracking-widest hover:text-white transition-all text-xs"
//             >
//                 Book Inspection Now <ArrowUpRight className="w-3 h-3" />
//             </button>
//           </div>
          
//           <div className="flex items-center gap-4 border-l border-white/20 pl-8">
//              <div className="text-4xl font-black tracking-tighter">2h</div>
//              <div className="text-sm font-bold text-white/50 uppercase">Response <br/>Time</div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }







// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ClipboardList,
//   ScanSearch,
//   ShieldCheck,
//   Phone,
//   Check,
// } from "lucide-react";

// const stages = [
//   {
//     number: "01",
//     label: "Start Here",
//     title: "Tell Us What's Happening",
//     description:
//       "Whether you have noticed scratching sounds, insect activity or signs of an infestation, share the details of your concern so we can understand what assistance you need.",
//     icon: ClipboardList,
//     details: ["Describe the pest issue", "Share your property location"],
//   },
//   {
//     number: "02",
//     label: "Understand the Problem",
//     title: "Assess the Situation",
//     description:
//       "A careful assessment helps identify the pest involved, potential sources of activity and the most appropriate next steps for your home or business.",
//     icon: ScanSearch,
//     details: ["Identify potential problem areas", "Discuss suitable treatment options"],
//   },
//   {
//     number: "03",
//     label: "Move Forward",
//     title: "A Considered Solution",
//     description:
//       "We focus on appropriate pest management measures and practical prevention advice, helping you make informed decisions about protecting your property.",
//     icon: ShieldCheck,
//     details: ["Targeted pest management", "Practical prevention guidance"],
//   },
// ];

// export default function PesSaveProcessSection() {
//   return (
//     <section
//       id="our-process"
//       aria-labelledby="process-heading"
//       className="relative isolate overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Decorative background */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//       >
//         <div className="absolute -left-48 top-0 h-[550px] w-[550px] rounded-full border border-[#B99547]/15" />
//         <div className="absolute -left-32 top-16 h-[400px] w-[400px] rounded-full border border-[#B99547]/10" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Header */}
//         <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
//           <div>
//             <div className="mb-7 flex items-center gap-4">
//               <span className="h-px w-11 bg-[#B99547]" />
//               <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#96733B]">
//                 How We Work
//               </span>
//             </div>

//             <h2
//               id="process-heading"
//               className="max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.03] tracking-[-0.065em] text-[#0A2240]"
//             >
//               A simpler way
//               <br />
//               to find{" "}
//               <span className="font-serif font-normal italic text-[#B99547]">
//                 a solution.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-3">
//             <p className="max-w-md text-base leading-8 text-[#526071]">
//               Dealing with pests can be stressful. At QuickShield
//               Services Notting Hill, we aim to make the process
//               straightforward, from your first enquiry to discussing
//               suitable pest control options for your property.
//             </p>

//             <Link
//               to="/contact-us"
//               className="group mt-7 inline-flex items-center gap-3 border-b border-[#B99547] pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0A2240] transition-colors duration-300 hover:text-[#96733B]"
//             >
//               Request an inspection
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="relative mt-16 sm:mt-20 lg:mt-28">
//           {/* Desktop connecting line */}
//           <div
//             aria-hidden="true"
//             className="absolute left-0 right-0 top-[34px] hidden h-px bg-[#B99547]/45 lg:block"
//           />

//           <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
//             {stages.map((stage, index) => {
//               const Icon = stage.icon;

//               return (
//                 <article
//                   key={stage.number}
//                   className="group relative"
//                 >
//                   {/* Timeline marker */}
//                   <div className="relative z-10 mb-9 flex items-center gap-5 lg:mb-12">
//                     <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#B99547] bg-[#F7F5F0] text-[#0A2240] shadow-[0_0_0_8px_#F7F5F0] transition-all duration-300 group-hover:bg-[#0A2240] group-hover:text-[#D8BA7C]">
//                       <Icon size={25} strokeWidth={1.5} />
//                     </div>

//                     <div className="lg:hidden">
//                       <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#96733B]">
//                         Step {stage.number}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Number */}
//                   <div className="flex items-center gap-4">
//                     <span className="font-serif text-5xl italic leading-none text-[#B99547] sm:text-6xl">
//                       {stage.number}
//                     </span>

//                     <div className="h-px flex-1 bg-[#0A2240]/15" />
//                   </div>

//                   {/* Content */}
//                   <div className="mt-7">
//                     <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#96733B]">
//                       {stage.label}
//                     </span>

//                     <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#0A2240] sm:text-3xl">
//                       {stage.title}
//                     </h3>

//                     <p className="mt-5 max-w-sm text-sm leading-7 text-[#5B6675] sm:text-base sm:leading-8">
//                       {stage.description}
//                     </p>

//                     {/* Detail list */}
//                     <div className="mt-8 space-y-4 border-t border-[#0A2240]/10 pt-6">
//                       {stage.details.map((detail) => (
//                         <div
//                           key={detail}
//                           className="flex items-start gap-3"
//                         >
//                           <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B99547]/15 text-[#96733B]">
//                             <Check size={12} strokeWidth={2.5} />
//                           </div>

//                           <span className="text-sm font-medium text-[#0A2240]/80">
//                             {detail}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Mobile separator */}
//                   {index !== stages.length - 1 && (
//                     <div className="mt-12 h-px bg-[#B99547]/30 lg:hidden" />
//                   )}
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom Consultation Banner */}
//         <div className="relative mt-20 overflow-hidden rounded-[24px] bg-[#0A2240] p-7 sm:rounded-[32px] sm:p-10 lg:mt-28 lg:p-14">
//           {/* Decorative rings */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-28 -top-44 h-[430px] w-[430px] rounded-full border border-[#B99547]/25"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-16 -top-32 h-[330px] w-[330px] rounded-full border border-[#B99547]/15"
//           />

//           <div className="relative z-10 flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
//             <div className="max-w-2xl">
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#B99547]" />
//                 <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8BA7C]">
//                   Ready to Take the Next Step?
//                 </span>
//               </div>

//               <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
//                 Your property deserves
//                 <br />
//                 <span className="font-serif font-normal italic text-[#D8BA7C]">
//                   thoughtful care.
//                 </span>
//               </h3>

//               <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
//                 Contact QuickShield Services Notting Hill to discuss
//                 your pest concern and the next steps available.
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#B99547] px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-colors duration-300 hover:bg-white"
//               >
//                 Get in Touch
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>

//               <a
//                 href="tel:+447417502611"
//                 className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#D8BA7C]"
//               >
//                 <Phone size={16} />
//                 Call QuickShield
//                 <ArrowRight size={16} />
//               </a>
//             </div>
//           </div>
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
  ClipboardList,
  ScanSearch,
  ShieldCheck,
  Phone,
  Check,
  MoveUpRight,
  MapPin,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   PROCESS JOURNEY — PREMIUM EDITORIAL EDITION

   Background: #F7F5EF
   Navy:       #0A2240
   Gold:       #B99547

   React + Tailwind CSS + React Router + Lucide
========================================================== */

const PHONE = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";

const stages = [
  {
    number: "01",
    label: "THE FIRST CONVERSATION",
    title: "Tell us",
    highlight: "what's happening.",
    description:
      "Noticed scratching sounds, insect activity or something unusual around your property? Share the details with QuickShield Services Wimbledon so we can better understand your concern.",
    icon: ClipboardList,
    details: [
      "Describe the signs you have noticed",
      "Share your property location",
    ],
    sideLabel: "INITIAL ENQUIRY",
  },
  {
    number: "02",
    label: "UNDERSTANDING THE PROPERTY",
    title: "Look beyond",
    highlight: "the obvious.",
    description:
      "Understanding the pest involved, the affected areas and possible contributing conditions helps inform a suitable response for your home or business.",
    icon: ScanSearch,
    details: [
      "Consider potential problem areas",
      "Discuss appropriate control options",
    ],
    sideLabel: "PROPERTY ASSESSMENT",
  },
  {
    number: "03",
    label: "THE WAY FORWARD",
    title: "Move ahead",
    highlight: "with clarity.",
    description:
      "The next step may involve targeted pest management, treatment recommendations or practical prevention guidance, depending on the situation and property conditions.",
    icon: ShieldCheck,
    details: [
      "Consider suitable pest management",
      "Explore practical prevention measures",
    ],
    sideLabel: "CONTROL & PREVENTION",
  },
];

export default function PesSaveProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-qsw-journey-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("qsw-journey-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "qsw-journey-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 60px 0px",
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
      id="our-process"
      aria-labelledby="process-heading"
      className="qsw-journey relative isolate overflow-hidden bg-[#F7F5EF] text-[#0A2240]"
    >
      <style>{`
        .qsw-journey .qsw-journey-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 850ms cubic-bezier(.2,.75,.2,1),
            transform 850ms cubic-bezier(.2,.75,.2,1);
        }

        .qsw-journey .qsw-journey-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes qsw-journey-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .qsw-journey .qsw-journey-floating {
          animation: qsw-journey-float
            7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-journey .qsw-journey-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .qsw-journey .qsw-journey-floating {
            animation: none;
          }
        }
      `}</style>

      {/* ======================================================
          ARCHITECTURAL BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                #0A2240 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                #0A2240 1px,
                transparent 1px
              )
            `,
            backgroundSize: "110px 110px",
          }}
        />

        <div className="absolute -left-40 top-24 h-[550px] w-[550px] rounded-full border border-[#B99547]/20" />

        <div className="absolute -left-24 top-40 h-[420px] w-[420px] rounded-full border border-[#B99547]/15" />

        <span className="absolute -right-12 top-[30%] select-none text-[35vw] font-black leading-none tracking-[-0.1em] text-[#0A2240]/[0.025]">
          Q
        </span>
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-40">

        <div
          data-qsw-journey-reveal
          className="qsw-journey-reveal"
        >

          {/* Eyebrow */}

          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/15 pb-7">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#98763A]">
                How We Work
              </span>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0A2240]/45">
              QuickShield Services Wimbledon
            </span>
          </div>

          {/* Main heading */}

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

            <div>
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98763A]">
                From Enquiry to Next Steps
              </p>

              <h2
                id="process-heading"
                className="max-w-[1000px] text-[clamp(3.2rem,6.5vw,7.5rem)] font-medium uppercase leading-[0.94] tracking-[-0.075em]"
              >
                THREE
                <span className="block">
                  CONSIDERED
                </span>
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  stages.
                </span>
              </h2>
            </div>

            <div className="lg:pb-3">
              <div className="mb-7 h-[2px] w-20 bg-[#B99547]" />

              <p className="max-w-[450px] text-[15px] leading-8 text-[#0A2240]/65 sm:text-base">
                Pest concerns can feel disruptive.
                Our approach is designed around
                understanding the situation,
                considering suitable options and
                discussing practical next steps
                for your property.
              </p>

              <Link
                to="/contact-us"
                className="group mt-8 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] transition-colors hover:text-[#98763A]"
              >
                Start an Enquiry

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          THREE STAGE JOURNEY
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* Connecting line */}

        <div
          aria-hidden="true"
          className="absolute left-6 right-6 top-[50px] hidden h-px bg-[#B99547]/45 sm:left-10 sm:right-10 lg:left-16 lg:right-16 lg:block"
        />

        <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-6">

          {stages.map((stage, index) => {
            const Icon = stage.icon;

            const dark = index === 1;

            return (
              <article
                key={stage.number}
                data-qsw-journey-reveal
                className="qsw-journey-reveal group relative"
                style={{
                  transitionDelay: `${index * 110}ms`,
                }}
              >

                {/* ==========================================
                    TIMELINE MARKER
                ========================================== */}

                <div className="relative z-10 mb-9 hidden h-[100px] items-start lg:flex">

                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#B99547] bg-[#F7F5EF] shadow-[0_0_0_10px_#F7F5EF]">

                    <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#0A2240] text-[#B99547] transition-transform duration-500 group-hover:rotate-12">
                      <Icon
                        size={29}
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>
                </div>

                {/* ==========================================
                    EDITORIAL PANEL
                ========================================== */}

                <div
                  className={`relative flex h-full flex-col overflow-hidden px-7 pb-10 pt-9 sm:px-9 sm:pb-12 sm:pt-11 lg:min-h-[560px] ${
                    dark
                      ? "bg-[#0A2240] text-[#F7F5EF]"
                      : "border border-[#0A2240]/15 bg-[#F7F5EF] text-[#0A2240]"
                  }`}
                >

                  {/* Top label */}

                  <div className="relative z-10 flex items-center justify-between gap-4">

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                        dark
                          ? "text-[#B99547]"
                          : "text-[#98763A]"
                      }`}
                    >
                      {stage.label}
                    </span>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                        dark
                          ? "text-white/40"
                          : "text-[#0A2240]/40"
                      }`}
                    >
                      QS / SW19
                    </span>
                  </div>

                  {/* Oversized number */}

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-4 top-5 select-none font-serif text-[190px] italic leading-none tracking-[-0.12em] ${
                      dark
                        ? "text-white/[0.04]"
                        : "text-[#0A2240]/[0.035]"
                    }`}
                  >
                    {stage.number}
                  </span>

                  {/* Icon for mobile */}

                  <div className="relative mt-10 flex h-14 w-14 items-center justify-center border border-[#B99547]/60 text-[#B99547] lg:hidden">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Main number */}

                  <span className="relative mt-10 block font-serif text-[clamp(4rem,6vw,7rem)] italic leading-none tracking-[-0.1em] text-[#B99547]">
                    {stage.number}
                  </span>

                  {/* Heading */}

                  <h3 className="relative mt-8 text-[clamp(2rem,2.7vw,3.3rem)] font-medium leading-[1.05] tracking-[-0.06em]">
                    {stage.title}

                    <span className="block font-serif font-normal italic text-[#B99547]">
                      {stage.highlight}
                    </span>
                  </h3>

                  {/* Description */}

                  <p
                    className={`relative mt-7 max-w-[420px] text-[14px] leading-8 ${
                      dark
                        ? "text-white/65"
                        : "text-[#0A2240]/65"
                    }`}
                  >
                    {stage.description}
                  </p>

                  {/* Details */}

                  <div
                    className={`relative mt-auto space-y-4 border-t pt-8 ${
                      dark
                        ? "border-white/20"
                        : "border-[#0A2240]/15"
                    }`}
                    style={{
                      marginTop: "36px",
                    }}
                  >
                    {stage.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#B99547] text-[#0A2240]">
                          <Check
                            size={13}
                            strokeWidth={2.5}
                          />
                        </span>

                        <span
                          className={`text-[13px] font-medium leading-6 ${
                            dark
                              ? "text-white/75"
                              : "text-[#0A2240]/75"
                          }`}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom metadata */}

                  <div
                    className={`relative mt-9 flex items-center justify-between gap-4 border-t pt-5 ${
                      dark
                        ? "border-white/15"
                        : "border-[#0A2240]/15"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                        dark
                          ? "text-white/45"
                          : "text-[#0A2240]/45"
                      }`}
                    >
                      {stage.sideLabel}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#B99547] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ======================================================
          FINAL CONSULTATION SECTION
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 lg:px-16 lg:pb-40 lg:pt-28">

        <div
          data-qsw-journey-reveal
          className="qsw-journey-reveal relative overflow-hidden bg-[#0A2240] text-[#F7F5EF]"
        >

          {/* Decorative background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-36 -top-40 h-[520px] w-[520px] rounded-full border border-[#B99547]/20" />

            <div className="absolute -right-20 -top-24 h-[400px] w-[400px] rounded-full border border-[#B99547]/15" />

            <span className="absolute -bottom-20 right-10 select-none font-serif text-[240px] italic leading-none text-white/[0.035]">
              Q
            </span>
          </div>

          {/* CTA content */}

          <div className="relative grid gap-12 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-16 lg:py-20">

            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#B99547]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                  Ready to Discuss Your Property?
                </span>
              </div>

              <h3 className="max-w-[850px] text-[clamp(2.5rem,4.8vw,5.4rem)] font-medium leading-[1.03] tracking-[-0.065em]">
                A clearer next step
                <span className="block font-serif font-normal italic text-[#B99547]">
                  begins with a conversation.
                </span>
              </h3>

              <p className="mt-7 max-w-[570px] text-[15px] leading-8 text-white/60">
                Contact QuickShield Services Wimbledon
                to discuss your pest concern and
                explore suitable next steps for your
                home or business.
              </p>
            </div>

            <div className="flex flex-col gap-4">

              <Link
                to="/contact-us"
                className="group inline-flex min-h-[62px] items-center justify-between gap-9 bg-[#B99547] px-7 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F7F5EF]"
              >
                Get In Touch

                <MoveUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={PHONE_LINK}
                className="group inline-flex min-h-[62px] items-center justify-between gap-7 border border-white/25 px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#B99547]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={17} />

                  {PHONE}
                </span>

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Bottom location strip */}

          <div className="relative flex flex-wrap items-center justify-between gap-5 border-t border-white/15 px-8 py-6 sm:px-12 lg:px-16">

            <div className="flex items-center gap-3">
              <MapPin
                size={17}
                className="text-[#B99547]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                3 Thornton Rd, London SW19 4NB
              </span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B99547]">
              QuickShield Services Wimbledon
            </span>
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-[#B99547]" />
    </section>
  );
}
