import { Link } from 'react-router-dom';
import { Award, Sparkles, CheckCircle, Star, ArrowRight, Trophy } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const achievements = [
    { text: '2x Aasta Betoonehitis auhind', icon: <Trophy className="w-5 h-5" /> },
    { text: '100+ edukat projekti', icon: <CheckCircle className="w-5 h-5" /> },
    { text: '12+ aastat kogemust', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая часть - Карточка с наградой */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-10 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
              {/* Фоновое изображение */}
              <img 
                src={getAssetPath("tunnustused-ja-sertifikaadid.jpg")} 
                alt="Tunnustused ja sertifikaadid"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Синий градиентный overlay для сохранения цветовой схемы */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/85 to-blue-800/85"></div>
              
              {/* Дополнительный темный overlay для контраста */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Декоративные элементы внутри карточки */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                {/* Мотивация: Иконка награды с анимацией */}
                <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 transition-transform duration-300 ${
                  isHovered ? 'scale-110 rotate-5' : 'scale-100'
                }`}>
                  <Award className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-300" />
                </div>

                {/* Способность: Заголовок */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                  2x Aasta Betoonehitis
                </h3>

                {/* Мотивация: Описание */}
                <p className="text-blue-100 text-lg mb-4 leading-relaxed">
                  Juba 2 aastat järjest on meid pärjatud Aasta Betoonehitise auhinnaga.
                </p>
                <p className="text-blue-200 text-base">
                  See on tõestus meie pühendumisest kvaliteedile ja täiuslikkusele.
                </p>

                {/* Мотивация: Дополнительные достижения */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-colors"
                      >
                        <div className="text-yellow-300 mb-2 flex justify-center">
                          {achievement.icon}
                        </div>
                        <div className="text-xs text-blue-100 font-medium">
                          {achievement.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая часть - Текст и CTA */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Мотивация: Визуальный акцент */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Tunnustused</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tunnustused ja sertifikaadid
            </h2>

            {/* Способность: Улучшенная типографика */}
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Meie ettevõte on valmis koostööks teiste ehitusfirmadega ja 
              pidevalt arendame oma teadmisi ja oskusi.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Peame neid objekte väga olulisteks <span className="font-semibold text-gray-900">verstapostideks</span> oma teekonnal ning 
              tõestusmaterjaliks, et me oleme <span className="font-semibold text-gray-900">kindel ja võimekas</span> koostööpartner.
            </p>

            {/* Мотивация: Социальное доказательство */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 text-sm mb-1">Tunnustatud kvaliteet</p>
                  <p className="text-green-700 text-sm">
                    Meie tööd on tunnustatud nii Eestis kui ka rahvusvaheliselt
                  </p>
                </div>
              </div>
            </div>

            {/* Подсказки: Улучшенная CTA кнопка */}
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/meist">
                <span>Vaata sertifikaate</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* Мотивация: Дополнительная информация */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Kvaliteet garanteeritud</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Usaldusväärne partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Pidev areng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
