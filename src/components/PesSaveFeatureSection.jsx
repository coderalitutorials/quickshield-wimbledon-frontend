// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Leaf,
//   Zap,
// } from "lucide-react";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();
//   const [activeFeature, setActiveFeature] = useState(null);

//   const features = [
//     {
//       id: "01",
//       title: "Certified Team",
//       desc: "Client-oriented, fully trained and certified local pest experts operating with strict premium standards.",
//       icon: ShieldCheck,
//     },
//     {
//       id: "02",
//       title: "Eco Formulations",
//       desc: "Premium, target-specific and completely safe treatment compounds safe for families and properties.",
//       icon: Leaf,
//     },
//     {
//       id: "03",
//       title: "Total Safety",
//       desc: "Complete long-term property protection, restriction protocols, and total clinical peace of mind.",
//       icon: Zap,
//     },
//   ];

//   return (
//     <section className="relative py-24 md:py-36 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 group/section isolate backface-hidden">
      
//       {/* Background Image Layer — Hardware accelerated */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         <img
//           src="/images/moth-control.webp"
//           alt="Professional treatment context background"
//           className="w-full h-full object-cover object-center opacity-100 contrast-[1.05] brightness-[0.85]"
//           loading="lazy"
//         />
//         {/* Precise fading gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#C5A86B] via-[#C5A86B]/60 to-transparent w-full lg:w-[60%]" />
//       </div>

//       {/* Luxury Minimalist Pattern Overlay */}
//       <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#0A2240_1px,transparent_1px),linear-gradient(to_bottom,#0A2240_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* LEFT SIDE: Luxury Copywriting Block */}
//           {/* FIX: Removed complex nested classes from sticky wrapper to ensure low paint complexity */}
//           <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-12 transform-gpu">
//             <div className="inline-flex items-center gap-2.5 bg-[#0A2240] border border-white/10 px-4 py-1.5 rounded-md shadow-md">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//               <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//                 Operational Quality
//               </span>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2240] uppercase leading-none drop-shadow-sm">
//                 Complete <br /> Eradication <br />
//                 <span className="text-white bg-[#0A2240] px-4 py-1.5 rounded-xl inline-block mt-2">
//                   Guaranteed
//                 </span>
//               </h2>

//               <p className="text-[#0A2240] text-sm md:text-base leading-relaxed font-bold max-w-md drop-shadow-sm">
//                 Our specialized London technicians deploy targeted eco-certified 
//                 systems to neutralize pests permanently. We focus on long-term preventive 
//                 restriction protocols so your property remains immaculate.
//               </p>
//             </div>

//             {/* CTA Button Link */}
//             <div className="pt-4">
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center gap-5 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/20"
//               >
//                 <span>Secure Protection Hub</span>
//                 <div className="w-5 h-5 rounded-md bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                   <ArrowRight className="w-3 h-3 text-[#0A2240]" strokeWidth={3} />
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Premium Deep Navy Asymmetric Feature Stack */}
//           <div className="lg:col-span-7 space-y-4 w-full transform-gpu">
//             {features.map((feat, idx) => {
//               const FeatIcon = feat.icon;
//               const isSelected = activeFeature === idx;

//               return (
//                 <div
//                   key={feat.id}
//                   onMouseEnter={() => setActiveFeature(idx)}
//                   onMouseLeave={() => setActiveFeature(null)}
//                   // FIX: Replaced transition-all with explicit transform/colors. Replaced backdrop-blur with full opaque solid to protect framerate.
//                   className={`group/item relative p-8 rounded-[24px] border transition-[transform,background-color,border-color,shadow] duration-300 cursor-default flex flex-col sm:flex-row sm:items-center justify-between gap-6 transform-gpu will-change-transform ${
//                     isSelected 
//                       ? "bg-[#0A2240] border-[#C5A86B] shadow-2xl shadow-black/40 translate-x-1.5" 
//                       : "bg-[#0A2240]/98 border-transparent shadow-xl"
//                   }`}
//                 >
//                   <div className="flex items-start gap-6 relative z-10 max-w-xl">
//                     {/* Icon Dynamic Frame */}
//                     <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-300 shrink-0 ${
//                       isSelected 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent scale-105" 
//                         : "bg-white/5 text-[#C5A86B] border-white/10"
//                     }`}>
//                       <FeatIcon className="w-6 h-6" strokeWidth={1.8} />
//                     </div>

