
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, Zap, 
  ShoppingCart, Mail, Phone, MessageSquare, 
  Camera, Trash2, CheckCircle2, Info, ChevronRight,
  Lock, Unlock, LogOut, ShieldAlert, Plus, Save
} from 'lucide-react';

// --- COMPONENTE LOGO ---
const Logo = ({ className = "w-10 h-10" }) => (
  <img 
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wARCAEQAUwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpan30dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooprOFzzyKNgHUVi614y0Pw2hbVdXstPAGf9JnVD+RNcHq37Tfw90tnX+3DdupxttLeSQH6Nt2/rXXRwmJxH8Km5eibPLxOaYHB/7xWjH1kl+p6tRXg037Y/gqJiEtNYnGeCtugH6uKjH7Zng0/8w3Wf+/MX/wAcr0VkeZtXWHl9x4746/Y/gqJiEtNYnGeCtugH6uKjH7Zng0/8w3Wf+/MX/wAcr0VkeZtXWHl9x474ryNO31uH3nvtFeI2H7XHgK6ZRNPqFkSefOtGbH/fBauz0L44+BfEJCWniewEjdEuJPJY/g+01yVctxtFXqUZJejPQw+e5Xiny0cTBv8AxL/M7uioIryGaNZI5UljboyEEH8anByMivOemh7aaeqCiiigYUUUUAFFFFRRv80=" 
    alt="Limar Logo" 
    className={`${className} object-contain`}
  />
);

const INITIAL_DATA = [
  {
    id: 'shiren',
    title: 'SHIREN',
    subtitle: 'Base Maltodextrina',
    description: 'Energía pura y bienestar concentrado. Formulaciones precisas para tu rendimiento diario.',
    themeColor: 'bg-[#004a87]',
    accentColor: 'text-[#004a87]',
    products: [
      { id: 's1', name: 'Cloruro de Magnesio', benefits: 'Contribuye al fortalecimiento de huesos y dientes al mejorar la absorción de calcio. Favorece la salud cardiovascular y previene calambres.', presentation: '500 y 1000gr', image: '' },
      { id: 's2', name: 'Hierro', benefits: 'Potencia la salud cerebral y mejora el rendimiento cognitivo. Ideal para estudiantes y profesionales que buscan claridad mental.', presentation: '500 y 1000gr', image: '' },
      { id: 's3', name: 'Prebióticos y Probióticos', benefits: 'Apoya el bienestar general, el sistema inmunológico y la salud ósea. Combinación completa de vitaminas y minerales.', presentation: '500 y 1000gr', image: '' },
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
      { id: 'i1', name: 'Fibra', benefits: 'Alivia el estreñimiento, ayuda a reducir niveles de colesterol y mantiene estable la glucosa en sangre.', presentation: '500 y 1000gr', image: '' },
      { id: 'i2', name: 'Colágeno + Resveratrol', benefits: 'Mejora la elasticidad de la piel, reduce arrugas y fortalece articulaciones. Potente efecto antioxidante.', presentation: '500 y 1000gr', image: '' },
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
      { id: 'n1', name: 'Clorofila', benefits: 'Potente antioxidante y desintoxicante. Ayuda a eliminar toxinas y combate infecciones de forma natural.', presentation: '500 y 1000ml', image: '' },
      { id: 'n2', name: 'Moringa', benefits: 'Rico en vitaminas A, C y E. Fortalece el sistema inmunológico y regula los niveles de azúcar en sangre.', presentation: '500 y 1000ml', image: '' },
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
      { id: 'g1', name: 'Complejo B + Zinc', benefits: 'Repara tejidos, convierte nutrientes en energía y mantiene un metabolismo saludable. Reduce estrés.', presentation: '30 cápsulas', image: '' },
      { id: 'g3', name: 'Omega 3, 6 y 9', benefits: 'Reduce triglicéridos y colesterol malo. Mejora la salud cardiovascular, cerebral y articular.', presentation: '60 cápsulas', image: '' },
    ]
  }
];

const ADMIN_PASSWORD = "L1M4R2025!";

