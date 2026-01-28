import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Star, 
  Zap, 
  Clock, 
  Phone,
  Heart,
  Leaf,
  Users,
  Gem,
  Handshake,
  Trophy,
  CheckCircle,
  Award
} from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const advantages = [
  { 
    title: "Usaldusväärsus ja kvaliteet",
    description: "Tipptasemel kvaliteet ja paindlikkus klientidega suhtlemisel",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    iconGlow: "shadow-blue-500/50"
  },
  { 
    title: "Tervislik töökeskkond",
    description: "Väärtustame elutervet ja meeldivat töökeskkonda",
    icon: Heart,
    color: "from-red-500 to-red-600",
    iconGlow: "shadow-red-500/50"
  },
  { 
    title: "Ökoloogiline lähenemine",
    description: "Minimaliseerime oma tegemiste ökoloogilist jalajälge",
    icon: Leaf,
    color: "from-green-500 to-green-600",
    iconGlow: "shadow-green-500/50"
  },
  { 
    title: "Kogenud spetsialistid",
    description: "Meeskonnas töötavad oma ala tundvad professionaalid",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    iconGlow: "shadow-purple-500/50"
  }
];

const AboutSection = () => {
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
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая часть - Текст */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* ============================================ */}
            {/* BJ FOGG BEHAVIOR MODEL - STRUCTURED APPROACH */}
            {/* ============================================ */}
            
            {/* PROMPTS (Подсказки) - Заметные визуальные триггеры */}
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Meie lugu
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="font-medium">Alates 2012. aastast</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meist
            </h2>
            
            {/* MOTIVATION (Мотивация) - Визуальные акценты и выгоды */}
            <div className="space-y-6 mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                EvoCon Grupp OÜ on 2012. aastal loodud ehitusettevõte, mille peamisteks 
                tegutsemisvaldkondadeks on <span className="font-semibold text-gray-900 bg-blue-50 px-1 rounded">üldehitus</span>, 
                <span className="font-semibold text-gray-900 bg-green-50 px-1 rounded"> betoonitööd</span>, 
                <span className="font-semibold text-gray-900 bg-purple-50 px-1 rounded"> ehitusjuhtimine</span> ning 
                nii elamute kui ka muude ehitiste projekteerimine.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Meie pidevalt areneva, jätkusuutliku ja konkurentsivõimelise ettevõtte 
                eesmärk on pakkuda usaldusväärset ja kõrge kvaliteediga teenust nii 
                Eestis kui ka teistes <span className="font-semibold text-gray-900">Balti ja Skandinaavia riikides</span>.
              </p>

              {/* Социальное доказательство - Мотивация */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
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
                        <Shield className="w-3 h-3" />
                        <span>Garantii kvaliteedile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ABILITY (Способность) - Упрощенные действия */}
            <div className="space-y-4 mb-6">
              {/* Быстрые действия */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  <Link to="/meist" className="flex items-center">
                    <span>Loe rohkem</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                {/* Альтернативный простой путь */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <a href="tel:+37255905484" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Helista</span>
                  </a>
                </Button>
              </div>

              {/* Визуальные подсказки для упрощения */}
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
          
          {/* Правая часть - Преимущества */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                    isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : ''
                  }`}
                  style={{ 
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* MOTIVATION (Мотивация) - Иконка с градиентом и эффектами */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${advantage.color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg ${advantage.iconGlow}`}>
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" strokeWidth={2.5} fill="rgba(255, 255, 255, 0.1)" />
                    {/* Эффект свечения при hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-50 blur-xl -z-10 transition-opacity`}></div>
                  </div>

                  {/* ABILITY (Способность) - Заголовок преимущества */}
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 group-hover:from-blue-700 group-hover:to-blue-900 transition-all">
                    {advantage.title}
                  </h3>
                  
                  {/* PROMPTS (Подсказки) - Описательный текст с визуальными акцентами */}
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                    {advantage.description}
                  </p>

                  {/* MOTIVATION - Визуальный индикатор при наведении */}
                  <div className="mt-4 h-1.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
