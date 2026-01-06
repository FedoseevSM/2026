import React from 'react';
import { ExternalLink, GraduationCap, Award, Users } from 'lucide-react';
export function StepikCTA() {
  return <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs md:text-sm font-medium mb-4 md:mb-6">
              <GraduationCap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Образовательная платформа
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Продолжите обучение на Stepik
            </h2>
            <p className="text-indigo-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Присоединяйтесь к тысячам студентов на крупнейшей образовательной
              платформе. Получите доступ к углубленным материалам и
              автоматической проверке задач.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
              {/* <div className="flex items-center text-indigo-100 text-sm md:text-base">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-300 flex-shrink-0" />
                <span>Сертификат о прохождении</span>
              </div> */}
              <div className="flex items-center text-indigo-100 text-sm md:text-base">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-300 flex-shrink-0" />
                <span>Активное комьюнити</span>
              </div>
            </div>

            <a href="https://stepik.org/course/269329/promo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              Перейти на Stepik
              <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="lg:w-5/12 w-full mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-white/10 pb-3 md:pb-4">
                <div className="font-bold text-lg md:text-xl">
                  Курс «Фриланс 2026»
                </div>
                <div className="text-yellow-300 font-bold text-base md:text-lg">
                  ★ 4.9
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {/* <div className="flex justify-between text-sm md:text-base">
                  <span className="text-indigo-200">Уроков:</span>
                  <span className="font-semibold">120+</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-indigo-200">Задач:</span>
                  <span className="font-semibold">250+</span>
                </div> */}
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-indigo-200">Сложность:</span>
                  <span className="font-semibold">Для начинающих</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
                  <div className="bg-green-400 h-full w-3/4"></div>
                </div>
                {/* <div className="text-xs md:text-sm text-center text-indigo-200 mt-2">
                  Более 15,000 студентов уже прошли этот курс
                </div> */}
              </div>

              <div className="text-center">
                <div className="text-xs md:text-sm text-indigo-200 mb-2">
                  Доступно на платформе
                </div>
                <div className="text-xl md:text-2xl font-bold tracking-wider flex justify-center">
                  <img 
                    src="https://static.tildacdn.com/tild3238-6138-4637-b435-336533333639/stepik_logotype_blac.svg" 
                    alt="Stepik" 
                    className="h-8 md:h-10 w-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://stepik.org/favicon.ico";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}