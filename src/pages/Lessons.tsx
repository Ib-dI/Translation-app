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
    <div className="md:flex">
      <Header />
      <main className="p-6 md:w-[860px] mx-auto ">
        <h2 className="text-2xl font-bold mb-4 mt-28 md:mt-16">Leçons de Shi-Maoré</h2>
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
