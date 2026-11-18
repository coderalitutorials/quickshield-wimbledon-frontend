



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fixed: Base text is now your logo's exact Navy Blue (#0A2240) and switches to Gold on active/hover
//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-[#C5A86B] font-bold" 
//         : "text-[#0A2240] hover:text-[#C5A86B]"
//     }`;

//   // Luxury Mobile Styling: Adjusted to match light background theme cleanly
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/5 hover:text-[#C5A86B]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-amber-100 ${
//         isScrolled
//           ? "shadow-xl border-b border-[#C5A86B]/30"
//           : "border-b border-[#C5A86B]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo (Renders original brand colors directly on amber layout) */}
//           <Link to="/" className="flex items-center h-full py-3" onClick={() => setOpen(false)}>
//             <img 
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services Logo" 
//               className="h-12 md:h-16 w-auto object-contain" 
//             />
//           </Link>

//           {/* Desktop Navigation Link Stack */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink 
//                   key={item} 
//                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C5A86B]" />}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location Badge - Dynamic Navy Context Alignment */}
//             <div className="flex items-center gap-2 text-[#0A2240]/70 font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#C5A86B]/30 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Mayfair, London</span>
//             </div>
//           </div>

//           {/* Mobile Toggle Trigger */}
//           <button 
//             onClick={() => setOpen(!open)} 
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/5 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Popout Panel Grid */}
//       {open && (
//         <div className="md:hidden bg-amber-100 border-t border-[#C5A86B]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//            <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-white font-bold"
//         : "text-[#0A2240] hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/10 hover:text-white"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-[#b99547] ${
//         isScrolled
//           ? "shadow-xl border-b border-[#0A2240]/20"
//           : "border-b border-[#0A2240]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center h-full py-3"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink
//                   key={item}
//                   to={
//                     item === "Home"
//                       ? "/"
//                       : `/${item.toLowerCase().replace(" ", "-")}`
//                   }
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && (
//                         <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0A2240]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 text-[#0A2240] font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#0A2240]/20 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                 />
//               </svg>

//               <span>purley, London</span>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/10 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#b99547] border-t border-[#0A2240]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/"
//             className={mobileNavClass}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/services"
//             className={mobileNavClass}
//           >
//             Services
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/about-us"
//             className={mobileNavClass}
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/contact-us"
//             className={mobileNavClass}
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }




















// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Phone,
//   MapPin,
//   Menu,
//   X,
// } from "lucide-react";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Services", path: "/services" },
//   { label: "About Us", path: "/about-us" },
//   { label: "Contact Us", path: "/contact-us" },
// ];

// const PHONE_NUMBER = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   return (
//     <header
//       className={
//         "fixed inset-x-0 top-0 z-50 transition-shadow duration-300 " +
//         (isScrolled
//           ? "shadow-[0_12px_40px_rgba(10,34,64,0.14)]"
//           : "")
//       }
//     >
//       {/* TOP INFORMATION BAR */}
//       <div
//         className={
//           "hidden overflow-hidden bg-[#0A2240] transition-all duration-300 lg:block " +
//           (isScrolled
//             ? "max-h-0 opacity-0"
//             : "max-h-10 opacity-100")
//         }
//       >
//         <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 lg:px-10">
//           <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.04em] text-white/70">
//             <MapPin size={14} className="text-[#D8BA7C]" />
//             <span>Pest Control in Notting Hill, London</span>
//           </div>

//           <a
//             href={PHONE_LINK}
//             className="flex items-center gap-2 text-[11px] font-semibold text-white/80 transition-colors hover:text-[#D8BA7C]"
//           >
//             <Phone size={14} className="text-[#D8BA7C]" />
//             {PHONE_NUMBER}
//           </a>
//         </div>
//       </div>

//       {/* MAIN NAVIGATION */}
//       <nav
//         aria-label="Main navigation"
//         className={
//           "relative border-b border-[#B99547]/35 bg-[#E8D5AE] transition-[height,background-color] duration-300 " +
//           (isScrolled
//             ? "h-[76px] lg:h-[82px] bg-[#EADBBE]"
//             : "h-[82px] lg:h-[98px]")
//         }
//       >
//         <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
//           {/* LOGO - NO BACKGROUND PANEL */}
//           <Link
//             to="/"
//             aria-label="QuickShield Services Notting Hill - Home"
//             onClick={() => setOpen(false)}
//             className="group flex h-full shrink-0 items-center"
//           >
//             <img
//               src="/images/quick1.webp"
//               alt="QuickShield Services Notting Hill logo"
//               className={
//                 "block w-auto max-w-[160px] object-contain transition-all duration-300 sm:max-w-[185px] lg:max-w-[205px] " +
//                 (isScrolled
//                   ? "h-[66px] lg:h-[74px]"
//                   : "h-[72px] lg:h-[90px]")
//               }
//             />
//           </Link>

