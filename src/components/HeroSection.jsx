

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 15 }, // Kam displacement taake render tree freeze na ho
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     // backface-hidden aur isolate se paint cycles bach jate hain
//     <div className="relative min-h-screen bg-[#C5A86B] text-[#0A2240] overflow-hidden font-sans pt-24 md:pt-32 pb-16 isolate backface-hidden">
      
//       {/* ==================== HERO BACKGROUND IMAGE LAYER ==================== */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         {/* Aap apni image ka path niche 'src' mein daal dena. 
//             Object-cover aur center se image perfectly scale ho jayegi */}
//         <img 
//           src="/images/herohome.webp" // <-- APNI IMAGE KA LINK YA PATH YAHAN LAGAYEIN
//           alt="Premium Luxury Estate Asset Background" 
//           className="w-full h-full object-cover object-center transform-gpu scale-105"
//           onError={(e) => { e.target.style.display = 'none'; }} // Fallback agar image crash ho jaye
//         />
        
//         {/* Premium Overlay Mask: Yeh image ko mask karega taake dark blue luxury text perfectly read ho sake */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/80 via-[#C5A86B]/70 to-[#C5A86B]/90 mix-blend-multiply opacity-90" />
//         <div className="absolute inset-0 bg-[#0A2240]/10 mix-blend-color-burn" />
//       </div>

//       {/* Decorative Vector Flair - Kept for depth scale over image */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10 transform-gpu">
//         <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] border-[50px] border-[#0A2240]/10 rounded-full" />
//         <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-[#0A2240]/10 rounded-full" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="flex flex-col items-center justify-center text-center transform-gpu"
//         >
          
//           {/* Visual Badge */}
//           <motion.div variants={fadeInUp} className="mb-8">
//             <div className="relative p-6 rounded-full bg-white/40 border border-white/60 shadow-lg inline-block">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#0A2240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <span className="absolute bottom-1 right-1 flex h-4 w-4">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A2240] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0A2240]"></span>
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A2240] uppercase max-w-4xl"
//           >
//             Mayfair's Premium Pest <span className="text-white drop-shadow">Eradication</span> Service
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mt-6 mb-10"
//           >
//             At Pesbye Services, we provide unmatched discrete protection for London's luxury assets. From premium residential estates to corporate spaces in Mayfair, we utilize advanced, eco-smart technology for permanent structural secureness.
//           </motion.p>

//           {/* Call To Action Buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2"
//           >
//             <Link
//               to="/contact-us"
//               className="w-full sm:w-auto relative overflow-hidden bg-white text-[#0A2240] font-extrabold text-sm uppercase tracking-widest px-12 py-4.5 rounded-xl transition-all duration-200 active:scale-95 shadow-xl hover:bg-white/90 group"
//             >
//               <span className="relative z-10 inline-flex items-center gap-2.5">
//                 Book Inspection
//                 <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-lg">➔</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/20 border border-white/40">
//               <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-900 font-bold">24/7 Mayfair:</span>
//               <a href="tel:07424520697" className="text-xl sm:text-2xl font-black text-white hover:text-[#0A2240] transition-colors tracking-tight">
//                 07424 520697
//               </a>
//             </div>
//           </motion.div>

