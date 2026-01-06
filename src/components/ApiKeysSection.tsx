import React from 'react';
import { Key, Github, Zap, DollarSign, Repeat, Package, TrendingUp, Code2 } from 'lucide-react';
const tools = [{
  icon: <Zap className="w-8 h-8 text-yellow-500" />,
  title: 'AI IDE',
  desc: 'Используйте современные AI-редакторы кода для мгновенной генерации шаблонных решений. Искусственный интеллект пишет рутинный код за вас, позволяя сосредоточиться на бизнес-логике.'
}, {
  icon: <Github className="w-8 h-8 text-gray-900" />,
  title: 'GitHub',
  desc: 'Автоматизируйте версионирование и распространение ваших модулей. GitHub Actions помогут настроить CI/CD пайплайны для автоматической сборки и публикации пакетов.'
}];
const benefits = [{
  icon: <Repeat className="w-6 h-6 text-green-600" />,
  title: 'Подписочная модель',
  desc: 'Клиенты платят ежемесячно за доступ к обновлениям и поддержке вашего модуля.'
}, {
  icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
  title: 'Масштабируемость',
  desc: 'Один и тот же модуль могут использовать сотни клиентов одновременно без вашего участия.'
}, {
  icon: <Package className="w-6 h-6 text-purple-600" />,
  title: 'Готовые решения',
  desc: 'Продавайте готовые блоки: системы авторизации, платежные шлюзы, сложные формы или графики.'
}, {
  icon: <Key className="w-6 h-6 text-indigo-600" />,
  title: 'Контроль доступа',
  desc: 'Выдавайте API ключи клиентам и управляйте доступом к функционалу вашего кода.'
}];
export function ApiKeysSection() {
  return <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-bold mb-4">
            <DollarSign className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            Бизнес-модель будущего
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Продавай API ключи для веб-модулей JavaScript
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Перестаньте продавать свое время. Создавайте шаблонные решения один
            раз и продавайте доступ к ним через API ключи по подписке.
          </p>
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {tools.map((tool, index) => <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-4">
                <div className="p-2 md:p-3 bg-white rounded-xl shadow-sm mr-3 md:mr-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {tool.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                {tool.desc}
              </p>
            </div>)}
        </div>

        {/* Process Flow Visual */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white mb-12 md:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center relative z-10">
            Как это работает?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <Code2 className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
              </div>
              <div className="font-bold text-base md:text-lg mb-2">
                1. Создание
              </div>
              <p className="text-indigo-200 text-xs md:text-sm">
                Пишете полезный JS модуль с помощью AI IDE
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <Github className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </div>
              <div className="font-bold text-base md:text-lg mb-2">
                2. Публикация
              </div>
              <p className="text-indigo-200 text-xs md:text-sm">
                Размещаете код на GitHub и настраиваете доступ
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <Key className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
              </div>
              <div className="font-bold text-base md:text-lg mb-2">
                3. Продажа
              </div>
              <p className="text-indigo-200 text-xs md:text-sm">
                Клиент покупает подписку и получает API ключ
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
              </div>
              <div className="font-bold text-base md:text-lg mb-2">
                4. Прибыль
              </div>
              <p className="text-indigo-200 text-xs md:text-sm">
                Получаете регулярный доход с каждого клиента
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((item, index) => <div key={index} className="p-5 md:p-6 rounded-xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 md:mb-4 border border-gray-100">
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}