//                     {/* Typography Content */}
//                     <div className="space-y-1.5">
//                       <h3 className="text-lg font-black text-white uppercase tracking-wide">
//                         {feat.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors duration-200">
//                         {feat.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Index Number Asset */}
//                   <div className="relative z-10 flex items-center justify-end shrink-0 self-end sm:self-center">
//                     <span className={`font-mono text-xs font-black tracking-widest transition-[transform,color] duration-300 ${
//                       isSelected ? "text-[#C5A86B] scale-105" : "text-white/40"
//                     }`}>
//                       [{feat.id}]
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-32 px-6 lg:px-20 relative overflow-hidden">
//       {/* Background Graphic Element */}
//       <div className="absolute top-0 right-0 w-[800px] h-full bg-[#0A2240] -skew-x-12 translate-x-1/2 opacity-10" />

//       <div className="max-w-[1600px] mx-auto relative z-10">
        
//         {/* Top Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
//           <div className="max-w-2xl">
//             <h4 className="text-[#0A2240] font-black uppercase tracking-[0.3em] text-sm mb-6 underline underline-offset-8">The QuickShield Doctrine</h4>
//             <h2 className="text-[5rem] lg:text-[8rem] font-black text-white uppercase leading-[0.8] tracking-tighter">
//               Elite <span className="text-[#0A2240]">Tactical</span> <br/> Defense
//             </h2>
//           </div>
//           <div className="md:w-1/3">
//             <p className="text-[#0A2240] font-bold text-lg leading-relaxed border-l-2 border-[#0A2240] pl-8">
//               We do not just eliminate threats; we architect environments that are inherently impenetrable. Clinical, calculated, and absolute.
//             </p>
//           </div>
//         </div>

//         {/* The Unique "Sectional Strip" Layout */}
//         <div className="flex flex-col lg:flex-row gap-0 border-t border-[#0A2240]">
          
//           {/* Item 01 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">01</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Bio-Secure Barrier</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">High-density sealing protocols that harden your infrastructure against all biological incursions.</p>
//           </div>

//           {/* Item 02 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">02</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Surgical Neutralization</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Direct-action measures that isolate and eradicate colonies at the microscopic source level.</p>
//           </div>

//           {/* Item 03 */}
//           <div className="flex-1 p-12 group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">03</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Dynamic Vigilance</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Constant, automated oversight systems ensuring zero-gap protection for your high-value assets.</p>
//           </div>

//         </div>

//         {/* Bottom CTA Action */}
//         <div className="mt-20">
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="px-12 py-6 bg-[#0A2240] text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all duration-500"
//           >
//             Initiate Security Consultation
//           </button>
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
//   SearchCheck,
//   ShieldCheck,
//   House,
//   PhoneCall,
// } from "lucide-react";

// const features = [
//   {
//     number: "01",
//     icon: SearchCheck,
//     title: "A Closer Look",
//     subtitle: "Careful Property Assessment",
//     description:
//       "Every property has its own challenges. We focus on understanding the signs of pest activity, identifying potential entry points and recommending an appropriate response.",
//   },
//   {
//     number: "02",
//     icon: ShieldCheck,
//     title: "Considered Solutions",
//     subtitle: "Targeted Pest Management",
//     description:
//       "From rodents and insects to other unwanted visitors, our approach focuses on practical treatment options suited to the pest problem and property conditions.",
//   },
//   {
//     number: "03",
//     icon: House,
//     title: "Looking Beyond Today",
//     subtitle: "Prevention & Practical Guidance",
//     description:
//       "Pest control should consider more than the immediate issue. We provide guidance on proofing, property maintenance and steps that may help reduce future pest activity.",
//   },
// ];

// export default function PesSaveFeatureSection() {
//   return (
//     <section
//       aria-labelledby="quickshield-features-heading"
//       className="relative isolate overflow-hidden bg-[#0A2240] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Background Architectural Details */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="absolute -right-32 -top-48 h-[650px] w-[650px] rounded-full border border-[#B99547]/15" />

//         <div className="absolute -right-16 -top-32 h-[500px] w-[500px] rounded-full border border-[#B99547]/10" />

//         <div className="absolute right-10 top-0 hidden h-full w-px bg-white/5 lg:block" />

