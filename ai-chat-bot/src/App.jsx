import { useState } from 'react'
import Header from './components/Header.jsx'
import ChatBot from './components/ChatBot.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const toggleSidebar = () => setSidebarExpanded((e) => !e)

  return (
    <>
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isExpanded={sidebarExpanded} />
      <main>
        <ChatBot />
      </main>
      <footer>Fresh Microgreens &copy; 2024</footer>
    </>
  )
}

export default App
