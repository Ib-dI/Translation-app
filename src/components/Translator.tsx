import { ChangeEvent, useState } from "react"
import { motion } from "framer-motion"
import translationsData from '../data/translations.json'
import { LanguageIcon } from "@heroicons/react/16/solid";

const translations: Record<string, string> = translationsData;

export default function Translator() {
  const [inputText, setInputText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [error, setError] = useState<string>('')
  const [languageDirection, setLanguageDirection] = useState<'sm-fr' | 'fr-sm'>('fr-sm')
  
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setInputText(text)

    if (text.trim().length > 0) {
      const lowerCaseText = text.trim().toLowerCase()

      // Suggestion basées sur la direction de traduction
      const suggestionsList = languageDirection === 'fr-sm'
      ? Object.keys(translations).filter(key => key.startsWith(lowerCaseText))
      : Object.values(translations).filter(value => value.startsWith(lowerCaseText))

      setSuggestions(suggestionsList.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }

  const handleTranslate = (suggestion?: string) => {
    const textToTranslate = suggestion || inputText.trim().toLowerCase()

    let translation = ''

    if (languageDirection === 'fr-sm') {
      translation = translations[textToTranslate]
    } else {
      translation = Object.keys(translations).find(key => translations[key].toLowerCase() === textToTranslate) || ''
    }

    if (translation) {
      setTranslatedText(translation)
      setError('')
    } else {
      setTranslatedText('')
      setError("Traduction introuvable. Essayer un autre mot ou phrase.")
    }
  }
  return (
    <div className="p-6 md:w-[72vh] flex flex-col bg-gray-100 rounded-3xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Traducteur Shi-Maoré - Français</h3>

      <div className="mb-4 ">
        <label className="mr-4">
          <input
            className="mr-1"
            type="radio"
            name="languageDirection"
            value="fr-sm"
            checked={languageDirection === 'fr-sm'}
            onChange={() => setLanguageDirection('fr-sm')}
          />
          Français vers Shi-Maoré
        </label>
        <label>
          <input
            className="mr-1"
            type="radio"
            name="languageDirection"
            value="sm-fr"
            checked={languageDirection === 'sm-fr'}
            onChange={() => setLanguageDirection('sm-fr')}
          />
          Shi-Maoré vers Français
        </label>
      </div>

      <textarea className="w-full p-2 rounded-lg mb-4"
      rows={4}
      placeholder={`Entrez du texte en ${languageDirection === 'sm-fr' ? 'Shi-Maoré' : 'Français'}...`}
      value={inputText}
      onChange={handleInputChange}
      />

      {suggestions.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-lg p-2 mb-4">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleTranslate(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
      className="bg-blue-600 ml-auto flex gap-1 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      onClick={() => handleTranslate()}
      >
        <LanguageIcon className="size-6" />
        Traduire
      </button>

      {translatedText && (
        <motion.div
        className="mt-4 p-4 bg-white border border-blue-300 rounded-lg"
        initial={{ opacity:0, y:10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.4 }}
        >
          <p className="font-medium font-noto">
            {translatedText}
          </p>
        </motion.div>
      )}
      {error && (
        <motion.div
        className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg"
        initial={{ opacity:0, y:10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.4 }}
        >
          <p className="text-red-600 font-noto">
            {error}
          </p>
        </motion.div>
      )}
      
    </div>
  )
}
