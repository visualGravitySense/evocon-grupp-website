import { Link } from 'react-router-dom';
import { Building2, Lightbulb, Hammer, Wrench, Users, Truck, ArrowRight, CheckCircle, Sparkles, Star, Shield, Clock, Phone, Zap, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Peatöövõtt ja projektijuhtimine',
    description: 'Oleme oma klientidele partner, kes leiab innovaatilisi ja optimaalseid lahendusi kiirelt ja kvaliteetselt.',
    benefits: ['Täielik projektijuhtimine', 'Kvaliteetne täitmine', 'Ajagraafiku järgimine'],
    color: 'from-blue-500 to-blue-600',
    image: '/peatoovott-ja-projektijuhtimine.jpg'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Ehitusalane konsultatsioon',
    description: 'Nõustame tellijat kõigis ehitusalastes küsimustes alates ehitusprotsessi ettevalmistamisest kuni lõpuni.',
    benefits: ['Tasuta konsultatsioon', 'Kogenud spetsialistid', 'Individuaalne lähenemine'],
    color: 'from-yellow-500 to-yellow-600',
    image: '/ehitusalane-konsultatsioon.jpg'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Betooni- ja montaažitööd',
    description: 'Oleme teinud väga palju betooni- ja montaažitöid nii suurtele peatöövõtjatele kui eraklientidele.',
    benefits: ['Kõrge kvaliteet', 'Kiire täitmine', 'Konkurentsivõimeline hind'],
    color: 'from-green-500 to-green-600',
    image: '/betooni-ja-montaazitood.jpg'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Betoonpõrandad',
    description: 'Omame pikaajalist töökogemust betoonpõrandate valamisel. Tagame kõrgkvaliteetse tulemuse.',
    benefits: ['12+ aastat kogemust', 'Garantii kvaliteedile', 'Kaasaegsed meetodid'],
    color: 'from-purple-500 to-purple-600',
    image: '/betoonporandad.jpg'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Omanikujärelvalve',
    description: 'Esindame ja kaitseme tellija huve ehitusprotsessis, kindlustame kvaliteedi ja tööde kulgemise.',
    benefits: ['Tellija huvide kaitsmine', 'Kvaliteedi kontroll', 'Protsessi jälgimine'],
    color: 'from-indigo-500 to-indigo-600',
    image: '/omanikujarelvalve.jpg'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Transporditeenus',
    description: 'Oma tõstekraanadega varustatud masinate abil transpordime suuri detaile ja ehitusmaterjale.',
    benefits: ['Oma tehnika', 'Kiire kohaletoimetamine', 'Turvaline transport'],
    color: 'from-orange-500 to-orange-600',
    image: '/transporditeenused.jpg'
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
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
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* ============================================ */}
          {/* BJ FOGG BEHAVIOR MODEL - STRUCTURED APPROACH */}
          {/* ============================================ */}
          
          {/* PROMPTS (Подсказки) - Заметные визуальные триггеры */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md animate-pulse">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Meie teenused
            </Badge>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="font-medium">Kiire vastus 24h jooksul</span>
            </div>
          </div>

          {/* MOTIVATION (Мотивация) - Визуальные акценты и выгоды */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Teenused ja tegutsemisvaldkonnad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Anname endast iga päev maksimumi, püüeldes täiusliku tulemuse ja kõrge kvaliteedi poole, 
            et ületada ka kõige nõudlikuma kliendi ootused.
          </p>

          {/* MOTIVATION (Мотивация) - Улучшенное социальное доказательство */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-1.5 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-green-900">100+</div>
                <div className="text-xs text-green-700">Edukat projekti</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-blue-900">12+</div>
                <div className="text-xs text-blue-700">Aastat kogemust</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-1.5 bg-yellow-100 rounded-lg">
                <Star className="w-5 h-5 text-yellow-600 fill-yellow-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-yellow-900">4.9/5</div>
                <div className="text-xs text-yellow-700">Kliendi hinnang</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-1.5 bg-purple-100 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-purple-900">100%</div>
                <div className="text-xs text-purple-700">Garantii</div>
              </div>
            </div>
          </div>

          {/* ABILITY (Способность) - Быстрые действия */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Button asChild variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">
              <a href="tel:+37255905484" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Helista kohe</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <Link to="/kontakt" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Tasuta konsultatsioon</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Способность: Улучшенная сетка карточек с shadcn/ui Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const isSelected = selectedService === i;
            const delay = i * 100;

            return (
              <Card
                key={i}
                className={`transition-all duration-300 cursor-pointer group hover:shadow-xl overflow-hidden ${
                  isSelected 
                    ? 'border-blue-600 shadow-2xl scale-105' 
                    : 'hover:border-blue-400'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setSelectedService(i)}
                onMouseLeave={() => setSelectedService(null)}
              >
                {/* Изображение с overlay */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay с градиентом */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  {/* Дополнительный темный overlay для лучшей читаемости */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Иконка поверх изображения */}
                  <div className={`absolute top-4 right-4 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="text-white drop-shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <CardHeader>

                  {/* Способность: Заголовок и описание */}
                  <CardTitle className="text-xl lg:text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* MOTIVATION (Мотивация) - Преимущества всегда видимы для мотивации */}
                  <div className="mb-4 space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                          isSelected 
                            ? 'text-gray-900 font-medium' 
                            : 'text-gray-600'
                        }`}
                      >
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${
                          isSelected ? 'text-green-500' : 'text-gray-400'
                        }`} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* ABILITY (Способность) - Визуальная подсказка о простоте */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Zap className="w-3 h-3 text-blue-500" />
                      <span>Kiire ja lihtne protsess</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex-col items-start gap-4">
                  {/* PROMPTS (Подсказки) - Улучшенная ссылка с анимацией */}
                  <Link
                    to="/teenused"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all group/link hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Loe rohkem</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* ABILITY (Способность) - Альтернативный простой путь */}
                  <a
                    href="tel:+37255905484"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors group/phone"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-4 h-4 group-hover/phone:scale-110 transition-transform" />
                    <span>Küsi pakkumist</span>
                  </a>

                  {/* PROMPTS (Подсказки) - Визуальный индикатор при наведении */}
                  <div className={`w-full h-1.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}></div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* PROMPTS (Подсказки) - Улучшенная CTA секция */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* MOTIVATION (Мотивация) - Визуальный акцент на главной CTA */}
          <div className="relative rounded-2xl p-8 lg:p-10 border-2 border-blue-100 mb-6 overflow-hidden shadow-xl">
            {/* Фоновое изображение */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/why-choose-us.jpg)'
              }}
            >
              {/* Overlay слой для затемнения и улучшения читаемости */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/85 to-purple-600/80"></div>
              {/* Дополнительный overlay для лучшей контрастности */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Контент поверх изображения */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                <span className="text-sm font-semibold text-white drop-shadow-md">2x Aasta Betoonehitis auhind</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Valmis alustama oma projekti?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto drop-shadow-md">
                Võta meiega ühendust ja saame tasuta konsultatsiooni ajal koos leida parima lahenduse sinu projektile
              </p>
              
              {/* ABILITY (Способность) - Множественные простые пути */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all font-semibold">
                  <Link to="/teenused" className="flex items-center">
                    <span>Vaata kõiki teenuseid</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/80 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm bg-white/5">
                  <a href="tel:+37255905484" className="flex items-center">
                    <Phone className="mr-2 w-5 h-5" />
                    <span>Helista kohe</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* MOTIVATION (Мотивация) - Дополнительная информация с выгодами */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 font-medium">Tasuta konsultatsioon</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">Vastame 24h jooksul</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <CheckCircle className="w-4 h-4 text-purple-600" />
              <span className="text-gray-700 font-medium">Garantii kvaliteedile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
