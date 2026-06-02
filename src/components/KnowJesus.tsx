import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Heart, X, Send } from "lucide-react";
import { useState } from "react";

export function KnowJesus() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="conheca-jesus" className="py-24 bg-brand-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <Sparkles className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Conheça Jesus Cristo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            A mensagem mais importante que podes ouvir: Deus te ama de tal maneira que entregou o Seu único Filho, Jesus Cristo, para que pudesses ter vida abundante e eterna. Não importa o teu passado, Ele oferece-te um novo começo.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-2xl mx-auto mb-10 italic">
            <p className="text-xl md:text-2xl font-serif text-brand-gold mb-4">
              "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
            </p>
            <p className="font-bold">João 3:16</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={() => setShowForm(true)} className="bg-brand-gold text-brand-green font-bold px-8 py-4 rounded-full flex items-center hover:bg-yellow-400 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Quero Entregar a Minha Vida <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="#courses" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full flex items-center transition-all">
              Saber Mais Sobre Jesus
            </a>
          </div>
        </motion.div>

        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 mt-0"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl text-left"
              >
                <button 
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green mb-2">Decisão Registada!</h3>
                    <p className="text-gray-600">Glória a Deus! Um conselheiro pastoral entrará em contato contigo em breve para te acolher e orientar nesta nova caminhada.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-brand-green mb-2 text-center">Uma Nova Caminhada</h3>
                    <p className="text-gray-600 mb-6 text-center text-sm">"Se com a tua boca confessares ao Senhor Jesus [...] serás salvo." (Romanos 10:9)</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Contacto</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Queres deixar um pedido de oração?</label>
                         <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none resize-none text-gray-800" placeholder="Opcional"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold hover:bg-yellow-400 text-brand-green font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                      >
                        {isSubmitting ? <div className="w-5 h-5 border-2 border-brand-green border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5 mr-2" /> Enviar os meus Dados</>}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
