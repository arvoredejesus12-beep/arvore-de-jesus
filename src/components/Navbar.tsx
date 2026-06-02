import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Quem Somos", href: "#about" },
    { name: "Ministérios", href: "#voluntariado" },
    { name: "Estudos Bíblicos", href: "#courses" },
    { name: "Eventos", href: "#schedule" },
    { name: "Oração", href: "#prayer" },
    { name: "Testemunhos", href: "#testimonials" },
    { name: "Doações", href: "#donations" },
    { name: "Contato", href: "#prayer" },
    { name: "Entrar", href: "#members" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#hero"
            className={`font-serif font-bold text-xl transition-colors shrink-0 mr-4 ${
              isScrolled ? "text-brand-green" : "text-white drop-shadow-md"
            }`}
          >
            Árvore de Jesus
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-4 flex-wrap justify-end">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-brand-gold ${
                  isScrolled ? "text-gray-800" : "text-white drop-shadow-md"
                } ${link.name === "Entrar" ? "bg-brand-gold text-brand-green px-4 py-2 rounded-full !text-brand-green hover:bg-yellow-400" : ""} ${link.name === "Doações" ? "text-brand-gold flex items-center gap-1" : ""}`}
              >
                {link.name === "Doações" && <Heart className="w-3 h-3" />}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href="#donations"
              className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center ${
                isScrolled
                  ? "bg-brand-gold text-brand-green"
                  : "bg-brand-gold text-brand-green"
              }`}
            >
              <Heart className="w-3 h-3 mr-1" />
              Doar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? "text-brand-green" : "text-white"}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white shadow-xl absolute top-full left-0 w-full flex flex-col py-4 px-4 overflow-y-auto max-h-[85vh] border-t border-gray-100">
           <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${link.name === "Entrar" ? "bg-brand-gold text-brand-green font-bold flex justify-center items-center mt-4 shadow-md" : link.name === "Doações" ? "text-brand-gold flex items-center gap-2" : "text-gray-800"}`}
              >
                {link.name === "Doações" && <Heart className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
