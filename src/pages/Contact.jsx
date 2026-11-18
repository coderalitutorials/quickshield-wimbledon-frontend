




// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Mail, PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control", "Bed Bugs Heat Treatment", "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment", "Rats & Mice Proofing", "Flea Eradication",
//     "Wasp & Bee Removal", "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization", "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     { question: "How quickly can your team arrive?", answer: "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately." },
//     { question: "Are your treatments safe for pets?", answer: "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations." },
//     { question: "Do you offer a guarantee?", answer: "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed." },
//     { question: "Do you serve commercial businesses?", answer: "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation." }
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const loaderToast = toast.loading("Processing your request...");
//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       toast.success(res.data.message || "Request received successfully!", { id: loaderToast });
//       setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", { id: loaderToast });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* HERO */}
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">QuickShield<br />Emergency Intake</h1>
//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">Secure your premises with London's leading rapid response pest control team.</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
          
//           {/* FORM COLUMN */}
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">Initiate Protocol</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//                 <input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               </div>
//               <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <select name="service" onChange={handleChange} value={formData.service} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white">
//                 <option value="" className="text-black">Select Service Required...</option>
//                 {services.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
//               </select>
//               <textarea name="message" rows="4" placeholder="Briefly describe the infestation..." onChange={handleChange} value={formData.message} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <button disabled={loading} className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all">
//                 {loading ? "Transmitting..." : "Dispatch Request"} <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           {/* RIGHT INFO & MAP */}
//           <div className="space-y-8">
//             {/* MAP SECTION - Purley, London */}
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe 
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
//               </iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">QuickShield Operational Data</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4"><MapPin className="text-[#0A2240]" /> <span className="font-bold">Purley & Greater London</span></div>
//                 <div className="flex items-center gap-4"><PhoneCall className="text-[#0A2240]" /> <span className="font-bold">07405 025488</span></div>
//                 <div className="flex items-center gap-4"><Clock className="text-[#0A2240]" /> <span className="font-bold">24/7 Emergency Deployment</span></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* GOOGLE SECTION */}
//         {/* <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified 5-Star Service</div>
//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">Trusted in Purley & London</h3>
//           </div>
//           <a href="#" target="_blank" className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547]">Visit Google Profile</a>
//         </section> */}


//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//   <div className="space-y-4">
//     <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//       Verified 5-Star Service
//     </div>

//     <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//       Trusted in Purley & London
//     </h3>
//   </div>

//   <a
//     href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//   >
//     Visit Google Profile
//   </a>
// </section>

//         {/* FAQ SECTION */}
//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div key={idx} className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]">
//                   {faq.question} <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>
//                 {activeFaq === idx && <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">{faq.answer}</div>}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive?",
//       answer:
//         "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately.",
//     },
//     {
//       question: "Are your treatments safe for pets?",
//       answer:
//         "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations.",
//     },
//     {
//       question: "Do you offer a guarantee?",
//       answer:
//         "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed.",
//     },
//     {
//       question: "Do you serve commercial businesses?",
//       answer:
//         "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Processing your request...");

//     try {
//       const res = await axios.post(
//         "https://quickshield-backend.vercel.app/api/contact",
//         formData
//       );

//       toast.success(res.data.message || "Request received successfully!", {
//         id: loaderToast,
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loaderToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />

//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">
//             QuickShield
//             <br />
//             Emergency Intake
//           </h1>

//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">
//             Secure your premises with London&apos;s leading rapid response pest
//             control team.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">
//               Initiate Protocol
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   value={formData.name}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   value={formData.phone}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   value={formData.email}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="postcode"
//                   placeholder="Postcode"
//                   onChange={handleChange}
//                   value={formData.postcode}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <select
//                 name="service"
//                 onChange={handleChange}
//                 value={formData.service}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white"
//               >
//                 <option value="" className="text-black">
//                   Select Service Required...
//                 </option>

//                 {services.map((s) => (
//                   <option key={s} value={s} className="text-black">
//                     {s}
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Briefly describe the infestation..."
//                 onChange={handleChange}
//                 value={formData.message}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-60"
//               >
//                 {loading ? "Transmitting..." : "Dispatch Request"}
//                 <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">
//                 QuickShield Operational Data
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <MapPin className="text-[#0A2240]" />
//                   <span className="font-bold">Purley & Greater London</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <PhoneCall className="text-[#0A2240]" />
//                   <span className="font-bold">07405 025488</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Clock className="text-[#0A2240]" />
//                   <span className="font-bold">24/7 Emergency Deployment</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//               Verified 5-Star Service
//             </div>

