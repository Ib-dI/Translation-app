export default function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-3xl text-white">
        Apprends le Shi-Maoré
        <span>
          <img
            src="/images/flag-mayotte.png"
            alt="flag-mayotte"
            className="ml-2 inline w-7 md:w-10"
          />
        </span>
      </h1>
      <nav>
        <ul className="mt-2 flex space-x-4">
          <li>
            <a href="/" className="text-white">
              Acceuil
            </a>
          </li>
          <li>
            <a href="/lessons" className="text-white">
              Leçons
            </a>
          </li>
          <li>
            <a href="/apprentissage" className="text-white">
              Quiz
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
