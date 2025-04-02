
import { useEffect, useRef, useState } from 'react';

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the callback function that Google Maps will call
    window.initMap = () => {
      setMapLoaded(true);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      window.initMap = undefined;
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    
    // Create the map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 21.0278, lng: 105.8342 }, // Hanoi
      zoom: 15,
    });
    
    // Add marker for office location
    const marker = new google.maps.Marker({
      position: { lat: 21.0278, lng: 105.8342 },
      map: map,
      title: 'Văn phòng của chúng tôi'
    });
    
    // Add info window
    const infowindow = new google.maps.InfoWindow({
      content: '<h3>Văn phòng của chúng tôi</h3>'
    });
    
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  }, [mapLoaded]);

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Vị Trí Của Chúng Tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Địa Điểm
          </h2>
          <p className="mt-4 text-gray-600">
            Ghé thăm văn phòng hoặc liên hệ với chúng tôi trực tuyến. Chúng tôi rất mong được nghe từ bạn!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div 
            ref={mapRef}
            className="w-full h-[400px]"
          >
            {!mapLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p>Đang tải bản đồ...</p>
              </div>
            )}
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                36 Phố Cát Linh<br />
                Quận Đống Đa, Hà Nội<br />
                Việt Nam
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Liên hệ</h3>
              <p className="text-gray-600">
                Điện thoại: (024) 3736-8989<br />
                Email: info@congty.com
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Giờ làm việc</h3>
              <p className="text-gray-600">
                Thứ Hai - Thứ Sáu: 8:30 - 17:30<br />
                Thứ Bảy: 9:00 - 12:00<br />
                Chủ Nhật: Đóng cửa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