//           {/* Feature Grid with Solid/Semi-Transparent Contrast Stack */}
//           <motion.div
//             variants={fadeInUp}
//             className="mt-20 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/40 border border-white/70 shadow-xl transform-gpu"
//           >
//             {[
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                   </svg>
//                 ), 
//                 label: 'Unmarked Vehicles', 
//                 desc: 'Discreet operations' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ), 
//                 label: '2-Hr Dispatch', 
//                 desc: 'Mayfair Priority' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 ), 
//                 label: 'Eco-Smart Safe', 
//                 desc: 'Advanced Protocols' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-1.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08M17.15 3.836c.376.023.75.05 1.124.08m-1.124-.08c.383 1.237 1.277 2.23 2.455 2.682m-13.43-.08c1.178-.452 2.072-1.445 2.455-2.682m-2.455.08c-.373.025-.746.053-1.119.086m1.119-.086c-.383 1.237-1.277 2.23-2.455 2.682m13.43.08c-.373.025-.746.053-1.119.086m-1.119-.086c.383 1.237 1.277 2.23 2.455 2.682M4.15 6.414a11.952 11.952 0 00-1.118 1.408m1.118-1.408c.383 1.237 1.277 2.23 2.455 2.682m10.975-2.682c.413 1.332 1.43 2.374 2.748 2.766m-17.3 1.326A11.954 11.954 0 003 12c0 5.089 3.177 9.434 7.636 11.187a.75.75 0 00.514-.047l7.5-3.75a.75.75 0 00.384-.537l1.5-7.5a.75.75 0 00-.223-.687l-2.25-2.25a.75.75 0 00-.62-.212z" />
//                   </svg>
//                 ), 
//                 label: 'BPCA Accredited', 
//                 desc: 'Certified Techs' 
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center justify-center text-center p-5 rounded-xl bg-white/60 border border-white/20 hover:border-[#0A2240]/20 transition-transform duration-200 group transform-gpu">
//                 <div className="mb-3.5 group-hover:scale-105 transition-transform bg-white/40 p-2.5 rounded-full border border-white/40 shadow-sm">
//                   {item.svg}
//                 </div>
//                 <h4 className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-[#0A2240] mb-0.5">{item.label}</h4>
//                 <p className="text-[11px] md:text-xs text-slate-900 font-semibold">{item.desc}</p>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={fadeInUp} className="mt-8 text-xs tracking-widest uppercase font-bold text-slate-900">
//               Pesbye Services Mayfair — <span className="text-white">Secure✔</span>
//           </motion.div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }












// import React from "react";
// import { ShieldCheck, Target, Clock, Zap, Award, Search, CheckCircle2 } from "lucide-react";

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* ─── PREMIUM HEADER ─── */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// Operational Profile</span>
//           <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-white">
//             Quick <br/> <span className="text-[#0A2240]">Shield</span>
//           </h1>
//         </div>

//         {/* ─── BENTO GRID LAYOUT ─── */}
//         <div className="grid md:grid-cols-12 gap-6">
          
//           {/* Main Mission Card */}
//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex flex-col justify-center">
//             <h2 className="text-4xl font-black uppercase mb-6">Expertise in Every Corner.</h2>
//             <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
//               We don't just eliminate pests; we secure your environment. Quick Shield combines years of local experience with professional-grade protocols to ensure your property remains a sanctuary. From rapid response dispatches to long-term prevention, we are the industry standard for reliable pest management.
//             </p>
//           </div>

//           {/* Stats Card */}
//           <div className="md:col-span-4 bg-white/40 border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between">
//             <h3 className="text-xl font-black uppercase mb-8">Performance Metrics</h3>
//             <div className="space-y-6">
//               {[
//                 { label: "Homes Secured", val: "1,200+" },
//                 { label: "Response Time", val: "2 Hours" },
//                 { label: "Success Rate", val: "99%" },
//               ].map((stat, i) => (
//                 <div key={i} className="border-b border-[#0A2240]/10 pb-4">
//                   <div className="text-3xl font-black">{stat.val}</div>
//                   <div className="text-xs uppercase font-bold tracking-widest opacity-60">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Cards */}
//           <div className="md:col-span-12 grid md:grid-cols-3 gap-6">
//             {[
//               { icon: <Search />, title: "Precision Inspection", text: "Identifying root causes using advanced methodology." },
//               { icon: <Target />, title: "Targeted Action", text: "Removing infestations with extreme clinical accuracy." },
//               { icon: <ShieldCheck />, title: "Structural Defense", text: "Fortifying your property to prevent future returns." },
//             ].map((item, i) => (
//               <div key={i} className="bg-white/20 p-8 rounded-[2rem] border border-white/30 backdrop-blur-sm">
//                 <div className="mb-6 bg-[#0A2240] text-white w-14 h-14 rounded-2xl flex items-center justify-center">
//                   {React.cloneElement(item.icon, { size: 28 })}
//                 </div>
//                 <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
//                 <p className="text-[#0A2240]/80 font-medium">{item.text}</p>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* ─── WHY CHOOSE SECTION ─── */}
//         <div className="mt-24 bg-[#0A2240] text-white p-16 rounded-[2rem] grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-black uppercase mb-8 tracking-tight">The Quick Shield <br/><span className="text-[#b99547]">Advantage</span></h2>
//             <div className="space-y-4">
//               {[
//                 "Licensed & Bonded Professionals",
//                 "Advanced Eco-Safe Solutions",
//                 "Total Transparency in Pricing",
//                 "Rapid Local Deployment"
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-4 text-lg font-bold">
//                   <CheckCircle2 className="text-[#b99547]" /> {point}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="h-[300px] bg-white/10 rounded-3xl flex items-center justify-center font-black opacity-30 italic">
//             IMAGE_PLACEMENT_TECHNICAL_DETAIL
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }










// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85vh] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact-us" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, ArrowRight, MapPin, Bug } from "lucide-react";

// /**
//  * QuickShield Services Notting Hill — cinematic editorial hero.
//  * Tailwind CSS + lucide-react + react-router-dom.
//  * No external images, heavy animation libraries, or additional CSS files needed.
//  */
// export default function HeroSection() {
//   return (
//     <section
//       aria-labelledby="quickshield-hero-title"
//       className="relative isolate overflow-hidden bg-[#0A2240] text-white"
//     >
//       <style>{`
//         @keyframes qsn-rise { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
//         @keyframes qsn-orbit { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
//         .qsn-enter { animation: qsn-rise .85s cubic-bezier(.2,.7,.2,1) both; }
//         .qsn-enter-2 { animation-delay: .13s; }
//         .qsn-enter-3 { animation-delay: .26s; }
//         .qsn-enter-4 { animation-delay: .39s; }
//         .qsn-orbit { animation: qsn-orbit 50s linear infinite; }
//         @media (prefers-reduced-motion: reduce) { .qsn-enter, .qsn-orbit { animation: none !important; opacity: 1; transform: none; } }
//       `}</style>

//       {/* Restrained architectural background: original navy and gold palette. */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(185,149,71,.16),transparent_43%)]" />
//         <div className="absolute inset-0 opacity-[.055] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:76px_76px]" />
//         <div className="absolute -right-48 top-[-250px] h-[740px] w-[740px] rounded-full border border-[#B99547]/15" />
//         <div className="absolute -right-20 top-[-120px] h-[600px] w-[600px] rounded-full border border-[#B99547]/10" />
//       </div>

//       <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 px-5 pb-20 pt-36 sm:px-8 lg:min-h-[790px] lg:grid-cols-[1.1fr_.9fr] lg:gap-6 lg:px-12 lg:pb-24 lg:pt-40">
//         {/* Main editorial headline */}
//         <div className="relative z-10 max-w-[850px]">
//           <div className="qsn-enter inline-flex items-center gap-3 border-l-2 border-[#B99547] pl-4 text-[10px] font-bold uppercase tracking-[.23em] text-[#E0C78C] sm:text-xs">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#B99547]" />
//             Notting Hill · London W11
//           </div>

//           <h1 id="quickshield-hero-title" className="qsn-enter qsn-enter-2 mt-8 max-w-[900px] text-[clamp(3.4rem,7.6vw,8.3rem)] font-semibold leading-[.93] tracking-[-.075em]">
//             A better way
//             <span className="block font-light italic text-[#D9B972]">to feel at home.</span>
//           </h1>

