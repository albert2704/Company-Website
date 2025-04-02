
import { useEffect, useRef } from 'react';

// Note: In a real implementation, you would use a proper map library like Google Maps, Mapbox, or Leaflet
// This is a simplified version for demonstration purposes

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, you would initialize your map here
    console.log("Map would be initialized here in a real implementation");
    
    // For now, we'll just display a placeholder
    if (mapRef.current) {
      mapRef.current.style.background = `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200') center/cover`;
    }
  }, []);

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Where to Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our Location
          </h2>
          <p className="mt-4 text-gray-600">
            Visit our office or get in touch with us online. We'd love to hear from you!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div 
            ref={mapRef}
            className="w-full h-[400px]"
          >
            {/* Map placeholder - in a real implementation this would be replaced with an actual map */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-xl font-semibold mb-2">Interactive Map Coming Soon</p>
                <p>Our office is located at:</p>
                <p className="font-medium">123 Business Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                123 Business Street<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">
                Phone: (555) 123-4567<br />
                Email: info@companyname.com
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
