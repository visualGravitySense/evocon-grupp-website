import { CheckCircle, Award, Shield, Heart, Leaf, TrendingUp, Users, Handshake, Sparkles, Star, Phone, Zap, Clock, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const advantages = [
  {
    text: "Usaldusväärsus, tipptasemel kvaliteet ja paindlikkus klientidega suhtlemisel",
    icon: <Shield className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    text: "Väärtustame elutervet ja meeldivat töökeskkonda",
    icon: <Heart className="w-5 h-5" />,
    color: "from-red-500 to-red-600"
  },
  {
    text: "Peame oluliseks minimaliseerida oma tegemiste ökoloogilist jalajälge",
    icon: <Leaf className="w-5 h-5" />,
    color: "from-green-500 to-green-600"
  },
  {
    text: "12+ aastat kogemust ja sadu edukalt lõpetatud projekte",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    text: "Valmis koostööks teiste ehitusfirmadega",
    icon: <Handshake className="w-5 h-5" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    text: "Meeskonnas töötavad oma ala tundvad spetsialistid",
    icon: <Users className="w-5 h-5" />,
    color: "from-indigo-500 to-indigo-600"
  }
];

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая часть - Преимущества */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* ============================================ */}
            {/* BJ FOGG BEHAVIOR MODEL - STRUCTURED APPROACH */}
            {/* ============================================ */}
            
            {/* PROMPTS (Подсказки) - Заметные визуальные триггеры */}
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md animate-pulse">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Meie eelised
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="font-medium">Kiire vastus 24h jooksul</span>
              </div>
            </div>

            {/* MOTIVATION (Мотивация) - Визуальные акценты */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Miks valida meid?
            </h2>
            
            {/* MOTIVATION (Мотивация) - Улучшенное описание с акцентами и выгодами */}
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                Meie suurimaks konkurentsieeliseks on <span className="font-semibold text-gray-900 bg-blue-50 px-1 rounded">usaldusväärsus</span>, 
                <span className="font-semibold text-gray-900 bg-green-50 px-1 rounded"> tipptasemel kvaliteet</span> ja 
                <span className="font-semibold text-gray-900 bg-purple-50 px-1 rounded"> paindlikkus</span>
              </p>

              {/* MOTIVATION (Мотивация) - Социальное доказательство */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-base mb-1">Usaldusväärne partner</p>
                    <p className="text-green-700 text-sm mb-2">12+ aastat kogemust ja 100+ edukat projekti</p>
                    <div className="flex items-center gap-4 text-xs text-green-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.9/5 hinnang</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>2x Aasta Betoonehitis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOTIVATION (Мотивация) - Улучшенный список преимуществ с иконками */}
            <div className="space-y-3 mb-8">
              {advantages.map((advantage, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: `${i * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* MOTIVATION (Мотивация) - Иконка с градиентом и эффектами */}
                  <div className={`relative flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-50 blur-xl -z-10"></div>
                    {advantage.icon}
                  </div>
                  
                  {/* ABILITY (Способность) - Текст преимущества */}
                  <div className="flex-1 pt-1">
                    <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors font-medium">
                      {advantage.text}
                    </span>
                  </div>

                  {/* PROMPTS (Подсказки) - Визуальный индикатор */}
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" />
                  
                  {/* PROMPTS (Подсказки) - Визуальная линия при hover */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${advantage.color} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* ABILITY (Способность) - Упрощенные действия */}
            <div className="space-y-4">
              {/* Быстрые действия */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  <Link to="/meist" className="flex items-center">
                    <span>Loe rohkem meie väärtustest</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                {/* Альтернативный простой путь */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <a href="tel:+37255905484" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Helista kohe</span>
                  </a>
                </Button>
              </div>

              {/* PROMPTS (Подсказки) - Визуальные подсказки для упрощения */}
              <div className="flex items-center gap-4 text-xs text-gray-500 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-blue-600" />
                  <span>Kiire vastus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-600" />
                  <span>Usaldusväärne</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Tasuta konsultatsioon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть - Tunnustused (Награды) */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden border-4 border-blue-500/20">
              {/* Фоновое изображение */}
              <img 
                src="/tunnustused.jpg" 
                alt="Tunnustused"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Градиентный overlay для контраста */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/85 to-blue-800/85"></div>
              
              {/* Дополнительный темный overlay для лучшей читаемости */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Декоративные элементы внутри карточки */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* MOTIVATION (Мотивация) - Иконка награды с улучшенным дизайном */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg border border-white/30 hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-yellow-300 drop-shadow-lg" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">Tunnustused</h3>
                
                {/* MOTIVATION (Мотивация) - Описание с акцентами */}
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Juba <span className="font-bold text-white">2 aastat järjest</span> on meid pärjatud <span className="font-semibold text-yellow-300">Aasta Betoonehitise</span> auhinnaga. 
                  See on tõestus meie pühendumisest kvaliteedile ja täiuslikkusele.
                </p>

                {/* MOTIVATION (Мотивация) - Улучшенный список достижений */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-4 bg-white/15 backdrop-blur-sm p-5 rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-yellow-400/50 transition-all duration-300 group/item shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-yellow-900" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-white mb-1">2x Aasta Betoonehitis auhind</div>
                      <div className="text-blue-200 text-sm">Tunnustatud kvaliteet</div>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-4 bg-white/15 backdrop-blur-sm p-5 rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-green-400/50 transition-all duration-300 group/item shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-green-900" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-white mb-1">100+ edukat projekti</div>
                      <div className="text-blue-200 text-sm">Edukalt lõpetatud</div>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-4 bg-white/15 backdrop-blur-sm p-5 rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 group/item shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-purple-900" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-white mb-1">100% klientide rahulolu</div>
                      <div className="text-blue-200 text-sm">Rahulolevad kliendid</div>
                    </div>
                  </li>
                </ul>

                {/* PROMPTS (Подсказки) - Улучшенная CTA секция */}
                <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-5 hover:bg-white/25 transition-all duration-300 shadow-lg">
                  <p className="text-white text-base mb-3 font-semibold">
                    Valmis alustama?
                  </p>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-yellow-200 transition-colors group/link text-lg"
                  >
                    <span>Võta meiega ühendust</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
