




// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/swiftpeslogo.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones in worcester.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 worcester, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Direct call us
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors duration-200">
//                 07438 164691
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#76C7C0]" />
//           </a>

//           <a
//             href="mailto:info@pestcontrolworcester.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Secure Inbound Relay
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors duration-200 truncate">
//                 info@pestcontrolworcester.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#4FA3A5]" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-400">swiftpes Services</span>. All
//             rights engineered.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//             <span>swiftpes System Core Architecture v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0A2240] text-white overflow-hidden border-t border-[#C5A86B]/20 z-30 font-sans">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(#C5A86B_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.03] pointer-events-none" />
//       
//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#C5A86B]/10">
//           
//           {/* Logo & Intro */}
//           <div className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services"
//               className="h-20 w-auto object-contain  " 
//               loading="lazy"
//             />
//             <p className="text-slate-300/70 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
//               Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#C5A86B]/10 border border-[#C5A86B]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#C5A86B]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-[#C5A86B] uppercase font-bold">
//                 Certified London Standard
//               </span>
//             </div>
//           </div>

//           {/* Links Grid */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Corporate Directory
//               </h4>
//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link key={link.name} to={link.path} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
//                     <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Active Deployments
//               </h4>
//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "Rat & Mice Control", state: { scrollToService: "Rats & Mice Control" } },
//                   { name: "Bed Bugs Thermal Heat", state: { scrollToService: "Bed Bugs Control" } },
//                   { name: "Carpet Moth Eradication", state: { scrollToService: "Carpet Moth Control Treatment" } },
//                   { name: "Safe Pest Removal Matrix", state: { scrollToService: null } },
//                 ].map((service) => (
//                   <Link key={service.name} to="/services" state={service.state} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
//                     <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Bar */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#C5A86B]/10">
//           <div className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <MapPin className="w-5 h-5" /> </div>
//             <div>
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Operational Base</span>
//               <span className="text-sm font-semibold text-white">Mayfair, London, UK</span>
//             </div>
//           </div>

//           <a href="tel:07424520697" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Phone className="w-5 h-5" /> </div>
//             <div className="flex-grow">
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Direct Call</span>
//               <span className="text-sm font-semibold text-white group-hover:text-[#C5A86B]">07424 520697</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>

//           <a href="mailto:info@pestcontrolmayfair.uk" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Mail className="w-5 h-5" /> </div>
//             <div className="flex-grow truncate">
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Secure Inbound</span>
//               <span className="text-sm font-semibold text-white truncate group-hover:text-[#C5A86B]">info@pestcontrolmayfair.uk</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-400">
//           <p className="tracking-wide">Copyright © {new Date().getFullYear()} Pesbye Services. All rights reserved.</p>
//           <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-mono text-[#C5A86B] bg-[#C5A86B]/5 border border-[#C5A86B]/10">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse" />
//             <span>PESBYE SYSTEM CORE v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 













// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#b99547] text-[#0A2240] overflow-hidden border-t border-[#0A2240]/20 z-30 font-sans">
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.04] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#0A2240]/15">
//           <div className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//             />

//             <p className="text-[#0A2240]/80 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#0A2240]/5 border border-[#0A2240]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-[#0A2240] uppercase font-bold">
//                 Certified London Standard
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: { scrollToService: "Rats & Mice Control" },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: { scrollToService: "Bed Bugs Control" },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#0A2240]/15">
//           <div className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl text-left">
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div>
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240]">
//                 Purley, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405025488"
//             className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left"
//           >
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="flex-grow">
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Direct Call
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240] group-hover:text-white">
//                 07405 025488
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-[#0A2240] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>

//           <a
//             href="mailto:info@pestcontrolpurley.uk"
//             className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left"
//           >
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="flex-grow truncate">
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Secure Inbound
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240] truncate group-hover:text-white">
//                 info@pestcontrolpurley.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-[#0A2240] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-[#0A2240]/80">
//           <p className="tracking-wide">
//             Copyright © {new Date().getFullYear()} QuickShield Services. All rights
//             reserved.
//           </p>

//           <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-mono text-[#0A2240] bg-[#0A2240]/5 border border-[#0A2240]/20">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse" />
//             <span>Quickshield Services CORE v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   Mail,
// } from "lucide-react";

// const PHONE_NUMBER = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// const ADDRESS =
//   "3A Denbigh Rd, London W11 2SJ, United Kingdom";

// const navigationLinks = [
//   { label: "Home", path: "/" },
//   { label: "Our Services", path: "/services" },
//   { label: "About QuickShield", path: "/about-us" },
//   { label: "Contact Us", path: "/contact-us" },
// ];