//         <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#B99547]/5 blur-[90px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Top Eyebrow */}
//         <div className="mb-14 flex items-center gap-4 lg:mb-20">
//           <span className="h-px w-12 bg-[#B99547]" />

//           <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D8BA7C]">
//             Why QuickShield
//           </span>

//           <span className="ml-auto hidden text-[11px] uppercase tracking-[0.2em] text-white/35 sm:block">
//             Notting Hill, London
//           </span>
//         </div>

//         {/* Main Two-Column Layout */}
//         <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
//           {/* Left Editorial Content */}
//           <div className="lg:sticky lg:top-28 lg:self-start">
//             <div className="mb-8 flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B99547]/40 text-[#D8BA7C]">
//                 <ShieldCheck size={20} strokeWidth={1.5} />
//               </div>

//               <span className="text-xs font-medium tracking-[0.15em] text-white/55">
//                 THE QUICKSHIELD APPROACH
//               </span>
//             </div>

//             <h2
//               id="quickshield-features-heading"
//               className="max-w-xl text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[1.06] tracking-[-0.065em] text-white"
//             >
//               The details
//               <br />
//               make the
//               <br />
//               <span className="font-serif font-normal italic text-[#D8BA7C]">
//                 difference.
//               </span>
//             </h2>

//             <p className="mt-8 max-w-md text-base leading-8 text-white/60">
//               Professional pest control is about understanding the
//               property as well as the problem. At QuickShield Services
//               Notting Hill, we take a considered approach to helping
//               homeowners and businesses address unwanted pests.
//             </p>

//             {/* Location Detail */}
//             <div className="mt-10 flex items-start gap-4 border-l-2 border-[#B99547] pl-5">
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8BA7C]">
//                   Your Local Pest Control Contact
//                 </p>

//                 <p className="mt-2 max-w-sm text-sm leading-7 text-white/65">
//                   Based at 3A Denbigh Rd, London W11 2SJ,
//                   United Kingdom.
//                 </p>
//               </div>
//             </div>

//             {/* Desktop CTA */}
//             <div className="mt-10 hidden lg:block">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex items-center gap-5 rounded-full bg-[#B99547] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//               >
//                 Discuss Your Pest Problem

//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Right Feature Rows */}
//           <div className="border-t border-white/15">
//             {features.map((feature) => {
//               const Icon = feature.icon;

//               return (
//                 <div
//                   key={feature.number}
//                   className="group relative border-b border-white/15 py-9 transition-colors duration-300 sm:py-11"
//                 >
//                   <div className="grid gap-6 sm:grid-cols-[65px_1fr] sm:gap-7">
//                     {/* Number */}
//                     <div className="flex items-center gap-4 sm:items-start">
//                       <span className="font-serif text-3xl italic text-[#B99547]">
//                         {feature.number}
//                       </span>

//                       <span className="h-px w-8 bg-[#B99547]/50 sm:hidden" />
//                     </div>

//                     {/* Feature Content */}
//                     <div>
//                       <div className="mb-5 flex items-center justify-between">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#D8BA7C] transition-all duration-300 group-hover:border-[#B99547] group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
//                           <Icon size={22} strokeWidth={1.5} />
//                         </div>

//                         <ArrowUpRight
//                           size={20}
//                           className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D8BA7C]"
//                         />
//                       </div>

//                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D8BA7C]">
//                         {feature.subtitle}
//                       </span>

//                       <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white transition-colors duration-300 group-hover:text-[#E5CA93] sm:text-4xl">
//                         {feature.title}
//                       </h3>

//                       <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom Contact Strip */}
//         <div className="mt-16 flex flex-col gap-7 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8BA7C]">
//               Speak With QuickShield
//             </p>

//             <a
//               href="tel:+447417502611"
//               className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#D8BA7C] sm:text-3xl"
//             >
//               <PhoneCall
//                 size={21}
//                 className="text-[#B99547]"
//               />
//               +44 7417 502611
//             </a>
//           </div>

//           <Link
//             to="/contact-us"
//             className="group inline-flex w-fit items-center gap-4 border-b border-[#B99547] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#D8BA7C]"
//           >
//             Request a Callback

