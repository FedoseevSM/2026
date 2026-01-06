import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Нужен ли опыт программирования для прохождения курса?',
    answer: 'Нет, курс разработан специально для новичков. Мы начинаем с самых основ и постепенно переходим к более сложным темам. Главное — желание учиться и готовность практиковаться.'
  }, {
    question: 'Сколько времени нужно уделять обучению?',
    answer: 'Рекомендуем выделять 10-15 часов в неделю. Курс рассчитан на 6 недель при таком темпе. Но вы можете учиться в своем ритме — доступ к материалам остается навсегда.'
  }, {
    question: 'Какое оборудование необходимо для обучения?',
    answer: 'Достаточно компьютера или ноутбука с доступом в интернет и современным браузером (Chrome, Firefox, Safari). Специальное ПО устанавливать не нужно — все работает в браузере.'
  }, {
    question: 'Выдается ли сертификат после окончания курса?',
    answer: 'Да, после успешного завершения всех модулей и выполнения финального проекта вы получите сертификат о прохождении курса, который можно добавить в портфолио и LinkedIn.'
  }, {
    question: 'Что такое SQL.js и зачем он нужен?',
    answer: 'SQL.js — это библиотека, которая позволяет работать с базой данных SQLite прямо в браузере без сервера. Это отличный способ научиться работать с данными и понять основы баз данных на практике.'
  }, {
    question: 'Можно ли работать с реальными проектами во время обучения?',
    answer: 'Да, мы рекомендуем начинать искать простые заказы уже после 3-4 недели обучения. Это поможет закрепить знания на практике и начать зарабатывать быстрее.'
  }, {
    question: 'Есть ли поддержка и помощь кураторов?',
    answer: 'Да, у нас есть закрытый чат в Telegram, где вы можете задавать вопросы кураторам и общаться с другими студентами. Кураторы отвечают в течение 24 часов в будние дни.'
  }, {
    question: 'Сколько можно зарабатывать на фрилансе после курса?',
    answer: 'Начинающие фрилансеры зарабатывают от 20,000 до 50,000 рублей в месяц. С опытом и портфолио доход может вырасти до 100,000+ рублей. Многое зависит от количества времени и усилий.'
  }, {
    question: 'На каких платформах искать заказы?',
    answer: 'Мы обучаем работе с популярными биржами: Kwork, FL.ru, Freelance.ru, а также международными Upwork и Fiverr. В курсе есть отдельный модуль по поиску и оформлению заказов.'
  }, {
    question: 'Что делать, если я застрял на каком-то уроке?',
    answer: 'Задайте вопрос в чате с куратором, пересмотрите урок еще раз, изучите дополнительные материалы, которые мы предоставляем. Также можно обратиться к сообществу студентов — часто они помогают быстрее.'
  }, {
    question: 'Можно ли учиться с телефона или планшета?',
    answer: 'Смотреть видео-уроки можно с любого устройства, но для практических заданий и написания кода понадобится компьютер или ноутбук. Мобильные устройства не подходят для полноценной разработки.'
  }, {
    question: 'Что входит в финальный проект курса?',
    answer: 'Вы создадите полноценное веб-приложение с использованием HTML, CSS, JavaScript и работой с данными через SQL.js. Это будет готовая работа для вашего портфолио, которую можно показывать заказчикам.'
  }, {
    question: 'Как работает подписочная модель продажи модулей?',
    answer: 'Вы создаете полезный JavaScript-модуль один раз, размещаете его на GitHub и продаете доступ через API-ключи. Клиенты платят ежемесячную подписку за использование и обновления вашего модуля.'
  }, {
    question: 'Нужно ли знать английский язык?',
    answer: 'Базовые знания английского помогут, так как документация и многие ресурсы на английском. Но для прохождения курса это не обязательно — все материалы на русском языке.'
  }, {
    question: 'Что такое партнерские модули и как с ними работать?',
    answer: 'Партнерские модули — это готовые решения от наших партнеров, которые вы можете продавать клиентам без необходимости писать код. Это отличный способ начать зарабатывать сразу и понять рынок.'
  }, {
    question: 'Можно ли получить возврат средств?',
    answer: 'Да, у нас есть гарантия возврата в течение 14 дней с момента покупки, если курс вам не подошел. Просто напишите в поддержку, и мы вернем деньги без лишних вопросов.'
  }, {
    question: 'Как долго действует доступ к материалам курса?',
    answer: 'Доступ к материалам курса остается навсегда. Вы сможете пересматривать уроки, скачивать обновления и пользоваться всеми дополнительными материалами без ограничений по времени.'
  }, {
    question: 'Чем этот курс отличается от бесплатных уроков на YouTube?',
    answer: 'Наш курс — это структурированная программа с практическими заданиями, проверкой кода, поддержкой кураторов и готовым планом развития. YouTube дает разрозненные знания, а мы — системный подход и сопровождение.'
  }
];

// Функция для редиректа на Telegram
const redirectToTelegram = () => {
  window.open('https://t.me/+a9CM2qMtcfU5ZmEy', '_blank', 'noopener,noreferrer');
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs md:text-sm font-bold mb-4">
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Ответы на самые популярные вопросы о курсе и обучении
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-indigo-200 transition-colors">
                <button 
                  onClick={() => toggleQuestion(index)} 
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-indigo-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-4 md:pb-5 pt-2">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-6 md:p-8 bg-white rounded-2xl border border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Напишите нам, и мы с радостью поможем вам разобраться
            </p>
            <button 
              onClick={redirectToTelegram}
              className="px-6 md:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-sm md:text-base"
            >
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}