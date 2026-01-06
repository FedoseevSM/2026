import React from 'react';
import { ShoppingCart, TrendingUp, Code, Rocket, Lightbulb, Users } from 'lucide-react';
export function PartnerModules() {
  const handleLearnMore = () => {
    window.open('https://fedoseevsm.github.io/lego-promo/', '_blank', 'noopener,noreferrer');
  };
  return <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 border-y border-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs md:text-sm font-bold mb-4">
              <Lightbulb className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Для новичков
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Если вы ранее не сталкивались с веб-разработкой, начните с продаж
              интерактивных веб-модулей наших партнеров
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Вы сможете лучше понять нишу и постепенно перейти к созданию
              сайтов и веб-приложений
            </p>
          </div>

          {/* Progression Path */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-blue-200 relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Начните продавать
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Используйте готовые модули от партнеров. Не нужно писать код —
                просто предлагайте решения клиентам и зарабатывайте.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-purple-200 relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Изучите рынок
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Поймите, что нужно клиентам, какие проблемы они решают, сколько
                готовы платить. Накопите опыт общения.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-indigo-200 relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 md:w-7 md:h-7 text-indigo-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Создавайте сами
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Пройдите курс, научитесь программировать и создавайте
                собственные решения. Увеличьте доход в разы.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Почему это работает?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    Низкий порог входа
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Не нужны технические знания. Начните зарабатывать уже
                    сегодня, продавая готовые решения.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    Понимание клиентов
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Узнаете реальные потребности бизнеса, прежде чем вкладывать
                    время в обучение программированию.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    Постепенный рост
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Плавный переход от продаж к разработке. Сначала
                    зарабатываете, потом учитесь создавать лучше.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    Мотивация учиться
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Видя реальный спрос, вы будете учиться с конкретной целью, а
                    не абстрактно.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Готовы начать свой путь в веб-разработке?
            </p>
            <button 
            onClick={handleLearnMore}
            className="px-6 md:px-8 py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              Узнать о партнерских модулях
            </button>
          </div>
        </div>
      </div>
    </section>;
}