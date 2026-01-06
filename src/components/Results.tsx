import React from 'react';
import { Check } from 'lucide-react';
export function Results() {
  const redirectToForm = () => {
    window.open('https://forms.yandex.ru/u/695d0f65f47e73cc70954cc3', '_blank', 'noopener,noreferrer');
  };
  return <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Ваши результаты после курса
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Собственный мини-проект</h3>
            <p className="text-gray-400">
              Вы создадите рабочее приложение с использованием SQLite в
              браузере, которое можно показать заказчику как пример сложных
              навыков.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Понимание технологий</h3>
            <p className="text-gray-400">
              Будете четко понимать, когда использовать localStorage, когда
              IndexedDB, а когда нужен полноценный сервер.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Готовность к фрилансу</h3>
            <p className="text-gray-400">
              Собранное портфолио и знания бирж позволят вам взять первый заказ
              уже в процессе обучения.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
          onClick={redirectToForm}
          className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:shadow-indigo-500/30">
            Хочу на курс
          </button>
        </div>
      </div>
    </section>;
}