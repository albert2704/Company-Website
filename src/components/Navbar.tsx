
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`;

  const isHomePage = location.pathname === "/";

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

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            VietSolution
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Dịch Vụ Chi Tiết
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="py-1">
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Bắt Đầu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="py-2 border-t border-gray-100 mt-2">
              <p className="text-gray-500 text-sm font-medium mb-2">Dịch Vụ Chi Tiết:</p>
              {serviceLinks.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Bắt Đầu
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
