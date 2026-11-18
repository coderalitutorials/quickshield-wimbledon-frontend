// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Securing callback line...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request logged. A specialist will call you discreetly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Connection failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "13px",
//           borderRadius: "16px",
//           padding: "14px 24px",
//           background: "#0A2240",
//           color: "#FFFFFF",
//           border: "1px solid rgba(255,255,255,0.1)",
//         },
//       }
//     );
//   };

//   return (
//     // backface-hidden aur isolate layers applied to block paint overheads
//     <section className="bg-[#C5A86B] text-[#0A2240] py-24 md:py-32 relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Luxury Geometric Elements - Render tree safe */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none transform-gpu">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:16px_16px]" />
//       </div>

//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{ top: "110px", zIndex: 999999 }}
//       />

//       <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Rewritten Content Header */}
//         <div className="max-w-4xl text-left mb-16 space-y-6">
//           <div className="flex items-center gap-4">
//             <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0A2240] bg-white/40 px-3 py-1 rounded">
//               Elite Pest Management
//             </span>
//             <div className="h-[1px] flex-1 bg-[#0A2240]/20" />
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.05]">
//             Premium Pest Eradication & <br />
//             <span className="text-white drop-shadow-sm">Discreet Asset Proofing</span>
//           </h2>

//           <p className="text-[#0A2240]/90 font-medium text-base md:text-lg max-w-3xl leading-relaxed">
//             Pesbye Services delivers premium, fast, and permanent pest control solutions tailored for luxury residential estates, private residences, and commercial sectors across Mayfair. From immediate rodent eradication to complete insect management, we ensure your property remains immaculate.
//           </p>
//         </div>

//         {/* !!! FIX: backdrop-blur-xl replaced with highly optimized flat tint to ensure layout fluidity */}
//         <div className="w-full bg-white/40 border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transform-gpu">
          
//           {/* Dashboard Meta Left Block */}
//           <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#0A2240]/10 lg:pr-8 text-left">
//             <div>
//               <h3 className="text-xs font-black tracking-widest uppercase text-[#0A2240]/60 mb-1">
//                 Deployment Protocol
//               </h3>
//               <p className="text-lg font-extrabold uppercase tracking-tight">
//                 24/7 Rapid Response
//               </p>
//             </div>
            
//             <div className="space-y-3">
//               {/* Added transform-gpu to fast track render pipelines */}
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse transform-gpu" />
//                 Unmarked Luxury Vehicles
//               </div>
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
//                 Advanced Rodent & Insect Proofing
//               </div>
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
//                 Safe, Child & Pet Friendly Protocols
//               </div>
//             </div>

//             <div className="bg-[#0A2240] text-white p-3.5 rounded-xl">
//               <p className="text-[11px] font-mono tracking-wider opacity-80 uppercase leading-tight">
//                 Emergency Line Status: Active // Specialized Mayfair Technicians On Standby
//               </p>
//             </div>
//           </div>

//           {/* Form Processing Block Right */}
//           <div className="lg:col-span-8 w-full">
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
//               <div className="sm:col-span-2 space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Your Name / Property Entity
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g. John Doe / Management Office"
//                   required
//                   className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Mayfair Postcode
//                 </label>
//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="e.g. W1K, W1J"
//                   required
//                   className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Direct Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Best number to call back"
//                   required
//                   className={`w-full bg-white/50 border rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:bg-white/80 transition-all duration-200 ${
//                     phoneError ? "border-red-600" : "border-[#0A2240]/10 focus:border-[#0A2240]"
//                   }`}
//                 />
//               </div>

//               {phoneError && (
//                 <p className="sm:col-span-2 text-red-700 text-xs font-bold mt-1 flex items-center gap-1">
//                   <span>⚠️</span> {phoneError}
//                 </p>
//               )}

