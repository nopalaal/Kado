import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurpriseScreen from './components/SurpriseScreen'
import Navigasi from './components/Navigasi'
import Home from './components/Home'
import Gallery from './components/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [showSurprise, setShowSurprise] = useState(true);
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
          <Navigasi />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Tambahkan Route lain di sini, misal: */}
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/surat" element={<Surat />} /> */}
          </Routes>
        </BrowserRouter>
      </>
              

      )}


    </>
  );
}

export default App