//           {/* DESKTOP LINKS */}
//           <div className="hidden items-center gap-1 lg:flex xl:gap-2">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 end={item.path === "/"}
//                 className={({ isActive }) =>
//                   "group relative flex items-center px-3 py-3 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 xl:px-5 " +
//                   (isActive
//                     ? "text-[#0A2240]"
//                     : "text-[#0A2240]/65 hover:text-[#0A2240]")
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     {item.label}

//                     <span
//                       className={
//                         "absolute bottom-1 left-3 right-3 h-[2px] origin-left bg-[#B99547] transition-transform duration-300 xl:left-5 xl:right-5 " +
//                         (isActive
//                           ? "scale-x-100"
//                           : "scale-x-0 group-hover:scale-x-100")
//                       }
//                     />
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* DESKTOP CALL BUTTON */}
//           <div className="hidden shrink-0 lg:flex">
//             <a
//               href={PHONE_LINK}
//               className="group inline-flex items-center gap-3 rounded-full bg-[#0A2240] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240] xl:px-6"
//             >
//               <Phone size={16} />
//               <span>Call Now</span>
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>
//           </div>

//           {/* MOBILE ACTIONS */}
//           <div className="flex shrink-0 items-center gap-3 lg:hidden">
//             <a
//               href={PHONE_LINK}
//               aria-label="Call QuickShield Services Notting Hill"
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2240]/25 text-[#0A2240] transition-colors hover:bg-[#0A2240] hover:text-white"
//             >
//               <Phone size={19} />
//             </a>

//             <button
//               type="button"
//               onClick={() => setOpen((current) => !current)}
//               aria-label={open ? "Close menu" : "Open menu"}
//               aria-expanded={open}
//               aria-controls="quickshield-mobile-menu"
//               className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2240] text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]"
//             >
//               {open ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           id="quickshield-mobile-menu"
//           aria-hidden={!open}
//           className={
//             "absolute inset-x-0 top-full overflow-y-auto border-b border-[#B99547]/30 bg-[#E8D5AE] shadow-[0_25px_45px_rgba(10,34,64,0.18)] transition-[max-height,opacity,visibility] duration-300 ease-in-out lg:hidden " +
//             (open
//               ? "visible max-h-[calc(100dvh-82px)] opacity-100"
//               : "invisible max-h-0 opacity-0")
//           }
//         >
//           <div
//             className={
//               "px-5 pb-7 pt-6 sm:px-8 " +
//               (!open ? "pointer-events-none" : "")
//             }
//           >
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-8 bg-[#B99547]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6C35]">
//                 Explore QuickShield
//               </span>
//             </div>

//             <div className="border-t border-[#0A2240]/15">
//               {navItems.map((item, index) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   end={item.path === "/"}
//                   tabIndex={open ? 0 : -1}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     "group flex items-center justify-between border-b border-[#0A2240]/15 py-4 transition-colors duration-300 " +
//                     (isActive
//                       ? "text-[#96733B]"
//                       : "text-[#0A2240] hover:text-[#96733B]")
//                   }
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className="font-serif text-lg italic text-[#96733B]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-lg font-semibold tracking-tight">
//                       {item.label}
//                     </span>
//                   </div>

//                   <ArrowUpRight
//                     size={19}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </NavLink>
//               ))}
//             </div>

//             {/* MOBILE CONTACT DETAILS */}
//             <div className="mt-6 rounded-2xl border border-[#0A2240]/15 bg-white/20 p-5">
//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={18}
//                   className="mt-0.5 shrink-0 text-[#96733B]"
//                 />

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#96733B]">
//                     Our Location
//                   </p>

//                   <p className="mt-2 text-sm leading-6 text-[#0A2240]/75">
//                     3A Denbigh Rd, London W11 2SJ,
//                     United Kingdom
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href={PHONE_LINK}
//                 className="mt-5 flex items-center justify-between gap-3 rounded-full bg-[#0A2240] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]"
//               >
//                 <span className="flex items-center gap-3">
//                   <Phone size={17} />
//                   {PHONE_NUMBER}
//                 </span>

//                 <ArrowUpRight size={18} />
//               </a>
//             </div>

//             <div className="mt-6 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.1em] text-[#0A2240]/50">
//               <span>Notting Hill, London</span>
//               <span>QuickShield Services</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


















import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const NAVY = "#0A2240";
const GOLD = "#AC6C15";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const PHONE = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_12px_35px_rgba(0,0,0,0.18)]" : ""
      }`}
    >
      {/* TOP GOLD INFORMATION BAR */}
      <div
        className={`hidden overflow-hidden bg-[#AC6C15] transition-all duration-300 lg:block ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-[1500px] items-center justify-between gap-6 px-8 xl:px-14">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            <MapPin size={14} />
            Pest Control Services in Wimbledon, London
          </div>

          <div className="flex items-center gap-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85">
              Residential & Commercial Pest Control
            </span>

            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-xs font-bold text-white hover:opacity-80"
            >
              <Phone size={14} />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav
        aria-label="Main navigation"
        className={`relative border-b border-[#AC6C15]/40 bg-[#0A2240] transition-[height] duration-300 ${
          isScrolled ? "h-[76px] lg:h-[82px]" : "h-[84px] lg:h-[102px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-10 xl:px-14">
          {/* LOGO SECTION */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label="QuickShield Services Wimbledon - Home"
            className="group relative flex h-full shrink-0 items-center"
          >
            {/*
              The original logo is dark/gold.
              A light integrated brand area keeps it visible.
              No square icon box.
            */}
            <div className="relative flex h-full items-center bg-[#F7F5EF] px-5 sm:px-7 lg:px-8">
              <img
                src="/images/quick1.webp"
                alt="QuickShield Services Wimbledon logo"
                className={`block w-auto max-w-[150px] object-contain transition-all duration-300 sm:max-w-[180px] lg:max-w-[200px] ${
                  isScrolled ? "h-[60px] lg:h-[72px]" : "h-[68px] lg:h-[90px]"
                }`}
              />
            </div>

            <span
              aria-hidden="true"
              className="h-full w-[3px] bg-[#AC6C15]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden h-full items-center gap-1 lg:flex xl:gap-3">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group relative flex h-full items-center gap-2 px-3 transition-colors duration-300 xl:px-5 ${
                    isActive
                      ? "text-[#AC6C15]"
                      : "text-white/85 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative -top-[5px] text-[9px] font-bold ${
                        isActive
                          ? "text-[#AC6C15]"
                          : "text-white/40 group-hover:text-[#AC6C15]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span className="text-[12px] font-bold uppercase tracking-[0.12em]">
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[3px] origin-left bg-[#AC6C15] transition-transform duration-300 xl:left-5 xl:right-5 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CALL BUTTON */}
          <a
            href={PHONE_LINK}
            className="group hidden min-h-[54px] shrink-0 items-center gap-3 bg-[#AC6C15] px-5 text-white transition-colors duration-300 hover:bg-[#8F590F] lg:inline-flex xl:px-7"
          >
            <Phone size={17} />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em]">
              Call Now
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* MOBILE CONTROLS */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={PHONE_LINK}
              aria-label="Call QuickShield Services Wimbledon"
              className="flex h-11 w-11 items-center justify-center border border-[#AC6C15] text-[#AC6C15] transition-colors hover:bg-[#AC6C15] hover:text-white"
            >
              <Phone size={19} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="quickshield-mobile-menu"
              className="flex h-11 w-11 items-center justify-center bg-[#AC6C15] text-white"
            >
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="quickshield-mobile-menu"
          aria-hidden={!open}
          className={`absolute inset-x-0 top-full z-40 overflow-y-auto overscroll-contain border-t border-[#AC6C15]/40 bg-[#0A2240] transition-[max-height,opacity,visibility] duration-300 lg:hidden ${
            open
              ? "visible max-h-[calc(100dvh-76px)] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-6 pb-10 pt-8 sm:px-10 ${
              !open ? "pointer-events-none" : ""
            }`}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#AC6C15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#AC6C15]">
                Explore QuickShield
              </span>
            </div>

            <div className="border-t border-white/15">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between border-b border-white/15 py-5 ${
                      isActive
                        ? "text-[#AC6C15]"
                        : "text-white hover:text-[#AC6C15]"
                    }`
                  }
                >
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-xl italic text-[#AC6C15]">
                      0{index + 1}
                    </span>

                    <span className="text-2xl font-medium tracking-tight">
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-[#AC6C15] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </NavLink>
              ))}
            </div>

            {/* MOBILE LOCATION AND CALL */}
            <div className="mt-9 border-l-[3px] border-[#AC6C15] bg-white/5 px-6 py-7">
              <div className="flex items-start gap-4">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#AC6C15]"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#AC6C15]">
                    Wimbledon Location
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    3 Thornton Rd, London SW19 4NB,
                    United Kingdom
                  </p>
                </div>
              </div>

              <a
                href={PHONE_LINK}
                className="mt-7 flex min-h-[56px] items-center justify-between gap-4 bg-[#AC6C15] px-5 text-sm font-bold text-white"
              >
                <span className="flex items-center gap-3">
                  <Phone size={17} />
                  {PHONE}
                </span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
              <span>Wimbledon · London</span>
              <span>QuickShield Services</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
