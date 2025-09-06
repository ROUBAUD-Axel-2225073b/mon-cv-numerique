
import Navbar from './components/Navbar'
import Footer from './components/sections/footer'
import Welcome from './components/sections/Welcome'
import './index.css'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main> 
            <Navbar/>
            <Welcome/>
      </main>
      <Footer/>
    </div>
    
  )
}

export default App