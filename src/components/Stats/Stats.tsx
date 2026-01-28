import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Trophy,
  Star,
  Target,
  Zap,
  Heart
} from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
import { getAssetPath } from "@/lib/utils"

const stats = [
  { 
    value: "12+", 
    label: "Aastat kogemust",
    icon: Sparkles, // Более красивая иконка - искры/звездочки
    icon3D: "/3d-icons/trending-up-3d.png",
    iconColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    iconGlow: "shadow-blue-500/50",
    description: "Pikaajaline kogemus",
    use3D: false
  },
  { 
    value: "100+", 
    label: "Edukalt projekti",
    icon: Target, // Более выразительная иконка - цель/мишень
    icon3D: "/3d-icons/check-circle-3d.png",
    iconColor: "bg-gradient-to-br from-green-400 to-green-600",
    iconGlow: "shadow-green-500/50",
    description: "Edukalt lõpetatud",
    use3D: false
  },
  { 
    value: "100%", 
    label: "Klientide rahulolu",
    icon: Heart, // Более эмоциональная иконка - сердце
    icon3D: "/3d-icons/users-3d.png",
    iconColor: "bg-gradient-to-br from-purple-400 to-pink-600",
    iconGlow: "shadow-purple-500/50",
    description: "Rahulolevad kliendid",
    use3D: false
  },
  { 
    value: "2x", 
    label: "Aasta Betoonehitis",
    icon: Trophy, // Более престижная иконка - трофей
    icon3D: "/3d-icons/award-3d.png",
    iconColor: "bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600",
    iconGlow: "shadow-yellow-500/50",
    description: "Tunnustatud kvaliteet",
    use3D: false
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState<Array<{ value: string | number; animated: boolean }>>(
    stats.map(() => ({ value: 0, animated: false }))
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Анимация счетчиков
            stats.forEach((stat, index) => {
              const numericValue = parseInt(stat.value.replace(/\D/g, ''));
              if (numericValue > 0 && !countedStats[index].animated) {
                animateCounter(index, numericValue, stat.value);
              } else {
                setCountedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = { value: stat.value, animated: true };
                  return newStats;
                });
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateCounter = (index: number, target: number, originalValue: string) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        setCountedStats(prev => {
          const newStats = [...prev];
          newStats[index] = { value: originalValue, animated: true };
          return newStats;
        });
      } else {
        setCountedStats(prev => {
          const newStats = [...prev];
          const prefix = originalValue.includes('+') ? '+' : originalValue.includes('%') ? '%' : originalValue.includes('x') ? 'x' : '';
          newStats[index] = { value: `${Math.floor(current)}${prefix}`, animated: false };
          return newStats;
        });
      }
    }, duration / steps);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath("evocon-works-main.jpg")})`
        }}
      >
        {/* Overlay слой для затемнения и улучшения читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/85 to-blue-900/90"></div>
        {/* Дополнительный overlay для лучшей контрастности */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Декоративные элементы для визуального интереса */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Meie saavutused
          </h2>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
            Numbrid, mis räägivad meie kvaliteedist ja usaldusväärsusest
          </p>
        </div>

        {/* Карточки со статистикой */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, i) => {
            const displayValue = countedStats[i]?.value || stat.value;
            const isAnimated = countedStats[i]?.animated !== false;
            const IconComponent = stat.icon;

            return (
              <div 
                key={i} 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Glassmorphism карточка */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full group">
                  {/* Иконка в квадрате с улучшенным дизайном */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${stat.iconColor} rounded-2xl mb-6 shadow-xl ${stat.iconGlow} group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {stat.use3D && stat.icon3D ? (
                      // 3D иконка (если включена)
                      <>
                        <img 
                          src={stat.icon3D} 
                          alt={stat.label}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        <div style={{ display: 'none' }}>
                          <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                      </>
                    ) : (
                      // Улучшенная обычная иконка с эффектами
                      <IconComponent 
                        className="w-10 h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                        strokeWidth={2.5}
                        fill="rgba(255, 255, 255, 0.1)"
                      />
                    )}
                    {/* Эффект свечения при hover */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                  </div>

                  {/* Анимированное значение */}
                  <div 
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 transition-all duration-300 ${
                      isAnimated ? 'scale-100' : 'scale-110'
                    }`}
                  >
                    {displayValue}
                  </div>

                  {/* Описательный текст */}
                  <div className="text-white/90 font-medium text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA секция */}
        <div className="text-center">
          <p className="text-white text-lg lg:text-xl mb-6 font-medium">
            Oled valmis alustama oma projekti?
          </p>
          <Button 
            asChild 
            className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600 rounded-lg px-8 py-6 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <Link to="/kontakt" className="flex items-center gap-2">
              Võta ühendust
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
