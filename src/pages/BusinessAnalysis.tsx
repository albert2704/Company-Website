import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart } from "lucide-react";
import { Link } from "react-router-dom";
const BusinessAnalysis = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <LineChart className="h-16 w-16 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Phân Tích Kinh Doanh
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 text-center mb-12">
                Nhận thông tin chi tiết có giá trị từ dữ liệu của bạn với các
                giải pháp phân tích và báo cáo toàn diện của chúng tôi.
              </p>

              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Dịch vụ phân tích kinh doanh của chúng tôi bao gồm:
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Phân tích dữ liệu nâng cao</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Báo cáo và bảng điều khiển tùy chỉnh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Dự báo và mô hình hóa dữ liệu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tối ưu hóa quy trình kinh doanh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Phân tích thị trường và phân tích cạnh tranh</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tại sao chọn dịch vụ phân tích của chúng tôi?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    Chuyên môn phân tích sâu rộng
                  </h3>
                  <p>
                    Nhóm chuyên gia của chúng tôi kết hợp kiến thức kỹ thuật với
                    hiểu biết sâu sắc về ngành, mang đến các phân tích có ý
                    nghĩa vượt ra ngoài các số liệu.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    Giải pháp tùy chỉnh
                  </h3>
                  <p>
                    Chúng tôi tùy chỉnh các giải pháp phân tích của mình để đáp
                    ứng nhu cầu cụ thể của doanh nghiệp bạn, đảm bảo bạn nhận
                    được thông tin chi tiết có liên quan nhất.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    Kết quả theo định hướng hành động
                  </h3>
                  <p>
                    Chúng tôi không chỉ cung cấp dữ liệu; chúng tôi cung cấp
                    thông tin chi tiết hữu ích và có thể thực hiện để thúc đẩy
                    việc ra quyết định chiến lược.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    Công nghệ tiên tiến
                  </h3>
                  <p>
                    Chúng tôi sử dụng các công cụ và phương pháp phân tích dữ
                    liệu tiên tiến nhất để đảm bảo bạn luôn đi trước đối thủ
                    cạnh tranh.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quy trình phân tích của chúng tôi
              </h2>

              <ol className="space-y-6 mt-6">
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    1. Thu thập và lập kế hoạch dữ liệu
                  </h3>
                  <p>
                    Chúng tôi bắt đầu bằng cách xác định nhu cầu dữ liệu của bạn
                    và phát triển chiến lược thu thập dữ liệu toàn diện.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    2. Xử lý và làm sạch dữ liệu
                  </h3>
                  <p>
                    Chúng tôi đảm bảo dữ liệu của bạn được làm sạch, nhất quán
                    và sẵn sàng cho phân tích.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    3. Phân tích và diễn giải
                  </h3>
                  <p>
                    Các nhà phân tích của chúng tôi áp dụng các phương pháp
                    thống kê tiên tiến để khám phá mẫu, xu hướng và mối quan hệ
                    trong dữ liệu của bạn.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    4. Trực quan hóa và báo cáo
                  </h3>
                  <p>
                    Chúng tôi chuyển đổi những phát hiện của mình thành bảng
                    điều khiển trực quan hấp dẫn và báo cáo dễ hiểu.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    5. Đề xuất và thực hiện chiến lược
                  </h3>
                  <p>
                    Chúng tôi cung cấp các đề xuất thiết thực dựa trên phân tích
                    của mình và hỗ trợ bạn thực hiện các chiến lược dựa trên dữ
                    liệu.
                  </p>
                </li>
              </ol>

              <div className="mt-12 text-center">
                <Link
                  to="/"
                  state={{ scrollToContact: true }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md inline-block transition-colors"
                >
                  Liên hệ với chúng tôi ngay hôm nay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;
