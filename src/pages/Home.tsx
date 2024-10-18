import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Bienvenue sur la plateforme d'apprentissage du Shi-Maoré</h2>
        <p className="mb-4">
          Ici, tu vas apprendre 📚 les bases du Shi-Maoré, une langue parlée à Mayotte. Explore nos leçon et teste tes connaissances 😉!
        </p>
      </main>
    </div>
  )
}