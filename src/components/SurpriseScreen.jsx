import React, { useState, useEffect } from "react";

const SurpriseScreen = ({ initialText, revealTexts, onFinish }) => {
  const [step, setStep] = useState(0);
  const [autoReveal, setAutoReveal] = useState(false);

  useEffect(() => {
    let timer;
    if (autoReveal && step < revealTexts.length) {
      timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 3000);
    }
 
    if (autoReveal && step === revealTexts.length && onFinish) {
    timer = setTimeout(() => {
        onFinish();
      }, 3000);
      
    }
    return () => clearTimeout(timer);
  }, [autoReveal, step, revealTexts.length, onFinish]);

  const handleReveal = () => {
    setAutoReveal(true);
    if (step === 0) {
      setStep(1);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 animate-fadeIn">{step === 0 ? initialText : revealTexts[step - 1]}</h1>
      {step === 0 && (
        <button
          className="px-6 py-2 bg-gray-300 hover:bg-gray-200 transition text-black rounded-2xl"
          onClick={handleReveal}
        >
          Tampilkan Pesan
        </button>
      )}
    </div>
  );
};

export default SurpriseScreen;
