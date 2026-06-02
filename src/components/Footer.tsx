import { motion } from "motion/react";
import { Mail, Phone, Facebook, Instagram, Youtube, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-6">
            A árvore é conhecida pelos seus frutos.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-serif italic mb-8">
            "Se procuras um lugar para crescer espiritualmente, fortalecer a tua fé
            e caminhar ao lado de pessoas que amam a Deus, a tua jornada pode
            começar aqui."
          </p>
          <div className="inline-block border border-brand-gold/50 px-8 py-3 rounded-full text-brand-gold font-bold tracking-widest uppercase text-sm">
            Junta-te a Nós na Árvore de Jesus
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-800 pt-16 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif font-bold text-2xl text-white mb-4">Árvore de Jesus</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Uma comunidade cristã digital focada em espalhar o amor de Deus a partir de Angola para o mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Contactos Oficiais</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-gold mr-3 mt-0.5" />
                <a href="mailto:arvoredejesus12@gmail.com" className="hover:text-white transition-colors">
                  arvoredejesus12@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-gold mr-3 mt-0.5" />
                <a href="tel:+244944450167" className="hover:text-white transition-colors">
                  +244 944 450 167
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-gold mr-3 mt-0.5" />
                <span>Luanda, Angola<br/>(Sede Principal)</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Acesso Rápido</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#welcome" className="hover:text-brand-gold transition-colors">Boas-Vindas</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Quem Somos</a></li>
              <li><a href="#schedule" className="hover:text-brand-gold transition-colors">Agenda</a></li>
              <li><a href="#prayer" className="hover:text-brand-gold transition-colors">Pedidos de Oração</a></li>
            </ul>
          </div>

          {/* Newsletter (Optional enhancement) */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Boletim Informativo</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recebe devocionais semanais e atualizações da comunidade.
            </p>
            {success ? (
              <div className="bg-brand-gold/20 border border-brand-gold/30 p-4 rounded-lg flex items-center justify-center text-brand-gold">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-bold">Inscrição Efetuada!</span>
              </div>
            ) : (
              <form className="flex flex-col space-y-3" onSubmit={handleSubscribe}>
                <input 
                  required
                  type="email" 
                  placeholder="O teu melhor e-mail" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white"
                />
                <button 
                  disabled={isSubmitting}
                  className="bg-white/10 hover:bg-brand-gold hover:text-brand-green text-white font-medium py-3 rounded-lg transition-colors text-sm flex justify-center items-center disabled:opacity-50"
                >
                  {isSubmitting ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Subscrever"}
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Árvore de Jesus. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
