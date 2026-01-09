import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin, Send } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-montserrat tracking-tighter">LIMAR LAB</h3>
            <p className="text-gray-400 leading-relaxed">
              Laboratorio de Innovación Farmacéutica Limar SAS. Transformando la salud a través de la nutrición científica y suplementos de alta pureza.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contacto Directo</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="text-blue-400" size={20} />
                <div className="flex flex-col">
                  <a href="tel:3232462818" className="hover:text-white transition-colors">(323) 246-2818</a>
                  <a href="tel:3023579819" className="hover:text-white transition-colors">(302) 357-9819</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="text-blue-400" size={20} />
                <a href="mailto:laboratoriolimar@gmail.com" className="hover:text-white transition-colors">laboratoriolimar@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-blue-400" size={20} />
                <span>Alimentos Nutricionales 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Líneas de Producto</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#shiren" className="hover:text-blue-400 transition-colors">Línea SHIREN</a></li>
              <li><a href="#inskin" className="hover:text-blue-400 transition-colors">Línea INSKIN</a></li>
              <li><a href="#newsure" className="hover:text-blue-400 transition-colors">Línea NEWSURE</a></li>
              <li><a href="#gel-caps" className="hover:text-blue-400 transition-colors">Cápsulas de Gel</a></li>
            </ul>
          </div>

          {/* Newsletter / Inquiry */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">¿Tienes dudas?</h4>
            <p className="text-sm text-gray-400">Déjanos tu correo y te contactaremos con un asesor especializado.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 Laboratorio de Innovación Farmacéutica Limar SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;