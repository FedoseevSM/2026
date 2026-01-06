import React from 'react';
import { Server, WifiOff, Briefcase } from 'lucide-react';
export function WhyImportant() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему это важно фрилансеру?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Понимание работы с данными отличает новичка от профессионала,
            способного решать реальные задачи бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Server className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Понимание архитектуры
            </h3>
            <p className="text-gray-600">
              Вы поймете паттерн «JavaScript → API → База данных», который
              используется в 99% современных веб-приложений и коммерческих
              проектов.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
              <WifiOff className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Офлайн-приложения
            </h3>
            <p className="text-gray-600">
              Используя браузерные хранилища (IndexedDB, localStorage), вы
              сможете создавать приложения, которые работают даже без интернета
              (PWA).
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-600">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Дорогие заказы
            </h3>
            <p className="text-gray-600">
              Умение работать с данными позволяет брать заказы на создание
              CRM-систем, дашбордов и сложных калькуляторов, которые стоят
              дороже простой верстки.
            </p>
          </div>
        </div>
      </div>
    </section>;
}