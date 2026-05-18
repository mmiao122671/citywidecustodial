import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ||
  '1cc28040-874c-4800-9291-ed029b529acc';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');
    setSubmittedName('');

    try {
      const formPayload = new FormData(e.currentTarget);
      formPayload.set('access_key', WEB3FORMS_ACCESS_KEY);
      formPayload.set(
        'subject',
        `New contact request from ${formData.name || 'Website visitor'}`
      );
      formPayload.set('from_name', 'City Wide Custodial - website');
      formPayload.set('replyto', formData.email);

      const serviceLine = formData.serviceType
        ? `Type of cleaning: ${formData.serviceType.replace(/-/g, ' ')}`
        : '';
      const messageBody = [serviceLine, formData.message].filter(Boolean).join('\n\n').trim();
      formPayload.set('message', messageBody || '(No message provided)');

      const cc = import.meta.env.VITE_WEB3FORMS_CC_EMAIL?.trim();
      if (cc) {
        formPayload.set('ccemail', cc);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmittedName(formData.name.trim());
      setSubmitStatus('success');
      setSubmitMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: 'email',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error('Web3Forms error:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or call (902) 629-4790.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (submitStatus === 'success') {
      document.getElementById('form-submit-status')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [submitStatus]);

  return (
    <div>
      <Seo
        path="/contact"
        title="Contact Us | City Wide Custodial — Cornwall & Charlottetown PEI"
        description="Request a free estimate for cleaning services on PEI. Phone (902) 629-4790, email info@citywidecustodial.com. Serving Charlottetown, Cornwall, Montague & surrounding areas."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Get Your Space Cleaned!
          </h1>
          <p className="text-xl text-green-100">
            Ready to request a free estimate? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-600 leading-relaxed">
              Have questions or ready to request a free estimate? We'd love to hear from you! 
              Whether you're looking for a one-time deep clean, regular office service, 
              or post-construction cleanup, the team at City Wide Custodial is here to help. 
              Reach out by phone, email, or using the form below—we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Details</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:9026294790" className="text-orange-600 hover:text-orange-700 text-lg">
                      (902) 629-4790
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@citywidecustodial.com" className="text-orange-600 hover:text-orange-700 text-lg">
                      info@citywidecustodial.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mailing Address</h3>
                    <div className="text-gray-600">
                      <div>PO Box 974</div>
                      <div>Cornwall, Prince Edward Island</div>
                      <div>C0A 1H0</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">We aim to respond within 2 business days</p>
                  </div>
                </div>
              </div>

              {/* Mobile Call Now Button */}
              <div className="lg:hidden mb-8">
                <a 
                  href="tel:9026294790"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 via-white to-orange-50/40 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-orange-600 shrink-0" aria-hidden />
                  Serving Prince Edward Island
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Islander owned and operated—we provide professional cleaning throughout Charlottetown, Montague,
                  Cornwall, and surrounding communities across PEI.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Need directions or want to talk through your location? Call us and we will gladly help.
                </p>
                <a
                  href="tel:9026294790"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-green-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  (902) 629-4790
                </a>
              </div>


            </div>

            {/* Contact Form */}
            <div id="send-request">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
              
              {submitStatus === 'success' ? (
                <div
                  id="form-submit-status"
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 p-8 text-center shadow-sm"
                >
                  <CheckCircle2 className="mx-auto h-14 w-14 text-green-600 mb-4" aria-hidden />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {submittedName ? `Thank you, ${submittedName}!` : 'Thank you!'}
                  </h3>
                  <p className="text-green-800 leading-relaxed mb-2">
                    Your request has been sent successfully.
                  </p>
                  <p className="text-green-700 leading-relaxed">
                    A member of our team will contact you within{' '}
                    <strong>3 business days</strong>. We appreciate you choosing City Wide Custodial.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus(null);
                      setSubmittedName('');
                    }}
                    className="mt-6 text-sm font-semibold text-green-700 underline underline-offset-2 hover:text-green-900"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Method of Contact
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div> */}

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Cleaning
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="office">Office Cleaning</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="post-construction">Post-Construction Cleanup</option>
                    <option value="floor-care">Floor Care & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Service Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your cleaning needs, preferred schedule, or any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                </button>

                {submitStatus === 'error' && (
                  <p
                    id="form-submit-status"
                    role="alert"
                    className="text-sm text-center rounded-lg px-4 py-3 bg-red-50 text-red-800 border border-red-200"
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
              )}

              <p className="text-sm text-gray-600 mt-4 text-center">
                We aim to respond within 3 business days. Thank you for considering City Wide Custodial!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.facebook.com/CityWideCustodial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Follow us for cleaning tips and updates!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;