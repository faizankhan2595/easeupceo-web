"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Bot, User, Mail, Phone } from "lucide-react";
import { toast } from "react-hot-toast";

const QUICK_PROMPTS = ["Pricing & plans", "UK payroll & RTI", "Book a demo", "Leave management"];

const INITIAL_MESSAGE = {
  id: 0,
  from: "bot",
  text:
    "Hi, I'm the Worklynx AI assistant 👋 Ask me about attendance, leave, payroll, employee management or performance — or how to book a demo.",
};

function getBotReply(input) {
  const text = input.toLowerCase();

  if (/(price|pricing|cost|plan|trial)/.test(text)) {
    return "Worklynx has three per-employee plans: Essentials at £6, Professional at £9, and Advanced at £12 per employee/month. See the Pricing section for the included modules in each plan.";
  }
  if (/(payroll|rti|hmrc|paye|ni\b|pension)/.test(text)) {
    return "Payroll is included from the Essentials plan, alongside employee management, leave management, sales and purchase, inventory management, and accounting.";
  }
  if (/(leave|holiday|absence|sick)/.test(text)) {
    return "Leave Management lets staff request annual leave, sick leave and statutory leave (maternity, paternity, shared parental) in one click, with automatic accrual tracking and manager approvals on mobile.";
  }
  if (/(attendance|clock|time ?sheet)/.test(text)) {
    return "Attendance tracking covers clock-in/out, timesheets and shift schedules, with real-time dashboards so you always know who's working, on leave, or running late.";
  }
  if (/(employee|onboard|record|hr )/.test(text)) {
    return "Employee Management centralises contracts, documents, onboarding checklists and org charts — fully GDPR-compliant and hosted in the UK.";
  }
  if (/(performance|review|appraisal|goal|okr)/.test(text)) {
    return "Performance Management helps you run review cycles, set goals/OKRs and gather 360° feedback, so managers and employees always have a clear view of progress.";
  }
  if (/(demo|trial|book|call|contact|sales)/.test(text)) {
    return "I'd love to set that up! Click \"Book a free demo\" in the navbar or hero section, or jump straight to the contact form at the bottom of the page — our UK-based team will be in touch.";
  }
  if (/(techtrade|company|who (made|built))/.test(text)) {
    return "Worklynx is built and supported by Techtrade Ltd, a UK-based software company — registered in England & Wales.";
  }
  if (/(hi|hello|hey)/.test(text)) {
    return "Hello! How can I help — attendance, leave, payroll, employee management, performance, or pricing?";
  }

  return "Thanks for the message! For a detailed answer tailored to your business, the best next step is to book a free demo with our UK-based team — just hit \"Book a free demo\" above.";
}

export default function Chatbot({
  open: controlledOpen,
  setOpen: controlledSetOpen,
  userData,
  setUserData,
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : localOpen;
  const setOpen = controlledSetOpen !== undefined ? controlledSetOpen : setLocalOpen;

  const [localUserData, setLocalUserData] = useState(null);
  const currentUserData = userData !== undefined ? userData : localUserData;
  const setCurrentUserData = setUserData !== undefined ? setUserData : setLocalUserData;

  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  const [preChatForm, setPreChatForm] = useState({ name: "", email: "", mobile: "" });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  // Sync state if userData is populated (e.g., from ContactSalesModal)
  useEffect(() => {
    if (currentUserData && messages.length === 1) {
      const greeting = `Hi ${currentUserData.name}, thanks for connecting! How can I help you today?`;
      setMessages([
        INITIAL_MESSAGE,
        {
          id: 1,
          from: "bot",
          text: greeting,
        },
      ]);
    }
  }, [currentUserData, messages.length]);

  const handlePreChatSubmit = (e) => {
    e.preventDefault();
    if (!preChatForm.name || !preChatForm.email || !preChatForm.mobile) {
      toast.error("Please fill in all fields.");
      return;
    }
    setCurrentUserData(preChatForm);
  };

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { id: prev.length, from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length, from: "bot", text: getBotReply(trimmed) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15"
          >
            {/* Chatbot Header */}
            <div className="flex items-center justify-between bg-linear-to-r from-brand-600 to-brand-500 px-4 py-3.5 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <Bot className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">Worklynx Assistant</p>
                  <p className="flex items-center gap-1 text-[11px] text-brand-100">
                    <Sparkles className="h-3 w-3" /> AI-powered · online now
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Content Body: Pre-chat form OR messages */}
            {!currentUserData ? (
              <form
                onSubmit={handlePreChatSubmit}
                className="flex-1 flex flex-col justify-between bg-slate-50 p-5 overflow-y-auto"
              >
                <div className="space-y-4">
                  <div className="text-center pb-2 border-b border-slate-200/60">
                    <p className="text-sm font-bold text-slate-800">Welcome to Worklynx Chat 👋</p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Please enter your details to start chatting with our team immediately.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="prechat-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="prechat-name"
                        type="text"
                        required
                        value={preChatForm.name}
                        onChange={(e) => setPreChatForm({ ...preChatForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="prechat-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="prechat-email"
                        type="email"
                        required
                        value={preChatForm.email}
                        onChange={(e) => setPreChatForm({ ...preChatForm, email: e.target.value })}
                        placeholder="john@company.co.uk"
                        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="prechat-mobile" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="prechat-mobile"
                        type="tel"
                        required
                        value={preChatForm.mobile}
                        onChange={(e) => setPreChatForm({ ...preChatForm, mobile: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.98]"
                >
                  Start Chatting
                </button>
              </form>
            ) : (
              <>
                <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                          message.from === "user"
                            ? "bg-linear-to-r from-brand-600 to-brand-500 text-white"
                            : "border border-slate-200 bg-white text-slate-700"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}

                  {typing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                            className="h-1.5 w-1.5 rounded-full bg-slate-400"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {messages.length === 1 && !typing && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => sendMessage(prompt)}
                          className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about payroll, leave, pricing..."
                    className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Send message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-600 to-brand-500 text-white shadow-xl shadow-brand-600/30"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 ring-2 ring-white">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
