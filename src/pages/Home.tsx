import Header from "../components/Header";
import Translator from "../components/Translator";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[880px] bg-[url('https://timeskip.io/gradient_bg.png')] bg-cover bg-center ">
      <Header />
      <main className="p-6 mt-28 md:mt-24 flex mx-auto max-w-3xl flex-col items-center ">
        <h2 className="text-600 text-balance mx-auto mb-8 max-w-[600px] text-center text-4xl font-bold !leading-[1.0] tracking-tighter text-gray-800 lg:max-w-[900px] lg:text-6xl">Bienvenue sur la plateforme <span className="relative inline-flex"><span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] tracking-tighter opacity-30 blur-lg filter"></span><span className="relative"> Shi-Maoré !</span></span></h2>
        <p className="text-md max-w-[750px] leading-relaxed opacity-80 md:text-lg">
          Ici, tu vas apprendre 📚 les bases du Shi-Maoré, une langue parlée à Mayotte. Explore nos leçon et teste tes connaissances 😉!
        </p>
        <section className="mt-8">
          <Translator />
        </section>
      </main>
    </div>
  )
}