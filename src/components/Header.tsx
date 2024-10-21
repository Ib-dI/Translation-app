export default function Header() {
  return (
    <header className="bg-white p-4 fixed w-full border-b z-20">
      <div className="flex flex-col md:w-7/12 md:flex-row lg:justify-between">
        <h1 className="text-3xl font-medium text-gray-700">
          Le Shi-Maoré
          <span>
            <img
              src="/images/flag-mayotte.png"
              alt="flag-mayotte"
              className="ml-2 inline w-7 md:w-10"
            />
          </span>
        </h1>

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