// const serviceLinks = [
//   {
//     label: "Rats & Mice Control",
//     service: "Rats & Mice",
//   },
//   {
//     label: "Bed Bug Control",
//     service: "Bed Bugs",
//   },
//   {
//     label: "Wasp Control",
//     service: "Wasps",
//   },
//   {
//     label: "Carpet Moth Treatment",
//     service: "Moth Treatment",
//   },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative isolate overflow-hidden font-sans">
//       {/* TOP EDITORIAL CTA */}
//       <div className="relative overflow-hidden bg-[#E8D5AE]">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 overflow-hidden"
//         >
//           <div className="absolute -right-40 -top-48 h-[580px] w-[580px] rounded-full border border-[#0A2240]/10" />
//           <div className="absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full border border-[#0A2240]/10" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//           <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
//             <div>
//               <div className="mb-6 flex items-center gap-4">
//                 <span className="h-px w-11 bg-[#0A2240]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A2240]/70">
//                   Your Next Step
//                 </span>
//               </div>

//               <h2 className="max-w-3xl text-[clamp(2.8rem,5.7vw,6.2rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-[#0A2240]">
//                 Let's talk about
//                 <br />
//                 <span className="font-serif font-normal italic text-[#96733B]">
//                   your property.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-xl text-base leading-8 text-[#0A2240]/70">
//                 Need help with unwanted pests in Notting Hill?
//                 Contact QuickShield Services to discuss your
//                 concerns and suitable next steps.
//               </p>
//             </div>

//             <div className="flex flex-col gap-4 lg:items-end">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex w-full items-center justify-between gap-8 rounded-full bg-[#0A2240] px-7 py-5 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240] sm:w-auto sm:min-w-[250px]"
//               >
//                 Get in Touch

//                 <ArrowUpRight
//                   size={20}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>

//               <a
//                 href={PHONE_LINK}
//                 className="group inline-flex w-full items-center justify-between gap-8 rounded-full border border-[#0A2240]/25 px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0A2240] transition-all duration-300 hover:border-[#0A2240] sm:w-auto sm:min-w-[250px]"
//               >
//                 <span className="flex items-center gap-3">
//                   <Phone size={17} />
//                   Call QuickShield
//                 </span>

//                 <ArrowRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="relative overflow-hidden bg-[#0A2240] text-white">
//         {/* Background architectural decoration */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 overflow-hidden"
//         >
//           <div className="absolute -bottom-72 -right-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/10" />
//           <div className="absolute -bottom-52 -right-24 h-[480px] w-[480px] rounded-full border border-[#B99547]/10" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
//           {/* Footer Grid */}
//           <div className="grid gap-14 border-b border-white/15 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:pb-20">
//             {/* Brand */}
//             <div className="sm:col-span-2 lg:col-span-5">
//               {/* Logo text alternative for dark background */}
//               <Link
//                 to="/"
//                 aria-label="QuickShield Services Notting Hill Home"
//                 className="inline-block"
//               >
//                 <span className="block text-3xl font-bold uppercase tracking-[-0.055em] text-white sm:text-4xl">
//                   QUICK
//                   <span className="text-[#D8BA7C]">
//                     SHIELD
//                   </span>
//                 </span>

//                 <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D8BA7C]">
//                   Services Notting Hill
//                 </span>
//               </Link>

//               <p className="mt-7 max-w-sm text-sm leading-8 text-white/60">
//                 QuickShield Services Notting Hill provides pest
//                 control assistance for residential and commercial
//                 properties in Notting Hill and surrounding London
//                 areas.
//               </p>

//               <div className="mt-8 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#D8BA7C]">
//                   Pest Control · Notting Hill · London
//                 </span>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="lg:col-span-2">
//               <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8BA7C]">
//                 Explore
//               </h3>

//               <nav
//                 aria-label="Footer navigation"
//                 className="flex flex-col gap-4"
//               >
//                 {navigationLinks.map((item) => (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     className="group inline-flex w-fit items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
//                   >
//                     <ArrowRight
//                       size={14}
//                       className="text-[#B99547] transition-transform duration-300 group-hover:translate-x-1"
//                     />

//                     {item.label}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* Services */}
//             <div className="lg:col-span-2">
//               <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8BA7C]">
//                 Pest Control
//               </h3>

//               <nav
//                 aria-label="Pest control services"
//                 className="flex flex-col gap-4"
//               >
//                 {serviceLinks.map((item) => (
//                   <Link
//                     key={item.label}
//                     to="/services"
//                     state={{
//                       scrollToService: item.service,
//                     }}
//                     className="group inline-flex w-fit items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
//                   >
//                     <ArrowRight
//                       size={14}
//                       className="shrink-0 text-[#B99547] transition-transform duration-300 group-hover:translate-x-1"
//                     />

