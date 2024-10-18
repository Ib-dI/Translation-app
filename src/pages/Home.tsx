import Header from "../components/Header";
import Translator from "../components/Translator";

export default function Home() {
  return (
    <div >
      <Header />
      <main className="p-6 flex mx-auto max-w-3xl flex-col items-center ">
        <h2 className="text-2xl font-bold self-start mb-4">Bienvenue sur la plateforme d'apprentissage du Shi-Maoré</h2>
        <p className="mb-4">
          Ici, tu vas apprendre 📚 les bases du Shi-Maoré, une langue parlée à Mayotte. Explore nos leçon et teste tes connaissances 😉!
        </p>
        <section className="mt-8">
          <Translator />
        </section>
      </main>
    </div>
  )
}