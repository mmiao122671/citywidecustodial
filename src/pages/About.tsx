import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Building2,
  Home as HomeIcon,
  Hammer,
  Sparkles
} from 'lucide-react';

const About = () => {
  const specialties = [
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Professional office environments'
    },
    {
      icon: Sparkles,
      title: 'Strip & Wax Floor Care',
      description: 'Restore and protect your floors'
    },
    {
      icon: Hammer,
      title: 'Construction Cleanup',
      description: 'Post-renovation cleaning services'
    },
    {
      icon: HomeIcon,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning and restoration'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete peace of mind with comprehensive insurance coverage'
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Cleaning Services in Cornwall & Surrounding Areas
          </h1>
          <p className="text-xl text-primary-100">
            Trusted provider of professional cleaning solutions across Prince Edward Island
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
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

      {/* Our Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Specialize In</h2>
            <p className="text-lg text-gray-600">Professional services tailored to your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  <specialty.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose City Wide Custodial?</h2>
            <p className="text-lg text-gray-600">
              At City Wide Custodial, we're fully insured and committed to delivering high-quality work 
              with attention to detail and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-green-600 mb-4 flex justify-center">
                  <item.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional cleaning team at work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="space-y-4">
                {[
                  'Professional, experienced team members',
                  'High-quality cleaning products and equipment',
                  'Attention to detail and reliability',
                  'Clean, safe, and professional environments',
                  'Competitive pricing with free estimates',
                  'Flexible scheduling to meet your needs'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours and Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-2 text-green-100">
            Our experienced team takes pride in maintaining clean, safe, and professional environments for our clients.
          </p>
          <p className="text-lg mb-8 text-green-100">
            <strong>Hours of Operation:</strong> By appointment – contact us to schedule a visit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Free Estimate
            </Link>
            <a 
              href="tel:9026294790"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (902) 629-4790
            </a>
          </div>
          
          <p className="text-sm text-green-200 mt-4">
            Contact us today to schedule your free estimate and discover how affordable and convenient professional cleaning can be.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;