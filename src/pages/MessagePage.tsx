import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router-dom";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MessagePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ fontFamily: "Nunito, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,159,245,0.35); border-radius: 99px; }
      `}</style>

      {/* Navigation Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg" style={{ background: "rgba(13,8,48,0.8)", borderBottom: "1px solid rgba(200,159,245,0.2)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(200,159,245,0.3)",
              color: "#c89ff5",
            }}
          >
            ← Home
          </button>
          <h1 className="text-purple-300 font-bold text-xl" style={{ fontFamily: "Pacifico, cursive" }}>A Special Message</h1>
          <div style={{ width: "80px" }} />
        </div>
      </div>

      {/* MESSAGE SECTION */}
      <section
        className="relative py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0d0830 0%, #1a0545 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-4xl">💌</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              A Special Message
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg,#ff6b9d,#ffd700,#c89ff5)" }}/>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div
              className="rounded-3xl p-8 sm:p-12 text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 8px 48px rgba(200,159,245,0.15)",
              }}
            >
              <p className="text-pink-200 text-lg sm:text-xl leading-loose mb-6">
                "Every step of this journey — the early mornings, the endless
                studying, the moments of doubt you pushed through — has brought
                you to <span className="text-yellow-300 font-bold">this moment</span>.
                You earned every single bit of it."
              </p>
              <p className="text-purple-300 text-base leading-relaxed mb-6">
                The world is brighter because of the person you are. Your
                kindness, your strength, and your brilliant mind are gifts to
                everyone around you. Now go out there and show the world what
                you are made of — we already know it is extraordinary.
              </p>
              <div className="flex justify-center gap-3 text-2xl mt-8">
                {["🌸","🌟","💜","🎓","💜","🌟","🌸"].map((e,i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 300 }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Navigation Buttons */}
          <FadeIn delay={0.3} className="flex gap-3 justify-center mt-12">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(200,159,245,0.3)",
                color: "white",
              }}
            >
              ← Back Home
            </button>
            <button
              onClick={() => navigate("/milestones")}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #c89ff5, #ff6b9d)",
                color: "white",
                boxShadow: "0 4px 20px rgba(200,159,245,0.4)",
              }}
            >
              Next: Milestones 🌟
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
