
import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#05162d] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Quiénes Somos */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#8ec63f] text-[10px] font-black tracking-widest mb-6 uppercase">
            <Users size={14} /> Nuestra Esencia
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-8 tracking-tighter">
            ¿QUIÉNES <span className="text-gradient">SOMOS?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-blue-100/70 leading-relaxed font-medium">
            Somos una compañía comprometida en la búsqueda del bienestar integral de las familias a través de la investigación y el desarrollo de fórmulas de nutrición de alta calidad, llevando fuerza, energía y poder para alcanzar la felicidad.
          </p>
        </div>

        {/* Misión y Visión Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-[#8ec63f] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Target className="text-[#05162d]" size={28} />
            </div>
            <h3 className="text-2xl font-black font-montserrat text-white mb-4 tracking-tight">Misión</h3>
            <p className="text-blue-100/60 leading-relaxed font-medium">
              A través de un equipo comprometido en la innovación de fórmulas científicamente desarrolladas, satisfacemos las necesidades de nuestros clientes, aliados y consumidores, posicionándonos como una compañía líder en la industria alimenticia.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Eye className="text-[#05162d]" size={28} />
            </div>
            <h3 className="text-2xl font-black font-montserrat text-white mb-4 tracking-tight">Visión</h3>
            <p className="text-blue-100/60 leading-relaxed font-medium">
              Mejorar la calidad de vida de cada habitante del mundo a través de la nutrición, siendo referentes mundiales en innovación y salud preventiva para el año 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
