import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <>
      <Navbar />
      <motion.main
        className="pt-24 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chính Sách Cookie
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                <strong>Cập nhật lần cuối:</strong> 03/04/2025
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                1. Cookie Là Gì?
              </h2>
              <p>
                Cookie là các tệp văn bản nhỏ được đặt trên máy tính hoặc thiết
                bị di động của bạn khi bạn truy cập một trang web. Cookie được
                sử dụng rộng rãi để làm cho trang web hoạt động, hoặc hoạt động
                hiệu quả hơn, cũng như cung cấp thông tin cho chủ sở hữu trang
                web.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                2. Cách Chúng Tôi Sử Dụng Cookie
              </h2>
              <p>Trang web của chúng tôi sử dụng cookie để:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>
                  Hiểu cách khách truy cập sử dụng trang web của chúng tôi
                </li>
                <li>
                  Ghi nhớ tùy chọn của bạn trong các lần truy cập tiếp theo
                </li>
                <li>Cải thiện trải nghiệm người dùng của bạn</li>
                <li>Cung cấp chức năng trên trang web của chúng tôi</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                3. Loại Cookie Chúng Tôi Sử Dụng
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3.1 Cookie Cần Thiết
              </h3>
              <p>
                Những cookie này là cần thiết để trang web hoạt động và không
                thể tắt trong hệ thống của chúng tôi. Chúng thường chỉ được đặt
                để đáp ứng các hành động bạn thực hiện tương đương với yêu cầu
                dịch vụ, chẳng hạn như đặt tùy chọn quyền riêng tư của bạn, đăng
                nhập hoặc điền vào biểu mẫu.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3.2 Cookie Hiệu Suất
              </h3>
              <p>
                Những cookie này cho phép chúng tôi đếm số lượt truy cập và
                nguồn lưu lượng để chúng tôi có thể đo lường và cải thiện hiệu
                suất của trang web của mình. Chúng giúp chúng tôi biết trang nào
                phổ biến nhất và ít phổ biến nhất và xem cách khách truy cập di
                chuyển quanh trang web.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3.3 Cookie Chức Năng
              </h3>
              <p>
                Những cookie này cho phép trang web cung cấp chức năng và cá
                nhân hóa nâng cao. Chúng có thể được đặt bởi chúng tôi hoặc bởi
                các nhà cung cấp bên thứ ba có dịch vụ chúng tôi đã thêm vào
                trang của mình.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3.4 Cookie Tiếp Thị
              </h3>
              <p>
                Những cookie này có thể được đặt thông qua trang web của chúng
                tôi bởi các đối tác quảng cáo của chúng tôi. Chúng có thể được
                các công ty đó sử dụng để xây dựng hồ sơ về sở thích của bạn và
                hiển thị cho bạn quảng cáo liên quan trên các trang web khác.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                4. Kiểm Soát Cookie
              </h2>
              <p>
                Hầu hết các trình duyệt web cho phép một số kiểm soát hầu hết
                các cookie thông qua cài đặt trình duyệt. Ngoài ra, bạn có thể
                đặt tùy chọn cookie của mình khi lần đầu truy cập trang web của
                chúng tôi.
              </p>
              <p>
                Để tìm hiểu thêm về cookie, bao gồm cách xem cookie nào đã được
                đặt và cách quản lý và xóa chúng, hãy truy cập{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  className="text-blue-600 hover:underline"
                >
                  www.allaboutcookies.org
                </a>
                .
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                5. Cookie Của Bên Thứ Ba
              </h2>
              <p>
                Trang web của chúng tôi cũng sử dụng các dịch vụ của bên thứ ba,
                chẳng hạn như Google Analytics, có thể đặt cookie trên thiết bị
                của bạn. Chúng tôi không có quyền kiểm soát việc phổ biến những
                cookie này.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                6. Thay Đổi Đối Với Chính Sách Cookie Của Chúng Tôi
              </h2>
              <p>
                Chúng tôi có thể cập nhật Chính sách Cookie này bất cứ lúc nào.
                Chúng tôi khuyến khích bạn định kỳ xem lại chính sách này để cập
                nhật những thay đổi. Ngày "Cập nhật lần cuối" ở đầu chính sách
                này cho biết khi nào nó được sửa đổi gần đây nhất.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                7. Liên Hệ Với Chúng Tôi
              </h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi hoặc mối quan ngại nào về Chính sách
                Cookie của chúng tôi, vui lòng liên hệ với chúng tôi tại:
              </p>
              <p>
                Email: albert04.dev@gmail.com
                <br />
                Địa chỉ: 96A Đường Trần Phú, Phường Mộ Lao, Quận Hà Đông, Hà Nội
              </p>
            </div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
