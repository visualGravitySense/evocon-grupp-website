import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
// import.meta.env.BASE_URL автоматически берется из vite.config.ts base
const basename = import.meta.env.BASE_URL || '/';

// Компонент для обработки перенаправления из 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Проверяем, есть ли сохраненный путь от 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      // Очищаем sessionStorage
      sessionStorage.removeItem('redirectPath');
      // Перенаправляем на сохраненный путь
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
}

function App() {
  return (
    <Router basename={basename}>
      <RedirectHandler />
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

