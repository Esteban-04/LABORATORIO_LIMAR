
import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ShoppingCart, MessageSquare, 
  Camera, Trash2, CheckCircle2, 
  Lock, Plus, Save, Edit3, Beaker, FileText, Package
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ContactFooter from './components/ContactFooter';
import { CATEGORIES as INITIAL_DATA } from './constants';
import { Product } from './types';

const ADMIN_PASSWORD = "L1M4R2025!";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [categories, setCategories] = useState(INITIAL_DATA);
  const [showAddModal, setShowAddModal] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ 
    name: '', benefits: '', presentation: '', dosage: '', advancedDescription: '' 
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeUpload, setActiveUpload] = useState<{catId: string, prodId: string} | null>(null);
  
  const [selectedProduct, setSelectedProduct] = useState<{
    product: Product,
    catId: string,
    catColor: string,
    catAccent: string
  } | null>(null);

  const [editBuffer, setEditBuffer] = useState<Product | null>(null);

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
    const productToAdd = { ...newProduct, id: productId, image: '' } as Product;
    const updated = categories.map(cat => cat.id === showAddModal ? { ...cat, products: [...cat.products, productToAdd] } : cat);
    saveCatalog(updated);
    setShowAddModal(null);
    setNewProduct({ name: '', benefits: '', presentation: '', dosage: '', advancedDescription: '' });
  };

  const removeProduct = (catId: string, prodId: string) => {
    if (window.confirm('¿Eliminar este producto permanentemente?')) {
      const updated = categories.map(cat => cat.id === catId ? { ...cat, products: cat.products.filter(p => p.id !== prodId) } : cat);
      saveCatalog(updated);
      setSelectedProduct(null);
    }
  };

  const handleFileTrigger = (catId: string, prodId: string) => {
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
        if (selectedProduct && selectedProduct.product.id === activeUpload.prodId) {
          setSelectedProduct({
            ...selectedProduct, 
            product: { ...selectedProduct.product, image: base64 }
          });
        }
        setActiveUpload(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProductEdits = () => {
    if (!editBuffer || !selectedProduct) return;
    const updated = categories.map(cat => cat.id === selectedProduct.catId ? {
      ...cat, products: cat.products.map(prod => prod.id === editBuffer.id ? editBuffer : prod)
    } : cat);
    saveCatalog(updated);
    setSelectedProduct({ ...selectedProduct, product: editBuffer });
    setEditBuffer(null);
  };

  const handleCotizar = () => {
    if (!selectedProduct) return;
    const message = encodeURIComponent(`Hola Limar Lab, me interesa el producto: ${selectedProduct.product.name}`);
    window.open(`https://wa.me/3232462818?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen font-inter relative selection:bg-[#8ec63f] selection:text-white">
      {/* Modal: Agregar Producto */}
      {showAddModal !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-y-auto max-h-[90vh] shadow-2xl relative p-8">
            <button onClick={() => setShowAddModal(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"><X size={20} /></button>
            <h3 className="text-2xl font-black mb-6 text-gray-900">Nuevo Producto</h3>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-medium" placeholder="Nombre" />
              <input required type="text" value={newProduct.presentation} onChange={e => setNewProduct({...newProduct, presentation: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-medium" placeholder="Presentación" />
              <div className="md:col-span-2">
                <textarea required rows={2} value={newProduct.benefits} onChange={e => setNewProduct({...newProduct, benefits: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-medium" placeholder="Beneficios..."></textarea>
              </div>
              <input type="text" value={newProduct.dosage} onChange={e => setNewProduct({...newProduct, dosage: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-medium" placeholder="Dosificación" />
              <textarea rows={2} value={newProduct.advancedDescription} onChange={e => setNewProduct({...newProduct, advancedDescription: e.target.value})} className="w-full md:col-span-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-medium" placeholder="Descripción avanzada..."></textarea>
              <button type="submit" className="md:col-span-2 w-full py-4 bg-[#8ec63f] text-white font-black rounded-xl shadow-lg mt-4">Crear Producto</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Login */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-8">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"><X size={20} /></button>
            <div className="flex justify-center mb-6"><div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600"><Lock size={32} /></div></div>
            <h3 className="text-2xl font-black text-center text-gray-900 mb-8">Acceso Admin</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Contraseña" className="w-full px-5 py-4 bg-gray-50 border rounded-xl text-center font-bold text-black" autoFocus />
              {loginError && <p className="text-red-500 text-xs font-bold text-center">Incorrecto</p>}
              <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl">Entrar</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Detalle (REFINADO Y MÁS PEQUEÑO) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl relative p-8 md:p-12 animate-in zoom-in-95 duration-300">
            <button onClick={() => { setSelectedProduct(null); setEditBuffer(null); }} className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-500 transition-all z-20">
              <X size={24}/>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Columna Izquierda */}
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Producto</label>
                  {editBuffer ? (
                    <input 
                      type="text" 
                      value={editBuffer.name} 
                      onChange={e => setEditBuffer({...editBuffer, name: e.target.value})}
                      className="text-3xl font-black w-full bg-gray-50 border-b-2 border-blue-900 outline-none py-1 text-black"
                    />
                  ) : (
                    <>
                      <h3 className="text-3xl font-black text-[#001f3f] leading-tight mb-2 tracking-tight">{selectedProduct.product.name}</h3>
                      <div className={`h-1 w-12 ${selectedProduct.catColor}`}></div>
                    </>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <Package size={12} className="text-gray-300" /> Presentación
                  </label>
                  {editBuffer ? (
                    <input 
                      type="text" 
                      value={editBuffer.presentation} 
                      onChange={e => setEditBuffer({...editBuffer, presentation: e.target.value})}
                      className="text-lg font-bold w-full bg-gray-50 outline-none text-black"
                    />
                  ) : (
                    <p className="text-lg font-bold text-gray-700">{selectedProduct.product.presentation}</p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-gray-300" /> Beneficios
                  </label>
                  {editBuffer ? (
                    <textarea 
                      rows={2}
                      value={editBuffer.benefits} 
                      onChange={e => setEditBuffer({...editBuffer, benefits: e.target.value})}
                      className="w-full bg-gray-50 outline-none font-medium text-sm text-black"
                    />
                  ) : (
                    <p className="text-gray-600 text-base font-medium leading-relaxed">{selectedProduct.product.benefits}</p>
                  )}
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5 flex items-center gap-1.5">
                    <Beaker size={12} className="text-gray-300" /> Dosificación Recomendada
                  </label>
                  {editBuffer ? (
                    <textarea 
                      rows={3}
                      value={editBuffer.dosage} 
                      onChange={e => setEditBuffer({...editBuffer, dosage: e.target.value})}
                      className="w-full bg-gray-50 p-4 rounded-xl border border-gray-100 outline-none text-sm italic text-black font-medium"
                    />
                  ) : (
                    <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-50">
                      <p className="text-gray-600 text-base font-medium italic leading-relaxed">
                        {selectedProduct.product.dosage || "Consultar envase para instrucciones."}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1.5">
                    <FileText size={12} className="text-gray-300" /> Descripción Avanzada
                  </label>
                  {editBuffer ? (
                    <textarea 
                      rows={2}
                      value={editBuffer.advancedDescription} 
                      onChange={e => setEditBuffer({...editBuffer, advancedDescription: e.target.value})}
                      className="w-full bg-gray-50 outline-none font-medium text-sm text-black"
                    />
                  ) : (
                    <p className="text-gray-600 text-base font-medium leading-relaxed">
                      {selectedProduct.product.advancedDescription || "Fórmula premium de alta biodisponibilidad."}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Acciones Inferiores */}
            <div className="mt-12 pt-8 border-t border-gray-50">
              {!isLoggedIn ? (
                <button 
                  onClick={handleCotizar}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl text-white font-black text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 ${selectedProduct.catColor}`}
                >
                  <ShoppingCart size={20} /> Cotizar vía WhatsApp
                </button>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  {editBuffer ? (
                    <button 
                      onClick={saveProductEdits}
                      className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-black shadow-md hover:bg-emerald-700"
                    >
                      <Save size={20} /> Guardar Cambios
                    </button>
                  ) : (
                    <button 
                      onClick={() => setEditBuffer(selectedProduct.product)}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-bold hover:bg-indigo-100"
                    >
                      <Edit3 size={18} /> Editar Datos
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleFileTrigger(selectedProduct.catId, selectedProduct.product.id)}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100"
                    title="Cambiar Foto"
                  >
                    <Camera size={18} />
                  </button>

                  <button 
                    onClick={() => removeProduct(selectedProduct.catId, selectedProduct.product.id)}
                    className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100"
                    title="Eliminar"
                  >
                    <Trash2 size={18} />
                  </button>
                  
                  {editBuffer && (
                    <button onClick={() => setEditBuffer(null)} className="px-4 py-3 text-gray-400 font-bold text-sm">Cancelar</button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

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
            onRemoveProduct={() => {}}
            onUploadImage={() => {}}
            onSelectProduct={(p) => setSelectedProduct({
              product: p,
              catId: cat.id,
              catColor: cat.themeColor,
              catAccent: cat.accentColor
            })}
          />
        ))}
      </main>

      <ContactFooter />

      {!selectedProduct && (
        <a href="https://wa.me/3232462818" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#22c55e] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform z-50">
          <MessageSquare size={24} />
        </a>
      )}
    </div>
  );
};

export default App;
