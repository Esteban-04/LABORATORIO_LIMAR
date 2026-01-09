
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <img 
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wARCAEQAUwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooprOFzzyKNgHUVi614y0Pw2hbVdXstPAGf9JnVD+RNcHq37Tfw90tnX+3DdupxttLeSQH6Nt2/rXXRwmJxH8Km5eibPLxOaYHB/7xWjH1kl+p6tRXg037Y/gqJiEtNYnGeCtugH6uKjH7Zng0/8w3Wf+/MX/wAcr0VkeZtXWHl9x474ryNO31uH3nvtFeI2H7XHgK6ZRNPqFkSefOtGbH/fBauz0L44+BfEJCWniewEjdEuJPJY/g+01yVctxtFXqUZJejPQw+e5Xiny0cTBv8AxL/M7uioIryGaNZI5UljboyEEH8anByMivOemh7aaeqCiiigYUUUUAFFFFABRRRQAUUUUAFFFFRRv80" 
    alt="Limar Logo" 
    className="w-10 h-10 object-contain"
  />
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Shiren', href: '#shiren' },
    { name: 'Inskin', href: '#inskin' },
    { name: 'Newsure', href: '#newsure' },
    { name: 'Cápsulas', href: '#gel-caps' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`flex items-center gap-3 ${scrolled ? 'text-[#004a87]' : 'text-white'}`}>
              <Logo />
              <span className="text-xl font-black font-montserrat tracking-tight">LIMAR LAB</span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-[#004a87]' : 'text-white hover:text-emerald-200'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/3232462818"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8ec63f] text-white px-5 py-2 rounded-full text-sm font-black hover:bg-[#7ab335] transition-all shadow-lg active:scale-95"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-b' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleLinkClick(link.href)} className="block w-full text-left px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-[#004a87]">{link.name}</button>
          ))}
          <a href="https://wa.me/3232462818" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-[#8ec63f] text-white text-center rounded-md font-bold mt-2">WhatsApp</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
