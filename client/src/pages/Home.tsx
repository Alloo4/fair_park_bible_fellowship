import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, BookOpen, Heart, Users, Compass, Flame, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EFE8DF] to-white py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
                Fair Park Bible Fellowship
              </h1>
              <p className="text-lg md:text-xl italic text-[#6F4E37] mb-6">
                A Light of Hope for All People
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 text-sm md:text-base">
                <span className="font-medium text-[#1A1A1A]">Biblical Teaching</span>
                <span className="hidden sm:inline text-[#8B8680]">•</span>
                <span className="font-medium text-[#1A1A1A]">Christ-Centered Worship</span>
                <span className="hidden sm:inline text-[#8B8680]">•</span>
                <span className="font-medium text-[#1A1A1A]">Family Strengthening</span>
              </div>

              {/* Service Times */}
              <div className="bg-white rounded border border-[#E8E3DE] p-6 mb-8 inline-block">
                <p className="text-sm text-[#8B8680] mb-2">Service Times</p>
                <p className="font-serif font-bold text-[#1A1A1A] text-lg">
                  Sundays at 10:30 AM
                </p>
                <p className="text-sm text-[#8B8680]">Wednesdays at 7:00 PM (Bible Study)</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/visit"
                  className="px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Compass size={18} />
                  Plan Your Visit
                </Link>
                <button className="px-6 py-3 border-2 border-[#6F4E37] text-[#6F4E37] font-medium rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                  <Play size={18} />
                  Watch Latest Sermon
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-6 text-center">
              Welcome to Fair Park Bible Fellowship
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
              Here at Fair Park, our desire is simple: to worship Christ, to faithfully proclaim and explain His Word, and to strengthen families and individuals through sound doctrine and godly community in a confused and broken world.
            </p>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              We believe the Bible is the inspired, authoritative Word of God and that every believer is called to grow in obedience, discipleship, and service. Whether you are new to the faith or seeking a church home, we welcome you to join us as we walk together in truth and grace.
            </p>
            <div className="text-center">
              <Link
                href="/about"
                className="inline-block px-6 py-3 border-2 border-[#6F4E37] text-[#6F4E37] font-medium rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200"
              >
                Learn More About Our Church
              </Link>
            </div>
          </div>
        </section>

        {/* Pastor Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF8] border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              From Pastor Stephen E. Broden
            </h2>
            <div className="bg-white rounded border border-[#E8E3DE] p-8 mb-8">
              <p className="italic text-lg text-[#6F4E37] leading-relaxed mb-4">
                "Our emphasis is the preaching and teaching of God's Word with a view of developing families and individuals in the principles of Christianity. Our method is expository — the unfolding of God's Word line-by-line, verse-by-verse."
              </p>
              <p className="italic text-lg text-[#6F4E37] leading-relaxed">
                "It is my sincere desire that you be ministered to through the songs we sing and through the presentation of today's sermon. We are honored that you would visit with us and trust that the experience of our worship service will help you know the power of His presence."
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200"
              >
                Learn About Pastor Broden
              </Link>
            </div>
          </div>
        </section>

        {/* Sermons & Broden Minute Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-4 text-center">
              Biblical Teaching for Daily Living
            </h2>
            <p className="text-center text-[#8B8680] mb-8">
              Access weekly sermons, expository series, and The Broden Minute — short, Scripture-rooted encouragement for daily life.
            </p>

            {/* Broden Minute Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "No fear, no doubt, only faith.",
                "Faith is a verb — it's acting on what God has said.",
                "You cannot walk in faith unless you know the Word of God.",
                "The power of the Word of God is in doing the Word of God.",
              ].map((quote, idx) => (
                <div key={idx} className="bg-[#EFE8DF] rounded p-6 border-l-4 border-[#6F4E37]">
                  <p className="italic font-serif text-[#6F4E37]">"{quote}"</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sermons"
                className="px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Watch Sermons
              </Link>
              <button className="px-6 py-3 border-2 border-[#6F4E37] text-[#6F4E37] font-medium rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                <BookOpen size={18} />
                View The Broden Minute
              </button>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF8] border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Our Beliefs
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              We affirm the Bible as our final authority in all matters of faith and life; every conviction and practice in this fellowship flows from the Word of God. Our core beliefs include:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "The authority and inspiration of the Holy Scriptures",
                "The triune Godhead: Father, Son, and Holy Spirit",
                "The person and work of Jesus Christ",
                "The ministry of the Holy Spirit",
                "Salvation by grace alone, through faith alone, in Christ alone",
                "The call to holiness, obedience, and faithful witness",
                "The return of Christ and the hope of eternal life",
              ].map((belief, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#6F4E37] font-bold mt-1">•</span>
                  <span className="text-[#1A1A1A]">{belief}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href="/beliefs"
                className="inline-block px-6 py-3 border-2 border-[#6F4E37] text-[#6F4E37] font-medium rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200"
              >
                Read Our Full Doctrinal Statement
              </Link>
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Visit Fair Park
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Location */}
              <div className="bg-[#FAFAF8] rounded p-6 border border-[#E8E3DE]">
                <h3 className="font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#6F4E37]" />
                  Location
                </h3>
                <p className="text-[#1A1A1A] font-medium">1321 Rowan Ave</p>
                <p className="text-[#1A1A1A]">Dallas, TX 75223</p>
              </div>

              {/* Service Times */}
              <div className="bg-[#FAFAF8] rounded p-6 border border-[#E8E3DE]">
                <h3 className="font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <Flame size={20} className="text-[#6F4E37]" />
                  Service Times
                </h3>
                <p className="text-[#1A1A1A] font-medium">Sundays — 10:30 AM</p>
                <p className="text-[#1A1A1A]">Wednesdays — 7:00 PM (Bible Study)</p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-[#EFE8DF] rounded p-8 mb-8">
              <h3 className="font-serif font-bold text-[#1A1A1A] mb-4 text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-medium text-[#6F4E37]">Expository Preaching</p>
                </div>
                <div>
                  <p className="font-medium text-[#6F4E37]">Warm Fellowship</p>
                </div>
                <div>
                  <p className="font-medium text-[#6F4E37]">Strong Teaching</p>
                </div>
                <div>
                  <p className="font-medium text-[#6F4E37]">Reverent Worship</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/visit"
                className="inline-block px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Salvation */}
        <section className="py-16 md:py-20 bg-[#6F4E37] text-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              A Light of Hope for All People
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Bible teaches that all have sinned and fall short of the glory of God, but that Christ died for our sins and rose again so that we might be forgiven and made new. If you have questions about salvation, repentance, or your walk with God, we invite you to reach out.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Christ offers forgiveness, freedom, and new life to all who believe.
            </p>
            <p className="italic text-lg mb-8">
              "We walk by faith, and not by sight." — 2 Corinthians 5:7
            </p>
            <button className="px-6 py-3 bg-white text-[#6F4E37] font-medium rounded hover:bg-[#EFE8DF] transition-colors duration-200">
              Speak With Someone
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
