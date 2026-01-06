import React from 'react';
import { Briefcase, Code, User, Star, Globe, Github, Layout } from 'lucide-react';
const portfolioItems = [{
  icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  title: 'Проекты',
  desc: '3-5 лучших работ с описанием задачи, вашего решения и ссылкой на демо. Скриншоты обязательны!'
}, {
  icon: <Code className="w-6 h-6 text-purple-600" />,
  title: 'Стек технологий',
  desc: 'Четкий список инструментов, которыми вы владеете (React, Tailwind, SQL.js и др.).'
}, {
  icon: <User className="w-6 h-6 text-indigo-600" />,
  title: 'О себе',
  desc: 'Краткая биография, ваш опыт, специализация и почему стоит работать именно с вами.'
}, {
  icon: <Star className="w-6 h-6 text-yellow-500" />,
  title: 'Отзывы',
  desc: 'Реальные отзывы клиентов или коллег. Если их пока нет — сделайте бесплатный проект за отзыв.'
}];
export function PortfolioSection() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Полное оформление портфолио фрилансера
          </h2>
          <p className="text-lg text-gray-600">
            Портфолио — это ваше лицо. Заказчики выбирают не по диплому, а по
            примерам выполненных работ. Мы научим вас упаковывать свой опыт так,
            чтобы клиенты сами хотели с вами работать.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portfolioItems.map((item, index) => <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>)}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-6 h-6 text-indigo-600 mr-3" />
            Где разместить портфолио?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start p-4 bg-gray-50 rounded-xl">
              <Github className="w-6 h-6 text-gray-700 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">GitHub Pages</h4>
                <p className="text-sm text-gray-600">
                  Идеально для размещения кода и демо-версий ваших
                  веб-приложений. Бесплатно и профессионально.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-xl">
              <Layout className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Личный сайт</h4>
                <p className="text-sm text-gray-600">
                  Собственный лендинг-визитка покажет ваши навыки верстки лучше
                  любых слов.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-1">
                Be
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Behance / Dribbble
                </h4>
                <p className="text-sm text-gray-600">
                  Если вы делаете упор на дизайн и визуальную часть ваших
                  проектов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}