//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//               Trusted in Purley & London
//             </h3>
//           </div>

//           <a
//             href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//           >
//             Visit Google Profile
//           </a>
//         </section>

//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]"
//                 >
//                   {faq.question}
//                   <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>

//                 {activeFaq === idx && (
//                   <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;























// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   Mail,
//   Plus,
//   Minus,
//   ChevronDown,
//   MessageSquareText,
// } from "lucide-react";

// const PHONE = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// const ADDRESS =
//   "3A Denbigh Rd, London W11 2SJ, United Kingdom";

// const SERVICES = [
//   "Ants Control",
//   "Bed Bugs Heat Treatment",
//   "Carpet Moth & Beetle Treatment",
//   "Cockroach Gel Treatment",
//   "Rats & Mice Proofing",
//   "Flea Eradication",
//   "Wasp & Bee Removal",
//   "Squirrel Exclusion & Proofing",
//   "Commercial Kitchen Deep Sanitization",
//   "Bird Netting & Spikes Installation",
// ];

// const FAQS = [
//   {
//     question: "How do I arrange a pest control visit?",
//     answer:
//       "You can call QuickShield Services Notting Hill or complete the enquiry form on this page. Share the pest issue, your postcode and your contact details so the team can discuss the next steps.",
//   },
//   {
//     question: "What information should I include in my enquiry?",
//     answer:
//       "Tell us which pests you have noticed, where you have seen activity, when the issue began and whether the property is residential or commercial. Photos or additional details can also be discussed when we contact you.",
//   },
//   {
//     question: "Can you help with commercial pest control?",
//     answer:
//       "You can contact us about pest concerns affecting commercial premises, including offices, shops and hospitality properties. The appropriate service will depend on the property and the pest issue.",
//   },
//   {
//     question: "Are pest treatments safe for children and pets?",
//     answer:
//       "Safety precautions depend on the pest, treatment method and property conditions. Always discuss children, pets and any specific concerns before treatment so suitable instructions can be provided.",
//   },
//   {
//     question: "Do you offer pest prevention advice?",
//     answer:
//       "Depending on the issue, practical recommendations may include reducing food sources, addressing access points and identifying conditions that encourage pest activity.",
//   },
// ];

// const inputClass =
//   "peer w-full min-w-0 border-0 border-b border-[#0A2240]/20 bg-transparent px-0 pb-4 pt-3 text-[15px] font-medium text-[#0A2240] outline-none transition-colors duration-300 placeholder:text-[#0A2240]/35 focus:border-[#B99547]";

// const fieldLabelClass =
//   "mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A2240]/60";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) return;

//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your enquiry..."
//     );

//     try {
//       const response = await axios.post(
//         "https://quickshield-notthinghill-backend.vercel.app/api/contact",
//         formData
//       );

//       toast.success(
//         response.data?.message ||
//           "Your enquiry has been sent successfully.",
//         { id: loaderToast }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Unable to send your enquiry. Please try again or call us.",
//         { id: loaderToast }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F7F5F0] text-[#0A2240]">
//       <Toaster position="top-right" />

//       {/* ================================= */}
//       {/* 01 — CINEMATIC CONTACT HERO */}
//       {/* ================================= */}
//       <section className="relative isolate overflow-hidden bg-[#0A2240] pb-24 pt-36 text-white sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10"
//         >
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(185,149,71,0.18),transparent_48%)]" />

//           <div className="absolute -right-48 -top-44 h-[700px] w-[700px] rounded-full border border-[#B99547]/20" />

//           <div className="absolute -right-24 -top-20 h-[510px] w-[510px] rounded-full border border-[#B99547]/10" />

//           <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
//         </div>

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <nav
//             aria-label="Breadcrumb"
//             className="mb-14 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] sm:mb-20"
//           >
//             <Link
//               to="/"
//               className="text-white/50 transition-colors hover:text-[#E5C98D]"
//             >
//               Home
//             </Link>

//             <span className="h-px w-6 bg-[#B99547]" />

//             <span className="text-[#E5C98D]">
//               Contact Us
//             </span>
//           </nav>

//           <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-px w-11 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E5C98D]">
//                   QuickShield Services Notting Hill
//                 </span>
//               </div>