//                     {item.label}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* Contact */}
//             <div className="lg:col-span-3">
//               <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8BA7C]">
//                 Contact Details
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-3">
//                   <MapPin
//                     size={18}
//                     className="mt-1 shrink-0 text-[#B99547]"
//                   />

//                   <div>
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-white/40">
//                       Our Address
//                     </span>

//                     <address className="mt-2 text-sm not-italic leading-7 text-white/65">
//                       {ADDRESS}
//                     </address>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Phone
//                     size={18}
//                     className="mt-1 shrink-0 text-[#B99547]"
//                   />

//                   <div>
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-white/40">
//                       Call Us
//                     </span>

//                     <a
//                       href={PHONE_LINK}
//                       className="mt-2 block text-sm font-semibold text-white transition-colors hover:text-[#D8BA7C]"
//                     >
//                       {PHONE_NUMBER}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Mail
//                     size={18}
//                     className="mt-1 shrink-0 text-[#B99547]"
//                   />

//                   <div>
//                     <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-white/40">
//                       Enquiries
//                     </span>

//                     <Link
//                       to="/contact-us"
//                       className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#D8BA7C]"
//                     >
//                       Contact Form
//                       <ArrowUpRight size={15} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs leading-6 text-white/45">
//               © {currentYear} QuickShield Services Notting Hill.
//               All rights reserved.
//             </p>

//             <div className="flex flex-wrap items-center gap-4 text-[11px] text-white/45">
//               <span>Notting Hill, London</span>

//               <span className="h-1 w-1 rounded-full bg-[#B99547]" />

//               <Link
//                 to="/contact-us"
//                 className="transition-colors hover:text-[#D8BA7C]"
//               >
//                 Get in Touch
//               </Link>

//               <span className="h-1 w-1 rounded-full bg-[#B99547]" />

//               <a
//                 href="#top"
//                 className="inline-flex items-center gap-2 transition-colors hover:text-[#D8BA7C]"
//               >
//                 Back to Top
//                 <ArrowUpRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  MoveUpRight,
  ChevronUp,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   LUXURY ARCHITECTURAL FOOTER

   Navy: #0A2240
   Gold: #AC6C15

   React + Tailwind CSS + React Router
========================================================== */

const PHONE_NUMBER = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";

