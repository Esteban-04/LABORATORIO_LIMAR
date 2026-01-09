
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
      { id: 's1', name: 'Cloruro de Magnesio', benefits: 'Fortalece huesos y dientes, mejora la absorción de calcio y previene osteoporosis.', presentation: '500 y 1000gr' },
      { id: 's2', name: 'Hierro (Sulfato Ferroso)', benefits: 'Potencia la salud cerebral, mejora el rendimiento cognitivo y la claridad mental.', presentation: '500 y 1000gr' },
      { id: 's3', name: 'Prebióticos y Probióticos', benefits: 'Salud intestinal superior y refuerzo del sistema inmunológico.', presentation: '500 y 1000gr' },
      { id: 's4', name: 'Calcio', benefits: 'Fortalece la estructura ósea y muscular en todas las etapas.', presentation: '500 y 1000gr' },
      { id: 's5', name: 'Té Verde', benefits: 'Antioxidante natural que acelera el metabolismo y la quema de grasa.', presentation: '500 y 1000gr' },
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
      { id: 'i1', name: 'Fibra', benefits: 'Digestión ligera, alivio del estreñimiento y control de glucosa.', presentation: '500 y 1000gr' },
      { id: 'i2', name: 'Colágeno + Resveratrol', benefits: 'Elasticidad de la piel, reducción de arrugas y cuidado articular.', presentation: '500 y 1000gr' },
      { id: 'i3', name: 'Calostro Bovino', benefits: 'Máximo refuerzo inmune y recuperación muscular profunda.', presentation: '500 y 1000gr' },
      { id: 'i4', name: 'Proteína', benefits: 'Desarrollo de masa magra y reparación post-entrenamiento.', presentation: '500 y 1000gr' },
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
      { id: 'n1', name: 'Clorofila', benefits: 'Desintoxicante natural, elimina toxinas y combate infecciones.', presentation: '500 y 1000ml' },
      { id: 'n2', name: 'Moringa', benefits: 'Multivitamínico natural para el corazón y las defensas.', presentation: '500 y 1000ml' },
      { id: 'n3', name: 'Colágeno + Biotina', benefits: 'Crecimiento capilar, uñas fuertes y piel radiante.', presentation: '500 y 1000ml' },
      { id: 'n5', name: 'Digestivo Natural', benefits: 'Alivio de colon inflamado y bienestar gastrointestinal.', presentation: '500 y 1000ml' },
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
      { id: 'g1', name: 'Complejo B + Zinc', benefits: 'Reparación de tejidos y mejora del estado de ánimo.', presentation: '30 cápsulas' },
      { id: 'g3', name: 'Omega 3, 6 y 9', benefits: 'Salud cerebral, cardiovascular y visual.', presentation: '60 cápsulas' },
      { id: 'g4', name: 'Vitamina C', benefits: 'Antioxidante esencial y refuerzo inmune diario.', presentation: '60 cápsulas' },
      { id: 'g6', name: 'Trigosamina', benefits: 'Regeneración de cartílago y salud de las articulaciones.', presentation: '60 cápsulas' },
    ]
  }
];
