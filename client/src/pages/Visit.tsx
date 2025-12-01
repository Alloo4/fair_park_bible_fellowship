import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Users, BookOpen, Flame } from "lucide-react";
import { useState } from "react";

export default function Visit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EFE8DF] to-white py-12 md:py-16 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
              Plan Your Visit
            </h1>
            <p className="text-lg text-[#8B8680]">
              We'd love to welcome you to Fair Park Bible Fellowship
            </p>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-6">
              Welcome Home
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed">
              Whether you're new to faith or seeking a church home grounded in Scripture, we warmly invite you to join us. Fair Park Bible Fellowship is a community committed to biblical teaching, Christ-centered worship, and genuine fellowship.
            </p>
          </div>
        </section>

        {/* Location & Times */}
        <section className="py-16 md:py-20 bg-[#FAFAF8] border-b border-[#E8E3DE]">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="bg-white rounded p-8 border border-[#E8E3DE]">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={24} className="text-[#6F4E37]" />
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    Location
                  </h3>
                </div>
                <p className="text-lg font-medium text-[#1A1A1A] mb-2">
                  Fair Park Bible Fellowship
                </p>
                <p className="text-[#1A1A1A] mb-1">1321 Rowan Ave</p>
                <p className="text-[#1A1A1A] mb-6">Dallas, TX 75223</p>
                <a
                  href="https://maps.google.com/?q=1321+Rowan+Ave+Dallas+TX+75223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border-2 border-[#6F4E37] text-[#6F4E37] rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200"
                >
                  Get Directions
                </a>
              </div>

              {/* Service Times */}
              <div className="bg-white rounded p-8 border border-[#E8E3DE]">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-[#6F4E37]" />
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    Service Times
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Sunday Service</p>
                    <p className="text-[#8B8680]">10:30 AM</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Wednesday Bible Study</p>
                    <p className="text-[#8B8680]">7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: BookOpen,
                  title: "Expository Preaching",
                  description:
                    "Faithful, line-by-line teaching of God's Word that equips you to understand and apply Scripture.",
                },
                {
                  icon: Users,
                  title: "Warm Fellowship",
                  description:
                    "A welcoming community of believers committed to loving one another and supporting each other's faith.",
                },
                {
                  icon: Phone,
                  title: "Strong Teaching",
                  description:
                    "Biblical instruction grounded in sound doctrine that strengthens your understanding of God's truth.",
                },
                {
                  icon: Flame,
                  title: "Reverent Worship",
                  description:
                    "Worship that honors God and points us to the majesty and glory of Jesus Christ.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#FAFAF8] rounded p-6 border border-[#E8E3DE]">
                    <Icon size={28} className="text-[#6F4E37] mb-3" />
                    <h3 className="font-serif font-bold text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-[#EFE8DF] rounded p-8 border-l-4 border-[#6F4E37]">
              <h3 className="font-serif font-bold text-[#1A1A1A] mb-4">
                First Time Visitor?
              </h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6F4E37] font-bold">•</span>
                  <span>Arrive 10-15 minutes early to find a seat and meet our greeters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6F4E37] font-bold">•</span>
                  <span>Children are welcome; we have a nursery available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6F4E37] font-bold">•</span>
                  <span>Feel free to sit anywhere; there are no reserved seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6F4E37] font-bold">•</span>
                  <span>Our team is happy to answer any questions you may have</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-[#FAFAF8]">
          <div className="container max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="bg-white rounded border border-[#E8E3DE] p-8">
              <div className="mb-6">
                <label className="block text-[#1A1A1A] font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#E8E3DE] rounded focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#1A1A1A] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#E8E3DE] rounded focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#1A1A1A] font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#E8E3DE] rounded focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  placeholder="(214) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#1A1A1A] font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#E8E3DE] rounded focus:outline-none focus:ring-2 focus:ring-[#6F4E37] h-32 resize-none"
                  placeholder="Tell us how we can help or pray for you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Phone size={24} className="text-[#6F4E37] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-[#1A1A1A] mb-2">
                  Call Us
                </h3>
                <a
                  href="tel:+12143124700"
                  className="text-[#6F4E37] hover:text-[#5A3F2F] transition-colors"
                >
                  (214) 312-4700
                </a>
              </div>
              <div className="text-center">
                <MapPin size={24} className="text-[#6F4E37] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-[#1A1A1A] mb-2">
                  Visit Us
                </h3>
                <p className="text-[#1A1A1A]">1321 Rowan Ave</p>
                <p className="text-[#1A1A1A]">Dallas, TX 75223</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
