import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ArrowRight, Sparkles, Award, TrendingUp, X, ZoomIn, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const topProjects = [
  {
    id: 1,
    title: 'Tivoli kortermajad',
    shortTitle: 'Tivoli',
    location: 'Tallinn',
    year: '2015-2016',
    description: '4800 m³ betoonitöid, 7300 m² montaažitöid, 55 rõdu paigaldus',
    gradient: 'from-blue-500 to-blue-700',
    image: '/tivoli-kortermajad.jpg',
    stats: { concrete: '4800 m³', assembly: '7300 m²', balconies: '55' }
  },
  {
    id: 2,
    title: 'WoHo äri-ja eluhoone',
    shortTitle: 'WoHo',
    location: 'Tallinn',
    year: '2017-2018',
    description: '7900 m³ betoonitöid',
    gradient: 'from-indigo-500 to-indigo-700',
    image: '/WoHo-ari-ja-eluhoone.jpg',
    stats: { concrete: '7900 m³' }
  },
  {
    id: 3,
    title: 'Ektorpsvägen, Nacka kortermaja',
    shortTitle: 'Ektorpsvägen',
    location: 'Stockholm',
    year: '2017-2018',
    description: '2358 ühiku betoonelemendi paigaldust, 10900 m² montaažitöid',
    gradient: 'from-purple-500 to-purple-700',
    image: '/ektorpsvagen-nacka-kortermaja.jpg',
    stats: { elements: '2358 ühikut', assembly: '10900 m²' }
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof topProjects[0] | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
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
          {/* Мотивация: Визуальный акцент */}
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Meie tööd
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meie projektid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Seitse kõige olulisemat verstaposti - projektid, mida peame väga olulisteks
          </p>

          {/* Мотивация: Социальное доказательство */}
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-6 py-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-900">7 verstaposti</span>
            </div>
            <div className="w-px h-6 bg-blue-200"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">100+ projektid</span>
            </div>
          </div>
        </div>
        
        {/* Способность: Улучшенная сетка проектов с Card компонентами */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const delay = index * 150;

            return (
              <Card
                key={project.id}
                className={`overflow-hidden transition-all duration-300 group cursor-pointer hover:shadow-xl ${
                  isHovered 
                    ? 'border-blue-600 shadow-2xl scale-105' 
                    : 'hover:border-blue-400'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Мотивация: Изображение проекта с overlay */}
                <div className="h-56 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  {/* Фоновое изображение */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setIsImageZoomed(true);
                    }}
                  />
                  
                  {/* Индикатор для увеличения изображения */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setIsImageZoomed(true);
                    }}
                  >
                    <ZoomIn className="w-4 h-4 text-gray-700" />
                  </div>
                  
                  {/* Градиентный overlay с цветом проекта */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                  
                  {/* Темный overlay для контраста */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                  
                  {/* Способность: Текст на изображении */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center px-4">
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                        {project.shortTitle}
                      </div>
                      <div className="text-sm opacity-75 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 drop-shadow-md">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {/* Мотивация: Overlay при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Подсказки: Индикатор при наведении */}
                  {isHovered && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium animate-in fade-in zoom-in z-20">
                      Vaata rohkem
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  {/* Способность: Метаданные проекта */}
                  <div className="flex gap-4 mb-3 text-sm text-gray-500 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Мотивация: Статистика проекта при наведении */}
                  {isHovered && project.stats && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in slide-in-from-top-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex-col items-start gap-4">
                  {/* Подсказки: Улучшенная ссылка */}
                  <Link 
                    to={`/referentsid#${project.id}`} 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Vaata rohkem</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Мотивация: Визуальный индикатор внизу */}
                  <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        {/* Подсказки: Улучшенная CTA кнопка */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/referentsid">
              <span>Vaata kõiki projekte</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          {/* Мотивация: Дополнительная информация */}
          <p className="text-gray-500 text-sm mt-4">
            Või <Link to="/kontakt" className="text-blue-600 hover:text-blue-700 font-medium underline">võta meiega ühendust</Link> oma projekti kohta
          </p>
        </div>
      </div>

      {/* Модальное окно с деталями проекта */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => {
            setSelectedProject(null);
            setIsImageZoomed(false);
          }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок модального окна */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="outline" className="text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedProject.location}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {selectedProject.year}
                  </Badge>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setIsImageZoomed(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Контент модального окна */}
            <div className="p-6">
              {/* Изображение проекта */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className={`w-full h-auto object-cover transition-transform duration-300 ${
                    isImageZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsImageZoomed(!isImageZoomed)}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
                  <ZoomIn className="w-4 h-4" />
                  <span>{isImageZoomed ? 'Vähenda' : 'Suurenda'}</span>
                </div>
              </div>

              {/* Описание проекта */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Projekti kirjeldus</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Статистика проекта */}
              {selectedProject.stats && (
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Projekti statistika</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.gradient}`}></div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase">{key}</div>
                          <div className="text-sm font-semibold text-gray-900">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                <Button asChild className="flex-1">
                  <Link to={`/referentsid#${selectedProject.id}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Vaata täpsemat infot
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/kontakt">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Küsi pakkumist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
