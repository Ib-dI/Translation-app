import { useEffect, useState, useCallback } from "react"

interface Translation {
  word: string;
  translation: string
}

const quizData: Translation[] = [
  { word: 'Salam', translation: "Bonjour"},
  { word: 'Marahaba', translation: "Merci"},
  { word: "M'trumche", translation: "Femme"},
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [feedBack, setFeedBack] = useState<string>('')
  

  

  const handleAnswerSubmit = useCallback(() => {
    if (userAnswer.trim().toLowerCase() === quizData[currentQuestion].translation.toLowerCase()) {
      setFeedBack('Bonne réponse 🎉!')
      setScore(score + 1)
    } else {
      setFeedBack(`Faux ! La bonne réponse était : ${quizData[currentQuestion].translation}`)
    }
    setUserAnswer('')
    setCurrentQuestion((prev) => (prev + 1) % quizData.length)
  }, [userAnswer, currentQuestion, score]) 

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      // console.log(e.key)
      if (e.key === 'Enter') {
        handleAnswerSubmit()
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleAnswerSubmit]);

  return (
    <div className="quiz-container mt-24 md:mt-14 md:w-[660px] p-6 flex flex-col">
      <h1 className="text-600 text-balance mx-auto mb-8 max-w-[600px] text-center text-4xl font-bold !leading-[1.0] tracking-tighter text-gray-800 lg:max-w-[900px] lg:text-6xl">
        ✨ Devine le mot 🧐 !
      </h1>
      <p className="text-lg ">Traduisez le mot suivant :</p>
      <div className="question mb-4  ">
        <span className="font-bold text-600 text-gray-800 text-xl">
          {quizData[currentQuestion].word}
        </span>
      </div>
      <input
      type="text"
      className=" p-2 w-full mb-4 rounded-lg outline-none border-2 focus-within:border-blue-400"
      value={userAnswer}
      onChange={(e) => setUserAnswer(e.target.value)}
      placeholder="Votre réponse ici"
      />
      <button
      className="bg-amber-500 ml-auto text-white px-4 py-2 rounded-lg"
      onClick={handleAnswerSubmit}
      >
        Soumettre
      </button>
      <p className={`feedback mt-4 ${feedBack !== '' ? feedBack.startsWith("F") ? "rounded-lg border text-red-500 border-red-300 bg-red-100 p-3 shadow-lg" : "rounded-lg border text-green-500 border-green-300 bg-green-100 p-3 shadow-lg" : ''}`}>
        {feedBack}
      </p>
      <p className="score font-semibold mt-2">
        Score : {score}
      </p>
    </div>
  )
}
