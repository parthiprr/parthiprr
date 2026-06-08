import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Home } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/CustomIcons';

export const Contact: React.FC = () => {
  const web3FormsAccessKey = 'beed0371-c0ac-4d6f-a4c7-40700e473559';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('Something went wrong during form submission. Please check your network and try again.');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitErrorMessage('Something went wrong during form submission. Please check your network and try again.');

    try {
      const payload = {
        access_key: web3FormsAccessKey,
        subject: formData.subject,
        from_name: 'Parthip R R Portfolio',
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        botcheck: '',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error instanceof Error) {
        setSubmitErrorMessage(error.message);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Decorative Blur glows */}
      <div className="absolute bottom-0 right-1/10 w-[350px] h-[350px] bg-brand-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-xs font-bold tracking-[0.35em] uppercase text-brand-text-muted">
            C O N T A C T
          </h2>
          <div className="h-[1px] w-12 bg-brand-accent-gold/30 mx-auto mt-3" />
        </div>

        <div className="max-w-xl mx-auto text-center space-y-6">
          {/* Main prompt with gold underline */}
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-text-dark leading-tight">
            I have got just what you need. <span className="relative inline-block">
              Lets talk.
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-brand-accent-gold" />
            </span>
          </h3>

          {/* Simple Contact Details row */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 sm:gap-x-6 font-sans font-semibold text-xs sm:text-sm text-brand-text-muted pt-2 pb-6">
            <a href="mailto:parthiprineesh100@gmail.com" className="flex items-center space-x-2 hover:text-brand-accent-gold transition-colors break-all sm:break-normal">
              <Mail size={14} className="text-brand-accent-gold" />
              <span>parthiprineesh100@gmail.com</span>
            </a>
            <a href="https://github.com/parthiprr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-accent-gold transition-colors">
              <GithubIcon size={14} className="text-brand-accent-gold" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-accent-gold transition-colors">
              <LinkedinIcon size={14} className="text-brand-accent-gold" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-brand-border rounded-3xl p-6 sm:p-8 shadow-md relative">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 font-sans text-left"
            >
              <input type="hidden" name="access_key" value={web3FormsAccessKey} />
              <input type="hidden" name="botcheck" value="" />
              
              {/* Name & Email in grid for larger devices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 hover:bg-gray-100/30 border border-brand-border/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-text-dark placeholder-brand-text-muted/40 transition-all font-semibold"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-semibold flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 hover:bg-gray-100/30 border border-brand-border/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-text-dark placeholder-brand-text-muted/40 transition-all font-semibold"
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-semibold flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 hover:bg-gray-100/30 border border-brand-border/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-text-dark placeholder-brand-text-muted/40 transition-all font-semibold"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-500 font-semibold flex items-center mt-1">
                    <AlertCircle size={10} className="mr-1" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 hover:bg-gray-100/30 border border-brand-border/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-text-dark placeholder-brand-text-muted/40 transition-all font-semibold resize-none"
                  placeholder="Your message details..."
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-semibold flex items-center mt-1">
                    <AlertCircle size={10} className="mr-1" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-accent-gold hover:bg-brand-accent-gold-dark text-white font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:shadow-brand-accent-gold/15 text-xs sm:text-sm group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Success/Error overlays */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col justify-center items-center p-6 text-center space-y-4 z-10 border border-brand-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle2 className="text-brand-accent-gold w-14 h-14 animate-bounce" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-display font-extrabold text-brand-text-dark">Message Sent!</h4>
                    <p className="text-xs text-brand-text-muted max-w-xs leading-relaxed font-sans">
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-5 py-2 bg-gray-50 hover:bg-white border border-brand-border text-brand-text-dark text-[10px] font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all shadow-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col justify-center items-center p-6 text-center space-y-4 z-10 border border-brand-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle className="text-red-500 w-14 h-14" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-display font-extrabold text-brand-text-dark">Submission Failed</h4>
                    <p className="text-xs text-brand-text-muted max-w-xs leading-relaxed font-sans">
                      {submitErrorMessage}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-5 py-2 bg-gray-50 hover:bg-white border border-brand-border text-brand-text-dark text-[10px] font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all shadow-sm"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Floating/Centered Home scroll button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('home');
              if (element) {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }
            }}
            className="p-2.5 bg-brand-text-dark hover:bg-brand-accent-gold text-white rounded-full shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            aria-label="Back to Home"
          >
            <Home size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
