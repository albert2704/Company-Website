import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
              Điều Khoản Dịch Vụ
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                <strong>Cập nhật lần cuối:</strong> 03/04/2025
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                1. Giới Thiệu
              </h2>
              <p>
                Chào mừng bạn đến với VietSolution. Các Điều khoản dịch vụ này
                ("Điều khoản") điều chỉnh việc bạn truy cập và sử dụng trang
                web, sản phẩm và dịch vụ của chúng tôi. Bằng cách truy cập hoặc
                sử dụng dịch vụ của chúng tôi, bạn đồng ý bị ràng buộc bởi các
                Điều khoản này.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                2. Tài Khoản và Trách Nhiệm
              </h2>
              <p>
                Khi bạn sử dụng dịch vụ của chúng tôi, bạn chịu trách nhiệm duy
                trì tính bảo mật của tài khoản và mật khẩu của bạn. Bạn đồng ý
                chịu trách nhiệm về tất cả các hoạt động diễn ra trong tài khoản
                của bạn.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                3. Sử Dụng Được Phép
              </h2>
              <p>
                Bạn đồng ý sử dụng dịch vụ của chúng tôi chỉ cho các mục đích
                hợp pháp và theo cách không vi phạm quyền của người khác hoặc
                hạn chế hoặc ngăn cản việc sử dụng và hưởng thụ dịch vụ của bất
                kỳ ai. Bạn không được phép:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>
                  Sử dụng dịch vụ của chúng tôi theo bất kỳ cách nào có thể gây
                  hại, vô hiệu hóa, quá tải hoặc làm suy yếu dịch vụ
                </li>
                <li>
                  Sử dụng robot, spider hoặc phương tiện điện tử tự động khác để
                  truy cập dịch vụ của chúng tôi
                </li>
                <li>
                  Đăng hoặc truyền bất kỳ nội dung bất hợp pháp, lừa đảo, phỉ
                  báng, xúc phạm hoặc không phù hợp
                </li>
                <li>
                  Thu thập hoặc theo dõi thông tin cá nhân của người dùng khác
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                4. Quyền Sở Hữu Trí Tuệ
              </h2>
              <p>
                Dịch vụ và nội dung của nó, bao gồm nhưng không giới hạn ở văn
                bản, đồ họa, logo, biểu tượng, hình ảnh và phần mềm, là tài sản
                của VietSolution và được bảo vệ bởi luật sở hữu trí tuệ. Bạn
                không được sao chép, phân phối, sửa đổi hoặc tạo các tác phẩm
                phái sinh từ bất kỳ phần nào của dịch vụ mà không có sự đồng ý
                rõ ràng bằng văn bản từ chúng tôi.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                5. Thanh Toán và Hoàn Tiền
              </h2>
              <p>
                Đối với các dịch vụ có phí, thanh toán được thực hiện trước. Mọi
                hoàn tiền sẽ được xử lý theo chính sách hoàn tiền của chúng tôi,
                có sẵn theo yêu cầu.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                6. Giới Hạn Trách Nhiệm
              </h2>
              <p>
                Trong phạm vi tối đa được pháp luật cho phép, VietSolution không
                chịu trách nhiệm pháp lý đối với bất kỳ thiệt hại nào phát sinh
                từ việc sử dụng hoặc không thể sử dụng dịch vụ của chúng tôi,
                bao gồm nhưng không giới hạn ở thiệt hại trực tiếp, gián tiếp,
                ngẫu nhiên, do hậu quả hoặc trừng phạt.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                7. Chấm Dứt
              </h2>
              <p>
                Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập của bạn
                vào dịch vụ của chúng tôi ngay lập tức, mà không cần thông báo
                trước hoặc trách nhiệm pháp lý, vì bất kỳ lý do gì, bao gồm
                nhưng không giới hạn ở việc vi phạm Điều khoản.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                8. Luật Điều Chỉnh
              </h2>
              <p>
                Các Điều khoản này sẽ được điều chỉnh và hiểu phù hợp với luật
                pháp của Việt Nam, không tính đến xung đột các nguyên tắc luật
                pháp.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                9. Thay Đổi Điều Khoản
              </h2>
              <p>
                Chúng tôi có thể sửa đổi các Điều khoản này bất cứ lúc nào bằng
                cách đăng các điều khoản đã sửa đổi trên trang web của chúng
                tôi. Việc bạn tiếp tục sử dụng dịch vụ sau khi đăng bất kỳ thay
                đổi nào đều cấu thành sự chấp nhận của bạn đối với các điều
                khoản đã sửa đổi.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                10. Liên Hệ
              </h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi hoặc mối quan ngại nào về Điều khoản
                Dịch vụ của chúng tôi, vui lòng liên hệ với chúng tôi tại:
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

export default TermsOfService;
