import React, { useEffect, useState, useRef, createElement } from 'react';
import { Play, Database, Search, Terminal, AlertCircle } from 'lucide-react';
// Define types for SQL.js
interface SqlJsStatic {
  Database: any;
}
interface SqlJsDatabase {
  run: (sql: string) => void;
  exec: (sql: string, params?: any) => QueryResult[];
  close: () => void;
}
interface QueryResult {
  columns: string[];
  values: any[][];
}
declare global {
  interface Window {
    initSqlJs: (config: any) => Promise<SqlJsStatic>;
  }
}
export function PracticalDemo() {
  const [db, setDb] = useState<SqlJsDatabase | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [searchId, setSearchId] = useState('1');
  const [queryResult, setQueryResult] = useState<QueryResult[] | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `> ${msg}`]);
  };
  useEffect(() => {
    // Load SQL.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js';
    script.async = true;
    script.onload = () => {
      addLog('Библиотека SQL.js загружена');
      const config = {
        locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${filename}`
      };
      window.initSqlJs(config).then(SQL => {
        try {
          addLog('Инициализация базы данных в памяти...');
          const newDb = new SQL.Database();
          setDb(newDb);
          // Create table
          addLog("Создание таблицы 'freelancers'...");
          newDb.run('CREATE TABLE freelancers (id int, name char, skill_level char, rate int);');
          // Insert data
          addLog('Добавление тестовых данных...');
          newDb.run("INSERT INTO freelancers VALUES (1, 'Анна', 'Junior', 500);");
          newDb.run("INSERT INTO freelancers VALUES (2, 'Иван', 'Middle', 1500);");
          newDb.run("INSERT INTO freelancers VALUES (3, 'Мария', 'Senior', 3000);");
          setIsReady(true);
          addLog('База данных готова к работе!');
        } catch (err) {
          setError('Ошибка инициализации БД');
          console.error(err);
        }
      }).catch(err => {
        setError('Не удалось загрузить WebAssembly');
        console.error(err);
      });
    };
    script.onerror = () => {
      setError('Ошибка загрузки скрипта SQL.js');
    };
    document.head.appendChild(script);
    return () => {
      if (db) {
        // db.close(); // Cleanup if needed
      }
      document.head.removeChild(script);
    };
  }, []);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;
    try {
      addLog(`Выполняем запрос: SELECT * FROM freelancers WHERE id=${searchId}`);
      // Using parameterized query for safety (even in client-side DB)
      // Note: sql.js exec returns an array of result objects
      const res = db.exec('SELECT * FROM freelancers WHERE id=:id', {
        ':id': searchId
      });
      setQueryResult(res);
      if (res.length === 0) {
        addLog('Результат: Запись не найдена');
      } else {
        addLog(`Результат: Найдена запись для ${res[0].values[0][1]}`);
      }
    } catch (err: any) {
      addLog(`Ошибка: ${err.message}`);
    }
  };
  return <section className="py-12 md:py-20 bg-indigo-50" id="demo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side: Explanation */}
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs md:text-sm font-bold mb-4">
              <Terminal className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Онлайн-демо
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Как это работает на практике
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Прямо сейчас в вашем браузере создана виртуальная база данных
              SQLite. Это не картинка, а настоящий код, который выполняется в
              реальном времени.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mt-1 text-sm">
                  1
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    Инициализация
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Мы загрузили библиотеку SQL.js и создали базу данных в
                    оперативной памяти вашего устройства.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mt-1 text-sm">
                  2
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    Наполнение данными
                  </h4>
                  <p className="text-gray-600 text-sm">
                    С помощью SQL-команды{' '}
                    <code className="bg-gray-100 px-1 rounded">INSERT</code> мы
                    добавили трех вымышленных фрилансеров в таблицу.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mt-1 text-sm">
                  3
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    Запрос данных
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Когда вы нажимаете «Найти», JavaScript формирует SQL-запрос{' '}
                    <code className="bg-gray-100 px-1 rounded">SELECT</code> и
                    показывает результат без перезагрузки страницы.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 p-3 md:p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start">
              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
              <p className="text-xs md:text-sm text-yellow-800">
                <strong>Важно:</strong> В реальных проектах для долгосрочного
                хранения данных используется сервер. Здесь мы показываем работу
                в памяти для обучения и демонстрации возможностей браузера.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Demo */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-900 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="text-indigo-400 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-white font-mono font-bold text-sm md:text-base">
                    SQLite Browser Demo
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                {!isReady && !error && <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 text-sm">
                      Загрузка SQL движка...
                    </p>
                  </div>}

                {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm">
                    {error}
                  </div>}

                {isReady && <div className="space-y-4 md:space-y-6">
                    {/* Form */}
                    <form onSubmit={handleSearch} className="bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Поиск фрилансера по ID (1-3):
                      </label>
                      <div className="flex gap-2">
                        <input type="number" min="1" max="3" value={searchId} onChange={e => setSearchId(e.target.value)} className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm md:text-base" />
                        <button type="submit" className="bg-indigo-600 text-white px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center text-sm md:text-base whitespace-nowrap">
                          <Search className="w-4 h-4 mr-1 md:mr-2" />
                          <span className="hidden sm:inline">Найти</span>
                          <span className="sm:hidden">OK</span>
                        </button>
                      </div>
                    </form>

                    {/* Results Area */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-3 md:px-4 py-2 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase">
                        Результат запроса
                      </div>
                      <div className="p-3 md:p-4 min-h-[100px] bg-white">
                        {queryResult && queryResult.length > 0 ? <div className="overflow-x-auto -mx-3 md:mx-0">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead>
                                <tr>
                                  {queryResult[0].columns.map((col, i) => <th key={i} className="px-2 md:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                                      {col}
                                    </th>)}
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {queryResult[0].values.map((row, i) => <tr key={i}>
                                    {row.map((val, j) => <td key={j} className="px-2 md:px-3 py-2 whitespace-nowrap text-xs md:text-sm text-gray-900">
                                        {val}
                                      </td>)}
                                  </tr>)}
                              </tbody>
                            </table>
                          </div> : queryResult ? <p className="text-gray-500 italic text-center py-4 text-sm">
                            Ничего не найдено
                          </p> : <p className="text-gray-400 italic text-center py-4 text-sm">
                            Введите ID и нажмите "Найти"
                          </p>}
                      </div>
                    </div>

                    {/* Console Logs */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden font-mono text-xs">
                      <div className="px-3 md:px-4 py-2 bg-gray-800 text-gray-400 border-b border-gray-700 flex items-center">
                        <Terminal className="w-3 h-3 mr-2" />
                        Лог операций
                      </div>
                      <div className="p-3 md:p-4 h-32 overflow-y-auto text-green-400 space-y-1">
                        {logs.map((log, i) => <div key={i}>{log}</div>)}
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}