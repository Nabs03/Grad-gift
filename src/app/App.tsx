import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import MilestonesPage from "../pages/MilestonesPage";

export default function App() {
  return (
    <div
      className="min-h-full w-full overflow-x-hidden overflow-y-auto"
      style={{ fontFamily: "Nunito, sans-serif", scrollBehavior: "smooth" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;500;600;700;800&display=swap');
        html, body { height: 100%; margin: 0; }
        #root { height: 100%; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,159,245,0.35); border-radius: 99px; }
      `}</style>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
      </Routes>
    </div>
  );
}
