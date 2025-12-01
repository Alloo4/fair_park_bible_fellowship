import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EFE8DF] to-white py-12 md:py-16 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
              About Fair Park Bible Fellowship
            </h1>
            <p className="text-lg text-[#8B8680]">
              Understanding our church's mission, leadership, and biblical foundation
            </p>
          </div>
        </section>

        {/* Church Identity Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
              Fair Park Bible Fellowship is a Christ-centered community committed to the faithful proclamation of God's Word, the development of disciples, and the strengthening of families. We believe that the Bible is God's authoritative, inspired Word and that it must be central to all we do.
            </p>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
              Our approach to ministry is expository—we unfold God's Word line-by-line and verse-by-verse, allowing Scripture to speak for itself. This method ensures that our teaching is grounded in the text and applicable to the lives of our congregation.
            </p>
            <p className="text-lg text-[#1A1A1A] leading-relaxed">
              We exist to glorify God, to proclaim the gospel of Jesus Christ, and to equip believers for a life of obedience and service in a broken world.
            </p>
          </div>
        </section>

        {/* Pastor Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF8] border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Pastor Stephen E. Broden
            </h2>

            {/* Pastor Bio */}
            <div className="bg-white rounded border border-[#E8E3DE] p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-4">
                Senior Pastor
              </h3>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                Pastor Stephen E. Broden has dedicated his life to the faithful proclamation of God's Word and the spiritual development of believers. With a heart for expository preaching and biblical teaching, he leads Fair Park Bible Fellowship with a commitment to doctrinal clarity and pastoral care.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                His ministry is characterized by a deep reverence for Scripture, a passion for discipleship, and a burden for the lost. Pastor Broden believes that the power of God's Word lies not just in hearing it, but in doing it—applying its truths to every aspect of life.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Pastor Broden is committed to strengthening families, equipping the saints, and witnessing to the community. His preaching style is direct, clear, and thoroughly biblical, always pointing believers back to the authority of Scripture.
              </p>
            </div>

            {/* Pastor's Vision */}
            <div className="bg-[#EFE8DF] rounded p-8 border-l-4 border-[#6F4E37]">
              <h3 className="font-serif text-2xl font-bold text-[#6F4E37] mb-4">
                His Vision for Ministry
              </h3>
              <p className="italic text-lg text-[#6F4E37] leading-relaxed mb-4">
                "Our emphasis is the preaching and teaching of God's Word with a view of developing families and individuals in the principles of Christianity. Our method is expository — the unfolding of God's Word line-by-line, verse-by-verse."
              </p>
              <p className="italic text-lg text-[#6F4E37] leading-relaxed">
                "It is my sincere desire that you be ministered to through the songs we sing and through the presentation of today's sermon. We are honored that you would visit with us and trust that the experience of our worship service will help you know the power of His presence."
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Biblical Authority",
                  description: "We affirm the Bible as God's authoritative, inspired Word and the final standard for all faith and practice.",
                },
                {
                  title: "Expository Teaching",
                  description: "We believe in carefully unfolding Scripture line-by-line and verse-by-verse to let God's Word speak for itself.",
                },
                {
                  title: "Doctrinal Clarity",
                  description: "We are committed to sound doctrine rooted in the historic Christian faith and the truths of Scripture.",
                },
                {
                  title: "Discipleship",
                  description: "We emphasize the spiritual growth and maturity of believers through teaching, fellowship, and practical obedience.",
                },
                {
                  title: "Family Strengthening",
                  description: "We recognize the family as central to God's design and work to equip parents and children in biblical living.",
                },
                {
                  title: "Community Witness",
                  description: "We are called to be a light in our community, demonstrating Christ's love through service and gospel proclamation.",
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-[#FAFAF8] rounded p-6 border border-[#E8E3DE]">
                  <h3 className="font-serif font-bold text-[#6F4E37] text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#1A1A1A] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-[#EFE8DF]">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              Whether you are new to faith or seeking a church home grounded in Scripture, we invite you to join us. Experience biblical teaching, warm fellowship, and a community committed to growing in Christ.
            </p>
            <Link
              href="/visit"
              className="inline-block px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200"
            >
              Plan Your Visit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
