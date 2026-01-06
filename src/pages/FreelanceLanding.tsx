import React from 'react';
import { Header } from '../components/Header';
import { TargetAudience } from '../components/TargetAudience';
import { PartnerModules } from '../components/PartnerModules';
import { Skills } from '../components/Skills';
import { Technologies } from '../components/Technologies';
import { SqliteModule } from '../components/SqliteModule';
import { PracticalDemo } from '../components/PracticalDemo';
import { WhyImportant } from '../components/WhyImportant';
import { CourseProgram } from '../components/CourseProgram';
import { LearningFormat } from '../components/LearningFormat';
import { Results } from '../components/Results';
import { PortfolioSection } from '../components/PortfolioSection';
import { ApiKeysSection } from '../components/ApiKeysSection';
import { FAQ } from '../components/FAQ';
import { StepikCTA } from '../components/StepikCTA';
export function FreelanceLanding() {
  return <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <TargetAudience />
      <PartnerModules />
      <Skills />
      <Technologies />
      <SqliteModule />
      <PracticalDemo />
      <WhyImportant />
      <CourseProgram />
      <LearningFormat />
      <Results />
      <PortfolioSection />
      <ApiKeysSection />
      <FAQ />
      <StepikCTA />

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-indigo-500 font-bold">
              &lt;/&gt;
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              FreelanceStart
            </span>
          </div>
          <p className="mb-4">
            © 2024 Курс «Стань фрилансером». Все права защищены.
          </p>
          <p className="text-sm text-gray-600">
            Этот лендинг является демонстрационным проектом. SQL.js работает
            локально в вашем браузере.
          </p>
        </div>
      </footer>
    </div>;
}