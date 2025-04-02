
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [105.8342, 21.0278], // Hanoi coordinates
      zoom: 12
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for Hanoi
    new mapboxgl.Marker()
      .setLngLat([105.8342, 21.0278])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Văn phòng của chúng tôi</h3>'))
      .addTo(map);

    return () => {
      map.remove();
    };
  }, [mapboxToken]);

  const mapContainer = useRef<HTMLDivElement>(null);

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
          {!mapboxToken ? (
            <div className="p-6 w-full">
              <p className="mb-4">Để hiển thị bản đồ, hãy nhập Mapbox token của bạn:</p>
              <input 
                type="text"
                placeholder="Nhập Mapbox token ở đây"
                className="w-full p-2 border rounded mb-4"
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                Bạn có thể lấy Mapbox token miễn phí tại: <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">mapbox.com</a>
              </p>
            </div>
          ) : (
            <div 
              ref={mapContainer}
              className="w-full h-[400px]"
            ></div>
          )}
          
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
