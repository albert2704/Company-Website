import { motion } from "framer-motion";
import FacebookFeed from "./FacebookFeed";

const SocialSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="social"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={headerVariants}
        >
          <motion.span
            className="text-blue-600 font-semibold"
            variants={headerVariants}
          >
            Mạng Xã Hội
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
            variants={headerVariants}
          >
            Kết Nối Với Chúng Tôi
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={headerVariants}>
            Theo dõi chúng tôi trên mạng xã hội để cập nhật tin tức mới nhất và
            các mẹo công nghệ hữu ích.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <FacebookFeed
            pageUrl="https://www.facebook.com/facebook"
            width={500}
            height={600}
            tabs="timeline"
            className="rounded-lg overflow-hidden shadow-xl"
          />

          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tại sao nên theo dõi chúng tôi?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Cập nhật tin tức công nghệ mới nhất</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Mẹo và thủ thuật về phát triển web</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Các sự kiện và khuyến mãi đặc biệt</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>
                  Cơ hội tương tác trực tiếp với đội ngũ của chúng tôi
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialSection;
