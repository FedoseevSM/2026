import React from 'react';
import { User, Briefcase, GraduationCap, Rocket } from 'lucide-react';
const audiences = [{
  icon: <User className="w-8 h-8 text-blue-600" />,
  title: 'Новички',
  description: 'Никогда не писали код, но хотите освоить современную профессию с нуля.'
}, {
  icon: <Briefcase className="w-8 h-8 text-purple-600" />,
  title: 'Свитчеры',
  description: 'Работаете в офлайне, но мечтаете о гибком графике и удаленной работе.'
}, {
  icon: <Rocket className="w-8 h-8 text-indigo-600" />,
  title: 'Будущие фрилансеры',
  description: 'Хотите уйти из найма и самостоятельно искать заказы и управлять доходом.'
}, {
  icon: <GraduationCap className="w-8 h-8 text-pink-600" />,
  title: 'Студенты',
  description: 'Ищете подработку во время учебы или старт карьеры в IT.'
}];
export function TargetAudience() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Для кого этот курс?
          </h2>
          <p className="text-lg text-gray-600">
            Мы разработали программу так, чтобы она была понятна даже тем, кто
            никогда не сталкивался с программированием.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}