import { motion } from "framer-motion";

interface LessonCardProps {
  title: string;
  description: string;
  onClick: () => void; // Prop pour gérer le clic
}

export default function LessonCard({ title, description, onClick }: LessonCardProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
    className="p-4 border rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-32"
    onClick={onClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
}
