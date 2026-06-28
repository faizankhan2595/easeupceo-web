"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, MessageSquare, Building2, Send, ArrowRight, Sparkles, CheckCircle, Phone, Mail, User } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ContactSalesModal({ open, onClose, onStartChat }) {
  const [submittingContact, setSubmittingContact] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Form states for general message
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  // Form states for chat initiation
  const [showChatForm, setShowChatForm] = useState(false);
  const [chatForm, setChatForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleClose = () => {
    onClose();
    // Reset internal states on close
    setContactSuccess(false);
    setShowChatForm(false);
    setContactForm({ name: "", email: "", mobile: "", comment: "" });
    setChatForm({ name: "", email: "", mobile: "" });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.mobile) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmittingContact(true);

    // Mock API submission
    setTimeout(() => {
      setSubmittingContact(false);
      setContactSuccess(true);
      toast.success("Thank you! Our sales team will get back to you shortly.");
    }, 1200);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatForm.name || !chatForm.email || !chatForm.mobile) {
      toast.error("Please fill in all fields to start the chat.");
      return;
    }

    // Call callback to open the chatbot and pass the user details
    if (onStartChat) {
      onStartChat(chatForm);
    }
    handleClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/90 backdrop-blur-xs text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="overflow-y-auto w-full h-full">
              <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Email Contact Form */}
              <div className="md:col-span-7 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    <Sparkles className="h-3 w-3" /> Connect with Sales
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Get in touch with us</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Have questions about packages or setup? Send us a message.
                  </p>
                </div>

                {contactSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-accent-500" />
                    <h4 className="mt-4 text-lg font-semibold text-slate-900">Message Sent Successfully!</h4>
                    <p className="mt-2 max-w-sm text-sm text-slate-500">
                      Our UK-based business development team will review your details and call/email you within 2 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          id="modal-name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          id="modal-email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="john@company.co.uk"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-mobile" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Contact / Mobile Number *
                      </label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          id="modal-mobile"
                          type="tel"
                          required
                          value={contactForm.mobile}
                          onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value })}
                          placeholder="+44 7123 456789"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-comment" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        How can we help? (Optional)
                      </label>
                      <textarea
                        id="modal-comment"
                        rows={3}
                        value={contactForm.comment}
                        onChange={(e) => setContactForm({ ...contactForm, comment: e.target.value })}
                        placeholder="Tell us a bit about your business and team size..."
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submittingContact}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
                    >
                      {submittingContact ? "Sending..." : "Submit Inquiry"}
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Quick Action Pathways */}
              <div className="md:col-span-5 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Instant Options</h4>
                  <p className="mt-1 text-xs text-slate-500">
                    Get answers immediately or set up your company in minutes.
                  </p>

                  <div className="mt-6 space-y-4">
                    <AnimatePresence mode="wait">
                      {!showChatForm ? (
                        <motion.div
                          key="actions"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-4"
                        >
                          {/* Option 1: Live Chat Button/Card */}
                          <button
                            type="button"
                            onClick={() => setShowChatForm(true)}
                            className="group w-full flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xs transition-all hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/5 active:scale-[0.99]"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                              <MessageSquare className="h-5 w-5" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-900">Chat with Sales Team</p>
                              <p className="mt-1 text-xs text-slate-500 leading-normal">
                                Connect immediately with our support assistant.
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
                          </button>

                          {/* Option 2: Signup Redirection Card */}
                          <a
                            href="/signup"
                            onClick={handleClose}
                            className="group w-full flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xs transition-all hover:border-accent-300 hover:shadow-md hover:shadow-accent-500/5 active:scale-[0.99]"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 group-hover:bg-accent-100 transition-colors">
                              <Building2 className="h-5 w-5" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-900">Set up Company</p>
                              <p className="mt-1 text-xs text-slate-500 leading-normal">
                                Skip the sales cycle and create your account instantly.
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
                          </a>
                        </motion.div>
                      ) : (
                        /* Sub-form: Chat Pre-form Asking for Name, Email, Mobile */
                        <motion.form
                          key="chat-form"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          onSubmit={handleChatSubmit}
                          className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                        >
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                            <span className="text-xs font-bold text-slate-700">Pre-chat Information</span>
                            <button
                              type="button"
                              onClick={() => setShowChatForm(false)}
                              className="text-xs text-brand-600 hover:underline"
                            >
                              Go Back
                            </button>
                          </div>

                          <div>
                            <label htmlFor="chat-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                              Your Name
                            </label>
                            <input
                              id="chat-name"
                              type="text"
                              required
                              value={chatForm.name}
                              onChange={(e) => setChatForm({ ...chatForm, name: e.target.value })}
                              placeholder="Name"
                              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label htmlFor="chat-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                              Your Email
                            </label>
                            <input
                              id="chat-email"
                              type="email"
                              required
                              value={chatForm.email}
                              onChange={(e) => setChatForm({ ...chatForm, email: e.target.value })}
                              placeholder="Email"
                              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label htmlFor="chat-mobile" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                              Mobile Number
                            </label>
                            <input
                              id="chat-mobile"
                              type="tel"
                              required
                              value={chatForm.mobile}
                              onChange={(e) => setChatForm({ ...chatForm, mobile: e.target.value })}
                              placeholder="Mobile"
                              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
                          >
                            Start Chatting
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 text-center space-y-1.5">
                  <p className="text-[11px] font-medium text-slate-700">Or reach us directly:</p>
                  <p className="text-xs text-slate-600">
                    Email: <a href="mailto:sales@techtradeitsolutions.com" className="underline hover:text-brand-600">sales@techtradeitsolutions.com</a>
                  </p>
                  <p className="text-xs text-slate-600">
                    Phone: <a href="tel:+447776839310" className="underline hover:text-brand-600">+44 7776839310</a>
                  </p>
                  <p className="text-[10px] text-slate-400 pt-1">
                    GDPR Compliant · Secure Data Storage in the UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
}
