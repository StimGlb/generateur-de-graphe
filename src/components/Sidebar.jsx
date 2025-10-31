export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6 text-gray-700 dark:text-gray-200 font-semibold">
        📁 Navigation
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Dashboard
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Graphiques
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Paramètres
        </button>
      </nav>
    </aside>
  )
}
