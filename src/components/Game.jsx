import React, { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

function Game(){
    const navigate = useNavigate();
    const choices = useMemo(() => (["✊ Batu", "✋ Kertas", "✌️ Gunting"]), []);
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState({ user: 0, computer: 0, draw: 0 });

    const getComputerChoice = () => {
        const idx = Math.floor(Math.random() * 3);
        return choices[idx];
    };

    const normalize = (label) => {
        if (label.includes("Batu")) return "batu";
        if (label.includes("Kertas")) return "kertas";
        if (label.includes("Gunting")) return "gunting";
        return "";
    };

    const decide = (user, comp) => {
        if (user === comp) return "Seri";
        if (
            (user === "batu" && comp === "gunting") ||
            (user === "gunting" && comp === "kertas") ||
            (user === "kertas" && comp === "batu")
        ) return "Kamu Menang";
        return "Kamu Kalah";
    };

    const play = (picked) => {
        const comp = getComputerChoice();
        const userN = normalize(picked);
        const compN = normalize(comp);
        const verdict = decide(userN, compN);
        setUserChoice(picked);
        setComputerChoice(comp);
        setResult(verdict);
        setScore((s) => {
            if (verdict === "Seri") return { ...s, draw: s.draw + 1 };
            if (verdict === "Kamu Menang") return { ...s, user: s.user + 1 };
            return { ...s, computer: s.computer + 1 };
        });
    };

    const reset = () => {
        setUserChoice("");
        setComputerChoice("");
        setResult("");
        setScore({ user: 0, computer: 0, draw: 0 });
    };

    return(
    <>
        <div className="w-full h-full bg-pink-300 text-white p-4">
            <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center">Game Suit Tangan</h2>

            <div className="mt-4 grid grid-cols-3 gap-2">
                {choices.map((c) => (
                    <button
                        key={c}
                        onClick={() => play(c)}
                        className="py-3 px-2 rounded-lg bg-pink-500 hover:bg-pink-600 active:scale-[0.98] transition"
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-md p-3 bg-black/30">
                    <div className="text-sm opacity-80">Kamu</div>
                    <div className="text-lg">{userChoice || "-"}</div>
                </div>
                <div className="rounded-md p-3 bg-black/30">
                    <div className="text-sm opacity-80">Komputer</div>
                    <div className="text-lg">{computerChoice || "-"}</div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <div className="text-xl font-medium">
                    {result || "Pilih tanganmu untuk mulai"}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <span className="px-2 py-1 rounded bg-emerald-600/70">Kamu: {score.user}</span>
                <span className="px-2 py-1 rounded bg-slate-600/70">Seri: {score.draw}</span>
                <span className="px-2 py-1 rounded bg-rose-600/70">Komputer: {score.computer}</span>
            </div>

            <div className="mt-5 text-center">
                <button onClick={reset} className="px-3 py-2 rounded bg-purple-600 hover:bg-purple-700">
                    Reset
                </button>
            </div>

            {score.user >= 3 && (
                <div className="mt-4 text-center">
                    <p>fsd</p>
                    <button
                        onClick={() => navigate("/wawvideorahasia")}
                        className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 animate-pulse"
                    >
                        Apaaanichhhhhh👀
                    </button>
                </div>
            )}
            </div>
        </div>
    </>
            )
}

export default Game