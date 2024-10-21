import { ChangeEvent, useState, useRef } from "react";
import { motion } from "framer-motion";
import translationsData from "../data/structured_translations.json";
import { LanguageIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const translations: Record<string, string[]> = translationsData;

export default function Translator() {
  const [inputText, setInputText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [languageDirection, setLanguageDirection] = useState<"sm-fr" | "fr-sm">(
    "fr-sm",
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);

    if (text.trim().length > 0) {
      const lowerCaseText = text.trim().toLowerCase();

      const suggestionsList =
        languageDirection === "fr-sm"
          ? Object.keys(translations).filter((key) =>
              key.startsWith(lowerCaseText),
            )
          : Object.values(translations)
              .flat()
              .filter((value) => value.startsWith(lowerCaseText));

      setSuggestions(suggestionsList.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleTranslate = (suggestion?: string) => {
    const textToTranslate = suggestion || inputText.trim().toLowerCase();

    let translationsList: string[] = [];

    if (languageDirection === "fr-sm") {
      translationsList = translations[textToTranslate] || [];
    } else {
      translationsList = Object.keys(translations).filter((key) =>
        translations[key].some(
          (value) => value.toLowerCase() === textToTranslate,
        ),
      );
    }

    if (translationsList.length > 0) {
      setTranslatedText(translationsList.join(", "));
      setError("");
      setSuggestions([]);
    } else {
      setTranslatedText("");
      setError("Traduction introuvable. Essayez un autre mot ou phrase.");
    }
  };
  // Défile la page vers le textarea lorsque le clavier s'ouvre
  const handleFocus = () => {
    if (textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300); // petit délai pour s'assurer que le clavier s'affiche complètement
    }
  };

  return (
    <div className="flex w-screen flex-col rounded-3xl bg-[#ffffff] p-6 md:p-8 shadow-sm md:w-[660px]">
      <h3 className="mb-4 text-xl font-bold text-gray-800 md:text-3xl">
        Traducteur Shi-Maoré - Français
      </h3>

      <div className="mb-4 flex flex-col justify-center md:flex-row md:space-x-10">
        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="radio"
            name="languageDirection"
            value="fr-sm"
            checked={languageDirection === "fr-sm"}
            onChange={() => setLanguageDirection("fr-sm")}
            className="form-radio text-blue-600"
          />
          <span className="text-lg text-gray-700">
            Français <ArrowRightIcon className="inline size-4" />{" "}
            Shi-Maoré
          </span>
        </label>
        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="radio"
            name="languageDirection"
            value="sm-fr"
            checked={languageDirection === "sm-fr"}
            onChange={() => setLanguageDirection("sm-fr")}
            className="form-radio text-blue-600"
          />
          <span className="text-lg text-gray-700">
            Shi-Maoré <ArrowRightIcon className="inline size-4 " />{" "}
            Français
          </span>
        </label>
      </div>

      <textarea
        ref={textareaRef}
        className="mb-4 w-full rounded-lg border-2 border-blue-200 p-4 text-lg text-gray-800 shadow-inner focus:border-blue-400 focus:outline-none"
        rows={4}
        placeholder={`Entrez du texte en ${
          languageDirection === "sm-fr" ? "Shi-Maoré" : "Français"
        }...`}
        value={inputText}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />

      {suggestions.length > 0 && (
        <div className="mb-4 rounded-lg border border-gray-300 bg-white p-2 shadow-md">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer rounded-md p-2 transition-all duration-200 ease-in-out hover:bg-blue-100"
                onClick={() => {
                  setInputText(suggestion);
                  setSuggestions([]);
                  handleTranslate(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="ml-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-white transition-transform hover:scale-105"
        onClick={() => handleTranslate()}
      >
        <LanguageIcon className="h-5 w-5" />
        Traduire
      </button>

      {translatedText && (
        <motion.div
          className="mt-6 rounded-lg border border-blue-300 bg-white p-5 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg font-semibold text-blue-700">
            Traduction{translatedText.includes(",") ? "s" : ""} :
          </p>
          <ul className="ml-4 text-base text-gray-700">
            {translatedText.split(", ").map((translation, index) => (
              <li key={index} className="mt-1">
                {translation}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="mt-6 rounded-lg border border-red-300 bg-red-100 p-5 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg font-semibold text-red-500">{error}</p>
        </motion.div>
      )}
    </div>
  );
}