//               <h1 className="text-[clamp(3.7rem,8vw,9rem)] font-medium leading-[0.95] tracking-[-0.075em]">
//                 LET'S
//                 <br />
//                 <span className="font-serif font-normal italic text-[#E5C98D]">
//                   connect.
//                 </span>
//               </h1>
//             </div>

//             <div className="lg:pb-3">
//               <p className="max-w-md border-l-2 border-[#B99547] pl-6 text-base leading-8 text-white/70 sm:text-lg">
//                 Have a pest concern at your property?
//                 Tell us what's happening. We're here to
//                 help you explore the next steps.
//               </p>

//               <a
//                 href={PHONE_LINK}
//                 className="group mt-8 inline-flex items-center gap-4 pl-6 text-lg font-semibold text-white transition-colors hover:text-[#E5C98D]"
//               >
//                 <Phone size={19} className="text-[#E5C98D]" />

//                 {PHONE}

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>
//             </div>
//           </div>

//           <div className="mt-16 flex items-center justify-between gap-5 border-t border-white/20 pt-6 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45 sm:mt-24">
//             <span>Notting Hill · London</span>

//             <a
//               href="#contact-form"
//               className="inline-flex items-center gap-3 transition-colors hover:text-white"
//             >
//               Send an Enquiry
//               <ChevronDown size={16} className="text-[#E5C98D]" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================================= */}
//       {/* 02 — CONTACT FORM + INFORMATION */}
//       {/* ================================= */}
//       <section
//         id="contact-form"
//         className="scroll-mt-24 py-24 sm:py-32 lg:py-36"
//       >
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
//             {/* LEFT — INTRO & DETAILS */}
//             <div>
//               <div className="mb-7 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#96733B]">
//                   01 / Get in Touch
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//                 Tell us
//                 <br />
//                 <span className="font-serif font-normal italic text-[#B99547]">
//                   what's going on.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-base leading-8 text-[#586474]">
//                 Complete the form with your contact details
//                 and a brief description of the pest issue.
//                 QuickShield Services Notting Hill can then
//                 respond to your enquiry.
//               </p>

