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
function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [isFading, setIsFading] = useState(true);
  const [showMain, setShowMain] = useState(true);
  const initialText = "Hello seng";
  const revealTexts = [
    "kalo kamu liat ini tandanya apa...",
    // "iyaa betul sekali aku eh maksudnya kamu ultah hehe",
    // "Happy Birthday yaaaaaaa 🥳🥳🥳",
    // "Sehat selalu dan bisa menjadi melisa yang lebih baik lagii",
    // "Semoga kamu senang ama inii",
    // ""
  ];

  const handleFinish = () => {
    
    setShowMain(true);
    setIsFading(true);
    setTimeout(() => {
      setShowSurprise(false);
      setIsFading(false);
    }, 600); 
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
              <Route path="/game" element={<TVScreen><Game /></TVScreen>} />
              <Route path="/seemore" element={<TVScreen><Seemore /></TVScreen>} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App
