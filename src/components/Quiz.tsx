import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Translation {
  word: string;
  translation: string;
}

const quizData: Translation[] = [
  { word: "Salam", translation: "Bonjour" },
  { word: "Marahaba", translation: "Merci" },
  { word: "M'trumche", translation: "Femme" },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [feedBack, setFeedBack] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const handleAnswerSubmit = useCallback(() => {
    if (
      userAnswer.trim().toLowerCase() ===
      quizData[currentQuestion].translation.toLowerCase()
    ) {
      setFeedBack("Bonne réponse 🎉!");
      setScore((prev) => prev + 1);
      setShowAnimation(true); // Montrer l'animation +1
    } else {
      setFeedBack(
        `Faux ! La bonne réponse était : ${quizData[currentQuestion].translation}`
      );
    }

    // Le feedback disparaît après 2,5 secondes
    setTimeout(() => {
      setFeedBack("");
    }, 2500);

    setUserAnswer("");
    setCurrentQuestion((prev) => (prev + 1) % quizData.length);
  }, [userAnswer, currentQuestion]);

  // Animation de disparition du +1 et des étoiles
  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 1000); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "Enter") {
        handleAnswerSubmit();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleAnswerSubmit]);

  return (
    <div className="quiz-container mt-24 md:mt-14 md:w-[660px] p-6 flex flex-col relative">
      <h1 className="text-600 text-balance mx-auto mb-8 max-w-[600px] text-center text-4xl font-bold !leading-[1.0] tracking-tighter text-gray-800 lg:max-w-[900px] lg:text-6xl">
        ✨ Devine le mot 🧐 !
      </h1>
      <p className="text-lg">Traduisez le mot suivant :</p>
      <div className="question mb-4">
        <span className="font-bold text-600 text-gray-800 text-xl">
          {quizData[currentQuestion].word}
        </span>
      </div>
      <input
        type="text"
        className="p-2 w-full mb-4 rounded-lg outline-none border-2 focus-within:border-blue-400"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Votre réponse ici"
      />
      <button
        className="bg-amber-500 ml-auto text-white px-4 py-2 rounded-lg"
        onClick={handleAnswerSubmit}
      >
        Valider
      </button>

      {/* Animation du feedback */}
      <AnimatePresence>
        {feedBack !== "" && (
          <motion.p
            className={`feedback mt-4 ${
              feedBack.startsWith("F")
                ? "rounded-lg border text-red-500 border-red-300 bg-red-100 p-3 shadow-lg"
                : "rounded-lg border text-green-500 border-green-300 bg-green-100 p-3 shadow-lg"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {feedBack}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Badge Flottant avec Animation */}
      <motion.div
        className="fixed top-52 md:top-28 lg:top-48 right-4 lg:right-96 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
        animate={{ scale: [1, 1.2, 1] }} // Petite animation pour rendre dynamique
        transition={{ duration: 0.5 }}
      >
        Score : {score}
        {/* Animation de +1 avec des étoiles */}
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              className="absolute top-[-20px] right-[-20px] text-green-500"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              +1 ✨
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
