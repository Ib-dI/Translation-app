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
      setFeedBack(`Faux! La bonne réponse était : ${quizData[currentQuestion].translation}`)
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
    <div className="quiz-container p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-4">
        Mode Apprentissage (Quiz Interactif)
      </h1>
      <p>Traduisez le mot suivant :</p>
      <div className="question mb-4  ">
        <span className="font-bold">
          {quizData[currentQuestion].word}
        </span>
      </div>
      <input
      type="text"
      className="border p-2 w-full mb-4 rounded-lg"
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
      <p className="feedback mt-4">
        {feedBack}
      </p>
      <p className="score mt-2">
        Score : {score}
      </p>
    </div>
  )
}
