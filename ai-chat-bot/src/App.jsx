import FloatingSidebar from './components/FloatingSidebar.jsx'
import Header from './components/Header.jsx'
import FarmerIntro from './components/FarmerIntro.jsx'
import ContactForm from './components/ContactForm.jsx'
import DeliveryInstructions from './components/DeliveryInstructions.jsx'

function App() {
  return (
    <>
      <Header />
      <FloatingSidebar />
      <main>
        <FarmerIntro />
        <ContactForm />
        <DeliveryInstructions />
      </main>
      <footer>Fresh Microgreens &copy; 2024</footer>
    </>
  )
}

export default App
