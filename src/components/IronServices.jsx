

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Sparkles,
//   Crosshair,
//   ArrowUpRight,
//   ChevronRight,
// } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Mice & Rats",
//       details:
//         "Complete removal of mice and rats from your property. We use safe baiting systems and seal up all holes, cracks, and entry points to stop them from coming back inside.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Wasp Removal",
//       details:
//         "Fast and professional treatment to safely remove active wasp nests from your loft, walls, or garden areas. Our local team responds quickly.",
//     },
//     {
//       id: "03",
//       title: "Bed Bug Heat Treatment",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Bed Bugs",
//       details:
//         "Eco-friendly thermal heat treatments that completely kill bed bugs and their eggs in mattresses, furniture, and carpets. Guaranteed results in just a single visit.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modernist Section Header */}
//         <div className="max-w-3xl text-left mb-16 space-y-3">
//           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2240]/70 block">
//             // Core Operational Lines
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//             Emergency <br /> Protection Hub
//           </h2>
//         </div>

//         {/* !!! THE SPLIT-SCREEN CINEMATIC DECK LAYOUT */}
//         <div className="flex flex-col lg:flex-row items-stretch gap-4 h-[600px] lg:h-[550px] w-full transform-gpu">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;
//             const isHovered = hoveredIndex === index;
//             const anyHovered = hoveredIndex !== null;

//             // FIX: Specific layout bounds instead of layout broad transitions to prevent repaint cycles
//             const flexClass = anyHovered 
//               ? isHovered 
//                 ? "lg:flex-[3.5] flex-[2]" 
//                 : "lg:flex-[0.8] flex-[0.5] opacity-40 select-none"
//               : "flex-1";

//             return (
//               <div
//                 key={service.id}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 onClick={() => navigate("/contact-us")}
//                 // FIX: Removed transition-all, optimized with precise cubic-bezier flex-basis and opacity rules
//                 className={`relative rounded-[32px] overflow-hidden bg-[#161b22] text-white p-6 md:p-8 flex flex-col justify-between transition-[flex,opacity,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/10 shadow-xl transform-gpu will-change-[flex-basis,opacity] ${flexClass}`}
//               >
//                 {/* Background Image Layer */}
//                 <div className="absolute inset-0 z-0 transition-transform duration-500 transform-gpu">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     // FIX: Restricted to simple transform/filter transitions to avoid frame drop
//                     className={`w-full h-full object-cover transition-[transform,filter] duration-500 transform-gpu ${
//                       isHovered 
//                         ? "scale-100 grayscale-0 brightness-[0.75] contrast-[1.05]" 
//                         : "scale-105 grayscale-[15%] brightness-[0.4] contrast-100"
//                     }`}
//                   />
                  
//                   {/* METALLIC GOLD MASK OVERLAY */}
//                   <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-[#C5A86B]/30 via-transparent to-transparent pointer-events-none" />
                  
//                   {/* Bottom Text Protector Gradient */}
//                   <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/40 to-transparent pointer-events-none ${
//                     isHovered ? "opacity-60" : "opacity-80"
//                   }`} />
//                 </div>

//                 {/* Top Row: Floating Indicator Status */}
//                 <div className="relative z-10 flex items-center justify-between w-full">
//                   <div className="flex items-center gap-4">
//                     {/* FIX: Swapped transition-all with explicit transform/colors */}
//                     <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-500 ${
//                       isHovered 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent rotate-[360deg]" 
//                         : "bg-[#0A2240]/90 text-[#C5A86B] border-white/20"
//                     }`}>
//                       <Icon className="w-5 h-5" strokeWidth={2} />
//                     </div>
//                     <span className={`font-mono text-xs font-black tracking-widest text-white/90 bg-[#0A2240]/70 px-2 py-0.5 rounded transition-opacity duration-300 ${
//                       anyHovered && !isHovered ? "lg:opacity-0" : "opacity-100"
//                     }`}>
//                       0{service.id}
//                     </span>
//                   </div>