//             <ArrowRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-2"
//             />
//           </Link>
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
  SearchCheck,
  ShieldCheck,
  House,
  PhoneCall,
  MapPin,
  MoveUpRight,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   WHY QUICKSHIELD — LUXURY EDITORIAL MANIFESTO

   Background: #F7F5EF
   Navy:       #0A2240
   Gold:       #B99547

   React + Tailwind CSS + Lucide + React Router
========================================================== */

const PHONE = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";

const features = [
  {
    number: "01",
    icon: SearchCheck,
    eyebrow: "PROPERTY UNDERSTANDING",
    title: "We look",
    highlight: "closer.",
    description:
      "No two properties face exactly the same pest concerns. Understanding the signs of activity, the surrounding environment and possible access points helps shape a more considered response.",
    footer: "ASSESSMENT / IDENTIFICATION",
  },
  {
    number: "02",
    icon: ShieldCheck,
    eyebrow: "PRACTICAL PEST MANAGEMENT",
    title: "We think",
    highlight: "carefully.",
    description:
      "From rodents and insects to other unwanted pests, the right approach depends on the situation. We focus on discussing suitable treatment and control options for the pest and property involved.",
    footer: "CONTROL / TREATMENT",
  },
  {
    number: "03",
    icon: House,
    eyebrow: "LONGER-TERM PROPERTY CARE",
    title: "We look",
    highlight: "ahead.",
    description:
      "Addressing pest activity is only part of the conversation. Where appropriate, practical proofing guidance and preventative measures can help reduce opportunities for pests to return.",
    footer: "PREVENTION / GUIDANCE",
  },
];

