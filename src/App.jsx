import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurpriseScreen from './components/SurpriseScreen'
import Navigasi from './components/Navigasi'
import Home from './components/Home'
import Gallery from './components/Gallery'
import TVScreen from './components/TVScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Waves from './components/Waves'
function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const initialText = "Hello seng";
  const revealTexts = [
    "kalo kamu liat ini tandanya apa...",
    "iyaa betul sekali aku eh maksudnya kamu ultah hehe",
    "Happy Birthday yaaaaaaa 🥳🥳🥳",
    "Sehat selalu dan bisa menjadi melisa yang lebih baik lagii",
    "Semoga kamu senang ama inii",
    "(project serius ini)"
  ];

  const handleFinish = () => {
    setShowSurprise(false);
  };

  return (
    <>

      {showSurprise ? (
        <SurpriseScreen
          initialText={initialText}
          revealTexts={revealTexts}
          onFinish={handleFinish}
        />
      ) : (<>
        <BrowserRouter>
        <Waves></Waves>
          <Navigasi />
          <Routes>
            <Route path="/" element={<TVScreen><Home /></TVScreen>} />
            <Route path="/gallery" element={<TVScreen><Gallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} /></TVScreen>} />
            {/* <Route path="/surat" element={<TVScreen><Surat /></TVScreen>} /> */}
          </Routes>
        </BrowserRouter>
      </>
              

      )}


    </>
  );
}

export default App
