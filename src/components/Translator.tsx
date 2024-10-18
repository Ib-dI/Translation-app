import { useState } from "react"
import { motion } from "framer-motion"

export default function Translator() {
  const [inputText, setInputText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')


  const handleTranslate = () => {
    setTranslatedText(`Traduit : ${inputText}`)
  }
  return (
    <div className="p-6 max-w-xl flex flex-col bg-gray-100 rounded-3xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Traducteur Shi-Maoré - Français</h3>
      <textarea className="w-full p-2 rounded-lg mb-4"
      rows={4}
      placeholder="Entrez du texte du texte en Shi-Maoré..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      />
      <button
      className="bg-blue-600 ml-auto text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      onClick={handleTranslate}
      >
        Traduire
      </button>

      {translatedText && (
        <motion.div
        className="mt-4 p-4 bg-white border rounded-lg"
        initial={{ opacity:0, y:10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }}
        >
          <p className="font-medium">
            {translatedText}
          </p>
        </motion.div>
      )}
    </div>
  )
}