//               <div className="mt-12 space-y-0 border-t border-[#0A2240]/15">
//                 <a
//                   href={PHONE_LINK}
//                   className="group flex items-start gap-5 border-b border-[#0A2240]/15 py-7"
//                 >
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B99547]/40 text-[#96733B] transition-colors group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
//                     <Phone size={19} />
//                   </div>

//                   <div className="min-w-0">
//                     <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#96733B]">
//                       Speak to Us
//                     </p>

//                     <p className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-[#96733B]">
//                       {PHONE}
//                     </p>
//                   </div>

//                   <ArrowUpRight
//                     size={19}
//                     className="ml-auto mt-3 shrink-0 text-[#96733B]"
//                   />
//                 </a>

//                 <div className="flex items-start gap-5 border-b border-[#0A2240]/15 py-7">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B99547]/40 text-[#96733B]">
//                     <MapPin size={19} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#96733B]">
//                       Our Location
//                     </p>

//                     <address className="mt-2 text-[15px] font-medium not-italic leading-7">
//                       {ADDRESS}
//                     </address>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-5 border-b border-[#0A2240]/15 py-7">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B99547]/40 text-[#96733B]">
//                     <MessageSquareText size={19} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#96733B]">
//                       Online Enquiries
//                     </p>

//                     <p className="mt-2 text-[15px] leading-7 text-[#586474]">
//                       Use our contact form to describe
//                       your pest concern.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — FORM */}
//             <div className="relative bg-white px-6 py-10 shadow-[0_20px_70px_rgba(10,34,64,0.06)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
//               <div className="absolute left-0 top-0 h-1 w-28 bg-[#B99547]" />

//               <div className="mb-11 flex flex-col gap-5 border-b border-[#0A2240]/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
//                 <div>
//                   <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#96733B]">
//                     Your Enquiry
//                   </p>

//                   <h3 className="text-3xl font-medium tracking-[-0.055em] sm:text-4xl">
//                     How can we help?
//                   </h3>
//                 </div>

//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E9D4] text-[#96733B]">
//                   <Mail size={21} strokeWidth={1.6} />
//                 </span>
//               </div>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-9"
//               >
//                 {/* NAME + PHONE */}
//                 <div className="grid gap-8 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="contact-name"
//                       className={fieldLabelClass}
//                     >
//                       Full Name *
//                     </label>

//                     <input
//                       id="contact-name"
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your full name"
//                       autoComplete="name"
//                       required
//                       className={inputClass}
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="contact-phone"
//                       className={fieldLabelClass}
//                     >
//                       Phone Number *
//                     </label>

//                     <input
//                       id="contact-phone"
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your contact number"
//                       autoComplete="tel"
//                       required
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 {/* EMAIL + POSTCODE */}
//                 <div className="grid gap-8 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="contact-email"
//                       className={fieldLabelClass}
//                     >
//                       Email Address *
//                     </label>

//                     <input
//                       id="contact-email"
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       autoComplete="email"
//                       required
//                       className={inputClass}
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="contact-postcode"
//                       className={fieldLabelClass}
//                     >
//                       Property Postcode *
//                     </label>

//                     <input
//                       id="contact-postcode"
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. W11 2SJ"
//                       autoComplete="postal-code"
//                       required
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 {/* SERVICE */}
//                 <div>
//                   <label
//                     htmlFor="contact-service"
//                     className={fieldLabelClass}
//                   >
//                     Service Required *
//                   </label>

//                   <div className="relative">
//                     <select
//                       id="contact-service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className={
//                         inputClass +
//                         " appearance-none pr-10"
//                       }
//                     >
//                       <option value="">
//                         Select a pest control service
//                       </option>

//                       {SERVICES.map((service) => (
//                         <option
//                           key={service}
//                           value={service}
//                         >
//                           {service}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown
//                       size={19}
//                       className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#96733B]"
//                     />
//                   </div>
//                 </div>

//                 {/* MESSAGE */}
//                 <div>
//                   <label
//                     htmlFor="contact-message"
//                     className={fieldLabelClass}
//                   >
//                     Tell Us About the Problem *
//                   </label>

//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Describe the pest activity, where you've noticed it and anything else we should know..."
//                     required
//                     className={
//                       inputClass +
//                       " resize-y"
//                     }
//                   />
//                 </div>

//                 {/* SUBMIT */}
//                 <div className="border-t border-[#0A2240]/10 pt-8">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group flex w-full items-center justify-between gap-5 bg-[#0A2240] px-7 py-5 text-left text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     <span>
//                       {loading
//                         ? "Sending Your Enquiry..."
//                         : "Send Your Enquiry"}
//                     </span>

//                     <ArrowUpRight
//                       size={21}
//                       className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </button>

//                   <p className="mt-5 text-xs leading-6 text-[#586474]">
//                     Your information will be used to
//                     respond to your pest control enquiry.
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================================= */}
//       {/* 03 — LOCATION SECTION */}
//       {/* ================================= */}
//       <section className="bg-[#EDE9E0] py-24 sm:py-28 lg:py-36">
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
//             <div>
//               <div className="mb-7 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#96733B]">
//                   02 / Find Us
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3.1rem,6vw,6.5rem)] font-medium leading-[1.04] tracking-[-0.065em]">
//                 Based in
//                 <br />
//                 <span className="font-serif font-normal italic text-[#B99547]">
//                   Notting Hill.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-md text-base leading-8 text-[#586474]">
//               QuickShield Services Notting Hill is
//               based at 3A Denbigh Road, London W11 2SJ.
//               Contact us about pest control enquiries
//               for your property.
//             </p>
//           </div>

//           {/* MAP */}
//           <div className="relative overflow-hidden border border-[#0A2240]/10 bg-[#D9D4C9]">
//             <iframe
//               title="QuickShield Services Notting Hill location map"
//               src="https://www.google.com/maps?q=3A%20Denbigh%20Rd%2C%20London%20W11%202SJ%2C%20United%20Kingdom&output=embed"
//               className="block h-[360px] w-full border-0 sm:h-[480px] lg:h-[560px]"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//             />
//           </div>

//           <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-start gap-3">
//               <MapPin
//                 size={19}
//                 className="mt-1 shrink-0 text-[#96733B]"
//               />

//               <span className="text-sm font-medium leading-7">
//                 {ADDRESS}
//               </span>
//             </div>

           
//           </div>
//         </div>
//       </section>

//       {/* ================================= */}
//       {/* 04 — FAQ SECTION */}
//       {/* ================================= */}
//       <section className="bg-[#F7F5F0] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
//           <div>
//             <div className="mb-7 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#96733B]">
//                 03 / Common Questions
//               </span>
//             </div>

//             <h2 className="text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//               A few things
//               <br />
//               <span className="font-serif font-normal italic text-[#B99547]">
//                 worth knowing.
//               </span>
//             </h2>

//             <p className="mt-8 max-w-sm text-base leading-8 text-[#586474]">
//               Answers to common questions about
//               contacting QuickShield Services and
//               discussing your pest control needs.
//             </p>
//           </div>