//                   {/* Corner Arrow Indicator */}
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-[transform,background-color,opacity] duration-500 ${
//                     isHovered 
//                       ? "bg-white text-[#0A2240] rotate-45 opacity-100" 
//                       : "bg-[#0A2240]/90 text-white/80 border-white/20 lg:opacity-0"
//                   }`}>
//                     <ArrowUpRight className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* Bottom Row: Content Reveal Engine */}
//                 {/* FIX: Removed backdrop-blur to drop processing latency on mobile layers */}
//                 <div className="relative z-10 w-full space-y-4 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/90 to-transparent p-5 rounded-b-[24px]">
//                   <div className="inline-block px-3 py-1 rounded-md bg-[#0A2240] border border-[#C5A86B]/30 text-[9px] font-mono tracking-widest uppercase text-[#C5A86B]">
//                     {service.tag}
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-sans whitespace-nowrap overflow-hidden text-ellipsis text-white">
//                       {service.title}
//                     </h3>
                    
//                     {/* Height-collapse mechanics */}
//                     {/* FIX: Replaced complex layout auto transitions with smooth visibility/opacity tracking */}
//                     <div className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden transform-gpu ${
//                       isHovered ? "max-h-[150px] opacity-100 pt-1" : "max-h-0 opacity-0 pointer-events-none"
//                     }`}>
//                       <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-200 max-w-xl">
//                         {service.details}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Side Label for Compressed Cards on Desktop */}
//                 {!isHovered && anyHovered && (
//                   <div className="absolute hidden lg:block inset-x-0 bottom-32 text-center pointer-events-none">
//                     <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-[#C5A86B] bg-[#0A2240]/90 border border-[#C5A86B]/20 px-3 py-1 rounded-full rotate-90 inline-block origin-center whitespace-nowrap shadow-md">
//                       View Service
//                     </span>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Global Footer Button */}
//         <div className="text-left md:text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-6 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/10"
//           >
//             <span>View All Services</span>
//             <div className="w-5 h-5 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//               <ChevronRight className="w-3.5 h-3.5 text-[#0A2240]" strokeWidth={3} />
//             </div>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [active, setActive] = useState(0);

//   const services = [
//     { id: "01", title: "Structural Proofing", desc: "Advanced physical fortification for elite estates.", img: "/images/rodents.webp" },
//     { id: "02", title: "Precision Eradication", desc: "Surgical, invisible protocols for total clearance.", img: "/images/wasps.webp" },
//     { id: "03", title: "Heat Treatment", desc: "Thermal mastery for sensitive environments.", img: "/images/bedbugs.webp" }
//   ];

//   return (
//     <section className="bg-[#0A2240] py-32 relative overflow-hidden">
//       {/* Abstract Background Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b99547]/5 rounded-full blur-[150px]" />
      
//       <div className="max-w-[1400px] mx-auto px-12 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-24">
          
//           {/* Left: Interactive Menu */}
//           <div className="flex-1 flex flex-col justify-center">
//             <h3 className="text-[#b99547] font-black tracking-[0.6em] uppercase text-xs mb-10 border-l-2 border-[#b99547] pl-4">Operational Index</h3>
//             {services.map((s, idx) => (
//               <div 
//                 key={idx}
//                 onMouseEnter={() => setActive(idx)}
//                 className="py-10 border-b border-[#b99547]/20 cursor-pointer group"
//               >
//                 <div className={`text-8xl font-black transition-all duration-500 ${active === idx ? "text-[#b99547]" : "text-white/20 group-hover:text-white/40"}`}>
//                   {s.id}
//                 </div>
//                 <h2 className="text-5xl font-black text-white uppercase mt-4 group-hover:pl-6 transition-all duration-500">
//                   {s.title}
//                 </h2>
//               </div>
//             ))}
//           </div>

//           {/* Right: Visual Showcase (CSS Only) */}
//           <div className="flex-1 h-[600px] relative hidden lg:block rounded-[40px] overflow-hidden border border-[#b99547]/20">
//             {services.map((s, idx) => (
//               <div
//                 key={idx}
//                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//               >
//                 <img 
//                   src={s.img} 
//                   className="w-full h-full object-cover" 
//                   alt={s.title} 
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240] via-transparent to-transparent" />
                