//               <div className="sm:col-span-2 pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#0A2240] text-white py-4 text-xs font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-60 shadow-lg active:scale-[0.99] hover:bg-[#0A2240]/90"
//                 >
//                   {loading ? "PROCESSING REQUEST..." : "REQUEST AN IMMEDIATE CALLBACK"}
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     // Yahan apna API call logic rakhein
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Deployment confirmed. A specialist will contact you.");
//       setFormData({ name: "", postcode: "", phone: "" });
//     }, 1500);
//   };

//   return (
//     // Updated background to #b99547
//     <section className="bg-[#b99547] py-24 relative overflow-hidden">
//       {/* Top Border Line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#0A2240]" />
      
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* Left: Branding & Message */}
//         <div className="text-[#0A2240] space-y-8">
//           <div>
//             <h3 className="text-[#0A2240]/80 font-black tracking-[0.3em] uppercase text-sm mb-4">Priority Access</h3>
//             <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
//               DISCREET <br/>
//               <span className="text-[#0A2240]">ASSET</span> PROTECTION
//             </h2>
//           </div>
          
//           <p className="text-[#0A2240]/90 text-lg leading-relaxed border-l-2 border-[#0A2240] pl-6 font-medium">
//             Elite pest management for high-value properties in Purley. We operate with absolute discretion, ensuring your environment remains impeccable and secure.
//           </p>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">24/7</span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">Rapid Response</span>
//             </div>
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">100%</span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">Discreet Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Modern Compact Form */}
//         <div className="bg-[#0A2240] p-8 md:p-12 rounded-lg shadow-2xl">
//           <h4 className="text-white font-black text-2xl mb-8 uppercase">Request Consultation</h4>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input 
//               className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//               placeholder="YOUR NAME"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//             <div className="grid grid-cols-2 gap-4">
//               <input 
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="POSTCODE"
//                 value={formData.postcode}
//                 onChange={(e) => setFormData({...formData, postcode: e.target.value})}
//                 required
//               />
//               <input 
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="PHONE"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 required
//               />
//             </div>
//             <button 
//               disabled={loading}
//               className="w-full bg-[#b99547] text-[#0A2240] py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer"
//             >
//               {loading ? "INITIALIZING..." : "Secure My Property"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loadingToast = toast.loading("Submitting callback request...");

//     try {
//       const res = await axios.post(
//         "https://quickshield-backend.vercel.app/api/callback",
//         formData
//       );

//       toast.success(
//         res.data.message || "Deployment confirmed. A specialist will contact you.",
//         { id: loadingToast }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loadingToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-[#b99547] py-24 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#0A2240]" />

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         <div className="text-[#0A2240] space-y-8">
//           <div>
//             <h3 className="text-[#0A2240]/80 font-black tracking-[0.3em] uppercase text-sm mb-4">
//               Priority Access
//             </h3>

//             <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
//               DISCREET <br />
//               <span className="text-[#0A2240]">ASSET</span> PROTECTION
//             </h2>
//           </div>

//           <p className="text-[#0A2240]/90 text-lg leading-relaxed border-l-2 border-[#0A2240] pl-6 font-medium">
//             Elite pest management for high-value properties in Purley. We
//             operate with absolute discretion, ensuring your environment remains
//             impeccable and secure.
//           </p>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 24/7
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Rapid Response
//               </span>
//             </div>

//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 100%
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Discreet Service
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#0A2240] p-8 md:p-12 rounded-lg shadow-2xl">
//           <h4 className="text-white font-black text-2xl mb-8 uppercase">
//             Request Consultation
//           </h4>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               name="name"
//               className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//               placeholder="YOUR NAME"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 name="postcode"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="POSTCODE"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 name="phone"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="PHONE"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#b99547] text-[#0A2240] py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? "INITIALIZING..." : "Secure your inspection"}
//             </button>
//           </form>
//         </div>
//       </div>

//       <Toaster />
//     </section>
//   );
// }





















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { ArrowUpRight, ArrowRight, Phone, MapPin, Check, ShieldCheck } from "lucide-react";

