import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Assurez-vous d'importer le Header
import { lessons } from "../data/lessonData"; // Assurez-vous d'importer les données
import LessonCard from "../components/LessonCard"; // Assurez-vous d'importer LessonCard
import Modal from "../components/Modal"; // Importer le nouveau composant Modal

export default function Lessons() {
  const [selectedLesson, setSelectedLesson] = useState<{ title: string; content: string } | null>(null);

  const handleCardClick = (lesson: { title: string; content: string }) => {
    setSelectedLesson(lesson); // Afficher la modale avec les détails de la leçon
  };

  const handleCloseModal = () => {
    setSelectedLesson(null); // Fermer la modale
  };

  return (
    <div>
      <Header />
      <main className="p-6  ">
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
                onClick={() => handleCardClick({ title: lesson.title, content: lesson.content })} // Passer la leçon sélectionnée
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
