
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home as HomeIcon, Hammer, Sparkles, Drum as Vacuum, PaintBucket, Recycle, Shield, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Floor Maintenance – Strip & Wax',
      description: 'Extend the life of your floors and restore their shine with professional floor stripping and waxing services. We use high-quality finishes for long-lasting results.'
    },
    {
      icon: Building2,
      title: 'Complete Janitorial Services',
      description: 'Daily, weekly, or custom janitorial plans for offices, retail spaces, and facilities of all sizes. Includes trash removal, restrooms, surfaces, and more.'
    },
    {
      icon: Vacuum,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning for carpets using industry-leading equipment and eco-friendly solutions to lift dirt, remove stains, and restore freshness.'
    },
    // {
    //   icon: Hammer,
    //   title: 'Post-Construction Cleanup',
    //   description: 'We clean up after renovations, new builds, and repairs. From dust and debris to fine detailing, we\'ll prepare your space for occupancy.'
    // },
    {
      icon: HomeIcon,
      title: 'Office Cleaning',
      description: 'Reliable, after-hours or daytime office cleaning to keep your workplace clean, sanitized, and presentable for staff and clients.'
    },
    {
      icon: Shield,
      title: 'Building Maintenance & Repairs',
      description: 'Minor repairs and general upkeep to ensure your property stays in top condition. We\'re a one-stop shop for cleaning and light maintenance.'
    },
    {
      icon: PaintBucket,
      title: 'Painting & Drywall Repair',
      description: 'Touch-ups or full-room painting jobs, plus drywall patching and finishing. Ideal for property turnover or commercial renovations.'
    },
    {
      icon: Shield,
      title: 'Restoration & Property Cleanup',
      description: 'Specialized cleaning and restoration after fire, flood, or damage. Includes disposal, disinfection, and deep cleaning.'
    },
    {
      icon: Recycle,
      title: 'Waste Removal',
      description: 'Fast and efficient removal of non-hazardous waste from homes, job sites, and businesses.'
    }
  ];

  const serviceAreas = [
    'Cornwall',
    'Charlottetown', 
    'Summerside',
    'Montague',
    'Stratford',

    'Surrounding areas across Prince Edward Island'
  ];

  const trustedProducts = [
    'Avmor®',
    'Dustbane',
    'Johnson Diversey™',
    'Swish'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Floor Care & Janitorial Services Across PEI
          </h1>
          <p className="text-xl text-orange-600 leading-relaxed mb-19">
            Island owned and operated, serving Cornwall and surrounding communities for over 20 years
          </p>


          <p className="text-lg text-gray-600 leading-relaxed mb-19">
              City Wide Custodial is a trusted provider of janitorial, floor care, and custodial services 
              for residential, commercial, industrial, and governmental clients in Cornwall and the 
              surrounding communities of Prince Edward Island.
            </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
           
            <p className="text-2xl text-gray-600 leading-relaxed mb-19">
    Island owned and operated, City Wide Custodial has proudly served Cornwall and surrounding
    communities for over 20 years. We offer a wide range of high-quality cleaning, janitorial,
    and maintenance services for residential, commercial, industrial, and government clients.
    Fully bonded and insured, we're committed to delivering dependable service and spotless results.
</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive cleaning solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-orange-600 mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600 mb-8">We proudly serve communities across Prince Edward Island</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Products */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Products We Trust</h2>
          <p className="text-lg text-gray-600 mb-8">
            We use only the highest quality products from trusted manufacturers to ensure professional results:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedProducts.map((product, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-gray-900">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Scheduling */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Scheduling Options</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether it's a one-time job or a long-term service contract, we offer flexible scheduling 
            to meet your needs and budget:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['One-time', 'Daily', 'Weekly', 'Monthly', 'Quarterly'].map((option, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <span className="font-medium text-gray-900">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free estimate and let us help you maintain a clean, healthy environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Free Quote
            </Link>
            <a 
              href="tel:9026294790"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (902) 629-4790
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;