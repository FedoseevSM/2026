import React from 'react';
import { ShieldAlert, Database, Globe } from 'lucide-react';
export function SqliteModule() {
  return <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            <Database className="w-4 h-4 mr-2" />
            Ключевой модуль курса
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Работа с SQLite прямо в браузере
          </h2>
          <p className="text-gray-400 text-lg">
            Мы научим вас использовать мощь SQL без необходимости настраивать
            сложный сервер.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700">
            <ShieldAlert className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Ограничения безопасности
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Браузеры не позволяют сайтам напрямую читать или писать файлы на
              вашем компьютере (например, файл базы данных .sqlite) ради
              безопасности пользователя.
            </p>
          </div>

          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700">
            <Globe className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Решение: WebAssembly
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Мы используем библиотеку <strong>SQL.js</strong> — это настоящий
              SQLite, скомпилированный в WebAssembly. Он работает внутри
              браузера так же быстро, как и на сервере.
            </p>
          </div>

          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700">
            <Database className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-3">База в памяти</h3>
            <p className="text-gray-400 text-sm md:text-base">
              В этом модуле вы создадите базу данных прямо в оперативной памяти
              браузера, создадите таблицы, наполните их данными и научитесь
              делать выборки через JavaScript.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-6 md:p-10 border border-gray-700">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Как это выглядит в коде
          </h3>
          <div className="font-mono text-xs md:text-sm overflow-x-auto bg-gray-950 p-4 md:p-6 rounded-xl border border-gray-800">
            <div className="text-gray-500 mb-2">
              {' '}
              // 1. Подключаем библиотеку
            </div>
            {/* // 1. Подключаем библиотеку */}
          <div className="mb-4">
            <span className="text-purple-400">const</span> SQL ={' '}
            <span className="text-purple-400">await</span> initSqlJs();
          </div>
          <div className="text-gray-500 mb-2">
            {' '}
            // 2. Создаем базу данных в памяти
          </div>
          {/* // 2. Создаем базу данных в памяти */}
        <div className="mb-4">
          <span className="text-purple-400">const</span> db ={' '}
          <span className="text-blue-400">new</span> SQL.Database();
        </div>

        <div className="text-gray-500 mb-2"> // 3. Выполняем SQL-запросы</div>

        {/* 3. Выполняем SQL-запросы */}
        <div className="mb-4">
          db.run(
          <span className="text-green-400">
            "CREATE TABLE hello (a int, b char);"
          </span>
          );
          <br />
          db.run(
          <span className="text-green-400">
            "INSERT INTO hello VALUES (0, 'world');"
          </span>
          );
        </div>

        <div className="text-gray-500 mb-2"> // 4. Получаем результат</div>

        {/* 4. Получаем результат */}
        <div>
        </div>
          <span className="text-purple-400">const</span> res = db.exec(
          <span className="text-green-400">"SELECT * FROM hello"</span>);
        </div>
      </div>
          </div>
    </section>;
}