//           <div className="qsn-enter qsn-enter-3 mt-9 flex max-w-[610px] items-start gap-5">
//             <div className="mt-3 hidden h-px w-12 shrink-0 bg-[#B99547] sm:block" />
//             <div>
//               <p className="text-[15px] leading-8 text-white/75 sm:text-[17px]">
//                 Professional pest control in Notting Hill for homes, flats and commercial properties. From rats and mice to bed bugs and other pest concerns, QuickShield Services helps you take the next step with confidence.
//               </p>
//               <div className="mt-8 flex flex-wrap gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[56px] items-center justify-between gap-8 bg-[#B99547] px-6 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#0A2240] transition-colors duration-300 hover:bg-[#E2C783] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E2C783]"
//                 >
//                   Request an enquiry
//                   <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="group inline-flex min-h-[56px] items-center gap-3 border border-white/30 px-6 text-[11px] font-bold uppercase tracking-[.13em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#E2C783]"
//                 >
//                   Explore services <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Oversized insect silhouette in the original architectural composition. */}
//         <div className="qsn-enter qsn-enter-4 relative mx-auto flex h-[380px] w-full max-w-[540px] items-center justify-center sm:h-[480px] lg:h-[600px]" aria-hidden="true">
//           <div className="absolute inset-[3%] rounded-full border border-[#B99547]/20" />
//           <div className="qsn-orbit absolute inset-[11%] rounded-full border border-dashed border-[#B99547]/25" />
//           <div className="absolute inset-[20%] rounded-full border border-white/10" />
//           <div className="absolute left-1/2 top-1/2 h-[72%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] border border-[#B99547]/30 bg-gradient-to-br from-[#B99547]/20 via-[#0E2B4B] to-[#06172D] shadow-[0_45px_110px_rgba(0,0,0,.28)]" />
//           <div className="absolute left-1/2 top-1/2 flex h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#B99547]/40 bg-[radial-gradient(circle,rgba(185,149,71,.16),rgba(10,34,64,.8)_68%)] shadow-[0_0_85px_rgba(185,149,71,.13)]">
//             <Bug className="h-[76%] w-[76%] text-[#D9B972] drop-shadow-[0_15px_30px_rgba(0,0,0,.25)]" strokeWidth={1.15} />
//           </div>
//           <span className="absolute left-[2%] top-[15%] border border-white/20 bg-[#0A2240]/90 px-4 py-3 text-[9px] font-bold uppercase tracking-[.2em] text-[#E0C78C] sm:left-[0%]">Property care</span>
//           <span className="absolute bottom-[14%] right-[-1%] border border-[#B99547]/40 bg-[#0A2240]/95 px-4 py-3 text-[9px] font-bold uppercase tracking-[.2em] text-white sm:right-0">Notting Hill · W11</span>
//           <span className="absolute right-[7%] top-[13%] h-2 w-2 rounded-full bg-[#B99547] shadow-[0_0_22px_rgba(185,149,71,.8)]" />
//         </div>
//       </div>

//       {/* Integrated location ribbon */}
//       <div className="relative border-t border-white/15 bg-[#071A32]/70">
//         <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
//           <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/70">
//             <MapPin size={17} className="text-[#B99547]" />
//             Serving Notting Hill, nearby areas & London
//           </div>
//           <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#E0C78C]">
//             <span className="h-px w-7 bg-[#B99547]" />
//             QuickShield Services Notting Hill
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  MapPin,
  Phone,
  ShieldCheck,
  Crosshair,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   HOME HERO — LIGHT ARCHITECTURAL LUXURY

   Background: #F7F5EF
   Navy:       #0A2240
   Gold:       #B99547

   React + Tailwind CSS + React Router + Lucide
========================================================== */

