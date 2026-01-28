import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Award, Facebook, Linkedin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-50">
      {/* Мотивация: CTA секция перед основным футером */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Valmis alustama oma projekti?
              </h3>
              <p className="text-blue-100 text-lg">
                Võta meiega ühendust ja saame tasuta konsultatsiooni
              </p>
              {/* Мотивация: Социальное доказательство */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>Vastame 24h jooksul</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100 text-sm">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>2x Aasta Betoonehitis</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>100+ edukat projekti</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Способность: Быстрые действия */}
              <Link 
                to="/kontakt" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Küsi pakkumist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:+37255905484" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center justify-center font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                Helista
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Основной футер */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* О компании */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                EvoCon
              </span>
              <span className="text-sm text-gray-400 ml-2">Grupp OÜ</span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Üldehitus, ehitusjuhtimine ning elamute ja muude ehitiste projekteerimine.
              Kvaliteetne teenus Eestis ja Baltikumis.
            </p>
            
            {/* Мотивация: Социальные сети */}
            <div className="flex gap-3 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Мотивация: Достижения */}
            <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">2x Aasta Betoonehitis</span>
              </div>
              <p className="text-xs text-gray-500">Tunnustatud kvaliteet</p>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Kiired lingid</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span>Avaleht</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/teenused" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span>Teenused</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/referentsid" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span>Projektid</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              {/* <li>
                <Link 
                  to="/meist" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span>Meist</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li> */}
              <li>
                <Link 
                  to="/kontakt" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span>Kontakt</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Kontakt</h4>
            <div className="space-y-4">
              {/* Способность: Кликабельные контакты с иконками */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Katusepapi tn 4</p>
                  <p>Tallinn 11412, Eesti</p>
                  <a 
                    href="https://maps.google.com/?q=Katusepapi+tn+4,+Tallinn+11412" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 mt-1"
                  >
                    Vaata kaardil
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="tel:+37255905484" 
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  +372 5590 5484
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@evocon.ee" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@evocon.ee
                </a>
              </div>

              {/* Мотивация: Время работы */}
              <div className="flex items-start gap-3 pt-2 border-t border-gray-800">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium text-gray-300">Tööaeg</p>
                  <p>E-P: 8:00 - 17:00</p>
                  <p className="text-xs text-gray-500 mt-1">Vastame 24h jooksul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Teave</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">Registrikood</p>
                <p className="font-mono">12330895</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">KMKR</p>
                <p className="font-mono">EE101587639</p>
              </div>
              <div className="pt-2 border-t border-gray-800 space-y-2">
                <Link 
                  to="/privaatsuspoliitika" 
                  className="block hover:text-white transition-colors"
                >
                  Privaatsuspoliitika
                </Link>
                <Link 
                  to="/kasutustingimused" 
                  className="block hover:text-white transition-colors"
                >
                  Kasutustingimused
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} EvoCon Grupp OÜ. Kõik õigused kaitstud.
            </p>
            
            {/* Мотивация: Дополнительные гарантии */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>100% kvaliteet</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Usaldusväärne</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>12+ aastat kogemust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