const ADDRESS =
  "3 Thornton Rd, London SW19 4NB, United Kingdom";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/services" },
  { label: "About QuickShield", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const serviceLinks = [
  {
    label: "Rats & Mice Control",
    service: "Rats & Mice",
  },
  {
    label: "Bed Bug Control",
    service: "Bed Bugs",
  },
  {
    label: "Wasp Control",
    service: "Wasps",
  },
  {
    label: "Carpet Moth Treatment",
    service: "Moth Treatment",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#0A2240] font-sans text-white">

      {/* =====================================================
          TOP EDITORIAL CONTACT SECTION
      ===================================================== */}

      <div className="relative overflow-hidden border-b border-white/15">

        {/* Architectural background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-48 -top-52 h-[700px] w-[700px] rounded-full border border-[#AC6C15]/20" />

          <div className="absolute -right-20 -top-24 h-[480px] w-[480px] rounded-full border border-[#AC6C15]/15" />

          <div className="absolute left-[7%] top-0 h-full w-px bg-white/[0.035]" />

          <div className="absolute right-[7%] top-0 h-full w-px bg-white/[0.035]" />

          <span className="absolute -bottom-24 right-10 select-none font-serif text-[300px] italic leading-none text-white/[0.025]">
            Q
          </span>
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40">

          {/* Eyebrow */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-7">

            <div className="flex items-center gap-4">
              <span className="h-px w-11 bg-[#AC6C15]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#AC6C15]">
                Your Next Step
              </span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/40">
              Wimbledon · London · SW19
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">

            {/* Left headline */}
            <div>
              <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/55">
                A conversation can make the next step clearer.
              </p>

              <h2 className="max-w-[850px] text-[clamp(3.5rem,7vw,8.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.075em]">
                LET'S
                <span className="block">
                  TALK
                </span>
                <span className="block font-serif font-normal italic normal-case text-[#AC6C15]">
                  pest control.
                </span>
              </h2>

              <p className="mt-9 max-w-[570px] text-[15px] leading-8 text-white/60 sm:text-base">
                Unwanted pest activity at your home or
                business? Contact QuickShield Services
                Wimbledon to discuss your concerns,
                explore appropriate solutions and
                understand the next steps.
              </p>
            </div>

            {/* Right gold CTA panel */}
            <div className="relative overflow-hidden bg-[#AC6C15] p-8 text-white sm:p-10 lg:p-12">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full border border-white/20"
              />

              <div className="relative flex items-center justify-between gap-5">

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">
                  Start Here
                </span>

                <ArrowUpRight
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="relative mt-16 max-w-sm text-[clamp(2.1rem,3vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.055em]">
                Tell us about
                <span className="block font-serif font-normal italic">
                  your property.
                </span>
              </h3>

              <p className="relative mt-6 max-w-sm text-sm leading-7 text-white/80">
                Share the pest problem you are experiencing
                and get in touch with our Wimbledon team.
              </p>

              <Link
                to="/contact-us"
                className="group relative mt-10 flex min-h-[62px] items-center justify-between gap-5 bg-[#0A2240] px-6 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-[#0A2240]"
              >
                Request a Callback

                <MoveUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={PHONE_LINK}
                className="group relative mt-4 flex min-h-[62px] items-center justify-between gap-5 border border-white/55 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0A2240]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} />
                  {PHONE_NUMBER}
                </span>

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        <div className="grid gap-14 border-b border-white/15 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-24">

          {/* BRAND COLUMN */}
          <div className="sm:col-span-2 lg:col-span-5">

            <Link
              to="/"
              aria-label="QuickShield Services Wimbledon Home"
              className="group inline-block"
            >
              <span className="block text-[clamp(2.5rem,4vw,4.8rem)] font-semibold uppercase leading-none tracking-[-0.075em] text-white">
                QUICK
                <span className="text-[#AC6C15]">
                  SHIELD
                </span>
              </span>

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#AC6C15] sm:text-xs">
                Services Wimbledon
              </span>
            </Link>

            <p className="mt-9 max-w-[380px] text-sm leading-8 text-white/60">
              QuickShield Services Wimbledon provides
              pest control assistance for residential
              and commercial properties in Wimbledon
              and the wider London area.
            </p>

            <div className="mt-10 flex items-center gap-4">

              <span className="h-px w-12 bg-[#AC6C15]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#AC6C15]">
                Pest Management · Wimbledon
              </span>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="lg:col-span-2">

            <h3 className="mb-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#AC6C15]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-5"
            >
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group inline-flex w-fit items-center gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <ArrowRight
                    size={15}
                    className="text-[#AC6C15] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES COLUMN */}
          <div className="lg:col-span-2">

            <h3 className="mb-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#AC6C15]">
              Pest Control
            </h3>

            <nav
              aria-label="Pest control services"
              className="flex flex-col gap-5"
            >
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  to="/services"
                  state={{
                    scrollToService: item.service,
                  }}
                  className="group inline-flex w-fit items-center gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#AC6C15] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT COLUMN */}
          <div className="lg:col-span-3">

            <h3 className="mb-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#AC6C15]">
              Contact Details
            </h3>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-4">

                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#AC6C15]"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                    Our Address
                  </span>

                  <address className="mt-2 max-w-xs text-sm not-italic leading-7 text-white/65">
                    {ADDRESS}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#AC6C15]"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                    Call Us
                  </span>

                  <a
                    href={PHONE_LINK}
                    className="mt-2 block text-sm font-semibold text-white transition-colors hover:text-[#AC6C15]"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="flex items-start gap-4">

                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#AC6C15]"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                    Enquiries
                  </span>

                  <Link
                    to="/contact-us"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#AC6C15]"
                  >
                    Contact Form
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            LARGE BRAND SIGNATURE
        ================================================= */}

        <div className="overflow-hidden border-b border-white/15 py-10 sm:py-14">

          <div className="flex flex-wrap items-end justify-between gap-6">

            <span
              aria-hidden="true"
              className="select-none text-[clamp(3.5rem,10vw,10rem)] font-semibold uppercase leading-[0.85] tracking-[-0.09em] text-white/[0.075]"
            >
              QUICKSHIELD
            </span>

            <div className="flex items-center gap-3 pb-2">
              <span className="h-2 w-2 bg-[#AC6C15]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#AC6C15]">
                Wimbledon · London
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            COPYRIGHT + BACK TO TOP
        ================================================= */}

        <div className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-white/45">
            © {currentYear} QuickShield Services Wimbledon.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              to="/contact-us"
              className="text-[11px] font-semibold text-white/55 transition-colors hover:text-[#AC6C15]"
            >
              Get in Touch
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[#AC6C15]"
            >
              Back to Top

              <span className="flex h-9 w-9 items-center justify-center border border-[#AC6C15]/60 text-[#AC6C15] transition-colors duration-300 group-hover:bg-[#AC6C15] group-hover:text-white">
                <ChevronUp size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* GOLD BOTTOM ACCENT */}
      <div className="h-[4px] w-full bg-[#AC6C15]" />
    </footer>
  );
}
