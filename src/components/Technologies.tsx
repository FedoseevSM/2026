import React from 'react';
import { Database, FileCode, Layout, Server, HardDrive, Cpu } from 'lucide-react';
const techs = [{
  name: 'HTML5',
  icon: <Layout className="w-8 h-8" />,
  color: 'text-orange-500',
  bg: 'bg-orange-50'
}, {
  name: 'CSS3',
  icon: <FileCode className="w-8 h-8" />,
  color: 'text-blue-500',
  bg: 'bg-blue-50'
}, {
  name: 'JavaScript',
  icon: <FileCode className="w-8 h-8" />,
  color: 'text-yellow-500',
  bg: 'bg-yellow-50'
}, {
  name: 'SQL.js',
  icon: <Database className="w-8 h-8" />,
  color: 'text-purple-500',
  bg: 'bg-purple-50'
}, {
  name: 'IndexedDB',
  icon: <HardDrive className="w-8 h-8" />,
  color: 'text-green-500',
  bg: 'bg-green-50'
}, {
  name: 'Web Workers',
  icon: <Cpu className="w-8 h-8" />,
  color: 'text-red-500',
  bg: 'bg-red-50'
}];
export function Technologies() {
  return <section className="py-12 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Технологический стек курса
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className={`w-16 h-16 ${tech.bg} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <div className={tech.color}>{tech.icon}</div>
              </div>
              <span className="font-semibold text-gray-700">{tech.name}</span>
            </div>)}
        </div>
      </div>
    </section>;
}