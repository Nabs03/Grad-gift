import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router-dom";
import AnimeGirl from "../components/AnimeGirl";

const COLORS = ["#ff6b9d","#ffd700","#c89ff5","#7ed6df","#ff9ff3","#54a0ff","#ffb347","#00e5b0"];
const STARS = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.2 + 0.6,
  dur: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}));

function useConfetti(count = 90) {
  return useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      size: Math.random() * 9 + 5,
      dur: Math.random() * 4 + 3,
      delay: Math.random() * 4,
      ccw: Math.random() > 0.5,
      shape: (["circle","rect","diamond"] as const)[i % 3],
    }))
  )[0];
}

export default function HomePage() {
  const navigate = useNavigate();
  const confetti = useConfetti(100);
  const [showConfetti, setShowConfetti] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 55% 38%, #2e0f66 0%, #0d0830 50%, #050318 100%)" }}
    >
      <style>{`
        @keyframes twinkle {
          0%,100%{opacity:.12;transform:scale(.7)}
          50%{opacity:1;transform:scale(1.5)}
        }
        @keyframes shimmer {
          0%,100%{text-shadow:0 0 20px rgba(255,215,0,.5),0 0 40px rgba(255,215,0,.2);filter:brightness(1)}
          50%{text-shadow:0 0 40px #ffd700,0 0 80px rgba(255,215,0,.7),0 0 120px rgba(255,159,243,.3);filter:brightness(1.2)}
        }
        @keyframes float {
          0%,100%{transform:translateY(0) rotate(-1.5deg)}
          50%{transform:translateY(-18px) rotate(2deg)}
        }
        @keyframes confetti-cw {
          0%{transform:translateY(-60px) rotate(0deg);opacity:1}
          85%{opacity:1}
          100%{transform:translateY(110vh) rotate(900deg);opacity:0}
        }
        @keyframes confetti-ccw {
          0%{transform:translateY(-60px) rotate(0deg);opacity:1}
          85%{opacity:1}
          100%{transform:translateY(110vh) rotate(-900deg);opacity:0}
        }
        @keyframes sparkle {
          0%,100%{opacity:.1;transform:scale(.6) rotate(0deg)}
          50%{opacity:.9;transform:scale(1.3) rotate(180deg)}
        }
        @keyframes pulse-badge {
          0%,100%{box-shadow:0 0 0 0 rgba(255,215,0,.45)}
          50%{box-shadow:0 0 0 14px rgba(255,215,0,0)}
        }
        @keyframes scroll-bounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(8px)}
        }
      `}</style>

      {/* Twinkling stars */}
      {STARS.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: s.size, height: s.size,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Floating ✦ accents */}
      {[
        { top:"11%",left:"16%",c:"#ffd700",sz:22,d:"0.4s",dur:"2.6s"},
        { top:"20%",right:"12%",c:"#c89ff5",sz:18,d:"1.1s",dur:"3s"},
        { bottom:"28%",left:"8%",c:"#ff9ff3",sz:16,d:"0.2s",dur:"3.2s"},
        { bottom:"16%",right:"10%",c:"#ffd700",sz:22,d:"1.6s",dur:"2.4s"},
        { top:"50%",left:"22%",c:"#7ed6df",sz:13,d:"0.9s",dur:"3.6s"},
        { top:"36%",right:"19%",c:"#ff6b9d",sz:13,d:"2.1s",dur:"2.9s"},
      ].map((sp,i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            ...(sp as React.CSSProperties),
            color: sp.c, fontSize: sp.sz,
            animation: `sparkle ${sp.dur} ${sp.d} ease-in-out infinite`,
          }}
        >✦</div>
      ))}

      {/* Confetti */}
      {showConfetti && confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${c.x}%`,
            width: c.shape === "rect" ? c.size * 0.55 : c.size,
            height: c.shape === "rect" ? c.size * 1.5 : c.size,
            borderRadius: c.shape === "circle" ? "50%" : c.shape === "diamond" ? "2px" : "1px",
            backgroundColor: c.color,
            transform: c.shape === "diamond" ? "rotate(45deg)" : undefined,
            animation: `${c.ccw ? "confetti-ccw" : "confetti-cw"} ${c.dur}s ${c.delay}s ease-in forwards`,
          }}
        />
      ))}

      {/* Hero content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 px-6 py-16 max-w-6xl w-full mx-auto">
        {/* Text side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{
                background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.35)",
                color: "#ffd700",
                animation: "pulse-badge 2.4s ease-in-out infinite",
              }}
            >
              🎓 Class of 2025
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "Pacifico, cursive", animation: "shimmer 2.8s ease-in-out infinite" }}
            className="text-yellow-300 leading-tight"
          >
            <span className="block" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)" }}>Happy</span>
            <span className="block" style={{ fontSize: "clamp(3rem,8vw,5.5rem)" }}>Graduation</span>
            <span className="block" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)" }}>Day! 🎉</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-purple-200 text-base sm:text-lg max-w-md leading-relaxed"
          >
            To someone truly special — your hard work, late nights, and
            unwavering dedication have led you here. Today we celebrate
            <span className="text-pink-300 font-bold"> you</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <button
              onClick={() => navigate("/message")}
              className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #ffd700, #ff9b44)",
                color: "#1a0a3e",
                boxShadow: "0 4px 20px rgba(255,215,0,0.4)",
              }}
            >
              Read a Message ✨
            </button>
            <button
              onClick={() => navigate("/milestones")}
              className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              See Milestones 🌟
            </button>
          </motion.div>
        </div>

        {/* Anime girl */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex-shrink-0"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <AnimeGirl className="w-56 h-auto sm:w-72 lg:w-80 drop-shadow-[0_10px_50px_rgba(200,159,245,0.55)]" />
        </motion.div>
      </div>


    </section>
  );
}
