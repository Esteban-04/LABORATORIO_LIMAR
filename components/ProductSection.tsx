
import React from 'react';
import { Category } from '../types';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';

interface ProductSectionProps {
  category: Category;
}

const ProductSection: React.FC<ProductSectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black font-montserrat mb-2 ${category.accentColor}`}>
            {category.title}
          </h2>
          <p className="text-xl font-bold text-gray-600 mb-6 uppercase tracking-widest">{category.subtitle}</p>
          <div className={`h-1.5 w-24 mx-auto rounded-full mb-8 ${category.themeColor}`}></div>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2 border border-gray-200/50"
            >
              <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-inner aspect-square flex items-center justify-center p-8 group-hover:scale-105 transition-transform">
                {/* Product Image Placeholder */}
                <div className="text-center">
                   <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${category.themeColor} text-white`}>
                      <span className="text-3xl font-bold">{product.name.charAt(0)}</span>
                   </div>
                   <p className="text-xs font-bold text-gray-400 uppercase">Empaque Premium</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2">
                   <span className={`px-3 py-1 text-xs font-bold rounded-full ${category.themeColor} text-white`}>
                     {product.presentation}
                   </span>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Beneficios:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${category.accentColor}`} />
                      <span>{product.benefits}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 ${category.themeColor}`}>
                    <ShoppingCart size={18} /> Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