// const PHONE = "+44 7417 502611";
// const PHONE_TEL = "+447417502611";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((previous) => ({ ...previous, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (loading) return;
//     setLoading(true);
//     const loadingToast = toast.loading("Submitting callback request...");
//     try {
//       const res = await axios.post(
//         "https://quickshield-notthinghill-backend.vercel.app/api/callback",
//         formData
//       );
//       toast.success(res.data.message || "Your callback request has been received. We'll be in touch.", { id: loadingToast });
//       setFormData({ name: "", postcode: "", phone: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong. Please try again.", { id: loadingToast });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fieldClass = "w-full min-w-0 border-0 border-b border-[#0A2240]/20 bg-transparent px-0 pb-3 pt-2 text-[15px] font-semibold text-[#0A2240] outline-none transition-colors duration-200 placeholder:font-normal placeholder:text-[#0A2240]/35 focus:border-[#B99547]";

//   return (
//     <section aria-labelledby="qs-callback-heading" className="relative isolate overflow-hidden bg-[#0A2240] text-white">
//       <style>{`
//         @keyframes qs-callback-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         .qs-callback-enter { animation: qs-callback-rise .75s ease-out both; }
//         @media (prefers-reduced-motion: reduce) { .qs-callback-enter { animation: none; } }
//       `}</style>

//       {/* Architectural detailing — lightweight CSS, no scroll-bound effects */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 -top-44 h-[520px] w-[520px] rounded-full border border-[#B99547]/15" />
//         <div className="absolute -left-20 -top-32 h-[420px] w-[420px] rounded-full border border-[#B99547]/10" />
//         <div className="absolute bottom-0 right-0 h-48 w-[45%] bg-gradient-to-t from-[#B99547]/[.07] to-transparent" />
//         <div className="absolute left-[8%] top-0 h-full w-px bg-white/[.035]" />
//       </div>

//       <div className="relative mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-[1.08fr_.92fr]">
//         {/* Editorial copy */}
//         <div className="qs-callback-enter relative flex flex-col justify-center px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:pl-20">
//           <div className="mb-10 flex items-center gap-3">
//             <span className="h-px w-10 bg-[#B99547]" />
//             <span className="text-[10px] font-bold uppercase tracking-[.26em] text-[#D9C48D]">A conversation starts here</span>
//           </div>

//           <h2 id="qs-callback-heading" className="max-w-[720px] text-[clamp(3.2rem,6.1vw,6.8rem)] font-semibold leading-[.99] tracking-[-.065em]">
//             Your property.<br />
//             <span className="font-light italic text-[#D9C48D]">Our attention.</span>
//           </h2>

//           <p className="mt-8 max-w-[500px] text-[15px] leading-8 text-white/65 sm:text-base">
//             Noticed something unusual at your property? Tell QuickShield Services Notting Hill how we can reach you. Our team can discuss your pest concern and the next steps for your home or business.
//           </p>

//           <div className="mt-11 grid max-w-[510px] gap-5 border-t border-white/15 pt-7 sm:grid-cols-2 sm:gap-7">
//             <div className="flex items-start gap-3">
//               <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B99547]/40 text-[#D9C48D]"><MapPin size={16} /></span>
//               <div><span className="block text-xs font-semibold text-white">Based in Notting Hill</span><span className="mt-1 block text-xs leading-5 text-white/50">London W11 · Nearby areas</span></div>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B99547]/40 text-[#D9C48D]"><ShieldCheck size={16} /></span>
//               <div><span className="block text-xs font-semibold text-white">Property-focused support</span><span className="mt-1 block text-xs leading-5 text-white/50">Residential & commercial enquiries</span></div>
//             </div>
//           </div>

//           <a href={`tel:${PHONE_TEL}`} className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#D9C48D] transition-colors hover:text-white">
//             <Phone size={16} /> Prefer to call? {PHONE} <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//           </a>
//         </div>

