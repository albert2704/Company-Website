import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Chính Sách Riêng Tư
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                <strong>Cập nhật lần cuối:</strong> 03/04/2025
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                1. Giới Thiệu
              </h2>
              <p>
                VietSolution ("chúng tôi", "của chúng tôi") cam kết bảo vệ quyền
                riêng tư của bạn. Chính sách riêng tư này giải thích cách chúng
                tôi thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông tin của
                bạn khi bạn truy cập trang web của chúng tôi hoặc sử dụng dịch
                vụ của chúng tôi.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                2. Thông Tin Chúng Tôi Thu Thập
              </h2>
              <p>Chúng tôi có thể thu thập các loại thông tin sau đây:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>
                  <strong>Thông tin cá nhân:</strong> Như tên, địa chỉ email, số
                  điện thoại, địa chỉ và thông tin liên hệ khác mà bạn cung cấp
                  cho chúng tôi.
                </li>
                <li>
                  <strong>Thông tin sử dụng:</strong> Cách bạn tương tác với
                  trang web và dịch vụ của chúng tôi.
                </li>
                <li>
                  <strong>Thông tin thiết bị:</strong> Thông tin về thiết bị bạn
                  sử dụng để truy cập trang web của chúng tôi.
                </li>
                <li>
                  <strong>Thông tin vị trí:</strong> Thông tin chung về vị trí
                  của bạn (như thành phố hoặc quốc gia).
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn
              </h2>
              <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Cung cấp, duy trì và cải thiện dịch vụ của chúng tôi</li>
                <li>Xử lý giao dịch và gửi thông tin liên quan</li>
                <li>
                  Gửi thông báo kỹ thuật, cập nhật, cảnh báo bảo mật và thông
                  báo hỗ trợ
                </li>
                <li>Phản hồi yêu cầu, câu hỏi và phản hồi của bạn</li>
                <li>Phát triển sản phẩm và dịch vụ mới</li>
                <li>
                  Tuân thủ nghĩa vụ pháp lý và bảo vệ quyền lợi của chúng tôi
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                4. Bảo Mật Dữ Liệu
              </h2>
              <p>
                Chúng tôi áp dụng các biện pháp bảo mật hợp lý để bảo vệ thông
                tin cá nhân của bạn khỏi bị mất mát, truy cập, sử dụng, sửa đổi
                hoặc tiết lộ trái phép. Tuy nhiên, không có phương thức truyền
                qua internet hoặc phương thức lưu trữ điện tử nào là an toàn
                100%.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                5. Chia Sẻ Thông Tin
              </h2>
              <p>
                Chúng tôi không bán thông tin cá nhân của bạn cho bên thứ ba.
                Chúng tôi có thể chia sẻ thông tin với:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Nhà cung cấp dịch vụ giúp chúng tôi vận hành dịch vụ</li>
                <li>Đối tác kinh doanh với sự đồng ý của bạn</li>
                <li>
                  Cơ quan thực thi pháp luật, cơ quan chính phủ hoặc tổ chức
                  khác để tuân thủ pháp luật
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                6. Quyền Của Bạn
              </h2>
              <p>Tùy thuộc vào luật hiện hành, bạn có thể có quyền:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Truy cập, sửa chữa hoặc xóa dữ liệu cá nhân của bạn</li>
                <li>
                  Hạn chế hoặc phản đối việc xử lý dữ liệu cá nhân của bạn
                </li>
                <li>
                  Nhận dữ liệu cá nhân của bạn ở định dạng có thể đọc được bằng
                  máy
                </li>
                <li>Rút lại sự đồng ý của bạn bất cứ lúc nào</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                7. Liên Hệ Với Chúng Tôi
              </h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi hoặc mối quan ngại nào về Chính sách
                riêng tư của chúng tôi, vui lòng liên hệ với chúng tôi tại:
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

export default PrivacyPolicy;
