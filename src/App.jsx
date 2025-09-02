import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurpriseScreen from './components/SurpriseScreen'
import Navigasi from './components/Navigasi'
import Home from './components/Home'
import Gallery from './components/Gallery'
import TVScreen from './components/TVScreen';
import Game from './components/Game'
import Surat from './components/Surat'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Waves from './components/Waves'
import Seemore from './components/Seemore'
import Museum from './components/Museum'
import SecretVideo from './components/SecretVideo'
// import Typewriter from 'typewriter-effect';

function App() {
  const [showSurprise, setShowSurprise] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const initialText = "Hello seng";
  const revealTexts = [
    "Cie diklik linknya😝",
    "Kamu tau tandanya apaa...",
    "betull aku ultah eh maksudnya kamuuu hehehee",
    "HAPPY BIRTHDAYYY YAA SAYANGGKUU💖🎂💞💕",
    "GOD BLESS YOU AND ALWAYS BE WITH YOU💖💞💕",
    "Semoga kamu suka yaa ama yang ku kasih 👉👈"
  ];

  const handleFinish = () => {
    setShowMain(true);
    setIsFading(true);
    setTimeout(() => {
      setShowSurprise(false);
      setIsFading(false);
    }, 1000);
  };

  return (
    <>
      {showSurprise && (
        <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <SurpriseScreen
            initialText={initialText}
            revealTexts={revealTexts}
            onFinish={handleFinish}
          />
        </div>
      )}

      {showMain && (
        <div className={`transition-opacity duration-500 ${isFading ? 'opacity-100' : (showSurprise ? 'opacity-0' : 'opacity-100')}`}>
          <BrowserRouter>
            <Waves />
            <Navigasi />
            <Routes>
              <Route path="/" element={<TVScreen><Home /></TVScreen>} />
              <Route path="/gallery" element={<TVScreen><Gallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} /></TVScreen>} />
              <Route path="/surat" element={<TVScreen><Surat /></TVScreen>} />
              <Route path="/surat/:id" element={<TVScreen><Surat /></TVScreen>} />
              <Route path="/game" element={<TVScreen><Game /></TVScreen>} />
              <Route path="/seemore" element={<TVScreen><Seemore /></TVScreen>} />
              <Route path="/museum" element={<TVScreen><Museum autoplay={true} pauseOnHover={true} /></TVScreen>} />
              <Route path="/wawvideorahasia" element={<TVScreen><SecretVideo/></TVScreen>} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App