//         {/* Contrasting editorial form panel */}
//         <div className="relative bg-[#F6F3EB] px-6 py-16 text-[#0A2240] sm:px-10 sm:py-20 lg:flex lg:items-center lg:px-12 xl:px-16">
//           <div aria-hidden="true" className="absolute right-6 top-5 text-[100px] font-light leading-none text-[#0A2240]/[.045] sm:right-10 sm:text-[160px]">Q.</div>
//           <div className="relative w-full max-w-[540px] mx-auto">
//             <div className="flex items-center justify-between gap-4 border-b border-[#0A2240]/15 pb-6">
//               <span className="text-[10px] font-bold uppercase tracking-[.22em] text-[#8B713B]">QuickShield / Enquiries</span>
//               <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0A2240]/20"><ArrowUpRight size={19} /></span>
//             </div>

//             <h3 className="mt-9 max-w-md text-[clamp(2.2rem,3.4vw,3.7rem)] font-semibold leading-[1.05] tracking-[-.06em]">Request a <span className="italic font-light">callback.</span></h3>
//             <p className="mt-4 max-w-sm text-sm leading-7 text-[#0A2240]/60">Leave your details and we'll have the information needed to get back to you about your pest-control enquiry.</p>

//             <form onSubmit={handleSubmit} className="mt-9 space-y-7">
//               <div>
//                 <label htmlFor="qs-callback-name" className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#0A2240]/70">01 / Your name</label>
//                 <input id="qs-callback-name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Full name" className={fieldClass} required />
//               </div>
//               <div className="grid gap-7 sm:grid-cols-2">
//                 <div>
//                   <label htmlFor="qs-callback-postcode" className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#0A2240]/70">02 / Postcode</label>
//                   <input id="qs-callback-postcode" name="postcode" type="text" autoComplete="postal-code" value={formData.postcode} onChange={handleChange} placeholder="e.g. W11 2SJ" className={fieldClass} required />
//                 </div>
//                 <div>
//                   <label htmlFor="qs-callback-phone" className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#0A2240]/70">03 / Phone number</label>
//                   <input id="qs-callback-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="Your contact number" className={fieldClass} required />
//                 </div>
//               </div>

//               <button type="submit" disabled={loading} className="group flex min-h-[62px] w-full items-center justify-between gap-4 bg-[#0A2240] px-6 text-left text-[11px] font-bold uppercase tracking-[.16em] text-white transition-colors duration-300 hover:bg-[#17365A] disabled:cursor-not-allowed disabled:opacity-60">
//                 <span>{loading ? "Sending your request..." : "Request my callback"}</span>
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B99547] text-[#0A2240] transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={18} /></span>
//               </button>
//             </form>

//             <div className="mt-6 flex items-start gap-2 text-[11px] leading-5 text-[#0A2240]/50"><Check size={15} className="mt-0.5 shrink-0 text-[#8B713B]" />Your details will be used to respond to your callback enquiry.</div>
//           </div>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// }













import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Check,
  Clock3,
  MoveUpRight,
  MessageCircle,
} from "lucide-react";

/* ==========================================================
   QUICKSHIELD SERVICES WIMBLEDON
   CALLBACK CONCIERGE — LUXURY EDITORIAL DESIGN

   Background: #F7F5EF
   Navy:       #0A2240
   Gold:       #B99547

   Original API functionality preserved.
========================================================== */

const PHONE = "+44 7459 860336";
const PHONE_TEL = "+447459860336";

