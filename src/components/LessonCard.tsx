import { motion } from "framer-motion";

interface LessonCardProps {
  title: string;
  description: string;
}

export default function LessonCard({ title, description }: LessonCardProps) {
  return (
    <motion.div
    whileFocus={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="p-4 border rounded-3xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="mt-2 text-gray-400">
        {description}
      </p>
    </motion.div>
  )
}