//                 {/* Text Description */}
//                 <div className="absolute bottom-10 left-10 p-8">
//                   <p className="text-[#b99547] font-bold text-xl uppercase tracking-widest italic">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rodents.webp",
//       desc: "Impenetrable barriers for estate-wide security."
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, invisible protocols for absolute results."
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-conscious thermal mastery for sensitive environments."
//     }
//   ];

//   return (
//     <section className="bg-[#b99547] py-24">
//       <div className="max-w-[1600px] mx-auto px-6">
        
//         {/* Cinematic Header */}
//         <div className="mb-24">
//           <h2 className="text-[12vw] font-black text-[#0A2240] uppercase leading-[0.8] tracking-tighter">
//             Elite<br/>Protocol
//           </h2>
//         </div>

//         {/* Cinematic Cards */}
//         <div className="flex flex-col gap-2">
//           {services.map((service, idx) => (
//             <div 
//               key={idx}
//               className="relative h-[60vh] w-full flex items-end overflow-hidden border-b border-[#0A2240]/30 group cursor-pointer"
//               onClick={() => navigate("/contact-us")}
//             >
//               {/* Background Image that scales on group hover */}
//               <img 
//                 src={service.image} 
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2000ms] ease-out group-hover:scale-105"
//               />
              
//               {/* Dark Overlay for contrast */}
//               <div className="absolute inset-0 bg-[#0A2240]/40 group-hover:bg-[#0A2240]/20 transition-all duration-500" />

//               {/* Service Details */}
//               <div className="relative z-10 w-full p-12 flex justify-between items-end">
//                 <div>
//                   <span className="text-[#b99547] font-bold tracking-[0.2em] text-sm uppercase mb-2 block">0{idx + 1}</span>
//                   <h3 className="text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     {service.title}
//                   </h3>
//                   <p className="text-white/70 max-w-sm text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 delay-100">
//                     {service.desc}
//                   </p>
//                 </div>

//                 {/* Corner Arrow */}
//                 <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
//                   <ArrowUpRight className="w-8 h-8 text-white group-hover:text-[#0A2240] transition-colors" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rodents.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment."
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation."
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level."
//     }
//   ];

//   return (
//     <section className="bg-[#b99547] py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Unique Header Layout */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
//           <h2 className="text-7xl md:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.8]">
//             Elite <br/><span className="text-white italic">Protocol</span>
//           </h2>
//           <p className="max-w-md text-[#0A2240] font-bold text-lg border-l-4 border-[#0A2240] pl-6">
//             A bespoke approach to pest management. We do not treat properties; we secure assets.
//           </p>
//         </div>

//         {/* Stacked Unique Cards */}
//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div 
//               key={idx}
//               className="group relative h-[450px] w-full overflow-hidden rounded-[40px] flex items-end p-12 transition-all duration-700 hover:h-[500px]"
//             >
//               {/* Background Image */}
//               <img 
//                 src={service.image} 
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/40" />

//               {/* Content Box */}
//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.4em] uppercase text-xs mb-4 block">0{idx + 1} // Service</span>
//                   <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
//                     {service.title}
//                   </h3>
//                 </div>
                
//                 <div className="md:w-1/3">
//                   <p className="text-white/80 font-medium text-lg mb-6 leading-relaxed">
//                     {service.desc}
//                   </p>
//                   <button 
//                     onClick={() => navigate("/contact-us")}
//                     className="flex items-center gap-3 bg-white text-[#0A2240] px-8 py-3 font-black uppercase text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rats.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment.",
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation.",
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level.",
//     },
//   ];

//   return (
//     <section className="bg-[#b99547] py-16 md:py-24 lg:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6 md:gap-12">
//           <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.85]">
//             Elite <br />
//             <span className="text-white italic">Protocol</span>
//           </h2>

//           <p className="max-w-md text-[#0A2240] font-bold text-base md:text-lg border-l-4 border-[#0A2240] pl-5">
//             A bespoke approach to pest management. We do not treat properties;
//             we secure assets.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="group relative min-h-[520px] sm:min-h-[460px] md:h-[450px] w-full overflow-hidden rounded-[28px] md:rounded-[40px] flex items-end p-6 sm:p-8 md:p-12 transition-all duration-700 md:hover:h-[500px]"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-[#0A2240]/65 md:bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/45" />

