import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Nguyễn Văn An",
    role: "Tổng Giám Đốc",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Anh An có hơn 15 năm kinh nghiệm trong ngành và dẫn dắt tầm nhìn chiến lược của công ty chúng tôi.",
  },
  {
    name: "Trần Thị Hương",
    role: "Giám Đốc Công Nghệ",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Chị Hương thúc đẩy đổi mới công nghệ và đảm bảo chúng tôi luôn đi đầu trong xu hướng ngành.",
  },
  {
    name: "Lê Minh Tuấn",
    role: "Giám Đốc Sáng Tạo",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Anh Tuấn mang tầm nhìn sáng tạo đến các dự án và lãnh đạo đội ngũ thiết kế với niềm đam mê.",
  },
  {
    name: "Phạm Thị Mai",
    role: "Trưởng Phòng Marketing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Chị Mai phát triển và triển khai chiến lược marketing để phát triển sự hiện diện của thương hiệu chúng tôi.",
  },
];

const TeamSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="team" className="py-20 bg-gray-50 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        variants={sectionVariants}
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
            variants={textVariants}
          >
            Chuyên Gia Của Chúng Tôi
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
            variants={textVariants}
          >
            Đội Ngũ Chuyên Nghiệp
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={textVariants}>
            Đội ngũ chuyên gia đa dạng của chúng tôi kết hợp hàng thập kỷ kinh
            nghiệm trong ngành và niềm đam mê đổi mới.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Image container with animations */}
              <motion.div className="relative pt-[100%]">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  variants={imageVariants}
                  whileHover="hover"
                />

                {/* Image overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-blue-600 bg-opacity-0 flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "rgba(37, 99, 235, 0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="text-white opacity-0 scale-75 font-semibold text-lg"
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    Hồ Sơ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="p-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="font-bold text-xl text-gray-900"
                    variants={textVariants}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-blue-600 font-medium text-sm mb-4"
                    variants={textVariants}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p className="text-gray-600" variants={textVariants}>
                    {member.bio}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
