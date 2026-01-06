import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
export function Header() {
  const redirectToForm = () => {
    window.open('https://forms.yandex.ru/u/695d0f65f47e73cc70954cc3', '_blank', 'noopener,noreferrer');
  };
  const redirectToTelegram = () => {
    window.open('https://t.me/+a9CM2qMtcfU5ZmEy', '_blank', 'noopener,noreferrer');
  };
  return <header className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <nav className="flex justify-between items-center mb-12 md:mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold text-lg md:text-xl">
              &lt;/&gt;
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">
              FreelanceStart
            </span>
          </div>
          {/* <button className="hidden md:block px-6 py-2 border border-gray-300/30 rounded-full hover:bg-gray-50 transition-colors text-sm">
            Вход для студентов
          </button> */}
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-indigo-500/30 border border-indigo-400/30 rounded-full text-xs md:text-sm font-medium text-indigo-200 mb-2">
              Старт потока: 15 октября
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Стань фрилансером: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Освой веб-разработку
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-indigo-100 max-w-lg leading-relaxed">
              Практический курс для новичков. Изучи HTML, CSS, JavaScript и
              работу с базами данных в браузере, чтобы начать зарабатывать
              онлайн.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button 
              onClick={redirectToForm}
              className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-50 text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
                Записаться на курс
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
              onClick={redirectToTelegram}
              className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-indigo-700/50 border border-indigo-500/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-indigo-600/50 transition-all text-sm md:text-base">
                <BookOpen className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Программа курса
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <div className="relative z-10 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video relative group">
                {/* Mockup of code editor */}
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-900 border-b border-gray-700">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 md:ml-4 text-xs text-gray-400 font-mono hidden sm:block">
                    app.js — freelance-project
                  </div>
                </div>
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-gray-300 space-y-1 md:space-y-2">
                  <div className="flex">
                    <span className="text-purple-400 w-6 md:w-8">1</span>
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-yellow-300">db</span> ={' '}
                    <span className="text-blue-400">new</span> SQL.Database();
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 w-6 md:w-8">2</span>
                    <span className="text-gray-500">
                      {' '}
                      // Создаем таблицу пользователей
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 w-6 md:w-8">3</span>
                    <span className="text-yellow-300">db</span>.run(
                    <span className="text-green-400">
                      "CREATE TABLE users (id, name);"
                    </span>
                    );
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 w-6 md:w-8">4</span>
                    <span className="text-gray-500">
                      {' '}
                      // Добавляем первого клиента
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 w-6 md:w-8">5</span>
                    <span className="text-yellow-300">db</span>.run(
                    <span className="text-green-400">
                      "INSERT INTO users VALUES (1, 'Alex');"
                    </span>
                    );
                  </div>
                  <div className="flex animate-pulse">
                    <span className="text-purple-400 w-6 md:w-8">6</span>
                    <span className="w-1.5 h-4 md:w-2 md:h-5 bg-blue-500 block"></span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-gray-50/10 backdrop-blur-md border border-gray-200/20 p-3 md:p-4 rounded-xl shadow-xl">
                  <div className="text-xs text-indigo-200 uppercase tracking-wider font-semibold mb-1">
                    Результат
                  </div>
                  <div className="text-white text-sm md:text-base font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    База данных подключена
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </header>;
}