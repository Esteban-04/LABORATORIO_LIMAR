
import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ArrowRight, ShieldCheck, Zap, 
  ShoppingCart, Mail, Phone, MessageSquare, 
  Camera, Trash2, CheckCircle2, Info, ChevronRight,
  Lock, Unlock, LogOut, ShieldAlert, Plus, Save
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ContactFooter from './components/ContactFooter';
import { CATEGORIES as INITIAL_DATA } from './constants';

const ADMIN_PASSWORD = "L1M4R2025!";

const App = () => {
  // Estados de Autenticación
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Estados de UI y Datos
  const [categories, setCategories] = useState(INITIAL_DATA);
  const [showAddModal, setShowAddModal] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState({ name: '', benefits: '', presentation: '' });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeUpload, setActiveUpload] = useState<{catId: string, prodId: string} | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, benefits: string, catColor: string} | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('limar_admin_session');
    if (session === 'true') setIsLoggedIn(true);

    const savedCatalog = localStorage.getItem('limar_custom_catalog');
    if (savedCatalog) {
      try {
        const parsed = JSON.parse(savedCatalog);
        if (Array.isArray(parsed)) setCategories(parsed);
      } catch (e) { console.error("Error cargando catálogo", e); }
    }
  }, []);

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
    if (window.confirm('¿Cerrar sesión administrativa?')) {
      setIsLoggedIn(false);
      localStorage.removeItem('limar_admin_session');
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showAddModal) return;
    const productId = `prod-${Date.now()}`;
    const productToAdd = { ...newProduct, id: productId, image: '' };
    const updated = categories.map(cat => cat.id === showAddModal ? { ...cat, products: [...cat.products, productToAdd] } : cat);
    saveCatalog(updated);
    setShowAddModal(null);
    setNewProduct({ name: '', benefits: '', presentation: '' });
  };

  const removeProduct = (catId: string, prodId: string) => {
    if (!isLoggedIn) return;
    if (window.confirm('¿Eliminar este producto?')) {
      const updated = categories.map(cat => cat.id === catId ? { ...cat, products: cat.products.filter(p => p.id !== prodId) } : cat);
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
        const updated = categories.map(cat => cat.id === activeUpload.catId ? {
          ...cat, products: cat.products.map(prod => prod.id === activeUpload.prodId ? { ...prod, image: base64 } : prod)
        } : cat);
        saveCatalog(updated);
        setActiveUpload(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white min-h-screen font-inter relative selection:bg-[#8ec63f] selection:text-white">
      {/* Modales */}
      {showAddModal !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative p-8">
            <button onClick={() => setShowAddModal(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"><X size={20} /></button>
            <h3 className="text-2xl font-black mb-6 text-gray-900">Nuevo Producto</h3>
            <form onSubmit={handleAddProduct} className="space-y-4 text-left">
              <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" placeholder="Nombre" />
              <input required type="text" value={newProduct.presentation} onChange={e => setNewProduct({...newProduct, presentation: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" placeholder="Presentación" />
              <textarea required rows={3} value={newProduct.benefits} onChange={e => setNewProduct({...newProduct, benefits: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl" placeholder="Beneficios..."></textarea>
              <button type="submit" className="w-full py-4 bg-[#8ec63f] text-white font-black rounded-xl shadow-lg">Guardar</button>
            </form>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-8">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"><X size={20} /></button>
            <div className="flex justify-center mb-6"><div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600"><Lock size={32} /></div></div>
            <h3 className="text-2xl font-black text-center text-gray-900 mb-8">Acceso Administrativo</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Contraseña" className="w-full px-5 py-4 bg-gray-50 border rounded-xl text-center font-bold" autoFocus />
              {loginError && <p className="text-red-500 text-xs font-bold text-center">Incorrecto</p>}
              <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl">Entrar</button>
            </form>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl relative p-10 md:p-14">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X size={24}/></button>
            <h3 className="text-3xl font-black text-gray-900 mb-6">{selectedProduct.name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium mb-10">{selectedProduct.benefits}</p>
            <button onClick={() => setSelectedProduct(null)} className={`px-10 py-4 rounded-2xl text-white font-black ${selectedProduct.catColor}`}>Cerrar</button>
          </div>
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

      {/* Secciones de la página */}
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => setShowLoginModal(true)} 
        onLogoutClick={handleLogout} 
      />
      
      <main>
        <Hero />
        <AboutSection />
        
        {categories.map((cat) => (
          <ProductSection 
            key={cat.id} 
            category={cat} 
            isLoggedIn={isLoggedIn}
            onAddProduct={() => setShowAddModal(cat.id)}
            onRemoveProduct={(pId) => removeProduct(cat.id, pId)}
            onUploadImage={(pId) => handleFileTrigger(cat.id, pId)}
            onSelectProduct={(p) => setSelectedProduct({name: p.name, benefits: p.benefits, catColor: cat.themeColor})}
          />
        ))}
      </main>

      <ContactFooter />

      {/* Botón WhatsApp Flotante */}
      <a href="https://wa.me/3232462818" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#22c55e] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default App;
