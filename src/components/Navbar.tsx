import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Trang Chủ", href: isHomePage ? "#home" : "/" },
    { name: "Giới Thiệu", href: isHomePage ? "#about" : "/#about" },
    { name: "Dịch Vụ", href: isHomePage ? "#services" : "/#services" },
    { name: "Đội Ngũ", href: isHomePage ? "#team" : "/#team" },
    { name: "Liên Hệ", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const serviceLinks = [
    { name: "Phát Triển Web", href: "/web-development" },
    { name: "Phân Tích Kinh Doanh", href: "/business-analysis" },
    { name: "Marketing Số", href: "/digital-marketing" },
    { name: "Bảo Mật Mạng", href: "/cyber-security" },
  ];

  // Animation variants
  const navbarVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 1)", // Changed from transparent to white
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)", // Light shadow from the start
      padding: "1rem 0",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      padding: "0.5rem 0",
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/"
              className="flex-shrink-0 text-2xl font-bold text-blue-900"
              onClick={scrollToTop}
            >
              VietSolution
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                {link.name}
              </motion.a>
            ))}

            <div className="relative" ref={dropdownRef}>
              <motion.button
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Dịch Vụ Chi Tiết
                <motion.svg
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 origin-top-left"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {serviceLinks.map((service, index) => (
                        <motion.div key={index} variants={dropdownItemVariants}>
                          <Link
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              scrollToTop();
                            }}
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href={isHomePage ? "#contact" : "/#contact"}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Bắt Đầu
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 pb-4 space-y-1 bg-white rounded-lg shadow-lg absolute left-0 right-0 mx-4"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2.5 px-4"
                  onClick={() => setIsOpen(false)}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                className="py-2 border-t border-gray-100 mt-2"
                variants={menuItemVariants}
              >
                <p className="text-gray-500 text-sm font-medium mb-1 px-4">
                  Dịch Vụ Chi Tiết:
                </p>
                {serviceLinks.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={service.href}
                      className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2.5 px-6"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="px-4 py-3" variants={menuItemVariants}>
                <motion.a
                  href={isHomePage ? "#contact" : "/#contact"}
                  className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center w-full"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Bắt Đầu
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
