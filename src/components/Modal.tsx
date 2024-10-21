import { motion } from "framer-motion";
import { useRef } from "react";

interface ModalProps {
  title: string;
  content: Array<{
    type: "text" | "table";
    value: string | { header: string[]; rows: string[][] };
  }>;
  onClose: () => void;
}

export default function Modal({ title, content, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Fonction pour détecter les clics à l'extérieur de la modale
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick} // Clic à l'extérieur
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full relative max-h-[90vh] overflow-y-auto" // Ajout du scroll
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          Fermer
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Affichage dynamique des éléments du contenu */}
        {content.map((item, index) => {
          if (item.type === "text") {
            return (
              <p key={index} className="text-gray-700 leading-7 mb-6">
                {item.value}
              </p>
            );
          } else if (item.type === "table") {
            const tableData = item.value as { header: string[]; rows: string[][] };
            return (
              <table key={index} className="table-auto w-full border-collapse mb-6">
                <thead>
                  <tr>
                    {tableData.header.map((headerItem, headerIndex) => (
                      <th
                        key={headerIndex}
                        className="border px-4 py-2 text-left font-semibold"
                      >
                        {headerItem}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border px-4 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
          return null;
        })}
      </motion.div>
    </div>
  );
}
