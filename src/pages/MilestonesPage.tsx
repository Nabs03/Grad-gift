import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router-dom";
import AnimeGirl from "../components/AnimeGirl";

const COLORS = ["#ff6b9d","#ffd700","#c89ff5","#7ed6df","#ff9ff3","#54a0ff","#ffb347","#00e5b0"];

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

function MilestoneCard({ emoji, title, desc, delay }: { emoji: string; title: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="rounded-2xl p-6 flex flex-col items-center text-center gap-3"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 4px 32px rgba(200,159,245,0.12)",
      }}
    >
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-bold text-lg text-white" style={{ fontFamily: "Pacifico, cursive" }}>{title}</h3>
      <p className="text-sm text-purple-200 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function MilestonesPage() {
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
          <h1 className="text-purple-300 font-bold text-xl" style={{ fontFamily: "Pacifico, cursive" }}>Your Journey</h1>
          <div style={{ width: "80px" }} />
        </div>
      </div>

      {/* MILESTONES SECTION */}
      <section
        className="relative py-20 px-6"
        style={{ background: "linear-gradient(180deg,#1a0545 0%,#0f0a2e 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-4xl">🏆</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Your Future Journey
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg,#ffd700,#c89ff5,#ff6b9d)" }}/>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji:"📚", title:"Years of Study", desc:"Late nights, countless notes, and your relentless dedication have blossomed into true wisdom.", delay:0 },
              { emoji:"💡", title:"Growth & Passion", desc:"You challenged yourself fearlessly, discovered what you truly love, and grew beyond all expectations.", delay:0.1 },
              { emoji:"🤝", title:"Friendships", desc:"The beautiful bonds you formed will last a lifetime — connections built through shared dreams and support.", delay:0.2 },
              { emoji:"🥇", title:"Achievements", desc:"Every award, grade, and accomplishment reflects your excellence, your dedication, and your incredible spirit.", delay:0.3 },
              { emoji:"🌏", title:"Future Awaits", desc:"Your future is bright — full of infinite possibilities, amazing adventures, and discoveries waiting for you.", delay:0.4 },
              { emoji:"💜", title:"Your Impact", desc:"You have inspired everyone around you — your strength, kindness, and brilliance are gifts to the world.", delay:0.5 },
            ].map((m) => (
              <MilestoneCard key={m.title} {...m} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <FadeIn delay={0.6} className="flex gap-3 justify-center mt-14">
            <button
              onClick={() => navigate("/message")}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(200,159,245,0.3)",
                color: "white",
              }}
            >
              ← Back to Message
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #ffd700, #ff9b44)",
                color: "#1a0a3e",
                boxShadow: "0 4px 20px rgba(255,215,0,0.4)",
              }}
            >
              Back to Home 🏠
            </button>
          </FadeIn>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(160deg,#fce4f7 0%,#e8d5f8 30%,#d4e4ff 65%,#ffd6e8 100%)" }}
      >
        {/* Soft confetti dots */}
        {Array.from({length:18},(_,i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 8 + Math.random()*10,
              height: 8 + Math.random()*10,
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              background: COLORS[i % COLORS.length],
              opacity: 0.18 + Math.random()*0.2,
            }}
          />
        ))}

        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <motion.div
              style={{ animation: "float 3.5s ease-in-out infinite" }}
              className="flex justify-center mb-6"
            >
              <style>{`
                @keyframes float {
                  0%,100%{transform:translateY(0) rotate(-1.5deg)}
                  50%{transform:translateY(-18px) rotate(2deg)}
                }
              `}</style>
              <AnimeGirl className="w-48 sm:w-64 drop-shadow-[0_8px_40px_rgba(200,159,245,0.5)]" />
            </motion.div>

            <h2
              className="text-3xl sm:text-5xl font-bold text-purple-800 mb-3"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Congratulations! 🎓
            </h2>
            <p className="text-purple-600 text-base sm:text-lg font-semibold tracking-wide mb-6">
              You did it — we are so proud of you!
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">
              {["🎉 Celebrate","🌸 You Deserve It"].map((tag,i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity:0, scale:0.7 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.1, type:"spring", stiffness:260 }}
                  className="px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(200,159,245,0.4)",
                    color: "#7c3aed",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 text-center text-purple-400 text-sm"
        style={{ background: "#050318" }}
      >
        <span style={{ fontFamily: "Pacifico, cursive", color: "#ffd700" }}>Happy Graduation Day</span>
        <span className="mx-2">·</span>
        Made with 💜 just for you
      </footer>
    </div>
  );
}
