
import { Code, LineChart, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Phát Triển Web",
    description: "Chúng tôi xây dựng các trang web và ứng dụng phản hồi nhanh, hiệu suất cao phù hợp với nhu cầu kinh doanh độc đáo của bạn.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: "Phân Tích Kinh Doanh",
    description: "Nhận thông tin chi tiết có giá trị từ dữ liệu của bạn với các giải pháp phân tích và báo cáo toàn diện của chúng tôi.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Marketing Số",
    description: "Mở rộng phạm vi tiếp cận và phát triển đối tượng của bạn với các dịch vụ tiếp thị kỹ thuật số chiến lược của chúng tôi.",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Bảo Mật Mạng",
    description: "Bảo vệ doanh nghiệp của bạn với các giải pháp bảo mật tiên tiến và quản lý mối đe dọa chủ động của chúng tôi.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Dịch Vụ Của Chúng Tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Các Dịch Vụ
          </h2>
          <p className="mt-4 text-gray-600">
            Chúng tôi cung cấp nhiều dịch vụ chuyên biệt được thiết kế để giúp doanh nghiệp của bạn phát triển mạnh mẽ trong môi trường cạnh tranh hiện nay.
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
            Nhận Tư Vấn Miễn Phí
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
