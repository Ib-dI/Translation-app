import Header from "../components/Header";
import Quiz from "../components/Quiz";

export default function Apprentissage() {
  return (
    <div>
      <Header />
      <main className="p-6 flex mx-auto max-w-3xl flex-col items-center ">
      <Quiz />
      </main>
    </div>
  )
}