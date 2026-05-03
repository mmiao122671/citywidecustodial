import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        _subject: `New Contact Request from ${formData.fullName || 'Website Visitor'}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: formData.email
      };

      const response = await fetch('https://formsubmit.co/mmiao@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const rawResult = await response.text();
      let result: { success?: boolean | string; message?: string } = {};
      try {
        result = rawResult ? JSON.parse(rawResult) : {};
      } catch {
        result = { message: rawResult };
      }

      const hasExplicitFailure = result.success === false || result.success === 'false';

      // FormSubmit can return HTML even when delivery succeeds.
      // If HTTP status is OK and there is no explicit failure flag, treat as success.
      if (!response.ok || hasExplicitFailure) {
        throw new Error(result.message || 'Failed to send message');
      }

      alert('Thank you for your inquiry! We will get back to you within 48 hours.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: 'email',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error('FormSubmit error:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      alert(`Sorry, there was an error sending your message. ${message}`);
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

  return (
    <div>
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
                    <a href="mailto:citywidecustodial@gmail.com" className="text-orange-600 hover:text-orange-700 text-lg">
                      citywidecustodial@gmail.com
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
                    <p className="text-gray-600">We aim to respond within 2 business day</p>
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

              {/* Google Maps */}
              {/* <div>
                <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.8857859580935!2d-63.21682968398819!3d46.28366507912015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd0e06d45%3A0x4066867ee0f3f6a6!2sCornwall%2C%20PE!5e0!3m2!1sen!2sca!4v1635789123456!5m2!1sen!2sca"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="City Wide Custodial Location - Cornwall, PE"
                  ></iframe>
                </div>
              </div> */}

              <div>
  <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
  <div className="bg-gray-200 rounded-lg overflow-hidden">
    <iframe
      title="City Wide Custodial Location - Cornwall, PE"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.871086401144!2d-63.21936612346046!3d46.283972673937066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd0e06d45%3A0x4066867ee0f3f6a6!2sCornwall%2C%20PE%20C0A%201H0!5e0!3m2!1sen!2sca!4v1734481000000!5m2!1sen!2sca"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    ></iframe>
  </div>
</div>

<div className="text-center mt-4">
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=Cornwall,+Prince+Edward+Island+C0A+1H0"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Get Directions
    </a>
  </div>









            </div>

            {/* Contact Form */}
            <div id="send-request">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
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

                <div>
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
                </div>

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
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your cleaning needs, preferred schedule, or any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We aim to respond within 1 business day. Thank you for considering City Wide Custodial!
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