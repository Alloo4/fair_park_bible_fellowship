import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Sermons() {
  const [activeCategory, setActiveCategory] = useState("all");

  const sermons = [
    {
      id: 1,
      title: "Finding Peace in Turbulent Times",
      category: "sunday",
      date: "December 1, 2024",
      series: "Faith in Crisis",
      description: "An expository look at Philippians 4:4-7 on finding peace through prayer and trust in God.",
    },
    {
      id: 2,
      title: "Healing Hearts and Restoring Relationships",
      category: "sunday",
      date: "November 24, 2024",
      series: "Reconciliation",
      description: "Exploring biblical principles for forgiveness and restoration from 2 Corinthians 5:17-20.",
    },
    {
      id: 3,
      title: "Faith as a Guide in Transition",
      category: "sunday",
      date: "November 17, 2024",
      series: "Walking by Faith",
      description: "Understanding how faith sustains us during life's changes, from Hebrews 11.",
    },
    {
      id: 4,
      title: "The Sufficiency of God's Word",
      category: "sunday",
      date: "November 10, 2024",
      series: "Scripture",
      description: "Why the Bible is all we need for life and godliness, from 2 Peter 1:3-4.",
    },
    {
      id: 5,
      title: "No Fear, No Doubt, Only Faith",
      category: "minute",
      date: "Today",
      description: "A short, Scripture-rooted encouragement from Pastor Broden on living by faith.",
    },
    {
      id: 6,
      title: "Faith is a Verb",
      category: "minute",
      date: "Yesterday",
      description: "Understanding that faith requires action and obedience to God's Word.",
    },
  ];

  const filteredSermons =
    activeCategory === "all"
      ? sermons
      : sermons.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EFE8DF] to-white py-12 md:py-16 border-b border-[#E8E3DE]">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
              Sermons & The Broden Minute
            </h1>
            <p className="text-lg text-[#8B8680]">
              Biblical teaching for daily living
            </p>
          </div>
        </section>

        {/* Featured Sermon */}
        <section className="py-16 md:py-20 border-b border-[#E8E3DE]">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              Latest Sermon
            </h2>

            <div className="bg-gradient-to-br from-[#6F4E37] to-[#5A3F2F] rounded-lg p-8 md:p-12 text-white mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded text-sm font-medium">
                  Sunday Service
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Finding Peace in Turbulent Times
              </h3>
              <p className="text-lg mb-4 opacity-90">
                An expository look at Philippians 4:4-7 on finding peace through prayer and trust in God.
              </p>
              <p className="text-sm opacity-75 mb-6">
                Series: Faith in Crisis | December 1, 2024
              </p>
              <button className="px-6 py-3 bg-white text-[#6F4E37] font-medium rounded hover:bg-[#EFE8DF] transition-colors duration-200 flex items-center gap-2">
                <Play size={18} />
                Watch Sermon
              </button>
            </div>

            {/* Sermon Description */}
            <div className="bg-[#FAFAF8] rounded p-8 border border-[#E8E3DE]">
              <h4 className="font-serif font-bold text-[#1A1A1A] mb-4">About This Sermon</h4>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                In this message, Pastor Broden walks through Philippians 4:4-7, exploring Paul's instruction to rejoice always and bring our requests to God in prayer. Discover how biblical peace is not the absence of problems, but the presence of God's peace guarding our hearts and minds in Christ Jesus.
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                This sermon is part of our ongoing series on faith in crisis, where we examine how Scripture equips us to trust God in difficult circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-[#FAFAF8] border-b border-[#E8E3DE]">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: "all", label: "All Messages" },
                { id: "sunday", label: "Sunday Sermons" },
                { id: "minute", label: "The Broden Minute" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-[#6F4E37] text-white"
                      : "bg-white text-[#6F4E37] border-2 border-[#6F4E37] hover:bg-[#6F4E37] hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sermon List */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-[#6F4E37] mb-8">
              {activeCategory === "all"
                ? "All Messages"
                : activeCategory === "sunday"
                  ? "Sunday Sermons"
                  : "The Broden Minute"}
            </h2>

            <div className="space-y-6">
              {filteredSermons.map((sermon) => (
                <div
                  key={sermon.id}
                  className="bg-white rounded border border-[#E8E3DE] p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-[#EFE8DF] text-[#6F4E37] rounded text-xs font-medium">
                          {sermon.category === "sunday"
                            ? "Sunday Service"
                            : "The Broden Minute"}
                        </span>
                        {sermon.series && (
                          <span className="text-xs text-[#8B8680]">
                            Series: {sermon.series}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">
                        {sermon.title}
                      </h3>
                      <p className="text-[#1A1A1A] mb-3">
                        {sermon.description}
                      </p>
                      <p className="text-sm text-[#8B8680]">{sermon.date}</p>
                    </div>
                    <button className="flex-shrink-0 p-3 bg-[#EFE8DF] text-[#6F4E37] rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200">
                      <Play size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredSermons.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8B8680] text-lg">
                  No sermons found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Broden Minute Highlight */}
        <section className="py-16 md:py-20 bg-[#EFE8DF] border-t border-[#E8E3DE]">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F4E37] mb-8 text-center">
              The Broden Minute
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8 text-center">
              Short, Scripture-rooted encouragement for daily living from Pastor Broden. These brief messages are designed to strengthen your faith and guide your walk with Christ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "No fear, no doubt, only faith.",
                "Faith is a verb — it's acting on what God has said.",
                "You cannot walk in faith unless you know the Word of God.",
                "The power of the Word of God is in doing the Word of God.",
              ].map((quote, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-6 border-l-4 border-[#6F4E37] shadow-sm"
                >
                  <p className="italic font-serif text-lg text-[#6F4E37]">
                    "{quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
