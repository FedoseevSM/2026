import React from 'react';
import { PlayCircle, Code2, MessageCircle, Award } from 'lucide-react';
export function LearningFormat() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Формат обучения
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <PlayCircle className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Видео-уроки</h3>
            <p className="text-gray-600 text-sm">
              Короткие лекции по 10-15 минут без воды. Смотрите в удобное время.
            </p>
          </div>

          <div className="p-6 bg-purple-50 rounded-2xl">
            <Code2 className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Практика</h3>
            <p className="text-gray-600 text-sm">
              Домашние задания после каждого модуля с проверкой кода.
            </p>
          </div>

          <div className="p-6 bg-indigo-50 rounded-2xl">
            <MessageCircle className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Чат с куратором</h3>
            <p className="text-gray-600 text-sm">
              Закрытый чат в Telegram, где можно задать любой вопрос.
            </p>
          </div>

          <div className="p-6 bg-pink-50 rounded-2xl">
            <Award className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Проекты</h3>
            <p className="text-gray-600 text-sm">
              3 готовых работы в портфолио к концу обучения.
            </p>
          </div>
        </div>
      </div>
    </section>;
}