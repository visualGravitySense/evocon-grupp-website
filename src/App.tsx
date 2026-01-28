import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css';

// Получаем base path из Vite (автоматически устанавливается при сборке)
// Для GitHub Pages это будет '/evocon-grupp-website/'
// Для локальной разработки это будет '/'
const basename = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teenused" element={<Services />} />
            <Route path="/meist" element={<About />} />
            <Route path="/referentsid" element={<Projects />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/transporditeenus" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

