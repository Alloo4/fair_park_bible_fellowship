import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Beliefs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EFE8DF] to-white py-12 md:py-16 border-b border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
              What We Believe
            </h1>
            <p className="text-lg text-[#8B8680]">
              Our doctrinal foundation rooted in Scripture
            </p>
          </div>
        </section>

        {/* Doctrinal Statement */}
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl mx-auto">
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              We affirm the Bible as our final authority in all matters of faith and life; every conviction and practice in this fellowship flows from the Word of God. The following is a summary of our core beliefs:
            </p>

            {/* Core Beliefs */}
            <div className="space-y-8">
              {[
                {
                  title: "The Authority and Inspiration of the Holy Scriptures",
                  content: "We believe that the Bible is the inspired, authoritative Word of God. Every word of Scripture is given by God and is profitable for teaching, reproof, correction, and training in righteousness. The Bible is our ultimate standard for faith and practice.",
                  scripture: "2 Timothy 3:16-17",
                },
                {
                  title: "The Triune Godhead: Father, Son, and Holy Spirit",
                  content: "We believe in one God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit. These three are equal in power, glory, and eternity, yet distinct in person and function.",
                  scripture: "1 John 5:7",
                },
                {
                  title: "The Person and Work of Jesus Christ",
                  content: "We believe that Jesus Christ is the Son of God, fully God and fully man. He was born of a virgin, lived a sinless life, died on the cross as a substitutionary atonement for our sins, rose bodily from the dead, and ascended to heaven where He sits at the right hand of God the Father.",
                  scripture: "John 1:1-14, Romans 3:25",
                },
                {
                  title: "The Ministry of the Holy Spirit",
                  content: "We believe that the Holy Spirit is God, co-equal with the Father and the Son. He convicts the world of sin, righteousness, and judgment. He indwells believers at conversion, empowers them for service, and sanctifies them throughout their Christian life.",
                  scripture: "John 16:8-11, Ephesians 1:13-14",
                },
                {
                  title: "Salvation by Grace Alone, Through Faith Alone, in Christ Alone",
                  content: "We believe that salvation is a free gift of God's grace, not earned by works. It comes through faith in Jesus Christ and His finished work on the cross. All who believe in Christ are justified, forgiven, and declared righteous before God.",
                  scripture: "Ephesians 2:8-9, Romans 3:28",
                },
                {
                  title: "The Call to Holiness, Obedience, and Faithful Witness",
                  content: "We believe that believers are called to live holy lives, separate from sin and devoted to God. This includes obedience to God's commands and a faithful witness to the gospel in word and deed. Sanctification is the ongoing work of the Holy Spirit in the believer's life.",
                  scripture: "1 Peter 1:15-16, Matthew 28:19-20",
                },
                {
                  title: "The Return of Christ and the Hope of Eternal Life",
                  content: "We believe that Jesus Christ will return to earth to judge the living and the dead. Believers will be raised to eternal life with God, while those who reject Christ will face eternal judgment. This hope motivates us to live faithfully and proclaim the gospel urgently.",
                  scripture: "1 Thessalonians 4:16-17, Revelation 20:11-15",
                },
              ].map((belief, idx) => (
                <div key={idx} className="bg-[#FAFAF8] rounded p-8 border border-[#E8E3DE]">
                  <h3 className="font-serif text-2xl font-bold text-[#6F4E37] mb-4">
                    {belief.title}
                  </h3>
                  <p className="text-lg text-[#1A1A1A] leading-relaxed mb-4">
                    {belief.content}
                  </p>
                  <p className="italic text-[#8B8680] text-sm">
                    Scripture: {belief.scripture}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Affirmations */}
            <div className="mt-12 bg-[#EFE8DF] rounded p-8 border-l-4 border-[#6F4E37]">
              <h2 className="font-serif text-2xl font-bold text-[#6F4E37] mb-6">
                Additional Affirmations
              </h2>
              <ul className="space-y-4">
                {[
                  "We affirm the bodily resurrection of Christ and His ascension to heaven.",
                  "We affirm that Christ is the head of the church, which is His body.",
                  "We affirm the need for personal conversion and spiritual rebirth.",
                  "We affirm the reality of heaven and hell as eternal destinations.",
                  "We affirm the importance of the local church as a community of believers.",
                  "We affirm the Great Commission and the urgency of gospel proclamation.",
                  "We affirm the sufficiency of Scripture for all matters of faith and life.",
                ].map((affirmation, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#6F4E37] font-bold mt-1">✓</span>
                    <span className="text-[#1A1A1A]">{affirmation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing Statement */}
            <div className="mt-12 text-center">
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                These beliefs form the foundation of our ministry and guide every decision we make as a church. We are committed to proclaiming these truths faithfully and helping our congregation understand and apply them to their lives.
              </p>
              <p className="italic text-[#6F4E37] text-lg">
                "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." — 2 Timothy 3:16-17
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