//           <div className="border-t border-[#0A2240]/20">
//             {FAQS.map((faq, index) => {
//               const isOpen = activeFaq === index;

//               return (
//                 <div
//                   key={faq.question}
//                   className="border-b border-[#0A2240]/20"
//                 >
//                   <button
//                     type="button"
//                     aria-expanded={isOpen}
//                     aria-controls={`contact-faq-${index}`}
//                     onClick={() =>
//                       setActiveFaq(
//                         isOpen ? null : index
//                       )
//                     }
//                     className="group flex w-full items-center justify-between gap-6 py-7 text-left sm:py-9"
//                   >
//                     <span className="flex items-start gap-5">
//                       <span className="mt-1 text-xs font-semibold text-[#96733B]">
//                         0{index + 1}
//                       </span>

//                       <span className="text-lg font-medium leading-7 tracking-[-0.03em] transition-colors group-hover:text-[#96733B] sm:text-xl">
//                         {faq.question}
//                       </span>
//                     </span>

//                     <span
//                       className={
//                         "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 " +
//                         (isOpen
//                           ? "border-[#B99547] bg-[#B99547] text-[#0A2240]"
//                           : "border-[#0A2240]/20 text-[#0A2240] group-hover:border-[#B99547]")
//                       }
//                     >
//                       {isOpen ? (
//                         <Minus size={18} />
//                       ) : (
//                         <Plus size={18} />
//                       )}
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div
//                       id={`contact-faq-${index}`}
//                       className="pb-8 pl-8 pr-12 sm:pl-10"
//                     >
//                       <p className="max-w-xl text-[15px] leading-8 text-[#586474]">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================================= */}
//       {/* 05 — FINAL CONTACT STRIP */}
//       {/* ================================= */}
//       <section className="relative overflow-hidden bg-[#0A2240] py-20 text-white sm:py-24 lg:py-28">
//         <div className="pointer-events-none absolute -right-32 -top-48 h-[550px] w-[550px] rounded-full border border-[#B99547]/15" />

//         <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16">
//           <div>
//             <div className="mb-6 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                 Prefer to Speak Directly?
//               </span>
//             </div>

//             <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//               We're a call
//               <br />
//               <span className="font-serif font-normal italic text-[#E5C98D]">
//                 away.
//               </span>
//             </h2>
//           </div>

//           <a
//             href={PHONE_LINK}
//             className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-colors duration-300 hover:bg-white"
//           >
//             <Phone size={18} />
//             Call {PHONE}

//             <ArrowUpRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }






















import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  ChevronDown,
  Plus,
  Minus,
  Send,
  MessageCircle,
  MoveDownRight,
} from "lucide-react";

const COMPANY = "QuickShield Services Wimbledon";
const PHONE = "+44 7459 860336";
const PHONE_LINK = "tel:+447459860336";
const ADDRESS = "3 Thornton Rd, London SW19 4NB, United Kingdom";

// Original backend endpoint preserved
const API_URL =
  "https://quickshield-wimbledon-backend.vercel.app/api/contact";

const SERVICES = [
  "Ants Control",
  "Bed Bugs Heat Treatment",
  "Carpet Moth & Beetle Treatment",
  "Cockroach Gel Treatment",
  "Rats & Mice Proofing",
  "Flea Eradication",
  "Wasp & Bee Removal",
  "Squirrel Exclusion & Proofing",
  "Commercial Kitchen Deep Sanitization",
  "Bird Netting & Spikes Installation",
];

