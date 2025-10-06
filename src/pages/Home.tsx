import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Building2, Home as HomeIcon, Hammer, Sparkles, Star, Shield, Clock, Users, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Professional office and facility cleaning services'
    },
    {
      icon: HomeIcon,
      title: 'Strip & Wax Floors',
      description: 'Professional floor stripping, waxing, and maintenance'
    },
    {
      icon: Hammer,
      title: 'Construction Cleanup',
      description: 'Complete cleanup after renovations and new builds'
    },
    {
      icon: Sparkles,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning and restoration'
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

  React.useEffect(() => {
    document.title = 'City Wide Custodial – Affordable Cleaning Services for Home and Business';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('homepage.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-90">
                LOCALLY      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
                <span className="text-orange-200"> TRUSTED </span>
                
                <h4> <span className="text-3xl mb-8 text-orange-100">Cleaning Services Since 2001</span> </h4>       
               
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                
              </p>
              <div className="flex flex-col sm:flex-row gap-10">
                <Link 
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-base transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <a 
                  href="tel:9026294790"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-base transition-colors text-center flex items-center justify-center space-x-2"
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
        </div>
      </section>


        {/* Main Content */}
        <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-19">
              City Wide Custodial is a trusted provider of janitorial, floor care, and custodial services 
              for residential, commercial, industrial, and governmental clients in Cornwall and the 
              surrounding communities of Prince Edward Island.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether it's a one-time job or a long-term service contract, we offer a full line of 
              cleaning, maintenance, and restoration services—all tailored to meet your needs and your 
              budget. Our goal is to help you improve the appearance, hygiene, and functionality of 
              your home or business.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With flexible scheduling options including one-time, daily, weekly, monthly, or quarterly 
              visits, we make it easy to keep your property looking its best. You decide the level of 
              service that fits your needs—we'll handle the rest.
            </p>
          </div>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose City Wide Custodial?</h2>
            <p className="text-lg text-gray-600">
              At City Wide Custodial, we're committed to delivering high-quality work with attention to detail and reliability.
            
            
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Supplies',
                description: 'High-quality cleaning products and equipmen'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'One-time, daily, weekly, monthly, or quarterly visits'
              },
              {
                icon: Users,
                title: 'Experienced Team',
                description: 'Professional staff committed to quality and reliability'
              },
              {
                icon: Award,
                title: 'Island Owned',
                description: 'Local business serving PEI communities for over 20 years'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  <item.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
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
      </section> */}

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