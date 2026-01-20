
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'shiren',
    title: 'SHIREN',
    subtitle: 'Base Maltodextrina',
    description: 'Energía pura y bienestar concentrado. Formulaciones precisas para tu rendimiento diario.',
    themeColor: 'bg-[#004a87]',
    accentColor: 'text-[#004a87]',
    products: [
      { 
        id: 's1', 
        name: 'Cloruro de Magnesio', 
        benefits: 'Fortalece huesos y dientes, mejora la absorción de calcio y previene osteoporosis.', 
        presentation: '500 y 1000gr',
        dosage: 'Disolver una cucharada (15g) en un vaso de agua o jugo una vez al día.',
        advancedDescription: 'Fórmula enriquecida con vitaminas esenciales para una absorción mineral óptima.'
      },
      { id: 's2', name: 'Hierro (Sulfato Ferroso)', benefits: 'Potencia la salud cerebral, mejora el rendimiento cognitivo y la claridad mental.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Ideal para personas con alta demanda física y mental.' },
      { id: 's3', name: 'Prebióticos y Probióticos', benefits: 'Salud intestinal superior y refuerzo del sistema inmunológico.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Contiene cepas seleccionadas para el equilibrio de la flora intestinal.' },
      { id: 's4', name: 'Calcio', benefits: 'Fortalece la estructura ósea y muscular en todas las etapas.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Calcio de alta biodisponibilidad.' },
      { id: 's5', name: 'Té Verde', benefits: 'Antioxidante natural que acelera el metabolismo y la quema de grasa.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Extracto de té verde premium.' },
    ]
  },
  {
    id: 'inskin',
    title: 'INSKIN',
    subtitle: 'Proteína de Soya',
    description: 'Salud digestiva y articular avanzada con la pureza de la soya seleccionada.',
    themeColor: 'bg-[#8ec63f]',
    accentColor: 'text-[#8ec63f]',
    products: [
      { id: 'i1', name: 'Fibra', benefits: 'Digestión ligera, alivio del estreñimiento y control de glucosa.', presentation: '500 y 1000gr', dosage: '20g al día.', advancedDescription: 'Mezcla de fibras solubles e insolubles.' },
      { id: 'i2', name: 'Colágeno + Resveratrol', benefits: 'Elasticidad de la piel, reducción de arrugas y cuidado articular.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Colágeno hidrolizado tipo I y III.' },
      { id: 'i3', name: 'Calostro Bovino', benefits: 'Máximo refuerzo inmune y recuperación muscular profunda.', presentation: '500 y 1000gr', dosage: '15g al día.', advancedDescription: 'Rico en inmunoglobulinas.' },
      { id: 'i4', name: 'Proteína', benefits: 'Desarrollo de masa magra y reparación post-entrenamiento.', presentation: '500 y 1000gr', dosage: '30g post-entreno.', advancedDescription: 'Aislado de proteína de soya de alta pureza.' },
    ]
  },
  {
    id: 'newsure',
    title: 'NEWSURE',
    subtitle: 'Línea de Jarabes',
    description: 'Extractos naturales líquidos para una absorción inmediata y efectiva.',
    themeColor: 'bg-indigo-700',
    accentColor: 'text-indigo-700',
    products: [
      { id: 'n1', name: 'Clorofila', benefits: 'Desintoxicante natural, elimina toxinas y combate infecciones.', presentation: '500 y 1000ml', dosage: '15ml en ayunas.', advancedDescription: 'Concentrado líquido de clorofila pura.' },
      { id: 'n2', name: 'Moringa', benefits: 'Multivitamínico natural para el corazón y las defensas.', presentation: '500 y 1000ml', dosage: '15ml al día.', advancedDescription: 'Extracto de hoja de moringa oleifera.' },
      { id: 'n3', name: 'Colágeno + Biotina', benefits: 'Crecimiento capilar, uñas fuertes y piel radiante.', presentation: '500 y 1000ml', dosage: '15ml al día.', advancedDescription: 'Fórmula belleza líquida.' },
      { id: 'n5', name: 'Digestivo Natural', benefits: 'Alivio de colon inflamado y bienestar gastrointestinal.', presentation: '500 y 1000ml', dosage: '15ml después de comidas.', advancedDescription: 'Mezcla de hierbas digestivas.' },
    ]
  },
  {
    id: 'gel-caps',
    title: 'CÁPSULAS',
    subtitle: 'Premium Softgels',
    description: 'Concentrados de alta pureza en cápsulas de fácil deglución.',
    themeColor: 'bg-sky-600',
    accentColor: 'text-sky-600',
    products: [
      { id: 'g1', name: 'Complejo B + Zinc', benefits: 'Reparación de tejidos y mejora del estado de ánimo.', presentation: '30 cápsulas', dosage: '1 cápsula diaria.', advancedDescription: 'Complejo vitamínico B-100.' },
      { id: 'g3', name: 'Omega 3, 6 y 9', benefits: 'Salud cerebral, cardiovascular y visual.', presentation: '60 cápsulas', dosage: '2 cápsulas al día.', advancedDescription: 'Aceites de pescado y vegetales prensados en frío.' },
      { id: 'g4', name: 'Vitamina C', benefits: 'Antioxidante esencial y refuerzo inmune diario.', presentation: '60 cápsulas', dosage: '1 cápsula al día.', advancedDescription: 'Ácido ascórbico con escaramujo.' },
      { id: 'g6', name: 'Trigosamina', benefits: 'Regeneración de cartílago y salud de las articulaciones.', presentation: '60 cápsulas', dosage: '2 cápsulas al día.', advancedDescription: 'Glucosamina + Condroitina vegetal.' },
    ]
  }
];
