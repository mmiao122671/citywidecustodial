import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Building2, Home as HomeIcon, Hammer, Sparkles, Star } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office and facility cleaning services'
    },
    {
      icon: HomeIcon,
      title: 'Residential Cleaning',
      description: 'Deep cleaning for homes and apartments'
    },
    {
      icon: Hammer,
      title: 'Post-Construction',
      description: 'Complete cleanup after renovations and new builds'
    },
    {
      icon: Sparkles,
      title: 'Floor Care',
      description: 'Professional floor stripping, waxing, and maintenance'
    }
  ];

  const testimonials = [
    {
      name: 'Amanda P.',
      role: 'Office Manager',
      content: 'City Wide Custodial has been cleaning our office for over a year—reliable, professional, and always spotless.',
      rating: 5
    },
    {
      name: 'Jason L.',
      role: 'Contractor',
      content: 'After our renovation, they came in and made everything sparkle. Would definitely hire again!',
      rating: 5
    },
    {
      name: 'Sarah M.',
      role: 'Property Manager',
      content: 'Outstanding service and attention to detail. They make our commercial properties look pristine.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('public/istockphoto-1433923860-612x612.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                LOCALLY    TRUSTED 
                <span className="text-orange-200">Cleaning Services Since 1989</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Commercial, Residential & Post-Construction Cleaning with a Personal Touch
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <a 
                  href="tel:9026294790"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call (902) 629-4790</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Island Owned & Operated for Over 20 Years
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            City Wide Custodial is your trusted partner for professional cleaning services across Prince Edward Island. 
            We're fully bonded and insured, committed to delivering spotless results and dependable service 
            for residential, commercial, industrial, and government clients.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Specialize In</h2>
            <p className="text-lg text-gray-600">Professional services tailored to your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-primary-600 mb-4">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/services"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose City Wide Custodial?</h2>
              <div className="space-y-4">
                {[
                  'Over 20 years of experience serving PEI',
                  'Fully bonded and insured',
                  'High-quality products from trusted manufacturers',
                  'Flexible scheduling options',
                  'Competitive pricing with free estimates',
                  'Island owned and operated'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional cleaning team Cornwall PEI"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>









      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/testimonials"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Proudly serving clients across Prince Edward Island, including Charlottetown, Cornwall, 
            Summerside, Georgetown, Cardigan, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:9026294790"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;