import ThemeToggle from './ThemeToggle'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        🎛️ Générateur de Graphes
      </h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  )
}
