
import { Code, LineChart, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Web Development",
    description: "We build responsive, high-performance websites and applications tailored to your unique business needs.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: "Business Analytics",
    description: "Gain valuable insights from your data with our comprehensive analytics and reporting solutions.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Digital Marketing",
    description: "Expand your reach and grow your audience with our strategic digital marketing services.",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Cybersecurity",
    description: "Protect your business with our advanced security solutions and proactive threat management.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            We provide a range of specialized services designed to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
