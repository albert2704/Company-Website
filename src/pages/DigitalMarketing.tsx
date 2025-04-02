
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-16 w-16 text-blue-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Marketing Số
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 text-center mb-12">
                Mở rộng phạm vi tiếp cận và phát triển đối tượng của bạn với các dịch vụ tiếp thị kỹ thuật số chiến lược của chúng tôi.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dịch vụ marketing số của chúng tôi bao gồm:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tối ưu hóa công cụ tìm kiếm (SEO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Quảng cáo trả tiền theo click (PPC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tiếp thị qua mạng xã hội</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tiếp thị qua email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Marketing nội dung</span>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Chiến lược marketing số toàn diện</h2>
              
              <p>Tại VietSolution, chúng tôi tin rằng một chiến lược marketing số hiệu quả cần có cách tiếp cận tích hợp. Chúng tôi kết hợp nhiều kênh và kỹ thuật khác nhau để tạo ra các chiến dịch mạnh mẽ mang lại kết quả thực tế.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Tối ưu hóa công cụ tìm kiếm (SEO)</h3>
                  <p>Cải thiện khả năng hiển thị trực tuyến của bạn và xếp hạng cao hơn trong kết quả tìm kiếm với các dịch vụ SEO toàn diện của chúng tôi, bao gồm nghiên cứu từ khóa, tối ưu hóa trang web và xây dựng liên kết.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Quảng cáo trả tiền theo click (PPC)</h3>
                  <p>Tăng lưu lượng truy cập và chuyển đổi với các chiến dịch quảng cáo được nhắm mục tiêu chính xác, được tối ưu hóa cho ROI tối đa trên Google Ads, Facebook và các nền tảng khác.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Tiếp thị qua mạng xã hội</h3>
                  <p>Xây dựng sự hiện diện mạnh mẽ trên mạng xã hội với nội dung hấp dẫn, quản lý cộng đồng chủ động và chiến lược quảng cáo được nhắm mục tiêu trên tất cả các nền tảng phổ biến.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Tiếp thị qua email</h3>
                  <p>Nuôi dưỡng khách hàng tiềm năng và khuyến khích lòng trung thành của khách hàng với các chiến dịch email được cá nhân hóa, tự động hóa thông minh và phân tích dựa trên dữ liệu.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cách tiếp cận của chúng tôi</h2>
              
              <ol className="space-y-6 mt-6">
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">1. Đánh giá và phân tích</h3>
                  <p>Chúng tôi bắt đầu bằng cách đánh giá kỹ lưỡng sự hiện diện kỹ thuật số hiện tại của bạn, phân tích đối thủ cạnh tranh và xác định các cơ hội tăng trưởng.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">2. Phát triển chiến lược</h3>
                  <p>Chúng tôi tạo ra chiến lược tiếp thị kỹ thuật số tùy chỉnh phù hợp với mục tiêu kinh doanh, ngân sách và đối tượng mục tiêu của bạn.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">3. Thực hiện và tối ưu hóa</h3>
                  <p>Nhóm chuyên gia của chúng tôi triển khai chiến lược của bạn, liên tục điều chỉnh và tối ưu hóa các chiến dịch dựa trên dữ liệu hiệu suất thời gian thực.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">4. Báo cáo và phân tích</h3>
                  <p>Chúng tôi cung cấp báo cáo minh bạch và chi tiết, cho phép bạn theo dõi ROI và hiểu rõ tác động của các chiến dịch tiếp thị của bạn.</p>
                </li>
              </ol>
              
              <div className="mt-12 text-center">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md inline-block transition-colors"
                >
                  Liên hệ với chúng tôi ngay hôm nay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
