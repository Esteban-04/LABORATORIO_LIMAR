import React from 'react';
import { ArrowRight, ShieldCheck, Zap, HeartPulse } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/50 border border-blue-500/30 text-blue-200 text-sm font-semibold mb-6">
              <Zap size={16} /> Catálogo 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat leading-tight mb-6">
              Laboratorio <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-300">
                LIMAR SAS
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Líderes en innovación farmacéutica y alimentos nutricionales diseñados para potenciar tu vida. Descubre nuestras líneas premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#shiren" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl active:scale-95"
              >
                Explorar Productos <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contactar Ventas
              </a>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-blue-300 text-sm">Natural</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">40+</span>
                <span className="text-blue-300 text-sm">Productos</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">2026</span>
                <span className="text-blue-300 text-sm">Innovación</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
             <div className="relative w-[500px] h-[500px]">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse blur-2xl"></div>
                <img 
                  src="https://picsum.photos/seed/pharma/800/800" 
                  alt="Limar Lab Products" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/10 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold">CERTIFICADO</p>
                      <p className="text-sm font-bold text-gray-800">Alta Calidad</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-blue-900 p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce" style={{animationDuration: '4s'}}>
                  <div className="flex items-center gap-3 text-white">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 font-bold">LÍNEA</p>
                      <p className="text-sm font-bold">SHIREN</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.69,35.66,135.5,47.85,235.46,54.12A242.74,242.74,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;