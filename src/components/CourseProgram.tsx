import React from 'react';
const modules = [{
  number: '01',
  title: 'Введение во фриланс',
  desc: 'Как искать заказы, общаться с клиентами и оценивать свою работу.'
}, {
  number: '02',
  title: 'Основы HTML/CSS',
  desc: 'Семантическая верстка, Flexbox, Grid, адаптивность под мобильные устройства.'
}, {
  number: '03',
  title: 'JavaScript для интерфейсов',
  desc: 'Переменные, функции, циклы, DOM-дерево, обработка событий клика и ввода.'
}, {
  number: '04',
  title: 'Клиентские хранилища',
  desc: 'Разбор localStorage, sessionStorage, IndexedDB. Почему Web SQL устарел.'
}, {
  number: '05',
  title: 'Работа с SQLite (SQL.js)',
  desc: 'SQL-запросы (SELECT, INSERT, UPDATE) прямо в браузере. Практический модуль.'
}, {
  number: '06',
  title: 'Фронтенд + Сервер + База',
  desc: 'Концептуальный разбор того, как строятся большие проекты с реальным бэкендом.'
}];
export function CourseProgram() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Программа курса
          </h2>
          <p className="text-lg text-gray-600">
            Пошаговый план вашего развития от новичка до специалиста
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {modules.map((mod, index) => <div key={index} className="flex flex-col md:flex-row bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="md:w-24 flex-shrink-0 mb-4 md:mb-0">
                  <span className="text-3xl font-bold text-indigo-200">
                    #{mod.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600">{mod.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}