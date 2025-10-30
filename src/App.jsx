import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import GraphGenerator from './components/GraphGenerator'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 p-6">
            <GraphGenerator />
          </main>
        </div>
      </div>
    </div>
  )
}