const PHONE = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="wimbledon-hero-title"
      className="qsw-hero relative isolate overflow-hidden bg-[#F7F5EF] text-[#0A2240]"
    >
      <style>{`
        @keyframes qsw-hero-rise {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes qsw-hero-reveal {
          from {
            opacity: 0;
            transform: scale(1.07);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes qsw-hero-line {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes qsw-hero-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .qsw-hero .qsw-rise {
          animation: qsw-hero-rise 900ms
            cubic-bezier(.2,.75,.2,1) both;
        }

        .qsw-hero .qsw-delay-1 {
          animation-delay: 120ms;
        }

        .qsw-hero .qsw-delay-2 {
          animation-delay: 240ms;
        }

        .qsw-hero .qsw-delay-3 {
          animation-delay: 360ms;
        }

        .qsw-hero .qsw-image-reveal {
          animation: qsw-hero-reveal 1400ms
            cubic-bezier(.2,.75,.2,1) both;
        }

        .qsw-hero .qsw-draw-line {
          transform-origin: left;
          animation: qsw-hero-line 1100ms
            cubic-bezier(.2,.75,.2,1) 400ms both;
        }

        .qsw-hero .qsw-floating {
          animation: qsw-hero-float 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-hero .qsw-rise,
          .qsw-hero .qsw-image-reveal,
          .qsw-hero .qsw-draw-line,
          .qsw-hero .qsw-floating {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          ARCHITECTURAL LIGHT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Fine architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
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
            backgroundSize: "90px 90px",
          }}
        />

        {/* Right vertical division */}
        <div className="absolute bottom-0 right-[43%] top-0 hidden w-px bg-[#0A2240]/10 lg:block" />

        {/* Oversized watermark */}
        <span className="absolute -bottom-20 -left-10 select-none text-[35vw] font-black leading-none tracking-[-0.1em] text-[#0A2240]/[0.025]">
          Q
        </span>

        {/* Gold architectural lines */}
        <div className="absolute right-[8%] top-[14%] h-[170px] w-[170px] border-r border-t border-[#B99547]/30" />

        <div className="absolute bottom-[17%] right-[4%] h-[240px] w-[240px] border-b border-r border-[#B99547]/25" />

        <div className="absolute left-[7%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#B99547]" />

        {/* Subtle gold ambient glow */}
        <div className="absolute -right-40 top-[20%] h-[650px] w-[650px] rounded-full bg-[#B99547]/[0.045] blur-[100px]" />
      </div>

      {/* ======================================================
          MAIN HERO
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-40">

        {/* TOP EYEBROW */}

        <div className="qsw-rise flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/15 pb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#B99547]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#98763A] sm:text-xs">
              QuickShield Services Wimbledon
            </span>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0A2240]/50">
            London · SW19
          </span>
        </div>

        {/* MAIN COMPOSITION */}

        <div className="relative grid min-h-[650px] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:py-20">

          {/* ================================================
              LEFT — EDITORIAL CONTENT
          ================================================= */}

          <div className="relative z-20 lg:pr-8">

            {/* Location marker */}

            <div className="qsw-rise qsw-delay-1 mb-9 inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-[#B99547]/60 text-[#98763A]">
                <Crosshair size={17} strokeWidth={1.5} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/60">
                Pest Management · Wimbledon
              </span>
            </div>

            {/* Main heading */}

            <h1
              id="wimbledon-hero-title"
              className="qsw-rise qsw-delay-1 relative max-w-[1000px] text-[clamp(3.5rem,7.7vw,8.5rem)] font-medium uppercase leading-[0.89] tracking-[-0.085em] text-[#0A2240]"
            >
              YOUR SPACE.

              <span className="block">
                OUR
              </span>

              <span className="block font-serif font-normal italic normal-case tracking-[-0.075em] text-[#B99547]">
                priority.
              </span>
            </h1>

            {/* Animated gold divider */}

            <div className="qsw-draw-line mt-9 h-[2px] w-24 bg-[#B99547]" />

            {/* Description */}

            <div className="qsw-rise qsw-delay-2 mt-9 max-w-[550px]">
              <p className="text-[16px] leading-8 text-[#0A2240]/75 sm:text-[17px]">
                Professional pest control services for
                homes and businesses in Wimbledon,
                London. From rats and mice to bed bugs,
                cockroaches and other pest concerns,
                QuickShield Services Wimbledon helps
                you explore practical next steps for
                your property.
              </p>
            </div>

            {/* CTA BUTTONS */}

            <div className="qsw-rise qsw-delay-3 mt-10 flex flex-wrap items-center gap-4">

              {/* Primary CTA */}

              <Link
                to="/contact-us"
                className="group relative inline-flex min-h-[60px] items-center justify-between gap-9 overflow-hidden bg-[#0A2240] px-7 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#F7F5EF] transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99547]"
              >
                <span>Request an Enquiry</span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* Secondary CTA */}

              <Link
                to="/services"
                className="group inline-flex min-h-[60px] items-center gap-4 border border-[#0A2240]/30 px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:border-[#B99547] hover:bg-[#B99547]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99547]"
              >
                Explore Services

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Contact information */}

            <div className="qsw-rise qsw-delay-3 mt-10 flex flex-wrap items-center gap-6">
              <a
                href={PHONE_LINK}
                className="group inline-flex items-center gap-3 text-xs font-semibold text-[#0A2240]/65 transition-colors hover:text-[#98763A]"
              >
                <Phone
                  size={16}
                  className="text-[#B99547]"
                />

                {PHONE}
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-[#B99547] sm:block" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A2240]/45">
                Residential & Commercial
              </span>
            </div>
          </div>

          {/* ================================================
              RIGHT — ASYMMETRIC VISUAL COMPOSITION
          ================================================= */}

          <div className="qsw-image-reveal relative mx-auto w-full max-w-[590px] lg:ml-auto">

            {/* Offset gold frame */}

            <div className="absolute -right-4 -top-5 h-[85%] w-[85%] border border-[#B99547]/75 sm:-right-7 sm:-top-7" />

            {/* Image container */}

            <div
              className="relative aspect-[4/5] overflow-hidden bg-[#E9E4DA]"
              style={{
                clipPath:
                  "polygon(0 0, 83% 0, 100% 17%, 100% 100%, 0 100%)",
              }}
            >
              <img
                src="/images/shieldteam.webp"
                alt="QuickShield pest control team"
                fetchPriority="high"
                className="h-full w-full object-contain object-bottom"
              />

              {/* Light navy image treatment */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/10 via-transparent to-transparent" />
            </div>

            {/* Floating Wimbledon label */}

            <div className="qsw-floating absolute -bottom-6 -left-3 z-10 bg-[#0A2240] px-7 py-6 text-[#F7F5EF] shadow-[0_25px_60px_rgba(10,34,64,0.18)] sm:-bottom-8 sm:-left-8 sm:px-9 sm:py-8">
              <span className="block font-serif text-5xl italic leading-none text-[#B99547] sm:text-6xl">
                SW19
              </span>

              <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-[0.17em]">
                Wimbledon · London
              </span>
            </div>

            {/* Vertical side label */}

            <div className="absolute -right-8 bottom-[20%] hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.25em] text-[#98763A] xl:block">
              QuickShield / Wimbledon
            </div>
          </div>
        </div>

        {/* ==================================================
            LOWER HERO NAVIGATION STRIP
        ================================================== */}

        <div className="relative mt-12 grid gap-7 border-t border-[#0A2240]/15 pt-8 md:grid-cols-[1fr_auto] md:items-center lg:mt-0">

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#B99547]/45 text-[#98763A]">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A2240]/65">
                Property-focused pest control
              </span>
            </div>

            <div className="hidden h-8 w-px bg-[#0A2240]/15 lg:block" />

            <div className="flex items-center gap-3">
              <MapPin
                size={19}
                className="text-[#B99547]"
                strokeWidth={1.6}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A2240]/65">
                Wimbledon & London
              </span>
            </div>
          </div>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#98763A] transition-colors hover:text-[#0A2240]"
          >
            Discover What We Do

            <ArrowDown
              size={19}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom gold accent */}

      <div className="h-[3px] w-full bg-[#B99547]" />
    </section>
  );
}
