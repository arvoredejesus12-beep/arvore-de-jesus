import { motion, AnimatePresence } from "motion/react";
import { HandHeart, Music, Camera, Share2, Users, X, Send } from "lucide-react";
import { useState } from "react";

export function Volunteer() {
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null);
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
        setSelectedMinistry(null);
      }, 3000);
    }, 1500);
  };

  const ministries = [
    { name: "Ministério de Louvor", icon: <Music className="w-8 h-8 text-brand-gold" />, desc: "Se tocas um instrumento ou cantas, une-te para a adoração." },
    { name: "Multimédia & Comunicação", icon: <Camera className="w-8 h-8 text-brand-gold" />, desc: "Apoio nas transmissões ao vivo, fotografia e redes sociais." },
    { name: "Evangelismo", icon: <Share2 className="w-8 h-8 text-brand-gold" />, desc: "Levando as boas novas aos hospitais, prisões e ruas." },
    { name: "Intercessão", icon: <HandHeart className="w-8 h-8 text-brand-gold" />, desc: "Guerreiros de oração que suportam espiritualmente a igreja." },
    { name: "Ação Social", icon: <Users className="w-8 h-8 text-brand-gold" />, desc: "Apoio a famílias carentes e projetos na comunidade." }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="voluntariado">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-4">Voluntariado & Ação Social</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A igreja é um corpo movido pelo serviço. Descubra onde podes ser a resposta às orações de alguém.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((min, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand-green/5 rounded-full flex items-center justify-center mb-4">
                {min.icon}
              </div>
              <h3 className="font-bold text-xl text-brand-green mb-2">{min.name}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{min.desc}</p>
              <button 
                onClick={() => setSelectedMinistry(min.name)}
                className="text-brand-green font-bold border-b border-brand-green hover:border-brand-gold hover:text-brand-gold transition-colors pb-1 mt-auto"
              >
                Quero Participar
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMinistry && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedMinistry(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HandHeart className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green mb-2">Inscrição Recebida!</h3>
                    <p className="text-gray-600">O líder do ministério de {selectedMinistry} entrará em contato em breve.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Juntar-se ao Ministério</h3>
                    <p className="text-gray-600 mb-6 font-medium text-brand-gold">{selectedMinistry}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold focus:border-brand-gold outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold focus:border-brand-gold outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Por que queres participar?</label>
                         <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold focus:border-brand-gold outline-none resize-none"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                      >
                        {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5 mr-2" /> Submeter Inscrição</>}
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
