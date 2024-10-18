interface LessonCardProps {
  title: string;
  description: string;
}

export default function LessonCard({ title, description }: LessonCardProps) {
  return (
    <div className="p-4 border rounded-3xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="mt-2">
        {description}
      </p>
    </div>
  )
}