const CALLBACK_API =
  "https://quickshield-wimbledon-backend.vercel.app/api/callback";

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const loadingToast = toast.loading(
      "Submitting callback request..."
    );

    try {
      const res = await axios.post(
        CALLBACK_API,
        formData
      );

      toast.success(
        res.data.message ||
          "Your callback request has been received. We'll be in touch.",
        { id: loadingToast }
      );

      setFormData({
        name: "",
        postcode: "",
        phone: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        { id: loadingToast }
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full min-w-0 border-0 border-b border-white/25 bg-transparent px-0 pb-4 pt-3 text-[15px] font-medium text-white outline-none transition-colors duration-300 placeholder:font-normal placeholder:text-white/35 focus:border-[#B99547] focus:ring-0";

  return (
    <section
      aria-labelledby="qsw-callback-heading"
      className="qsw-callback relative isolate overflow-hidden bg-[#F7F5EF] text-[#0A2240]"
    >
      <style>{`
        @keyframes qsw-callback-rise {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes qsw-callback-line {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes qsw-callback-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        .qsw-callback .qsw-callback-enter {
          animation: qsw-callback-rise
            900ms cubic-bezier(.2,.75,.2,1) both;
        }

        .qsw-callback .qsw-callback-delay-1 {
          animation-delay: 120ms;
        }

        .qsw-callback .qsw-callback-delay-2 {
          animation-delay: 240ms;
        }

        .qsw-callback .qsw-callback-delay-3 {
          animation-delay: 360ms;
        }

        .qsw-callback .qsw-callback-draw {
          transform-origin: left;
          animation: qsw-callback-line
            1100ms cubic-bezier(.2,.75,.2,1) both;
        }

        .qsw-callback .qsw-callback-floating {
          animation: qsw-callback-float
            7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsw-callback .qsw-callback-enter,
          .qsw-callback .qsw-callback-draw,
          .qsw-callback .qsw-callback-floating {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Architectural grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
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

        {/* Oversized watermark */}

        <span className="absolute -left-12 top-[12%] select-none text-[35vw] font-black leading-none tracking-[-0.12em] text-[#0A2240]/[0.025]">
          Q
        </span>

        {/* Gold architectural geometry */}

        <div className="absolute right-[7%] top-[9%] h-[180px] w-[180px] border-r border-t border-[#B99547]/30" />

        <div className="absolute bottom-[10%] left-[5%] h-[210px] w-[210px] border-b border-l border-[#B99547]/25" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* SECTION INTRO */}

        <div className="qsw-callback-enter flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/15 pb-7">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#B99547]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#98763A]">
              QuickShield / Wimbledon
            </span>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0A2240]/45">
            Callback Enquiries · SW19
          </span>
        </div>

        {/* ==================================================
            OVERSIZED EDITORIAL HEADLINE
        ================================================== */}

        <div className="relative pt-14 lg:pt-20">

          <div className="qsw-callback-enter qsw-callback-delay-1">
            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98763A]">
              <MessageCircle size={17} />

              A Conversation Starts Here
            </span>
          </div>

          <h2
            id="qsw-callback-heading"
            className="qsw-callback-enter qsw-callback-delay-1 mt-8 max-w-[1250px] text-[clamp(3.6rem,8vw,9rem)] font-medium uppercase leading-[0.94] tracking-[-0.08em]"
          >
            LET'S TALK
            <span className="block">
              ABOUT YOUR
            </span>
            <span className="block font-serif font-normal italic normal-case text-[#B99547]">
              property.
            </span>
          </h2>

          <div className="qsw-callback-draw mt-10 h-[2px] w-28 bg-[#B99547]" />
        </div>

        {/* ==================================================
            INTRO TEXT + FORM
        ================================================== */}

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

          {/* LEFT EDITORIAL COLUMN */}

          <div className="qsw-callback-enter qsw-callback-delay-2 lg:sticky lg:top-32">

            <p className="max-w-[450px] text-xl font-medium leading-[1.6] tracking-[-0.025em] sm:text-2xl">
              A pest concern deserves a clear
              conversation — not unnecessary
              complications.
            </p>

            <p className="mt-7 max-w-[450px] text-[15px] leading-8 text-[#0A2240]/65">
              Noticed signs of pest activity at your
              home or business? Leave your details
              and QuickShield Services Wimbledon
              can get back to you to discuss the
              situation and possible next steps.
            </p>

            {/* LOCATION DETAIL */}

            <div className="mt-12 space-y-7 border-t border-[#0A2240]/15 pt-8">

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B99547]/50 text-[#98763A]">
                  <MapPin size={20} strokeWidth={1.6} />
                </span>

                <div>
                  <span className="block text-sm font-semibold">
                    Based in Wimbledon
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-[#0A2240]/55">
                    3 Thornton Rd,
                    <br />
                    London SW19 4NB
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B99547]/50 text-[#98763A]">
                  <Clock3 size={20} strokeWidth={1.6} />
                </span>

                <div>
                  <span className="block text-sm font-semibold">
                    Request a Callback
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-[#0A2240]/55">
                    Share your contact details
                    and tell us how to reach you.
                  </span>
                </div>
              </div>
            </div>

            {/* PHONE LINK */}

            <a
              href={`tel:${PHONE_TEL}`}
              className="group mt-11 inline-flex items-center gap-4 border-b-2 border-[#B99547] pb-3 text-sm font-bold transition-colors hover:text-[#98763A]"
            >
              <Phone size={19} className="text-[#B99547]" />

              {PHONE}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* ==================================================
              NAVY CALLBACK FORM
          ================================================== */}

          <div className="qsw-callback-enter qsw-callback-delay-3 relative">

            {/* Offset gold outline */}

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border border-[#B99547]/65 sm:-right-6 sm:-top-6"
            />

            {/* Form panel */}

            <div className="relative overflow-hidden bg-[#0A2240] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-14 lg:py-16">

              {/* Decorative large number */}

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-10 select-none font-serif text-[180px] italic leading-none text-white/[0.035] sm:text-[240px]"
              >
                01
              </span>

              {/* Form header */}

              <div className="relative flex items-center justify-between gap-5 border-b border-white/20 pb-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                  Direct Enquiry
                </span>

                <span className="flex h-11 w-11 items-center justify-center border border-[#B99547]/40 text-[#B99547]">
                  <MoveUpRight size={21} />
                </span>
              </div>

              <h3 className="relative mt-10 max-w-[550px] text-[clamp(2.5rem,4vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.065em]">
                Request your
                <span className="block font-serif font-normal italic text-[#B99547]">
                  callback.
                </span>
              </h3>

              <p className="relative mt-6 max-w-[440px] text-[15px] leading-8 text-white/60">
                Complete the short form below
                and we'll have the information
                needed to respond to your enquiry.
              </p>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="relative mt-12 space-y-9"
              >

                {/* NAME */}

                <div>
                  <label
                    htmlFor="qsw-callback-name"
                    className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]"
                  >
                    01 / Your Name
                  </label>

                  <input
                    id="qsw-callback-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={fieldClass}
                    required
                  />
                </div>

                {/* POSTCODE + PHONE */}

                <div className="grid gap-9 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="qsw-callback-postcode"
                      className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]"
                    >
                      02 / Postcode
                    </label>

                    <input
                      id="qsw-callback-postcode"
                      name="postcode"
                      type="text"
                      autoComplete="postal-code"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. SW19 4NB"
                      className={fieldClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="qsw-callback-phone"
                      className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]"
                    >
                      03 / Phone Number
                    </label>

                    <input
                      id="qsw-callback-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your contact number"
                      className={fieldClass}
                      required
                    />
                  </div>
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex min-h-[66px] w-full items-center justify-between gap-5 bg-[#B99547] px-7 text-left text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F7F5EF] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {loading
                      ? "Sending your request..."
                      : "Request My Callback"}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center bg-[#0A2240] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </button>
              </form>

              {/* PRIVACY NOTE */}

              <div className="relative mt-8 flex items-start gap-3 border-t border-white/15 pt-6 text-xs leading-6 text-white/50">
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#B99547]"
                />

                Your details will be used
                to respond to your callback enquiry.
              </div>
            </div>

            {/* Floating editorial label */}

            <div className="qsw-callback-floating absolute -bottom-5 right-5 hidden bg-[#B99547] px-7 py-4 text-[#0A2240] shadow-xl sm:block">
              <span className="font-serif text-2xl italic">
                Wimbledon · SW19
              </span>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM EDITORIAL STRIP
        ================================================== */}

        <div className="mt-28 grid gap-8 border-t border-[#0A2240]/15 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A2240]/60">
                Wimbledon & London
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#B99547]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A2240]/60">
                Residential & Commercial
              </span>
            </div>
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex w-fit items-center gap-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#98763A] transition-colors hover:text-[#0A2240]"
          >
            Prefer a Phone Call?

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      <Toaster position="top-right" />
    </section>
  );
}