//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6 md:gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
//                     0{idx + 1} // Service
//                   </span>

//                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <div className="w-full md:w-1/3">
//                   <p className="text-white/85 font-medium text-base md:text-lg mb-5 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#0A2240] px-6 md:px-8 py-3 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: "Structural Proofing",
//       image: "/images/rats.webp",
//       desc: "Advanced physical fortification to ensure your estate remains a sealed, pest-free environment.",
//     },
//     {
//       title: "Precision Eradication",
//       image: "/images/wasps.webp",
//       desc: "Surgical, non-invasive removal protocols ensuring absolute invisibility during operation.",
//     },
//     {
//       title: "Heat Treatment",
//       image: "/images/bedbugs.webp",
//       desc: "Eco-friendly thermal technology to eliminate threats at a microscopic level.",
//     },
//   ];

//   return (
//     <section className="bg-[#b99547] py-16 md:py-24 lg:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6 md:gap-12">
//           <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#0A2240] uppercase tracking-tighter leading-[0.85]">
//             Elite <br />
//             <span className="text-white italic">Protocol</span>
//           </h2>

//           <p className="max-w-md text-[#0A2240] font-bold text-base md:text-lg border-l-4 border-[#0A2240] pl-5">
//             A bespoke approach to pest management. We do not treat properties;
//             we secure assets.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               onClick={() => navigate("/contact-us")}
//               className="group relative min-h-[520px] sm:min-h-[460px] md:h-[450px] w-full overflow-hidden rounded-[28px] md:rounded-[40px] flex items-end p-6 sm:p-8 md:p-12 transition-all duration-700 md:hover:h-[500px] cursor-pointer"
//             >
//               {/* Background Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[#0A2240]/65 md:bg-[#0A2240]/60 transition-colors duration-500 group-hover:bg-[#0A2240]/45" />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6 md:gap-8">
//                 <div>
//                   <span className="text-[#b99547] font-black tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
//                     0{idx + 1} // Service
//                   </span>

//                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <div className="w-full md:w-1/3">
//                   <p className="text-white/85 font-medium text-base md:text-lg mb-5 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/contact-us");
//                     }}
//                     className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#0A2240] px-6 md:px-8 py-3 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#b99547] hover:text-white transition-all"
//                   >
//                     Deploy Specialist
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     subtitle: "Rodent Control",
//     image: "/images/rats.webp",
//     description:
//       "Professional rat and mouse control in Notting Hill, with careful inspection, targeted treatment and practical advice to help reduce future activity.",
//   },
//   {
//     number: "02",
//     title: "Wasp Control",
//     subtitle: "Wasp Nest Treatment",
//     image: "/images/wasps.webp",
//     description:
//       "Professional assessment and treatment of wasp activity around homes and commercial properties in Notting Hill.",
//   },
//   {
//     number: "03",
//     title: "Bed Bug Control",
//     subtitle: "Bedroom Protection",
//     image: "/images/bedbugs.webp",
//     description:
//       "Detailed bed bug inspections and tailored treatment recommendations to help protect your property.",
//   },
// ];

// function ServiceCard({ service, featured = false }) {
//   const cardHeight = featured
//     ? "min-h-[480px] lg:min-h-[680px]"
//     : "min-h-[350px] sm:min-h-[310px] lg:min-h-[324px]";

//   const titleSize = featured
//     ? "text-4xl sm:text-5xl lg:text-[64px]"
//     : "text-3xl sm:text-4xl";

//   return (
//     <Link
//       to="/contact-us"
//       aria-label={"Enquire about " + service.title}
//       className={
//         "group relative isolate block overflow-hidden bg-[#0A2240] rounded-[22px] sm:rounded-[28px] " +
//         cardHeight
//       }
//     >
//       {/* Service Image */}
//       <img
//         src={service.image}
//         alt={service.title + " pest control services in Notting Hill"}
//         loading="lazy"
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
//       />

