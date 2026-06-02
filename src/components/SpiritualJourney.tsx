import { motion, AnimatePresence } from "motion/react";
import { Compass, Book, Award, Users, Cross, Crown, X, Send } from "lucide-react";
import { useState } from "react";

export function SpiritualJourney() {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);
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
        setSelectedJourney(null);
      }, 4000);
    }, 1500);
  };

  const journeys = [
    {
      id: "seeker",
      title: "Quero conhecer Jesus",
      icon: <Cross className="w-8 h-8 text-white mb-2" />,
      color: "bg-blue-600",
      desc: "Primeiros passos para entender a fé e o plano de salvação."
    },
    {
      id: "new_believer",
      title: "Novo Convertido",
      icon: <Book className="w-8 h-8 text-white mb-2" />,
      color: "bg-emerald-600",
      desc: "Aulas de batismo e fundamentos do cristianismo."
    },
    {
      id: "growing",
      title: "Quero crescer na fé",
      icon: <Compass className="w-8 h-8 text-white mb-2" />,
      color: "bg-amber-600",
      desc: "Estudos profundos, vida de oração e leitura bíblica."
    },
    {
      id: "serving",
      title: "Quero servir",
      icon: <Users className="w-8 h-8 text-white mb-2" />,
      color: "bg-purple-600",
      desc: "Integração nos ministérios da igreja e voluntariado."
    },
    {
      id: "leader",
      title: "Sou líder",
      icon: <Crown className="w-8 h-8 text-white mb-2" />,
      color: "bg-brand-green",
      desc: "Escola de Liderança, discipulado avançado e mentoria."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-4">
            Jornada Espiritual Automática
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acreditamos que todos estão numa etapa diferente. Escolhe a tua categoria para receberes conteúdos bíblicos, recomendações de cursos e guias diários totalmente personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {journeys.map((item, i) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedJourney(item.title)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.color} rounded-2xl p-6 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              {item.icon}
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedJourney && (
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
                  onClick={() => setSelectedJourney(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Compass className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green mb-2">Trilha Iniciada!</h3>
                    <p className="text-gray-600">Enviamos para o teu e-mail o teu primeiro plano de ação e guia espiritual para a etapa "<strong>{selectedJourney}</strong>".</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Iniciar Jornada</h3>
                    <p className="text-gray-600 mb-6 font-medium text-brand-gold">{selectedJourney}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail (Para receber as trilhas)</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none" />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                      >
                        {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5 mr-2" /> Começar Agora</>}
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
