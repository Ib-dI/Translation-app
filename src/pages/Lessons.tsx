import Header from "../components/Header"
import LessonCard from "../components/LessonCard"

export default function Lessons() {
  const lessons = [
    { title: 'Leçon 1 : Salutations', description: 'Apprends comment saluer en Shi-Maoré.' },
    { title: 'Leçon 2 : Les bases de la grammaire', description: 'Introduction à la structure grammaticale.' },
  ];
  return (
    <div>
      <Header/>
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Leçons de Shi-Maoré</h2>
        <div className="grig grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} title={lesson.title} description={lesson.description} />
          ))}
        </div>
      </main>
    </div>
  )
}