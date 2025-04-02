import { Code, LineChart, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Phát Triển Web",
    description:
      "Chúng tôi xây dựng các trang web và ứng dụng phản hồi nhanh, hiệu suất cao phù hợp với nhu cầu kinh doanh độc đáo của bạn.",
    link: "/web-development",
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: "Phân Tích Kinh Doanh",
    description:
      "Nhận thông tin chi tiết có giá trị từ dữ liệu của bạn với các giải pháp phân tích và báo cáo toàn diện của chúng tôi.",
    link: "/business-analysis",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Marketing Số",
    description:
      "Mở rộng phạm vi tiếp cận và phát triển đối tượng của bạn với các dịch vụ tiếp thị kỹ thuật số chiến lược của chúng tôi.",
    link: "/digital-marketing",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Bảo Mật Mạng",
    description:
      "Bảo vệ doanh nghiệp của bạn với các giải pháp bảo mật tiên tiến và quản lý mối đe dọa chủ động của chúng tôi.",
    link: "/cyber-security",
  },
];

const ServicesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section id="services" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          <motion.span
            className="text-blue-600 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Dịch Vụ Của Chúng Tôi
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
            variants={headerVariants}
          >
            Các Dịch Vụ
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={headerVariants}>
            Chúng tôi cung cấp nhiều dịch vụ chuyên biệt được thiết kế để giúp
            doanh nghiệp của bạn phát triển mạnh mẽ trong môi trường cạnh tranh
            hiện nay.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link
                to={service.link}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group flex flex-col h-full"
                onClick={scrollToTop}
              >
                <motion.div
                  className="mb-4 group-hover:text-blue-600 transition-colors"
                  variants={iconVariants}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </motion.h3>
                <motion.p className="text-gray-600 flex-grow">
                  {service.description}
                </motion.p>
                <motion.div
                  className="mt-4 text-blue-600 font-medium group-hover:underline flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Tìm hiểu thêm
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    ›
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
          >
            Nhận Tư Vấn Miễn Phí
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