export default function PesSaveFeatureSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-qsw-feature-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("qsw-feature-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "qsw-feature-visible"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 50px 0px",
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
      aria-labelledby="qsw-features-heading"
      className="qsw-features relative isolate overflow-hidden bg-[#F7F5EF] text-[#0A2240]"
    >
      <style>{`
        .qsw-features .qsw-feature-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 850ms cubic-bezier(.2,.75,.2,1),
            transform 850ms cubic-bezier(.2,.75,.2,1);
        }

        .qsw-features .qsw-feature-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-features .qsw-feature-reveal {
            opacity: 1;
            transform: none;
            transition: none;
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
            backgroundSize: "100px 100px",
          }}
        />

        <span className="absolute -right-12 top-[10%] select-none text-[32vw] font-black leading-none tracking-[-0.1em] text-[#0A2240]/[0.025]">
          Q
        </span>

        <div className="absolute -left-28 top-[20%] h-[450px] w-[450px] rounded-full border border-[#B99547]/20" />

        <div className="absolute -left-16 top-[23%] h-[330px] w-[330px] rounded-full border border-[#B99547]/15" />
      </div>

      {/* ======================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-40">

        <div
          data-qsw-feature-reveal
          className="qsw-feature-reveal"
        >

          {/* Eyebrow */}

          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/15 pb-7">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#98763A]">
                Why QuickShield
              </span>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0A2240]/45">
              Wimbledon · London SW19
            </span>
          </div>

          {/* Main heading */}

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">

            <div>
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98763A]">
                The Thinking Behind Our Work
              </p>

              <h2
                id="qsw-features-heading"
                className="max-w-[1000px] text-[clamp(3.3rem,7vw,8rem)] font-medium uppercase leading-[0.94] tracking-[-0.075em]"
              >
                IT'S THE
                <span className="block">
                  DETAILS
                </span>
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  that matter.
                </span>
              </h2>
            </div>

            <div className="lg:pb-3">
              <div className="mb-7 h-[2px] w-20 bg-[#B99547]" />

              <p className="max-w-[440px] text-[15px] leading-8 text-[#0A2240]/65 sm:text-base">
                Pest control is not simply about
                addressing what is visible. At
                QuickShield Services Wimbledon,
                our focus is on understanding the
                property, considering suitable
                solutions and helping customers
                think about prevention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          EDITORIAL FEATURE PANELS
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isMiddle = index === 1;

          return (
            <div
              key={feature.number}
              data-qsw-feature-reveal
              className={`qsw-feature-reveal group relative overflow-hidden border-t border-[#0A2240]/15 ${
                isMiddle
                  ? "bg-[#0A2240] text-[#F7F5EF]"
                  : "text-[#0A2240]"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >

              {/* Decorative number watermark */}

              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-5 -top-14 select-none font-serif text-[190px] italic leading-none tracking-[-0.1em] sm:text-[270px] ${
                  isMiddle
                    ? "text-white/[0.035]"
                    : "text-[#0A2240]/[0.035]"
                }`}
              >
                {feature.number}
              </span>

              {/* Panel content */}

              <div className="relative grid gap-10 px-0 py-12 sm:py-16 lg:grid-cols-[0.42fr_1fr_0.85fr] lg:items-center lg:gap-12 lg:py-20">

                {/* LEFT INDEX */}

                <div
                  className={`flex items-center gap-5 ${
                    isMiddle
                      ? "px-7 sm:px-12 lg:px-0 lg:pl-12"
                      : ""
                  }`}
                >
                  <span className="font-serif text-[clamp(4rem,7vw,7rem)] italic leading-none text-[#B99547]">
                    {feature.number}
                  </span>

                  <div className="h-px w-12 bg-[#B99547]/70" />
                </div>

                {/* CENTER HEADING */}

                <div
                  className={
                    isMiddle
                      ? "px-7 sm:px-12 lg:px-0"
                      : ""
                  }
                >
                  <div className="mb-6 flex items-center gap-4">

                    <span
                      className={`flex h-12 w-12 items-center justify-center border ${
                        isMiddle
                          ? "border-[#B99547]/50 text-[#B99547]"
                          : "border-[#B99547]/60 text-[#98763A]"
                      }`}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                      />
                    </span>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                        isMiddle
                          ? "text-[#B99547]"
                          : "text-[#98763A]"
                      }`}
                    >
                      {feature.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-[clamp(2.6rem,4.5vw,5.3rem)] font-medium leading-[1.02] tracking-[-0.07em]">
                    {feature.title}

                    <span className="block font-serif font-normal italic text-[#B99547]">
                      {feature.highlight}
                    </span>
                  </h3>
                </div>

                {/* RIGHT DESCRIPTION */}

                <div
                  className={`${
                    isMiddle
                      ? "px-7 sm:px-12 lg:px-0 lg:pr-12"
                      : ""
                  }`}
                >
                  <p
                    className={`max-w-[440px] text-[15px] leading-8 ${
                      isMiddle
                        ? "text-white/65"
                        : "text-[#0A2240]/65"
                    }`}
                  >
                    {feature.description}
                  </p>

                  <div
                    className={`mt-8 flex items-center gap-4 border-t pt-5 ${
                      isMiddle
                        ? "border-white/15"
                        : "border-[#0A2240]/15"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 bg-[#B99547]" />

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                        isMiddle
                          ? "text-white/50"
                          : "text-[#0A2240]/50"
                      }`}
                    >
                      {feature.footer}
                    </span>

                    <MoveUpRight
                      size={18}
                      className="ml-auto text-[#B99547] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom gold hover line */}

              <div className="h-[2px] w-0 bg-[#B99547] transition-all duration-700 group-hover:w-full" />
            </div>
          );
        })}
      </div>

      {/* ======================================================
          LOCAL CONTACT SECTION
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-28">

        <div
          data-qsw-feature-reveal
          className="qsw-feature-reveal grid gap-12 border-t border-[#0A2240]/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >

          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#98763A]">
                Your Local Pest Control Contact
              </span>
            </div>

            <h3 className="max-w-[850px] text-[clamp(2.4rem,4.5vw,5rem)] font-medium leading-[1.05] tracking-[-0.065em]">
              A conversation can be
              <span className="block font-serif font-normal italic text-[#B99547]">
                the first step.
              </span>
            </h3>

            <div className="mt-8 flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#B99547]"
              />

              <p className="text-sm leading-7 text-[#0A2240]/60">
                3 Thornton Rd, London SW19 4NB,
                United Kingdom
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">

            <a
              href={PHONE_LINK}
              className="group inline-flex items-center gap-4 text-xl font-medium tracking-tight transition-colors hover:text-[#98763A] sm:text-2xl"
            >
              <PhoneCall
                size={22}
                className="text-[#B99547]"
              />

              {PHONE}
            </a>

            <Link
              to="/contact-us"
              className="group inline-flex min-h-[60px] items-center justify-between gap-10 bg-[#0A2240] px-7 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#F7F5EF] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              Discuss Your Pest Concern

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-[#B99547]" />
    </section>
  );
}

