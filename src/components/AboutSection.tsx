
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="About our company"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-blue-600 font-semibold">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Our Story and Mission</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Founded in 2010, our company has grown from a small startup to a leading provider of innovative solutions for businesses worldwide. We believe in creating long-lasting relationships with our clients based on trust, transparency, and delivering exceptional results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-700">To empower businesses with innovative solutions that drive growth and success.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-700">To deliver exceptional services that exceed our clients' expectations and help them achieve their goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Values</h3>
                  <p className="text-gray-700">Integrity, excellence, innovation, and a customer-first approach guide everything we do.</p>
                </div>
              </div>
            </div>
            
            <a href="#services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Learn more about our services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
