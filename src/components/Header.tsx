export default function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-3xl">Apprends le Shi-Maoré</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="text-white">Acceuil</a></li>
          <li><a href="/lessons" className="text-white">Leçons</a></li>
          
        </ul>
      </nav>
    </header>
  )
}