const App = () => {
  // Estados de Autenticación
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Estados de UI y Datos
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState(INITIAL_DATA);
  const [showAddModal, setShowAddModal] = useState<string | null>(null); // Contiene el catId
  const [newProduct, setNewProduct] = useState({ name: '', benefits: '', presentation: '' });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeUpload, setActiveUpload] = useState<{catId: string, prodId: string} | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, benefits: string, catColor: string} | null>(null);

  useEffect(() => {
    // Cargar sesión
    const session = localStorage.getItem('limar_admin_session');
    if (session === 'true') setIsLoggedIn(true);

    // Cargar catálogo personalizado si existe
    const savedCatalog = localStorage.getItem('limar_custom_catalog');
    if (savedCatalog) {
      try {
        const parsed = JSON.parse(savedCatalog);
        if (Array.isArray(parsed)) {
          setCategories(parsed);
        }
      } catch (e) {
        console.error("Error cargando catálogo", e);
      }
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Persistencia de datos
  const saveCatalog = (updatedCategories: any) => {
    setCategories(updatedCategories);
    localStorage.setItem('limar_custom_catalog', JSON.stringify(updatedCategories));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPassword === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setLoginPassword('');
      setLoginError(false);
      localStorage.setItem('limar_admin_session', 'true');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('limar_admin_session');
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showAddModal) return;

    const productId = `prod-${Date.now()}`;
    const productToAdd = { ...newProduct, id: productId, image: '' };

    const updated = categories.map(cat => {
      if (cat.id === showAddModal) {
        return { ...cat, products: [...cat.products, productToAdd] };
      }
      return cat;
    });

    saveCatalog(updated);
    setShowAddModal(null);
    setNewProduct({ name: '', benefits: '', presentation: '' });
  };

  const removeProduct = (catId: string, prodId: string) => {
    if (!isLoggedIn) return;
    if (window.confirm('¿Eliminar este producto permanentemente del catálogo?')) {
      const updated = categories.map(cat => {
        if (cat.id === catId) {
          return { ...cat, products: cat.products.filter(p => p.id !== prodId) };
        }
        return cat;
      });
      saveCatalog(updated);
    }
  };

  const handleFileTrigger = (catId: string, prodId: string) => {
    if (!isLoggedIn) return;
    setActiveUpload({ catId, prodId });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUpload) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        updateProductImage(activeUpload.prodId, activeUpload.catId, base64);
        setActiveUpload(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProductImage = (prodId: string, catId: string, imageSrc: string) => {
    const updated = categories.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          products: cat.products.map(prod => {
            if (prod.id === prodId) return { ...prod, image: imageSrc };
            return prod;
          })
        };
      }
      return cat;
    });
    saveCatalog(updated);
  };

  return (
    <div className="bg-white min-h-screen font-inter relative selection:bg-[#8ec63f] selection:text-white">
      
      {/* Modal Agregar Producto */}
      {showAddModal !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setShowAddModal(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="p-8">
              <h3 className="text-2xl font-black mb-6 text-gray-900">Nuevo Producto</h3>
              <form onSubmit={handleAddProduct} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Nombre</label>
                  <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8ec63f] focus:outline-none" placeholder="Ej: Vitamina D3" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Presentación</label>
                  <input required type="text" value={newProduct.presentation} onChange={e => setNewProduct({...newProduct, presentation: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8ec63f] focus:outline-none" placeholder="Ej: 60 Cápsulas" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Beneficios / Descripción</label>
                  <textarea required rows={3} value={newProduct.benefits} onChange={e => setNewProduct({...newProduct, benefits: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8ec63f] focus:outline-none" placeholder="Describe los beneficios principales..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#8ec63f] text-white font-black rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <Save size={18} /> Guardar Producto
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Login Admin */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="p-8">
              <div className="flex justify-center mb-6"><div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600"><Lock size={32} /></div></div>
              <h3 className="text-2xl font-black text-center text-gray-900 mb-2">Panel de Control</h3>
              <p className="text-gray-500 text-center text-sm mb-8">Ingresa la clave administrativa.</p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Contraseña" className={`w-full px-5 py-4 bg-gray-50 border ${loginError ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-center font-bold`} autoFocus />
                {loginError && <p className="text-red-500 text-xs font-bold text-center">Clave incorrecta</p>}
                <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 active:scale-95 transition-all">Acceder</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalle */}
      {selectedProduct !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"><X size={24}/></button>
            <div className={`h-3 w-full ${selectedProduct.catColor}`}></div>
            <div className="p-10 md:p-14 text-left">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{selectedProduct.name}</h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-10">{selectedProduct.benefits}</p>
              <button onClick={() => setSelectedProduct(null)} className={`px-10 py-4 rounded-2xl text-white font-black text-sm shadow-xl ${selectedProduct.catColor}`}>Entendido</button>
            </div>
          </div>
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 group">
              <Logo className="w-12 h-12 transition-transform group-hover:scale-105" />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-black font-montserrat tracking-tighter leading-none ${scrolled ? 'text-[#004a87]' : 'text-white'}`}>LIMAR LAB</span>
                  <button onClick={(e) => { e.stopPropagation(); isLoggedIn ? handleLogout() : setShowLoginModal(true); }} className="px-3 py-1 bg-[#25D366] text-white text-[10px] font-black rounded-full shadow-md hover:scale-110 active:scale-90 transition-all uppercase tracking-widest border border-white/20">
                    {isLoggedIn ? 'LOGOUT' : 'ADMIN'}
                  </button>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ec63f]">Innovación 2026</span>
              </div>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => scrollToSection(cat.id)} className={`font-bold text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-[#004a87]' : 'text-white/80 hover:text-white'}`}>{cat.title}</button>
            ))}
            <a href="https://wa.me/3232462818" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-black hover:opacity-90 shadow-lg active:scale-95 transition-all">WhatsApp</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      
      {/* Hero */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#004a87] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8ec63f] rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#8ec63f] text-xs font-black uppercase tracking-widest mx-auto md:mx-0">
              <Zap size={14} /> Lanzamiento 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-black font-montserrat leading-[0.9] tracking-tighter">Nutrición <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#8ec63f] to-emerald-300">Avanzada</span></h1>
            <p className="text-xl text-blue-100/70 max-w-lg leading-relaxed mx-auto md:mx-0 font-medium">Ciencia aplicada al bienestar. Descubre suplementos premium para potenciar tu vida cada día.</p>
            <button onClick={() => scrollToSection('shiren')} className="px-10 py-5 bg-white text-[#004a87] font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-2 shadow-2xl mx-auto md:mx-0">Ver Catálogo <ArrowRight size={20} /></button>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 p-4 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] w-full aspect-[4/5] object-cover" alt="Salud" />
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-24 bg-white border-b border-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-left mb-20">
              <h2 className={`text-5xl md:text-7xl font-black font-montserrat tracking-tighter mb-4 ${cat.accentColor}`}>{cat.title}</h2>
              <p className="text-lg font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">{cat.subtitle}</p>
              <div className={`h-2 w-24 rounded-full mb-6 ${cat.themeColor}`}></div>
              <p className="max-w-2xl text-gray-500 text-lg font-medium">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cat.products.map((product) => (
                <div key={product.id} className="group bg-gray-50 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden text-left">
                  
                  <div className="mb-8 overflow-hidden rounded-[2rem] bg-white aspect-square flex items-center justify-center p-4 shadow-inner relative group/img">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-opacity duration-300" />
                    ) : (
                      <div className="text-center flex flex-col items-center">
                        <div className={`w-24 h-24 mb-4 rounded-full flex items-center justify-center text-white shadow-lg ${cat.themeColor}`}>
                           <span className="text-4xl font-black">{product.name.charAt(0)}</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase">Sin Imagen</span>
                      </div>
                    )}

                    {isLoggedIn && (
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <button onClick={() => handleFileTrigger(cat.id, product.id)} className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                          <Camera size={18} /> {product.image ? 'Cambiar' : 'Subir'}
                        </button>
                        <button onClick={() => removeProduct(cat.id, product.id)} className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform">
                          <Trash2 size={18} /> Eliminar
                        </button>
                      </div>
                    )}
                  </div>

                  <button onClick={() => setSelectedProduct({name: product.name, benefits: product.benefits, catColor: cat.themeColor})} className="group/btn text-left mb-2 inline-flex items-center gap-2 focus:outline-none">
                    <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover/btn:underline decoration-dotted underline-offset-4">{product.name}</h3>
                    <ChevronRight size={20} className="text-gray-300 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <p className={`text-xs font-bold uppercase mb-4 tracking-wider ${cat.accentColor}`}>{product.presentation}</p>
                  <p className="text-gray-600 font-medium mb-8 flex-1 line-clamp-3">{product.benefits}</p>
                  
                  <a href={`https://wa.me/3232462818?text=Hola,%20quisiera%20cotizar%20${product.name}`} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-2xl text-white font-black text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 hover:opacity-90 ${cat.themeColor}`}>
                    <ShoppingCart size={18} /> Cotizar
                  </a>
                </div>
              ))}

              {/* Botón Administrador: Agregar Producto */}
              {isLoggedIn && (
                <button 
                  onClick={() => setShowAddModal(cat.id)}
                  className="group bg-white rounded-[2.5rem] p-8 border-4 border-dashed border-gray-100 hover:border-[#8ec63f] hover:bg-gray-50 transition-all flex flex-col items-center justify-center gap-4 min-h-[400px]"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#8ec63f] group-hover:text-white transition-all">
                    <Plus size={40} />
                  </div>
                  <span className="text-xl font-black text-gray-400 group-hover:text-[#8ec63f]">Agregar Producto</span>
                  <p className="text-gray-400 text-xs text-center px-6">Publica un nuevo suplemento en esta categoría</p>
                </button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-[#0a192f] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Logo className="w-16 h-16" />
                <h3 className="text-4xl font-black font-montserrat tracking-tighter">LIMAR LAB</h3>
              </div>
              <p className="text-gray-400 text-lg max-w-md">Calidad garantizada para tu salud y nutrición. Innovando desde la ciencia farmacéutica.</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-[#25D366] font-black uppercase tracking-widest text-xs font-montserrat">Ventas Directas</h4>
              <div className="space-y-4 text-gray-400 font-medium">
                <div className="flex items-center gap-3"><Phone size={18}/> 323 246 2818</div>
                <div className="flex items-center gap-3"><Phone size={18}/> 302 357 9819</div>
              </div>
            </div>
            <div className="space-y-6 text-left">
              <h4 className="text-[#25D366] font-black uppercase tracking-widest text-xs font-montserrat">Canales</h4>
              <div className="space-y-4 text-gray-400 font-medium">
                 <div className="flex items-center gap-3"><Mail size={18}/> laboratoriolimar@gmail.com</div>
                 <div className="flex items-center gap-3"><CheckCircle2 size={18}/> Envíos Nacionales</div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-gray-600 text-sm">
             <p>© 2026 Laboratorio Limar SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/3232462818" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default App;
