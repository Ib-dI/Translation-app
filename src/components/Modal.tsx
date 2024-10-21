// Modal.tsx
import { motion } from "framer-motion";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function Modal({ title, content, onClose }: ModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl p-6 w-full max-w-2xl relative overflow-y-auto max-h-[80vh]" // max height for scroll
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          Fermer
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </motion.div>
    </motion.div>
  );
}