const FAQS = [
  {
    question: "What is the best way to contact QuickShield Services Wimbledon?",
    answer:
      "You can call us directly or use the enquiry form on this page. Include your contact information, postcode and a description of the pest concern so we can discuss the next steps.",
  },
  {
    question: "What details should I provide about the pest problem?",
    answer:
      "Let us know which pest you suspect, where you have noticed activity, how long the issue has been occurring and whether the property is residential or commercial.",
  },
  {
    question: "Can I enquire about pest control for a business?",
    answer:
      "Yes. You can contact QuickShield Services Wimbledon about pest concerns affecting offices, shops, hospitality premises and other commercial environments. The appropriate approach will depend on the situation.",
  },
  {
    question: "What should I know about treatment precautions?",
    answer:
      "Precautions vary according to the treatment method and property conditions. Please tell us about children, pets or any other relevant circumstances so suitable guidance can be discussed.",
  },
  {
    question: "Can you advise on preventing future pest activity?",
    answer:
      "Depending on the pest issue, prevention considerations may include reducing access points, improving storage practices and addressing conditions that encourage pest activity.",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  service: "",
  message: "",
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    if (node.getBoundingClientRect().top < window.innerHeight + 100) {
      setVisible(true);
      return;
    }

    setEnabled(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        enabled
          ? {
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translate3d(0,0,0)"
                : "translate3d(0,24px,0)",
              transition:
                "opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1)",
              transitionDelay: visible ? `${delay}ms` : "0ms",
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
      className={`flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-white/65" : "text-[#0A2240]/60"
      }`}
    >
      <span className="text-[#B99547]">{number}</span>
      <span
        className={`h-px w-8 ${
          light ? "bg-white/25" : "bg-[#0A2240]/20"
        }`}
      />
      <span>{children}</span>
    </div>
  );
}

const fieldClass =
  "w-full min-w-0 rounded-none border-0 border-b border-[#0A2240]/25 bg-transparent px-0 pb-4 pt-3 text-[15px] font-medium text-[#0A2240] outline-none transition-colors duration-300 placeholder:text-[#0A2240]/40 focus:border-[#0A2240]";

const labelClass =
  "block text-[10px] font-bold uppercase tracking-[0.17em] text-[#0A2240]/70";

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // IMPORTANT:
  // No document.title useEffect here.
  // App.jsx centrally manages browser titles and SEO.

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
    const loaderToast = toast.loading("Sending your enquiry...");

    try {
      const response = await axios.post(API_URL, formData);

      toast.success(
        response.data?.message ||
          "Your enquiry has been sent successfully.",
        { id: loaderToast }
      );

      setFormData({ ...initialForm });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to send your enquiry. Please try again or call us.",
        { id: loaderToast }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#F7F5F0] text-[#0A2240]">
      <Toaster position="top-right" />

      {/* 01 — CONTACT HERO */}
      <section className="relative overflow-hidden bg-[#F7F5F0]">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[22%] border-l border-[#0A2240]/10 lg:block" />
        <div className="pointer-events-none absolute right-[22%] top-0 hidden h-full w-[22%] border-l border-[#0A2240]/10 lg:block" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-36 sm:px-10 lg:px-16 lg:pb-28 lg:pt-44">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#0A2240]/20 pb-5">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link
                to="/"
                className="transition-colors hover:text-[#B99547]"
              >
                Home
              </Link>
              <span className="text-[#B99547]">/</span>
              <span className="text-[#0A2240]/50">Contact</span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/50">
              Wimbledon · London
            </span>
          </div>

          <div className="relative pt-16 lg:pt-20">
            <Reveal>
              <SectionLabel number="01">
                Start a Conversation
              </SectionLabel>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-10 max-w-[1400px] text-[clamp(4.2rem,10.5vw,11.5rem)] font-semibold uppercase leading-[0.83] tracking-[-0.09em]">
                LET'S TALK
                <span className="block text-[#B99547]">
                  PEST CONTROL.
                </span>
              </h1>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-[#0A2240]/20 pt-10 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-20">
              <Reveal>
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#0A2240] text-[#B99547]">
                    <MessageCircle size={25} strokeWidth={1.5} />
                  </div>

                  <p className="max-w-[650px] text-xl font-medium leading-[1.55] tracking-[-0.025em] sm:text-2xl">
                    Something happening at your property?
                    Tell us what you've noticed and let's
                    discuss the next steps.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex flex-col gap-5 lg:items-end">
                  <a
                    href={PHONE_LINK}
                    className="group inline-flex items-center gap-4 text-2xl font-semibold tracking-[-0.04em] transition-colors hover:text-[#B99547] sm:text-3xl"
                  >
                    <Phone size={24} className="text-[#B99547]" />
                    {PHONE}
                    <ArrowUpRight
                      size={21}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0A2240]/60 transition-colors hover:text-[#B99547]"
                  >
                    Send an Online Enquiry
                    <MoveDownRight size={19} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — ENQUIRY FORM */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#0A2240] py-20 text-white sm:py-28 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel number="02" light>
                The Enquiry Studio
              </SectionLabel>

              <h2 className="mt-10 text-[clamp(3.2rem,5.5vw,6.5rem)] font-medium leading-[1.04] tracking-[-0.07em]">
                TELL US
                <br />
                WHAT'S
                <br />
                <span className="font-serif font-normal italic text-[#B99547]">
                  happening.
                </span>
              </h2>

              <p className="mt-9 max-w-[410px] text-base leading-8 text-white/65">
                A few useful details can help us better
                understand your enquiry. Describe the pest
                concern, the affected property and how we
                can reach you.
              </p>

              <div className="mt-14 space-y-8 border-t border-white/20 pt-9">
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl italic text-[#B99547]">
                    01
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Share the concern
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Let us know which pests you've noticed
                      and where activity is occurring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl italic text-[#B99547]">
                    02
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Tell us the location
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Include your property postcode to
                      help identify the location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl italic text-[#B99547]">
                    03
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Submit your enquiry
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Provide your contact details so the
                      team can respond.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-14 border-l-2 border-[#B99547] pl-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B99547]">
                  Prefer a phone call?
                </p>
                <a
                  href={PHONE_LINK}
                  className="mt-3 inline-flex items-center gap-3 text-xl font-semibold transition-colors hover:text-[#B99547]"
                >
                  {PHONE}
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative bg-[#B99547] p-6 text-[#0A2240] sm:p-10 lg:p-14">
              <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#0A2240]/20" />

              <div className="relative mb-12 flex items-start justify-between gap-6 border-b border-[#0A2240]/25 pb-9">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/70">
                    QuickShield / Wimbledon
                  </p>
                  <h3 className="mt-5 text-[clamp(2.4rem,4vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.065em]">
                    Your enquiry
                    <span className="block font-serif font-normal italic text-[#F7F5F0]">
                      starts here.
                    </span>
                  </h3>
                </div>

                <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:block">
                  Form / 01
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={labelClass}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className={labelClass}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      autoComplete="tel"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className={labelClass}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-postcode"
                      className={labelClass}
                    >
                      Property Postcode *
                    </label>
                    <input
                      id="contact-postcode"
                      name="postcode"
                      type="text"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. SW19 4NB"
                      autoComplete="postal-code"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className={labelClass}
                  >
                    Service Required *
                  </label>

                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${fieldClass} appearance-none pr-10`}
                    >
                      <option value="">
                        Select a pest control service
                      </option>

                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={19}
                      className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className={labelClass}
                  >
                    Describe Your Pest Concern *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you've noticed, where the activity is happening and any other useful details..."
                    required
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <div className="border-t border-[#0A2240]/25 pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-between gap-6 bg-[#0A2240] px-7 py-6 text-left text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#F7F5F0] hover:text-[#0A2240] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {loading
                        ? "Sending Your Enquiry..."
                        : "Submit Your Enquiry"}
                    </span>
                    <Send
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <p className="mt-5 text-xs leading-6 text-[#0A2240]/70">
                    Your details will be used to respond
                    to your pest control enquiry.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — CONTACT METHODS */}
      <section className="bg-[#F7F5F0] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="03">
              Other Ways to Reach Us
            </SectionLabel>

            <h2 className="mt-10 text-[clamp(3.2rem,6vw,7rem)] font-medium uppercase leading-[1.02] tracking-[-0.075em]">
              MORE THAN
              <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                one way to talk.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-[#0A2240]/20">
            <Reveal>
              <a
                href={PHONE_LINK}
                className="group grid gap-6 border-b border-[#0A2240]/20 py-10 transition-all duration-300 hover:bg-[#0A2240]/[0.025] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-serif text-5xl italic text-[#B99547]">
                  01
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98763A]">
                    Call Our Team
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,3.5vw,4rem)] font-medium tracking-[-0.06em]">
                    {PHONE}
                  </h3>
                </div>

                <ArrowUpRight
                  size={30}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a
                href="#contact-form"
                className="group grid gap-6 border-b border-[#0A2240]/20 py-10 transition-all duration-300 hover:bg-[#0A2240]/[0.025] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-serif text-5xl italic text-[#B99547]">
                  02
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98763A]">
                    Online Contact
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,3.5vw,4rem)] font-medium tracking-[-0.06em]">
                    Send an Enquiry
                  </h3>
                </div>

                <ArrowUpRight
                  size={30}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-6 border-b border-[#0A2240]/20 py-10 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8">
                <span className="font-serif text-5xl italic text-[#B99547]">
                  03
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98763A]">
                    Wimbledon Address
                  </p>
                  <h3 className="mt-3 text-[clamp(1.5rem,2.7vw,3rem)] font-medium tracking-[-0.055em]">
                    3 Thornton Rd, London SW19 4NB
                  </h3>
                </div>

                <MapPin size={30} className="text-[#B99547]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — WIMBLEDON MAP */}
      <section className="overflow-hidden bg-[#EDE9E0]">
        <div className="grid lg:grid-cols-[0.43fr_0.57fr]">
          <div className="flex flex-col justify-between bg-[#0A2240] px-6 py-20 text-white sm:px-10 lg:min-h-[650px] lg:px-16 lg:py-24">
            <Reveal>
              <SectionLabel number="04" light>
                Our Location
              </SectionLabel>

              <h2 className="mt-12 text-[clamp(3.4rem,5.5vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.075em]">
                FIND US
                <span className="mt-3 block font-serif font-normal italic text-[#B99547]">
                  in Wimbledon.
                </span>
              </h2>

              <p className="mt-9 max-w-md text-base leading-8 text-white/65">
                QuickShield Services Wimbledon is based
                at Thornton Road, London SW19. Contact us
                about pest concerns affecting your home
                or commercial premises.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-14 border-t border-white/20 pt-9">
                <MapPin size={28} className="text-[#B99547]" />

                <address className="mt-6 text-2xl font-medium not-italic leading-[1.5] tracking-[-0.04em] sm:text-3xl">
                  3 Thornton Rd
                  <br />
                  London SW19 4NB
                  <br />
                  United Kingdom
                </address>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#B99547]">
                  Wimbledon · London
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[430px] bg-[#D9D4C9] sm:min-h-[550px] lg:min-h-[650px]">
            <iframe
              title="QuickShield Services Wimbledon location map"
              src="https://www.google.com/maps?q=3%20Thornton%20Rd%2C%20London%20SW19%204NB%2C%20United%20Kingdom&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 05 — FAQ */}
      <section className="bg-[#F7F5F0] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="05">
              Before You Get in Touch
            </SectionLabel>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-[clamp(3.2rem,6.2vw,7rem)] font-medium uppercase leading-[1.02] tracking-[-0.075em]">
                QUESTIONS?
                <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                  Start here.
                </span>
              </h2>

              <p className="max-w-[340px] text-base leading-8 text-[#586474]">
                A few helpful answers about enquiries,
                property information and pest control
                considerations.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
            <Reveal>
              <div className="flex h-40 w-40 flex-col justify-between bg-[#0A2240] p-6 text-white">
                <MessageCircle
                  size={29}
                  strokeWidth={1.4}
                  className="text-[#B99547]"
                />
                <span className="text-xs font-bold uppercase tracking-[0.15em]">
                  Helpful
                  <br />
                  Information
                </span>
              </div>
            </Reveal>

            <div className="border-t border-[#0A2240]/20">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#0A2240]/20"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      className="group flex w-full items-center justify-between gap-6 py-8 text-left"
                    >
                      <span className="flex items-start gap-5">
                        <span className="mt-1 font-serif text-xl italic text-[#B99547]">
                          0{index + 1}
                        </span>

                        <span className="text-lg font-medium leading-7 tracking-[-0.03em] transition-colors group-hover:text-[#98763A] sm:text-2xl">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-[#B99547] bg-[#B99547]"
                            : "border-[#0A2240]/20 group-hover:border-[#B99547]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={19} />
                        ) : (
                          <Plus size={19} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${index}`}
                        className="pb-9 pl-10 pr-10 sm:pl-12"
                      >
                        <p className="max-w-[650px] text-[15px] leading-8 text-[#586474]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — FINAL CONTACT STATEMENT */}
      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute -right-20 bottom-[-100px] text-[25vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025]">
          SW19
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel number="06" light>
              Speak Directly
            </SectionLabel>

            <h2 className="mt-12 text-[clamp(3.4rem,7.5vw,9rem)] font-medium uppercase leading-[0.95] tracking-[-0.075em]">
              YOUR NEXT
              <span className="block font-serif font-normal italic normal-case text-[#B99547]">
                step starts here.
              </span>
            </h2>

            <div className="mt-14 flex flex-col gap-10 border-t border-white/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[600px] text-lg leading-9 text-white/65">
                Have a pest concern in Wimbledon or London?
                Contact QuickShield Services Wimbledon
                to discuss your property and the
                available next steps.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_LINK}
                  className="group inline-flex items-center gap-5 bg-[#B99547] px-8 py-5 text-xs font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F7F5F0]"
                >
                  <Phone size={19} />
                  Call {PHONE}
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-4 border border-white/25 px-8 py-5 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#B99547] hover:text-[#B99547]"
                >
                  Send Enquiry
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
