import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Code className="h-16 w-16 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Phát Triển Web
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 text-center mb-12">
                Chúng tôi xây dựng các trang web và ứng dụng phản hồi nhanh,
                hiệu suất cao phù hợp với nhu cầu kinh doanh độc đáo của bạn.
              </p>

              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Dịch vụ phát triển web của chúng tôi bao gồm:
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Thiết kế và phát triển trang web tùy chỉnh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Phát triển ứng dụng web phản hồi nhanh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tối ưu hóa hiệu suất trang web</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Tích hợp hệ thống CMS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Phát triển cửa hàng thương mại điện tử</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quy trình làm việc của chúng tôi
              </h2>

              <p>
                Tại VietSolution, chúng tôi theo quy trình phát triển web được
                đánh giá cao để đảm bảo mọi dự án được hoàn thành đúng thời hạn,
                trong ngân sách và vượt quá mong đợi của bạn.
              </p>

              <ol className="space-y-6 mt-6">
                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    1. Khám phá và Lập kế hoạch
                  </h3>
                  <p>
                    Chúng tôi bắt đầu bằng cách hiểu rõ mục tiêu kinh doanh, đối
                    tượng mục tiêu và nhu cầu cụ thể của bạn. Thông tin chi tiết
                    này giúp chúng tôi lập kế hoạch chiến lược cho dự án của
                    bạn.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    2. Thiết kế
                  </h3>
                  <p>
                    Nhóm thiết kế của chúng tôi tạo ra các mô hình dây khung và
                    mẫu trực quan, tập trung vào trải nghiệm người dùng (UX) và
                    giao diện người dùng (UI) để đảm bảo trang web của bạn không
                    chỉ đẹp mà còn hoạt động hiệu quả.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    3. Phát triển
                  </h3>
                  <p>
                    Các lập trình viên của chúng tôi sử dụng các công nghệ phát
                    triển web hiện đại nhất để đưa thiết kế vào cuộc sống, đảm
                    bảo trang web của bạn có khả năng mở rộng, an toàn và hiệu
                    suất tốt.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    4. Kiểm thử
                  </h3>
                  <p>
                    Trước khi ra mắt, chúng tôi tiến hành kiểm tra kỹ lưỡng trên
                    nhiều trình duyệt và thiết bị để đảm bảo trang web của bạn
                    hoạt động hoàn hảo cho tất cả người dùng.
                  </p>
                </li>

                <li className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    5. Ra mắt và Hỗ trợ liên tục
                  </h3>
                  <p>
                    Sau khi ra mắt, chúng tôi không chỉ dừng lại ở đó. Chúng tôi
                    cung cấp hỗ trợ liên tục, cập nhật và bảo trì để đảm bảo
                    trang web của bạn tiếp tục phát triển cùng với doanh nghiệp
                    của bạn.
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

export default WebDevelopment;
