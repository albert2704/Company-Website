
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Về công ty chúng tôi"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-blue-600 font-semibold">Về Chúng Tôi</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Câu Chuyện và Sứ Mệnh</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Được thành lập vào năm 2010, VietSolution đã phát triển từ một công ty khởi nghiệp nhỏ trở thành nhà cung cấp hàng đầu các giải pháp đổi mới cho doanh nghiệp trên toàn Việt Nam và khu vực. Chúng tôi tin tưởng vào việc xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin cậy, minh bạch và cung cấp kết quả vượt trội.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tầm Nhìn</h3>
                  <p className="text-gray-700">Trao quyền cho doanh nghiệp với các giải pháp đổi mới thúc đẩy tăng trưởng và thành công.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sứ Mệnh</h3>
                  <p className="text-gray-700">Cung cấp dịch vụ vượt trội vượt xa kỳ vọng của khách hàng và giúp họ đạt được mục tiêu kinh doanh.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Giá Trị</h3>
                  <p className="text-gray-700">Chính trực, xuất sắc, đổi mới và tư duy khách hàng là trọng tâm hướng dẫn mọi hoạt động của chúng tôi.</p>
                </div>
              </div>
            </div>
            
            <a href="#services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Tìm hiểu thêm về dịch vụ của chúng tôi
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
