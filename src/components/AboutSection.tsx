import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Về công ty chúng tôi"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

          <div className="md:w-1/2">
            <motion.div className="mb-4" variants={itemVariants}>
              <motion.span
                className="text-blue-600 font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Về Chúng Tôi
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
                variants={itemVariants}
              >
                Câu Chuyện và Sứ Mệnh
              </motion.h2>
            </motion.div>

            <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
              Được thành lập vào năm 2010, VietSolution đã phát triển từ một
              công ty khởi nghiệp nhỏ trở thành nhà cung cấp hàng đầu các giải
              pháp đổi mới cho doanh nghiệp trên toàn Việt Nam và khu vực. Chúng
              tôi tin tưởng vào việc xây dựng mối quan hệ lâu dài với khách hàng
              dựa trên sự tin cậy, minh bạch và cung cấp kết quả vượt trội.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={containerVariants}>
              <motion.div
                className="flex items-start"
                variants={featureVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <motion.svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      variants={checkmarkVariants}
                    />
                  </motion.svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tầm Nhìn</h3>
                  <p className="text-gray-700">
                    Trao quyền cho doanh nghiệp với các giải pháp đổi mới thúc
                    đẩy tăng trưởng và thành công.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={featureVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <motion.svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      variants={checkmarkVariants}
                    />
                  </motion.svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sứ Mệnh</h3>
                  <p className="text-gray-700">
                    Cung cấp dịch vụ vượt trội vượt xa kỳ vọng của khách hàng và
                    giúp họ đạt được mục tiêu kinh doanh.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={featureVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <motion.svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      variants={checkmarkVariants}
                    />
                  </motion.svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Giá Trị</h3>
                  <p className="text-gray-700">
                    Chính trực, xuất sắc, đổi mới và tư duy khách hàng là trọng
                    tâm hướng dẫn mọi hoạt động của chúng tôi.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.a
              href="#services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Tìm hiểu thêm về dịch vụ của chúng tôi
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
