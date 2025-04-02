import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ngf7z89", // Create this on emailjs.com
        "template_pub5qpw", // Create this on emailjs.com
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "1W8cMSH9Ju1SD1K5r" // Get this from emailjs.com
      )
      .then(() => {
        toast({
          title: "Đã gửi tin nhắn!",
          description:
            "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        toast({
          title: "Lỗi gửi tin nhắn",
          description: "Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.97,
    },
    submitting: {
      scale: [1, 1.02, 1],
      transition: {
        repeat: Infinity,
        duration: 1.5,
      },
    },
    submitted: {
      backgroundColor: "#10B981", // success green
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
        >
          <motion.span
            className="text-blue-600 font-semibold"
            variants={headerVariants}
          >
            Liên Hệ Với Chúng Tôi
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
            variants={headerVariants}
          >
            Thông Tin Liên Hệ
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={headerVariants}>
            Bạn có câu hỏi hoặc muốn tìm hiểu thêm về dịch vụ của chúng tôi? Hãy
            liên hệ ngay hôm nay.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <motion.div
              className="bg-blue-600 text-white p-8 lg:col-span-2"
              variants={leftPanelVariants}
            >
              <motion.h3
                className="text-2xl font-bold mb-6"
                variants={contactItemVariants}
              >
                Thông Tin Liên Hệ
              </motion.h3>
              <motion.p
                className="mb-8 opacity-90"
                variants={contactItemVariants}
              >
                Điền vào biểu mẫu và đội ngũ của chúng tôi sẽ liên hệ lại với
                bạn trong vòng 24 giờ.
              </motion.p>

              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Phone className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Điện Thoại</h4>
                    <p className="mt-1 opacity-90">(070) 217-3569</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Mail className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="mt-1 opacity-90">albert04.dev@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <MapPin className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Địa Chỉ</h4>
                    <p className="mt-1 opacity-90">
                      96A Đường Trần Phú, Phường Mộ Lao
                      <br />
                      Quận Hà Đông, Hà Nội
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className="mt-12" variants={contactItemVariants}>
                <motion.h4
                  className="font-medium mb-4"
                  variants={contactItemVariants}
                >
                  Theo Dõi Chúng Tôi
                </motion.h4>
                <div className="flex space-x-4">
                  {[
                    {
                      path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                    },
                    {
                      path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                    },
                    {
                      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                    {
                      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="https://facebook.com/albert2704"
                      target="_blank"
                      className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                      custom={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.5 + i * 0.1 },
                      }}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.path} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="p-8 lg:col-span-3" variants={formVariants}>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Họ và Tên
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nguyễn Văn A"
                      whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Địa Chỉ Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="nguyenvana@example.com"
                      whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Số Điện Thoại
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="098 765 4321"
                      whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Chủ Đề
                    </label>
                    <motion.select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="General Inquiry">Thắc Mắc Chung</option>
                      <option value="Web Development">Phát Triển Web</option>
                      <option value="Digital Marketing">Marketing Số</option>
                      <option value="Business Analytics">
                        Phân Tích Kinh Doanh
                      </option>
                      <option value="Cybersecurity">Bảo Mật Mạng</option>
                    </motion.select>
                  </motion.div>
                </div>

                <motion.div className="mb-6" variants={inputVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tin Nhắn Của Bạn
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Chúng tôi có thể giúp gì cho bạn?"
                    whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                  variants={buttonVariants}
                  whileHover={!isSubmitting ? "hover" : undefined}
                  whileTap={!isSubmitting ? "tap" : undefined}
                  animate={
                    isSubmitted
                      ? "submitted"
                      : isSubmitting
                        ? "submitting"
                        : "visible"
                  }
                >
                  {isSubmitted ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Check className="mr-2 h-5 w-5" />
                      Đã Gửi Thành Công
                    </motion.div>
                  ) : isSubmitting ? (
                    "Đang Gửi..."
                  ) : (
                    "Gửi Tin Nhắn"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
