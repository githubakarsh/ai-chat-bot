import FloatingSidebar from './components/FloatingSidebar.jsx'
import Header from './components/Header.jsx'
import FarmerIntro from './components/FarmerIntro.jsx'
import ContactForm from './components/ContactForm.jsx'
import DeliveryInstructions from './components/DeliveryInstructions.jsx'
import ChatBot from './components/ChatBot.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <ChatBot />
      </main>
      <footer>Fresh Microgreens &copy; 2024</footer>
    </>
  )
}

export default App
