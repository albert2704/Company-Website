
const teamMembers = [
  {
    name: "Nguyễn Văn An",
    role: "Tổng Giám Đốc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Anh An có hơn 15 năm kinh nghiệm trong ngành và dẫn dắt tầm nhìn chiến lược của công ty chúng tôi."
  },
  {
    name: "Trần Thị Hương",
    role: "Giám Đốc Công Nghệ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Chị Hương thúc đẩy đổi mới công nghệ và đảm bảo chúng tôi luôn đi đầu trong xu hướng ngành."
  },
  {
    name: "Lê Minh Tuấn",
    role: "Giám Đốc Sáng Tạo",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Anh Tuấn mang tầm nhìn sáng tạo đến các dự án và lãnh đạo đội ngũ thiết kế với niềm đam mê."
  },
  {
    name: "Phạm Thị Mai",
    role: "Trưởng Phòng Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Chị Mai phát triển và triển khai chiến lược marketing để phát triển sự hiện diện của thương hiệu chúng tôi."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Chuyên Gia Của Chúng Tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Đội Ngũ Chuyên Nghiệp
          </h2>
          <p className="mt-4 text-gray-600">
            Đội ngũ chuyên gia đa dạng của chúng tôi kết hợp hàng thập kỷ kinh nghiệm trong ngành và niềm đam mê đổi mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
