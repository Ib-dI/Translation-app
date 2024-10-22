import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { lessons, LessonContent } from "../data/lessonData";
import LessonCard from "../components/LessonCard";
import Modal from "../components/Modal";

// On définit le type pour les leçons sélectionnées
type SelectedLesson = {
  title: string;
  content: LessonContent[];
};

export default function Lessons() {
  const [selectedLesson, setSelectedLesson] = useState<SelectedLesson | null>(null);

  const handleCardClick = (lesson: SelectedLesson) => {
    setSelectedLesson(lesson); // Afficher la modale avec les détails de la leçon
  };

  const handleCloseModal = () => {
    setSelectedLesson(null); // Fermer la modale
  };

  return (
    <div className="absolute inset-0 min-h-[890px] bg-[url('https://timeskip.io/gradient_bg.png')] bg-cover bg-center">
      <Header />
      <main className="p-6 md:w-[860px] mx-auto ">
        <h2 className="text-balance mx-auto mb-8 max-w-[600px] text-center text-4xl font-bold !leading-[1.0] tracking-tighter text-gray-800 lg:max-w-[900px] lg:text-6xl mt-28 md:mt-24">📖 Les bases du <span className="relative inline-flex"><span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#47ff44] to-[#ff6e5e] tracking-tighter opacity-30 blur-md filter"></span><span className="relative"> Shi-Maoré </span></span> 💪🏾</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <LessonCard
                title={lesson.title}
                description={lesson.description}
                onClick={() =>
                  handleCardClick({
                    title: lesson.title,
                    content: lesson.content.filter((c): c is LessonContent => !!c), // Filtrer les éléments undefined
                  })
                }
              />
            </motion.div>
          ))}
        </div>
        {/* Affichage de la modale si une leçon est sélectionnée */}
        {selectedLesson && (
          <Modal
            title={selectedLesson.title}
            content={selectedLesson.content}
            onClose={handleCloseModal}
          />
        )}
      </main>
    </div>
  );
}