//       {/* Image Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#07182D] via-[#07182D]/65 to-[#07182D]/10 transition-opacity duration-500 group-hover:opacity-90" />

//       {/* Top Label */}
//       <div className="absolute left-6 top-6 sm:left-8 sm:top-8 flex items-center gap-3">
//         <span className="text-[#E0C48A] text-xs font-bold tracking-[0.2em]">
//           {service.number}
//         </span>

//         <span className="h-px w-8 bg-[#E0C48A]/70" />

//         <span className="text-white/80 text-[10px] font-semibold uppercase tracking-[0.18em]">
//           {service.subtitle}
//         </span>
//       </div>

//       {/* Arrow Icon */}
//       <div className="absolute right-6 top-6 sm:right-8 sm:top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-[#B99547] group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
//         <ArrowUpRight size={20} strokeWidth={1.7} />
//       </div>

//       {/* Bottom Content */}
//       <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
//         <div className="mb-5 h-px w-full bg-white/25" />

//         <h3
//           className={
//             "font-semibold tracking-[-0.045em] leading-[1.08] text-white " +
//             titleSize
//           }
//         >
//           {service.title}
//         </h3>

//         <p
//           className={
//             "mt-4 max-w-md text-white/75 leading-relaxed " +
//             (featured ? "text-sm sm:text-base" : "text-sm")
//           }
//         >
//           {service.description}
//         </p>

//         <div className="mt-6 flex items-center gap-3 text-[#E0C48A]">
//           <span className="text-[11px] font-bold uppercase tracking-[0.17em]">
//             Request a consultation
//           </span>

//           <ArrowRight
//             size={17}
//             className="transition-transform duration-300 group-hover:translate-x-2"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default function PesSaveServices() {
//   return (
//     <section
//       id="featured-services"
//       aria-labelledby="services-heading"
//       className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Decorative Background */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full border border-[#B99547]/15"
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Section Header */}
//         <div className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A793D]">
//                 What We Treat
//               </span>
//             </div>

//             <h2
//               id="services-heading"
//               className="max-w-3xl text-[clamp(2.9rem,6vw,5.8rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#0A2240]"
//             >
//               Every property
//               <br />
//               deserves{" "}
//               <span className="font-serif italic font-normal text-[#B99547]">
//                 peace of mind.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-md text-base leading-8 text-[#536071]">
//               From unwanted rodents to bed bugs and wasp nests,
//               QuickShield Services Notting Hill provides professional
//               pest control solutions for residential and commercial
//               properties in Notting Hill and London.
//             </p>

//             <Link
//               to="/services"
//               className="group mt-7 inline-flex items-center gap-3 border-b border-[#B99547] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0A2240] transition-colors hover:text-[#9A793D]"
//             >
//               Explore all services

//               <MoveUpRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Asymmetric Service Gallery */}
//         <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
//           {/* Featured Large Card */}
//           <ServiceCard service={services[0]} featured />

