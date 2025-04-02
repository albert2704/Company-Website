import { useRef } from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

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

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const infoBlockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f8fafc",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="location" className="py-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
        >
          <motion.span
            className="text-blue-600 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Vị Trí Của Chúng Tôi
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
            variants={headerVariants}
          >
            Địa Điểm
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={headerVariants}>
            Ghé thăm văn phòng hoặc liên hệ với chúng tôi trực tuyến. Chúng tôi
            rất mong được nghe từ bạn!
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          variants={mapVariants}
        >
          <motion.div
            className="w-full h-[400px] mb-10"
            ref={mapRef}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <motion.iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2924013039146!2d105.78484157691656!3d20.98091298065658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1743613014077!5m2!1svi!2s"
              width="100%"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              style={{ border: 0 }}
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{
                filter: "grayscale(0%)",
                transition: { duration: 1.5 },
              }}
              viewport={{ once: true }}
            ></motion.iframe>
          </motion.div>

          <motion.div
            className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                title: "Địa chỉ",
                content: (
                  <>
                    96A Đường Trần Phú, Phường Mộ Lao
                    <br />
                    Quận Hà Đông, Hà Nội
                    <br />
                    Việt Nam
                  </>
                ),
                icon: "📍",
              },
              {
                title: "Liên hệ",
                content: (
                  <>
                    Điện thoại: (070) 217-3569
                    <br />
                    Email: albert04.dev@gmail.com
                  </>
                ),
                icon: "📞",
              },
              {
                title: "Giờ làm việc",
                content: (
                  <>
                    Thứ Hai - Thứ Sáu: 8:30 - 17:30
                    <br />
                    Thứ Bảy: 9:00 - 12:00
                    <br />
                    Chủ Nhật: Đóng cửa
                  </>
                ),
                icon: "🕒",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-lg border border-gray-100"
                variants={infoBlockVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="text-2xl mr-3"
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <motion.h3
                      className="text-lg font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MapSection;
