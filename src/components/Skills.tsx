import React from 'react';
import { CheckCircle2 } from 'lucide-react';
const skills = ['HTML5 и CSS3 для создания адаптивных сайтов', 'Основы JavaScript и интерактивность', 'Работа с DOM и событиями браузера', 'Браузерные хранилища (localStorage, sessionStorage)', 'Работа с SQL и базами данных через SQL.js', 'Понимание клиент-серверной архитектуры', 'Основы работы с Git и GitHub', 'Поиск заказов на фриланс-биржах'];
export function Skills() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Чему вы научитесь
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              За 6 недель вы пройдете путь от «что такое тег» до создания
              собственного веб-приложения с базой данных.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>)}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Coding skills" className="relative rounded-3xl shadow-xl z-10" />
          </div>
        </div>
      </div>
    </section>;
}