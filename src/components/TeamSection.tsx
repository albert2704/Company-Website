
const teamMembers = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "John has over 15 years of experience in the industry and leads our company vision and strategy."
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Sarah drives our technological innovation and ensures we stay ahead of industry trends."
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Michael brings creative vision to our projects and leads our design team with passion."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    bio: "Emily develops and implements our marketing strategies to grow our brand presence."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Our Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600">
            Our diverse team of experts brings together decades of industry experience and a passion for innovation.
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
