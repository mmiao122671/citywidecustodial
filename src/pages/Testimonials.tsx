import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amanda P.',
      role: 'Office Manager',
      company: 'Local Accounting Firm',
      content: 'City Wide Custodial has been cleaning our office for over a year—reliable, professional, and always spotless. Our clients consistently comment on how clean and welcoming our space feels.',
      rating: 5,
      service: 'Office Cleaning'
    },
    {
      name: 'Jason L.',
      role: 'Contractor',
      company: 'Maple Construction',
      content: 'After our renovation, they came in and made everything sparkle. The post-construction cleanup was thorough and professional. Would definitely hire again!',
      rating: 5,
      service: 'Post-Construction Cleanup'
    },
    {
      name: 'Sarah M.',
      role: 'Property Manager',
      company: 'Cornwall Properties',
      content: 'Outstanding service and attention to detail. They make our commercial properties look pristine for showings and tenant move-ins. Very dependable team.',
      rating: 5,
      service: 'Commercial Cleaning'
    },
    {
      name: 'Mike R.',
      role: 'Restaurant Owner',
      company: 'Downtown Bistro',
      content: 'The floor stripping and waxing service brought our restaurant floors back to life. Professional work at a fair price. Highly recommend their floor care services.',
      rating: 5,
      service: 'Floor Care'
    },
    {
      name: 'Linda T.',
      role: 'Homeowner',
      company: 'Residential Client',
      content: 'Needed a deep clean after moving into our new home. The team was thorough, respectful, and left everything spotless. Great communication throughout the process.',
      rating: 5,
      service: 'Residential Cleaning'
    },
    {
      name: 'David K.',
      role: 'Facility Manager',
      company: 'Government Building',
      content: 'City Wide Custodial handles our janitorial services with professionalism. Consistent quality, reliable scheduling, and excellent customer service. A pleasure to work with.',
      rating: 5,
      service: 'Janitorial Services'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5', label: 'Star Average Rating' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hear from Our Happy Clients
          </h1>
          <p className="text-xl text-primary-100">
            Don't just take our word for it—see what our customers say about our services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-lg text-gray-600">
              Real feedback from real customers across Prince Edward Island
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary-600 mb-4" />
                
                {/* Content */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Service Badge */}
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {testimonial.service}
                  </span>
                </div>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have you worked with City Wide Custodial? We'd love to hear about your experience!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leave a Review</h3>
              <p className="text-gray-600 mb-6">
                Your feedback helps us improve our services and helps other potential customers 
                make informed decisions. Thank you for taking the time to share your thoughts!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.google.com/search?q=City+Wide+Custodial+Cornwall+PE&rlz=1C1CHBF_enCA1062CA1062&oq=City+Wide+Custodial+Cornwall+PE&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHNzEzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4b5e52ddd0e06d45:0x4066867ee0f3f6a6,3"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Leave Google Review
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Experience the same quality service that our clients rave about. 
            Contact us today for your free estimate!
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

export default Testimonials;