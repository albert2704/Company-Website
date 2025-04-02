
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const CyberSecurity = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Bảo Mật Mạng
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 text-center mb-12">
                Bảo vệ doanh nghiệp của bạn với các giải pháp bảo mật tiên tiến và quản lý mối đe dọa chủ động của chúng tôi.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dịch vụ bảo mật mạng của chúng tôi bao gồm:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Đánh giá và kiểm tra bảo mật</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Giám sát bảo mật 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Phòng chống vi-rút và phần mềm độc hại</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Quản lý và ứng phó sự cố</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Đào tạo nhận thức về bảo mật</span>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tại sao bảo mật mạng lại quan trọng?</h2>
              
              <p>Trong thời đại kỹ thuật số ngày nay, các mối đe dọa mạng ngày càng tinh vi và phổ biến. Các cuộc tấn công mạng có thể gây ra thiệt hại đáng kể cho doanh nghiệp, bao gồm:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mất dữ liệu quan trọng</h3>
                  <p>Việc đánh cắp hoặc mất dữ liệu nhạy cảm có thể ảnh hưởng nghiêm trọng đến hoạt động kinh doanh và danh tiếng của bạn.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thiệt hại tài chính</h3>
                  <p>Từ tiền chuộc phần mềm đến phí pháp lý và chi phí khắc phục, các vi phạm bảo mật có thể gây tổn thất tài chính đáng kể.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gián đoạn kinh doanh</h3>
                  <p>Các cuộc tấn công mạng có thể làm gián đoạn hoạt động bình thường, dẫn đến thời gian ngừng hoạt động tốn kém và mất năng suất.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thiệt hại danh tiếng</h3>
                  <p>Lòng tin của khách hàng có thể bị ảnh hưởng nghiêm trọng sau một vụ vi phạm dữ liệu, dẫn đến mất thị phần.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cách tiếp cận bảo mật của chúng tôi</h2>
              
              <p>Tại VietSolution, chúng tôi tin tưởng vào phương pháp bảo mật toàn diện và nhiều lớp, được thiết kế để bảo vệ tất cả các khía cạnh của cơ sở hạ tầng kỹ thuật số của bạn.</p>
              
              <ol className="space-y-6 mt-6">
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">1. Đánh giá và phát hiện</h3>
                  <p>Chúng tôi bắt đầu với đánh giá toàn diện về hệ thống của bạn để xác định các lỗ hổng và điểm yếu tiềm ẩn.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">2. Bảo vệ và phòng ngừa</h3>
                  <p>Chúng tôi triển khai các giải pháp bảo mật mạnh mẽ để ngăn chặn các mối đe dọa và tăng cường phòng thủ của bạn, bao gồm tường lửa, mã hóa và bảo mật điểm cuối.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">3. Giám sát và phát hiện</h3>
                  <p>Nhóm bảo mật của chúng tôi liên tục giám sát hệ thống của bạn để phát hiện sớm các mối đe dọa và hoạt động đáng ngờ.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">4. Ứng phó và phục hồi</h3>
                  <p>Trong trường hợp xảy ra sự cố bảo mật, chúng tôi có các giao thức ứng phó nhanh chóng để hạn chế thiệt hại và khôi phục hoạt động bình thường.</p>
                </li>
                
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">5. Đào tạo và nâng cao nhận thức</h3>
                  <p>Chúng tôi cung cấp chương trình đào tạo nhận thức về bảo mật cho nhân viên của bạn, biến họ thành tuyến phòng thủ đầu tiên chống lại các mối đe dọa mạng.</p>
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

export default CyberSecurity;
