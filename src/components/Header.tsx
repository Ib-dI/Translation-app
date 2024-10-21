export default function Header() {
  return (
    <header className="bg-white flex p-4 fixed w-full border-b z-20">
      <div className="flex mx-auto flex-col md:flex-row md:justify-between md:w-4/5">
        <a href="/">
          <h1 className="text-3xl font-medium text-gray-700">
            Le <span className="relative inline-flex"><span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] tracking-tighter opacity-30 blur-md filter"></span><span className="relative"> Shi-Maoré </span></span>
            
          </h1>
        </a>

        <nav className="mt-2 flex gap-3 rounded-3xl *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-100 focus-visible:*:bg-blue-400 md:mt-0">
          <a href="/" className="text-gray-500">
            Acceuil
          </a>
          <a href="/lessons" className="text-gray-500">
            Leçons
          </a>
          <a href="/apprentissage" className="text-gray-500">
            Quiz
          </a>
        </nav>
      </div>
    </header>
  );
}
