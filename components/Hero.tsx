
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] bg-[#05162d] flex items-center pt-20 pb-12 overflow-hidden">
      {/* Luces de fondo dinámicas para profundidad */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 text-center">
        
        {/* Etiqueta de Lanzamiento */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[11px] font-black tracking-widest mb-10 uppercase">
          <Zap size={16} className="fill-emerald-400" /> Lanzamiento 2026
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-6xl md:text-[110px] font-black font-montserrat leading-[0.85] mb-10 tracking-tighter text-white">
          Nutrición<br />
          <span className="text-gradient">Avanzada</span>
        </h1>

        {/* Descripción centrado */}
        <p className="text-xl md:text-2xl text-blue-100/60 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          Ciencia aplicada al bienestar. Descubre suplementos premium desarrollados bajo los más altos estándares de calidad para potenciar tu vida.
        </p>

        {/* Botón de Acción Principal */}
        <div className="flex justify-center">
          <a 
            href="#shiren" 
            className="inline-flex items-center gap-4 px-12 py-7 bg-white text-[#05162d] font-black text-lg rounded-[2rem] hover:bg-emerald-400 hover:text-white transition-all shadow-2xl group active:scale-95"
          >
            Explorar Catálogo <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