//           {/* Two Smaller Cards */}
//           <div className="grid gap-5 lg:gap-6">
//             <ServiceCard service={services[1]} />
//             <ServiceCard service={services[2]} />
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 flex flex-col gap-6 border-t border-[#0A2240]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#9A793D]">
//               Need assistance?
//             </span>

//             <p className="mt-2 text-xl font-medium tracking-tight text-[#0A2240] sm:text-2xl">
//               Tell us what is happening at your property.
//             </p>
//           </div>

//           <Link
//             to="/contact-us"
//             className="group inline-flex w-fit items-center justify-center gap-4 rounded-full bg-[#0A2240] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
//           >
//             Get in touch

//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
  MoveUpRight,
  Phone,
  Crosshair,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   FEATURED SERVICES — LUXURY EDITORIAL SHOWCASE

   Background: #F7F5EF
   Navy:       #0A2240
   Gold:       #B99547

   React + Tailwind CSS + React Router + Lucide

   Original image paths preserved.
   All service items link to /contact-us.
========================================================== */

const services = [
  {
    number: "01",
    title: "Rats & Mice",
    subtitle: "Rodent Management",
    image: "/images/rats.webp",
    description:
      "Rodent activity can affect more than the comfort of a property. Our approach focuses on understanding the signs, identifying possible access points and discussing suitable control and prevention measures for homes and businesses in Wimbledon.",
    detail: "INSPECTION / CONTROL / PREVENTION",
  },
  {
    number: "02",
    title: "Wasp Control",
    subtitle: "Wasp Nest Assessment & Treatment",
    image: "/images/wasps.webp",
    description:
      "Wasps around entrances, gardens or roof spaces can quickly become a concern. We help assess the activity and consider appropriate treatment options for the affected area.",
    detail: "ASSESSMENT / TREATMENT / ADVICE",
  },
  {
    number: "03",
    title: "Bed Bug Control",
    subtitle: "Bed Bug Inspection & Treatment",
    image: "/images/bedbugs.webp",
    description:
      "Bed bugs can be difficult to identify and manage without a careful approach. We focus on assessing the signs, understanding the affected areas and considering suitable treatment recommendations.",
    detail: "IDENTIFICATION / TREATMENT / GUIDANCE",
  },
];

/* ==========================================================
   REVEAL HOOK
========================================================== */

function useSectionReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-qsw-service-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("qsw-service-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "qsw-service-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 50px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

/* ==========================================================
   EDITORIAL SERVICE ROW
========================================================== */

function EditorialService({ service, index }) {
  const reverse = index % 2 === 1;

  return (
    <Link
      to="/contact-us"
      state={{ selectedService: service.title }}
      aria-label={`Enquire about ${service.title}`}
      data-qsw-service-reveal
      className="qsw-service-reveal group relative block border-t border-[#0A2240]/15 py-12 sm:py-16 lg:py-24"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* ==================================================
            SERVICE IMAGE
        ================================================== */}

        <div className="relative min-w-0">

          {/* Offset architectural frame */}

          <div
            aria-hidden="true"
            className={`absolute h-[88%] w-[88%] border border-[#B99547]/75 ${
              reverse
                ? "-left-4 -top-4 sm:-left-6 sm:-top-6"
                : "-right-4 -top-4 sm:-right-6 sm:-top-6"
            }`}
          />

          {/* Main photograph */}

          <div className="relative aspect-[5/4] overflow-hidden bg-[#E9E4DA] sm:aspect-[6/4]">
            <img
              src={service.image}
              alt={`${service.title} pest control service in Wimbledon, London`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
            />

            {/* Subtle photographic treatment */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/25 via-transparent to-transparent" />

            {/* Image index */}

            <div className="absolute bottom-0 left-0 flex h-16 w-20 items-center justify-center bg-[#0A2240] text-[#B99547] sm:h-20 sm:w-24">
              <span className="font-serif text-4xl italic sm:text-5xl">
                {service.number}
              </span>
            </div>

            {/* Arrow button */}

            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center bg-[#F7F5EF] text-[#0A2240] transition-all duration-300 group-hover:bg-[#B99547] group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={22} strokeWidth={1.6} />
            </div>
          </div>

          {/* Image footer */}

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A2240]/50">
              QuickShield / Wimbledon
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#98763A]">
              Service {service.number}
            </span>
          </div>
        </div>

        {/* ==================================================
            SERVICE CONTENT
        ================================================== */}

        <div className="relative min-w-0">

          {/* Large background number */}

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-16 select-none font-serif text-[170px] italic leading-none tracking-[-0.1em] text-[#0A2240]/[0.035] sm:text-[220px]"
          >
            {service.number}
          </span>

          {/* Category */}

          <div className="relative mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#B99547]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#98763A]">
              {service.subtitle}
            </span>
          </div>

          {/* Heading */}

          <h3 className="relative max-w-[650px] text-[clamp(2.8rem,5.3vw,6.3rem)] font-medium leading-[0.98] tracking-[-0.075em] text-[#0A2240] transition-colors duration-300 group-hover:text-[#98763A]">
            {service.title}
            <span className="text-[#B99547]">.</span>
          </h3>

          {/* Gold divider */}

          <div className="mt-9 h-[2px] w-20 bg-[#B99547] transition-all duration-500 group-hover:w-36" />

          {/* Description */}

          <p className="mt-8 max-w-[520px] text-[15px] leading-8 text-[#0A2240]/70 sm:text-base">
            {service.description}
          </p>

          {/* Micro service details */}

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-[#0A2240]/15 pt-6">
            <Crosshair
              size={17}
              className="text-[#B99547]"
              strokeWidth={1.5}
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A2240]/50">
              {service.detail}
            </span>
          </div>

          {/* Enquiry action */}

          <div className="mt-9 inline-flex items-center gap-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0A2240]">
            <span className="border-b border-[#B99547] pb-2">
              Discuss This Service
            </span>

            <span className="flex h-11 w-11 items-center justify-center border border-[#B99547] text-[#98763A] transition-all duration-300 group-hover:bg-[#0A2240] group-hover:border-[#0A2240] group-hover:text-[#F7F5EF]">
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ==========================================================
   MAIN COMPONENT
========================================================== */

export default function PesSaveServices() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="featured-services"
      aria-labelledby="services-heading"
      className="qsw-services relative isolate overflow-hidden bg-[#F7F5EF] text-[#0A2240]"
    >
      <style>{`
        .qsw-services .qsw-service-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 800ms cubic-bezier(.2,.75,.2,1),
            transform 800ms cubic-bezier(.2,.75,.2,1);
        }

        .qsw-services .qsw-service-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-services .qsw-service-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ======================================================
          DECORATIVE BACKGROUND
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

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#B99547]/20" />

        <div className="absolute -left-32 bottom-[20%] h-[400px] w-[400px] rounded-full border border-[#B99547]/15" />
      </div>

      {/* ======================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-20 lg:pt-40">

        <div
          data-qsw-service-reveal
          className="qsw-service-reveal"
        >
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/15 pb-7">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#98763A]">
                QuickShield / Wimbledon
              </span>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0A2240]/45">
              Selected Services · SW19
            </span>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">

            <div>
              <p className="mb-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#98763A]">
                What We Can Help With
              </p>

              <h2
                id="services-heading"
                className="max-w-[1000px] text-[clamp(3.2rem,6.5vw,7.5rem)] font-medium uppercase leading-[0.96] tracking-[-0.075em]"
              >
                THE RIGHT
                <span className="block">
                  RESPONSE
                </span>
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  starts here.
                </span>
              </h2>
            </div>

            <div className="lg:pb-3">
              <div className="mb-7 h-[2px] w-20 bg-[#B99547]" />

              <p className="max-w-[440px] text-[15px] leading-8 text-[#0A2240]/65 sm:text-base">
                From rodent activity to wasp nests and
                bed bug concerns, QuickShield Services
                Wimbledon provides pest control
                services for residential and commercial
                properties in Wimbledon and London.
              </p>

              <Link
                to="/services"
                className="group mt-8 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] transition-colors hover:text-[#98763A]"
              >
                View All Services

                <MoveUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          FEATURED SERVICE ROWS
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {services.map((service, index) => (
          <EditorialService
            key={service.number}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* ======================================================
          BOTTOM EDITORIAL CTA
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-10 sm:px-10 sm:pb-32 lg:px-16 lg:pb-40">

        <div
          data-qsw-service-reveal
          className="qsw-service-reveal grid gap-10 border-t border-[#0A2240]/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >

          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#98763A]">
              Need Help With Something Else?
            </span>

            <h3 className="mt-5 max-w-[850px] text-[clamp(2rem,3.8vw,4rem)] font-medium leading-[1.1] tracking-[-0.055em]">
              Whatever the pest concern,
              <span className="font-serif font-normal italic text-[#B99547]">
                {" "}let's discuss it.
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/contact-us"
              className="group inline-flex min-h-[60px] items-center justify-between gap-8 bg-[#0A2240] px-7 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#F7F5EF] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              Get In Touch

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="tel:+447459860336"
              className="group inline-flex min-h-[60px] items-center gap-4 border border-[#0A2240]/25 px-7 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#B99547]"
            >
              <Phone size={18} className="text-[#98763A]" />

              Call Us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent */}

      <div className="h-[3px] w-full bg-[#B99547]" />
    </section>
  );
}
